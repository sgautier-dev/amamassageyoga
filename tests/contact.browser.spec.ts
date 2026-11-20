import { expect, test, type Page } from "@playwright/test"

import { contactReasons } from "../src/lib/contact"

test.use({ reducedMotion: "reduce" })

async function fillForm(
	page: Page,
	message = "A synthetic contact request for testing.",
) {
	await page.getByLabel("Nom et prénom").fill("Test Visitor")
	await page.getByLabel("Adresse e-mail").fill("visitor@example.com")
	await page.getByLabel("Motif de votre demande").selectOption("bon-cadeau")
	await page.getByLabel("Message *", { exact: true }).fill(message)
	await page.getByRole("checkbox").check()
}

test("gift card entry follows ForWho and opens the preselected form", async ({
	page,
}) => {
	await page.goto("/")
	const order = await page
		.locator("main section")
		.evaluateAll((sections) =>
			sections.map((section) => section.getAttribute("aria-labelledby")),
		)
	expect(order.indexOf("gift-card-heading")).toBeGreaterThan(
		order.indexOf("for-who-heading"),
	)
	expect(order.indexOf("gift-card-heading")).toBeLessThan(
		order.indexOf("testimonials-heading"),
	)
	await page.getByRole("link", { name: "Demander un bon cadeau" }).click()
	await expect(page).toHaveURL(/\/contact\?motif=bon-cadeau$/)
	await expect(page.getByLabel("Motif de votre demande")).toHaveValue(
		"bon-cadeau",
	)
	await expect(page.locator("#message-hint")).toContainText("bénéficiaire")
})

test("six exact options, safe query fallback and contextual hints", async ({
	page,
}) => {
	await page.goto("/contact?motif=invalid")
	const select = page.getByLabel("Motif de votre demande")
	await expect(select).toHaveValue("")
	expect(
		await select.locator("option:not([disabled])").allTextContents(),
	).toEqual(contactReasons.map((reason) => reason.label))
	for (const reason of contactReasons) {
		await select.selectOption(reason.value)
		if (reason.hint)
			await expect(page.locator("#message-hint")).toContainText(reason.hint)
	}
	await page.goto("/contact?motif=bon-cadeau&motif=devis")
	await expect(select).toHaveValue("")
})

test("submits POST /contact and displays success without personal data in the URL", async ({
	page,
}) => {
	await page.goto("/contact?motif=bon-cadeau")
	await fillForm(page)
	const requestPromise = page.waitForRequest(
		(request) =>
			new URL(request.url()).pathname === "/contact" &&
			request.method() === "POST",
	)
	await page.getByRole("button", { name: "Envoyer ma demande" }).click()
	const request = await requestPromise
	expect(request.url()).not.toContain("visitor")
	expect(request.postData()).toContain("visitor@example.com")
	await expect(page.getByRole("status")).toContainText(
		"votre demande a bien été envoyée",
	)
	await expect(page.getByRole("status")).toBeFocused()
	await expect(
		page.getByRole("button", { name: "Envoyer ma demande" }),
	).toHaveCount(0)
})

test("server-side field errors preserve values and focus the first invalid field", async ({
	page,
}) => {
	await page.goto("/contact")
	await fillForm(page)
	await page.getByLabel("Téléphone").fill("invalid phone")
	await page.getByRole("button", { name: "Envoyer ma demande" }).click()
	await expect(page.getByRole("main").getByRole("alert")).toContainText(
		"Vérifiez les champs",
	)
	await expect(page.getByLabel("Nom et prénom")).toHaveValue("Test Visitor")
	await expect(page.getByLabel("Téléphone")).toBeFocused()
	await expect(page.locator("#phone-error")).toBeVisible()
	await expect(page.getByRole("checkbox")).toBeChecked()
	await expect(page.getByLabel("Motif de votre demande")).toHaveValue(
		"bon-cadeau",
	)
})

test("browser validation blocks an empty form", async ({ page }) => {
	await page.goto("/contact")
	let posts = 0
	page.on("request", (request) => {
		if (request.method() === "POST") posts++
	})
	await page.getByRole("button", { name: "Envoyer ma demande" }).click()
	await expect(page.getByLabel("Nom et prénom")).toBeFocused()
	expect(posts).toBe(0)
})

test("honeypot is hidden from keyboard and rejected on the server", async ({
	page,
}) => {
	await page.goto("/contact")
	await fillForm(page)
	await expect(page.locator("#website")).toBeHidden()
	await page.locator("#website").evaluate((element: HTMLInputElement) => {
		element.value = "spam"
	})
	await page.getByRole("button", { name: "Envoyer ma demande" }).click()
	await expect(page.getByRole("main").getByRole("alert")).toContainText(
		"L’envoi n’a pas pu être confirmé",
	)
})

for (const marker of [
	"TEST_PROVIDER_ERROR",
	"TEST_PROVIDER_NETWORK",
	"TEST_PROVIDER_RATE_LIMIT",
]) {
	test(`handles ${marker} and keeps the request`, async ({ page }) => {
		await page.goto("/contact")
		await fillForm(page, marker)
		await page.getByRole("button", { name: "Envoyer ma demande" }).click()
		await expect(page.getByRole("main").getByRole("alert")).toBeVisible()
		await expect(page.getByLabel("Message *", { exact: true })).toHaveValue(
			marker,
		)
		await expect(
			page.getByRole("button", { name: "Envoyer ma demande" }),
		).toBeEnabled()
	})
}

for (const failure of ["network", "429", "413"]) {
	test(`handles ${failure} before the action runs, then permits a retry`, async ({
		page,
	}) => {
		await page.goto("/contact")
		await fillForm(page)
		await page.route("**/contact", async (route) => {
			if (route.request().method() !== "POST") return route.continue()
			if (failure === "network") return route.abort("failed")
			return route.fulfill({
				status: Number(failure),
				contentType: "text/html",
				body: "<h1>Request rejected</h1>",
			})
		})
		await page.getByRole("button", { name: "Envoyer ma demande" }).click()
		await expect(page.getByRole("main").getByRole("alert")).toContainText(
			"Réessayez dans quelques minutes",
		)
		await expect(page.getByLabel("Adresse e-mail")).toHaveValue(
			"visitor@example.com",
		)
		await page.unroute("**/contact")
		await page.getByRole("button", { name: "Envoyer ma demande" }).click()
		await expect(page.getByRole("status")).toContainText(
			"votre demande a bien été envoyée",
		)
	})
}

test("double clicks create one pending submission", async ({ page }) => {
	await page.goto("/contact")
	await fillForm(page, "TEST_PROVIDER_SLOW")
	let posts = 0
	page.on("request", (request) => {
		if (
			request.method() === "POST" &&
			new URL(request.url()).pathname === "/contact"
		)
			posts++
	})
	await page
		.getByRole("button", { name: "Envoyer ma demande" })
		.evaluate((element: HTMLButtonElement) => {
			element.click()
			element.click()
		})
	await expect(
		page.getByRole("button", { name: "Envoi en cours…" }),
	).toBeDisabled()
	await expect(page.getByRole("status")).toContainText(
		"votre demande a bien été envoyée",
	)
	expect(posts).toBe(1)
})

test("phone booking anchor and secondary contact link remain functional", async ({ page }) => {
	await page.goto("/")
	await page.getByRole("navigation").getByRole("link", { name: "Prendre rendez-vous" }).click()
	await expect(page).toHaveURL(/\/#contact$/)
	await expect(page.locator("#contact").getByRole("link", { name: "Appeler maintenant" })).toHaveAttribute("href", "tel:+33610755048")
	await page.locator("#contact").getByRole("link", { name: "Écrire un message" }).click()
	await expect(page).toHaveURL(/\/contact$/)
	await page.getByRole("navigation").getByRole("link", { name: "Soins & tarifs" }).click()
	await expect(page).toHaveURL(/\/soins-et-tarifs$/)
	await expect(page.locator("main h1")).toBeVisible()
})

test("privacy is reachable and contains confirmed identity and retention", async ({
	page,
}) => {
	await page.goto("/politique-de-confidentialite")
	await expect(page.getByRole("heading", { level: 1 })).toHaveText(
		"Politique de confidentialité",
	)
	await expect(page.locator("main")).toContainText("Marie Poulain")
	await expect(page.locator("main")).toContainText(
		"12 mois après le dernier échange",
	)
	await page
		.getByRole("link", { name: "Revenir au formulaire de contact" })
		.click()
	await expect(page).toHaveURL(/\/contact$/)
})

for (const viewport of [
	{ width: 390, height: 844 },
	{ width: 1440, height: 1000 },
]) {
	test(`keyboard navigation and responsive layout at ${viewport.width}px`, async ({
		page,
	}) => {
		await page.setViewportSize(viewport)
		await page.goto("/contact")
		await page.getByLabel("Nom et prénom").focus()
		for (const id of ["email", "phone", "reason", "message", "privacy"]) {
			await page.keyboard.press("Tab")
			await expect(page.locator(`#${id}`)).toBeFocused()
		}
		await page.keyboard.press("Tab")
		await expect(
			page.getByRole("link", {
				name: /politique de confidentialité \(nouvel onglet\)/,
			}),
		).toBeFocused()
		await page.keyboard.press("Tab")
		await expect(
			page.getByRole("button", { name: "Envoyer ma demande" }),
		).toBeFocused()
		expect(
			await page.evaluate(
				() => document.documentElement.scrollWidth <= window.innerWidth,
			),
		).toBe(true)
		await expect(
			page.getByRole("link", { name: "06 10 75 50 48", exact: true }),
		).toHaveAttribute("href", "tel:+33610755048")
		await expect(
			page.getByRole("link", { name: "Envoyer un SMS" }),
		).toHaveAttribute("href", "sms:+33610755048")
		if (viewport.width < 1024) {
			await page.getByRole("button", { name: "Open main menu" }).click()
			await page
				.getByRole("dialog")
				.getByRole("link", { name: "Contact", exact: true })
				.click()
			await expect(page.getByRole("dialog")).toHaveCount(0)
		} else {
			await expect(
				page
					.getByRole("navigation")
					.getByRole("link", { name: "Contact", exact: true }),
			).toHaveAttribute("href", "/contact")
		}
		await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }))
		await page.screenshot({
			path: `test-results/contact-${viewport.width}.png`,
			fullPage: true,
		})
		await page.goto("/")
		await page.locator('section[aria-labelledby="gift-card-heading"]').screenshot({ path: `test-results/gift-card-${viewport.width}.png` })
	})
}
