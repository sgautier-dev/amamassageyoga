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
							Marie Poulain, entrepreneur individuel (EI) sous le régime
							micro-entrepreneur (auto-entrepreneure), est responsable du
							traitement pour AMA Massage et Yoga.
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
					<section aria-labelledby="privacy-legal-bases">
						<h2
							id="privacy-legal-bases"
							className="text-2xl font-semibold text-foreground"
						>
							Pourquoi et sur quelles bases vos données sont traitées
						</h2>
						<ul className="mt-3 list-disc space-y-3 pl-6">
							<li>
								Pour préparer, à votre demande, un rendez-vous, un bon cadeau
								ou un devis en vue d’une prestation pour vous : les mesures
								précontractuelles nécessaires à votre demande (article 6.1.b
								du RGPD).
							</li>
							<li>
								Pour répondre à une question générale ou examiner une
								proposition de partenariat : l’intérêt légitime de Marie à
								répondre aux personnes qui la sollicitent et à gérer ses
								échanges professionnels (article 6.1.f du RGPD), dans le
								respect de leurs droits et de leurs attentes. Vous pouvez
								vous opposer à ce traitement dans les conditions prévues par
								la réglementation.
							</li>
							<li>
								Si une prestation est convenue, sa gestion relève de
								l’exécution du contrat ; la tenue et la conservation des
								pièces comptables relèvent des obligations légales applicables
								(articles 6.1.b et 6.1.c du RGPD, respectivement).
							</li>
						</ul>
						<p className="mt-3">
							Ces bases dépendent de l’objet réel de votre message, et non du
							seul motif sélectionné dans le formulaire.
						</p>
					</section>
					<section aria-labelledby="privacy-delivery">
						<h2
							id="privacy-delivery"
							className="text-2xl font-semibold text-foreground"
						>
							Destinataires et transmission des messages
						</h2>
						<p className="mt-3">
							Marie est destinataire de votre demande. Vercel héberge le site
							et exécute le traitement du formulaire ; Resend (Plus Five Five,
							Inc.) assure l’envoi du message ; OVHcloud héberge la boîte
							marie@amamassageyoga.com, consultée avec Zimbra. Ces prestataires
							interviennent pour fournir leurs services, avec leurs
							sous-traitants autorisés. Le formulaire n’enregistre pas les
							demandes dans une base de données du site.
						</p>
						<p className="mt-3">
							Les informations transmises par ce formulaire servent à gérer
							votre demande. Elles ne vous inscrivent à aucune liste de
							prospection. La case relative à la présente politique confirme que
							vous en avez pris connaissance ; elle ne constitue pas un
							consentement marketing.
						</p>
					</section>
					<section aria-labelledby="privacy-transfers">
						<h2
							id="privacy-transfers"
							className="text-2xl font-semibold text-foreground"
						>
							Localisation et transferts des données
						</h2>
						<p className="mt-3">
							Resend indique stocker les contenus des e-mails et les journaux
							aux États-Unis, même lorsque la région choisie pour l’envoi est
							européenne. Son accord de traitement des données (DPA) intègre
							les clauses contractuelles types de la Commission européenne.
							Resend déclare également participer au cadre UE–États-Unis de
							protection des données (EU–US Data Privacy Framework).
						</p>
						<p className="mt-3">
							Le DPA de Vercel prévoit des traitements aux États-Unis et dans
							d’autres pays où opèrent Vercel et ses sous-traitants, avec les
							mécanismes de transfert prévus par ce contrat, notamment les
							clauses contractuelles types lorsqu’elles s’appliquent.
						</p>
						<p className="mt-3">
							OVHcloud présente son offre de messagerie Zimbra comme stockant
							les e-mails en France. Ses engagements de traitement figurent
							dans les conditions contractuelles et leur annexe de protection
							des données. Ce stockage ne signifie pas que l’ensemble du
							parcours du formulaire et de l’e-mail reste dans l’Espace
							économique européen.
						</p>
						<p className="mt-3">
							Vous pouvez consulter les informations de{" "}
							<a
								href="https://resend.com/security/gdpr"
								className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
							>
								Resend
							</a>
							, son{" "}
							<a
								href="https://resend.com/legal/dpa"
								className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
							>
								DPA
							</a>
							, le{" "}
							<a
								href="https://vercel.com/legal/dpa"
								className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
							>
								DPA de Vercel
							</a>
							{" "}et les{" "}
							<a
								href="https://www.ovhcloud.com/fr/personal-data-protection/faq/"
								className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
							>
								engagements d’OVHcloud
							</a>
							. Pour demander des informations ou une copie des garanties
							applicables à vos données, écrivez à Marie à l’adresse indiquée
							ci-dessous.
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
							Dans la messagerie de Marie, les demandes de contact sans suite
							sont conservées pendant 12 mois après le dernier échange. Marie
							organise leur suppression ; le site n’effectue aucune purge
							automatique de la boîte Zimbra.
						</p>
						<p className="mt-3">
							Séparément, Resend annonce une conservation de 30 jours des
							e-mails et journaux pour ses offres Free, Pro et Scale ; les
							offres Enterprise prévoient des durées personnalisables. Cette
							durée chez le prestataire d’envoi est distincte de celle des
							messages reçus par Marie.
						</p>
						<p className="mt-3">
							Les données liées à une prestation, à un devis accepté ou à une
							facture relèvent d’autres obligations de conservation, notamment
							contractuelles, comptables ou légales. Elles sont distinguées des
							simples demandes de contact sans suite.
						</p>
					</section>
					<section aria-labelledby="privacy-technical-data">
						<h2
							id="privacy-technical-data"
							className="text-2xl font-semibold text-foreground"
						>
							Fonctionnement du site et statistiques
						</h2>
						<p className="mt-3">
							L’hébergement et la protection du site peuvent nécessiter le
							traitement de données techniques, notamment l’adresse IP et les
							informations de requête, pour assurer son fonctionnement et
							prévenir les abus. Cette finalité relève de l’intérêt légitime
							à maintenir un site disponible et sécurisé.
						</p>
						<p className="mt-3">
							Le site intègre Vercel Web Analytics pour les statistiques de
							fréquentation. Vercel décrit des statistiques agrégées de pages
							vues et d’appareils, sans cookies tiers, avec un identifiant de
							visite calculé à partir de la requête et renouvelé chaque jour.
							Cette durée d’identifiant ne correspond pas à une durée de
							conservation de l’ensemble des statistiques. Le contenu des champs
							du formulaire n’est pas transmis par le code du site à cet outil.
						</p>
						<p className="mt-3">
							<a
								href="https://vercel.com/docs/analytics/privacy-policy"
								className="font-semibold text-ama-purple underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
							>
								Documentation sur la confidentialité de Vercel Web Analytics
							</a>
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
