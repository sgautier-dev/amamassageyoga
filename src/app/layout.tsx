import type { Metadata } from "next"
import { Cabin } from "next/font/google"

import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/next"

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
		"Massages ayurvédiques, champissage, massage prénatal et yoga doux dans les Landes et sur le Bassin d’Arcachon, notamment à Parentis-en-Born.",
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
				<Header />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	)
}
