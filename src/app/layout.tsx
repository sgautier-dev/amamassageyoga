import type { Metadata } from "next"
import { Cabin } from "next/font/google"

import "./globals.css"

const cabin = Cabin({
	subsets: ["latin"],
	variable: "--font-cabin",
	display: "swap",
})

export const metadata: Metadata = {
	title: {
		template: "%s | AMA Massage et Yoga",
		default: "AMA Massage et Yoga",
	},
	description:
		"Massages traditionnels et yoga doux à Parentis-en-Born. Une approche sensible du toucher pour ralentir, respirer et se retrouver.",
	authors: [
		{
			name: "Sébastien Gautier",
			url: "https://www.sgautier.dev",
		},
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr" className={cabin.variable} data-scroll-behavior="smooth">
			<body className="min-h-screen bg-background font-sans text-foreground antialiased">
				{children}
			</body>
		</html>
	)
}
