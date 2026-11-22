import { randomUUID } from "node:crypto"
import { expect, test } from "@playwright/test"

import { contactReasons, getInitialReason } from "../src/lib/contact"
import {
	processContactRequest,
	type ContactEmail,
	type ContactSender,
} from "../src/lib/contact-service"
import { submitContact } from "../src/app/contact/actions"
import { initialContactState } from "../src/lib/contact"

function validForm() {
	const form = new FormData()
	for (const [key, value] of Object.entries({
		name: "  Test Visitor  ",
		email: "  visitor@example.com  ",
		phone: "",
		reason: "bon-cadeau",
		message: "  A synthetic gift card request.  ",
		privacy: "on",
		website: "",
		submissionId: randomUUID(),
	}))
		form.set(key, value)
	return form
}

for (const reason of contactReasons) {
	test(`sends the controlled reason: ${reason.value}`, async () => {
		const form = validForm()
		form.set("reason", reason.value)
		let sent: ContactEmail | undefined
		const result = await processContactRequest(form, async (email) => {
			sent = email
			return "sent"
		})
		expect(result.status).toBe("success")
		expect(sent).toEqual({
			from: "AMA Massage et Yoga <marie@amamassageyoga.com>",
			to: "marie@amamassageyoga.com",
			replyTo: "visitor@example.com",
			subject: `[AMA] ${reason.label}`,
			text: expect.stringContaining("Nom et prénom : Test Visitor"),
		})
		expect(sent?.text).toContain("A synthetic gift card request.")
	})
}

test("only recognized query values are preselected", () => {
	for (const { value } of contactReasons)
		expect(getInitialReason(value)).toBe(value)
	for (const value of [
		undefined,
		"invalid",
		["bon-cadeau"],
		"",
		{ motif: "bon-cadeau" },
	]) {
		expect(getInitialReason(value)).toBe("")
	}
})

for (const [field, value] of [
	["name", " "],
	["name", "x".repeat(121)],
	["name", "Name\r\nBcc: injected@example.com"],
	["email", "not-an-email"],
	["email", "a@example.com\r\nBcc: injected@example.com"],
	["phone", "not a phone"],
	["reason", "injected subject"],
	["message", "short"],
	["message", "x".repeat(5001)],
	["message", "Null byte\u0000 here"],
	["privacy", "off"],
	["website", "spam"],
	["submissionId", "invalid"],
] as const) {
	test(`rejects invalid ${field}: ${value.slice(0, 12).replaceAll(/[\s\u0000]/g, "_")}`, async () => {
		const form = validForm()
		form.set(field, value)
		let calls = 0
		const result = await processContactRequest(form, async () => {
			calls++
			return "sent"
		})
		expect(result.status).toBe("error")
		expect(calls).toBe(0)
	})
}

test("rejects malformed, duplicate, file and oversized fields without calling the provider", async () => {
	const duplicate = validForm()
	duplicate.append("email", "other@example.com")
	const file = validForm()
	file.set("message", new Blob(["not accepted"]), "file.txt")
	const extra = validForm()
	extra.set("unexpected", "extra")
	const oversized = validForm()
	oversized.set("message", "x".repeat(40_000))
	const missing = validForm()
	missing.delete("privacy")
	for (const form of [duplicate, file, extra, oversized, missing]) {
		let calls = 0
		expect(
			(
				await processContactRequest(form, async () => {
					calls++
					return "sent"
				})
			).status,
		).toBe("error")
		expect(calls).toBe(0)
	}
})

test("keeps HTML as plain text and validates optional phone numbers", async () => {
	const form = validForm()
	form.set("message", '<script>alert("test")</script>')
	form.set("phone", "+33 (0)6 10 00 00 00")
	await processContactRequest(form, async (email) => {
		expect(email.text).toContain('<script>alert("test")</script>')
		expect(email).not.toHaveProperty("html")
		return "sent"
	})
})

test("reports provider errors, rate limits and thrown network errors safely", async () => {
	const senders: ContactSender[] = [
		async () => "failed",
		async () => "rate-limited",
		async () => {
			throw new Error("Private provider error")
		},
	]
	for (const send of senders) {
		const result = await processContactRequest(validForm(), send)
		expect(result.status).toBe("error")
		expect(result.message).not.toContain("Private provider")
		expect(result.message).not.toContain("visitor@example.com")
	}
})

test("retries reuse an idempotency key, edits get a new key", async () => {
	const keys: string[] = []
	const send: ContactSender = async (_email, key) => {
		keys.push(key)
		return "sent"
	}
	const form = validForm()
	await processContactRequest(form, send)
	await processContactRequest(form, send)
	form.set("message", "An edited synthetic request.")
	await processContactRequest(form, send)
	const [first, retry, edited] = keys
	expect(first).toBe(retry)
	expect(edited).not.toBe(first)
	expect(first?.length).toBeLessThan(256)
	expect(first).not.toContain("visitor@example.com")
})

test("missing email credentials return a safe error at request time", async () => {
	// This test worker uses an empty key and never reads a real credential.
	process.env.RESEND_API_KEY = ""
	const result = await submitContact(initialContactState, validForm())
	expect(result.status).toBe("error")
	expect(result.message).not.toContain("RESEND_API_KEY")
})
