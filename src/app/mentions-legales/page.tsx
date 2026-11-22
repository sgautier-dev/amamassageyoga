import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Mentions légales",
	description:
		"Coordonnées professionnelles de Marie Poulain pour AMA Massage et Yoga.",
}

export default function LegalNoticePage() {
	return (
		<main className="px-6 py-16 sm:py-24 lg:px-8">
			<article className="mx-auto max-w-3xl">
				<h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
					Mentions légales
				</h1>
				<p className="mt-6 text-lg leading-8 text-muted">
					AMA Massage et Yoga
				</p>
				<div className="mt-10 space-y-8 text-base leading-8 text-muted">
					<section aria-labelledby="legal-contact-heading">
						<h2
							id="legal-contact-heading"
							className="text-2xl font-semibold text-foreground"
						>
							Édition et coordonnées professionnelles
						</h2>
						<dl className="mt-4 space-y-3">
							<div>
								<dt className="font-semibold text-foreground">Éditrice du site</dt>
								<dd>Marie Poulain — entrepreneur individuel (EI)</dd>
							</div>
							<div>
								<dt className="font-semibold text-foreground">Statut</dt>
								<dd>Régime micro-entrepreneur (auto-entrepreneure)</dd>
							</div>
							<div>
								<dt className="font-semibold text-foreground">SIRET</dt>
								<dd>104 373 147 00016</dd>
							</div>
							<div>
								<dt className="font-semibold text-foreground">
									Adresse administrative professionnelle
								</dt>
								<dd>84 allée des Chênes, 40160 Gastes</dd>
							</div>
							<div>
								<dt className="font-semibold text-foreground">E-mail</dt>
								<dd>
									<a
										href="mailto:marie@amamassageyoga.com"
										className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
									>
										marie@amamassageyoga.com
									</a>
								</dd>
							</div>
							<div>
								<dt className="font-semibold text-foreground">Téléphone</dt>
								<dd>
									<a
										href="tel:+33610755048"
										className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
									>
										06 10 75 50 48
									</a>
								</dd>
							</div>
							<div>
								<dt className="font-semibold text-foreground">
									Directrice de la publication
								</dt>
								<dd>Marie Poulain</dd>
							</div>
						</dl>
						<p className="mt-4">
							Cette adresse administrative n’est pas un lieu d’accueil pour les
							massages.
						</p>
					</section>
					<section aria-labelledby="legal-hosting-heading">
						<h2
							id="legal-hosting-heading"
							className="text-2xl font-semibold text-foreground"
						>
							Hébergement
						</h2>
						<p className="mt-3">Le site est hébergé par Vercel Inc.</p>
						<p className="mt-3">
							Adresse de correspondance publiée dans ses conditions
							d’utilisation : 440 N Barranca Avenue #4133, Covina, CA 91723,
							États-Unis.
						</p>
						<p className="mt-3">
							<a
								href="https://vercel.com/legal/terms"
								className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
							>
								Conditions d’utilisation de Vercel
							</a>
						</p>
						<p className="mt-3">
							Pour contacter l’hébergeur :{" "}
							<a
								href="https://vercel.com/contact"
								className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
							>
								page officielle de contact et d’assistance Vercel
							</a>
							.
						</p>
					</section>
					<section aria-labelledby="legal-privacy-heading">
						<h2
							id="legal-privacy-heading"
							className="text-2xl font-semibold text-foreground"
						>
							Données personnelles
						</h2>
						<p className="mt-3">
							Marie Poulain est responsable du traitement des demandes
							transmises par le formulaire de contact. Les demandes sans suite
							sont conservées pendant 12 mois après le dernier échange.
						</p>
						<p className="mt-3">
							Les informations relatives au traitement de vos données et à
							l’exercice de vos droits figurent dans la{" "}
							<Link
								href="/politique-de-confidentialite"
								className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
								>
								politique de confidentialité
							</Link>
							.
						</p>
					</section>
				</div>
			</article>
		</main>
	)
}
