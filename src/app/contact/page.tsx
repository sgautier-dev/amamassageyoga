import { randomUUID } from "node:crypto"
import type { Metadata } from "next"

import ContactForm from "@/components/contact-form"
import { getInitialReason } from "@/lib/contact"

export const metadata: Metadata = {
	title: "Contact et demandes",
	description:
		"Contactez Marie pour une information, un rendez-vous, un devis ou un bon cadeau AMA Massage et Yoga.",
}

export default async function ContactPage({
	searchParams,
}: {
	searchParams: Promise<{ motif?: string | string[] }>
}) {
	const { motif } = await searchParams

	return (
		<main className="px-6 py-16 sm:py-24 lg:px-8">
			<div className="mx-auto max-w-3xl">
				<div className="mb-10 text-center">
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
						Échanger
					</p>
					<h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
						Contact et demandes
					</h1>
					<p className="mt-6 text-lg leading-8 text-muted">
						Pour toute demande d&apos;information, de devis ou de bon cadeau,
						vous pouvez m&apos;adresser votre message via le formulaire de
						contact.
					</p>
					<p className="mt-4 text-base leading-7 text-muted">
						Vous préférez appeler ou envoyer un SMS ?{" "}
						<a
							href="tel:+33610755048"
							className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
						>
							06 10 75 50 48
						</a>
						{" · "}
						<a
							href="sms:+33610755048"
							className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
						>
							Envoyer un SMS
						</a>
					</p>
				</div>
				<ContactForm
					key={getInitialReason(motif)}
					initialReason={getInitialReason(motif)}
					submissionId={randomUUID()}
				/>
			</div>
		</main>
	)
}
