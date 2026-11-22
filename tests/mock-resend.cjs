// Preloaded only by Playwright's dedicated Next.js process, never by the app.
const originalFetch = globalThis.fetch

globalThis.fetch = async function mockEmailProvider(input, init) {
	const url = new URL(
		typeof input === "string"
			? input
			: input instanceof URL
				? input.href
				: input.url,
	)
	if (url.hostname !== "api.resend.com") return originalFetch(input, init)
	if (url.pathname !== "/emails")
		throw new Error("Unexpected email provider endpoint in tests")

	const email = JSON.parse(init.body)
	if (email.text.includes("TEST_PROVIDER_ERROR")) {
		return Response.json(
			{ name: "application_error", message: "Mock provider failure" },
			{ status: 500 },
		)
	}
	if (email.text.includes("TEST_PROVIDER_RATE_LIMIT")) {
		return Response.json(
			{ name: "rate_limit_exceeded", message: "Mock rate limit" },
			{ status: 429 },
		)
	}
	if (email.text.includes("TEST_PROVIDER_NETWORK"))
		throw new TypeError("Mock provider network failure")
	if (email.text.includes("TEST_PROVIDER_SLOW"))
		await new Promise((resolve) => setTimeout(resolve, 500))
	return Response.json({ id: "mock-email-id" })
}
