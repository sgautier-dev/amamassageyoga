import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Politique de confidentialité",
	description:
		"Informations sur les données transmises via le formulaire de contact AMA Massage et Yoga et sur l’exercice de vos droits.",
}

export default function PrivacyPage() {
	return (
		<main className="px-6 py-16 sm:py-24 lg:px-8">
			<article className="mx-auto max-w-3xl">
				<h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
					Politique de confidentialité
				</h1>
				<div className="mt-10 space-y-8 text-base leading-8 text-muted">
					<section aria-labelledby="privacy-purpose">
						<h2
							id="privacy-purpose"
							className="text-2xl font-semibold text-foreground"
						>
							Vos demandes auprès de Marie
						</h2>
						<p className="mt-3">
							Marie Poulain, auto-entrepreneure et responsable du traitement
							pour AMA Massage et Yoga, reçoit les messages du formulaire afin
							de répondre aux demandes
							d’information, de rendez-vous, de bons cadeaux, de devis ou de
							collaboration.
						</p>
						<dl className="mt-4 space-y-3">
							<div>
								<dt className="font-semibold text-foreground">
									Adresse administrative professionnelle
								</dt>
								<dd>84 allée des Chênes, 40160 Gastes</dd>
							</div>
							<div>
								<dt className="font-semibold text-foreground">SIRET</dt>
								<dd>104 373 147 00016</dd>
							</div>
						</dl>
						<p className="mt-3">
							Cette adresse administrative n’est pas un lieu d’accueil pour les
							massages.
						</p>
						<p className="mt-3">
							Le formulaire recueille votre nom et prénom, votre adresse e-mail,
							le motif et le contenu de votre message. Le numéro de téléphone
							est facultatif. Les champs obligatoires permettent de traiter
							votre demande et de vous répondre. Merci de ne pas communiquer de
							données médicales dans votre message.
						</p>
					</section>
					<section aria-labelledby="privacy-delivery">
						<h2
							id="privacy-delivery"
							className="text-2xl font-semibold text-foreground"
						>
							Transmission des messages
						</h2>
						<p className="mt-3">
							Le site est hébergé sur Vercel. Les demandes sont transmises par
							le prestataire d’envoi d’e-mails Resend à Marie, dans sa boîte de
							réception marie@amamassageyoga.com, hébergée par OVH. Le
							formulaire n’enregistre pas les demandes dans une base de données
							du site.
						</p>
						<p className="mt-3">
							Les informations transmises par ce formulaire servent à gérer
							votre demande. Elles ne vous inscrivent à aucune liste de
							prospection. La case relative à la présente politique confirme que
							vous en avez pris connaissance ; elle ne constitue pas un
							consentement marketing.
						</p>
					</section>
					<section aria-labelledby="privacy-retention">
						<h2
							id="privacy-retention"
							className="text-2xl font-semibold text-foreground"
						>
							Conservation de vos données
						</h2>
						<p className="mt-3">
							Les demandes de contact sans suite sont conservées pendant 12 mois
							après le dernier échange.
						</p>
						<p className="mt-3">
							Les données liées à une prestation, à un devis accepté ou à une
							facture relèvent d’autres obligations de conservation, notamment
							contractuelles, comptables ou légales. Elles sont distinguées des
							simples demandes de contact sans suite.
						</p>
					</section>
					<section aria-labelledby="privacy-rights">
						<h2
							id="privacy-rights"
							className="text-2xl font-semibold text-foreground"
						>
							Vos droits et votre contact
						</h2>
						<p className="mt-3">
							Vous pouvez demander l’accès à vos données, leur rectification ou
							leur effacement, ainsi que la limitation de leur traitement. Selon
							les conditions prévues par la réglementation, vous pouvez
							également exercer vos droits d’opposition et de portabilité.
						</p>
						<p className="mt-3">
							Pour toute question concernant vos données ou pour exercer vos
							droits, écrivez à{" "}
							<a
								href="mailto:marie@amamassageyoga.com"
								className="font-semibold text-ama-purple underline underline-offset-4"
							>
								marie@amamassageyoga.com
							</a>
							.
						</p>
						<p className="mt-3">
							Vous pouvez aussi adresser une réclamation à la{" "}
							<a
								href="https://www.cnil.fr/fr/adresser-une-plainte"
								className="font-semibold text-ama-purple underline underline-offset-4"
							>
								Commission nationale de l’informatique et des libertés (CNIL)
							</a>
							.
						</p>
					</section>
					<p>
						<Link
							href="/contact"
							className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
						>
							Revenir au formulaire de contact
						</Link>
					</p>
				</div>
			</article>
		</main>
	)
}
