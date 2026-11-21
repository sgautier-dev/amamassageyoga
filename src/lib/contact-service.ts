import { createHash } from "node:crypto"
import { z } from "zod"

import { contactSchema } from "./contact-schema"
import {
	contactFailureMessage,
	contactRateLimitMessage,
	contactReasons,
	type ContactFormState,
} from "./contact"

export type ContactEmail = {
	from: string
	to: string
	replyTo: string
	subject: string
	text: string
}

export type ContactSender = (
	email: ContactEmail,
	idempotencyKey: string,
) => Promise<"sent" | "failed" | "rate-limited">

const allowedFields = new Set(Object.keys(contactSchema.shape))
const maxPayloadBytes = 32 * 1024

export async function processContactRequest(
	formData: FormData,
	send: ContactSender,
): Promise<ContactFormState> {
	const failed: ContactFormState = {
		status: "error",
		message: contactFailureMessage,
	}
	if (!(formData instanceof FormData)) return failed

	const values: Record<string, string> = {}
	let payloadBytes = 0
	let entries = 0
	for (const [key, value] of formData.entries()) {
		entries += 1
		if (typeof value !== "string" || entries > 20) return failed
		payloadBytes += Buffer.byteLength(key) + Buffer.byteLength(value)
		if (payloadBytes > maxPayloadBytes) return failed
		// React may include its own form-action metadata in a native submission.
		if (key.startsWith("$ACTION_")) continue
		if (!allowedFields.has(key) || Object.hasOwn(values, key)) return failed
		values[key] = value
	}

	const result = contactSchema.safeParse(values)
	if (!result.success) {
		const errors = z.flattenError(result.error).fieldErrors
		if (errors.website || errors.submissionId) return failed
		return {
			status: "error",
			message: "Vérifiez les champs indiqués avant d’envoyer votre demande.",
			errors,
		}
	}

	const data = result.data
	const reason = contactReasons.find((item) => item.value === data.reason)
	if (!reason) return failed

	const email: ContactEmail = {
		from: "AMA Massage et Yoga <marie@amamassageyoga.com>",
		to: "marie@amamassageyoga.com",
		replyTo: data.email,
		subject: `[AMA] ${reason.label}`,
		text: [
			`Motif : ${reason.label}`,
			`Nom et prénom : ${data.name}`,
			`E-mail : ${data.email}`,
			`Téléphone : ${data.phone || "Non renseigné"}`,
			"",
			"Message :",
			data.message,
		].join("\n"),
	}
	// Keep retries idempotent; editing a request creates a different payload key.
	const payloadHash = createHash("sha256")
		.update(JSON.stringify(email))
		.digest("hex")
	const idempotencyKey = `ama-contact/${data.submissionId}/${payloadHash}`

	try {
		const outcome = await send(email, idempotencyKey)
		if (outcome === "rate-limited") {
			return { status: "error", message: contactRateLimitMessage }
		}
		if (outcome !== "sent") return failed
		return {
			status: "success",
			message:
				"Merci, votre demande a bien été envoyée. Je vous répondrai dès que possible.",
		}
	} catch {
		// Do not log the provider response, message, or personal data.
		return failed
	}
}
