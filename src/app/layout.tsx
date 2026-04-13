import type { Metadata } from "next"
import { Cabin } from "next/font/google"

import "./globals.css"

const cabin = Cabin({
	subsets: ["latin"],
	variable: "--font-cabin",
	display: "swap",
})

export const metadata: Metadata = {
	title: "AMA Massage et Yoga",
	description:
		"Massages traditionnels et yoga doux à Parentis-en-Born. Un espace pour ralentir, respirer et se retrouver.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr" className={cabin.variable}>
			<body className="min-h-screen bg-background font-sans text-foreground antialiased">
				{children}
			</body>
		</html>
	)
}
