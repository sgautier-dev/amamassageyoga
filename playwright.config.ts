import { defineConfig } from "@playwright/test"
import { resolve } from "node:path"

export default defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	workers: 2,
	reporter: "list",
	use: {
		baseURL: "http://127.0.0.1:3100",
		channel: "chrome",
		trace: "retain-on-failure",
	},
	projects: [
		{ name: "unit", testMatch: "**/*.unit.spec.ts" },
		{ name: "browser", testMatch: "**/*.browser.spec.ts" },
	],
	webServer: {
		command: "npm run dev -- --hostname 127.0.0.1 --port 3100",
		url: "http://127.0.0.1:3100/contact",
		reuseExistingServer: false,
		timeout: 120_000,
		env: {
			// Never use a real credential or contact the email provider in tests.
			RESEND_API_KEY: "re_test_mock_only",
			NODE_OPTIONS: `--require=${resolve("tests/mock-resend.cjs")}`,
		},
	},
})
