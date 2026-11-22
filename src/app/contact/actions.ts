"use server"

import { Resend } from "resend"

import type { ContactFormState } from "@/lib/contact"
import { processContactRequest } from "@/lib/contact-service"

export async function submitContact(
	_previousState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	return processContactRequest(formData, async (email, idempotencyKey) => {
		const apiKey = process.env.RESEND_API_KEY
		if (!apiKey) return "failed"

		const resend = new Resend(apiKey)
		const { data, error } = await resend.emails.send(email, {
			idempotencyKey,
			signal: AbortSignal.timeout(15_000),
		})
		if (error?.name === "rate_limit_exceeded") return "rate-limited"
		return !error && data?.id ? "sent" : "failed"
	})
}
