import Image from "next/image"

import Reveal from "@/components/reveal"
import BookingCta from "@/components/booking-cta"
import OpenDetailsFromHash from "@/components/openDetailsFromHash"

export const metadata = {
	title: "Soins & tarifs",
	description:
		"Découvrez les soins AMA Massage et Yoga à Parentis-en-Born : massages ayurvédiques, Champissage, soins ciblés, massage prénatal, yoga doux et tarifs.",
}

type Price = {
	duration: string
	price: string
	featured?: boolean
}

type Care = {
	id: string
	title: string
	subtitle?: string
	prices?: Price[]
	description: string[]
	benefitTitle: string
	benefits: string[]
	duration: string
	location?: string
	note?: string
	accent: string
}

const cares: Care[] = [
	{
		id: "champissage",
		title: "Massage assis — Champissage",
		subtitle: "Dos · épaules · nuque · crâne · visage",
		accent: "bg-ama-yellow",
		prices: [
			{ duration: "30 min", price: "40 €" },
			{ duration: "45 min", price: "50 €" },
		],
		description: [
			"Issu de la tradition ayurvédique, le Champissage est un massage assis, précis et enveloppant, qui agit directement sur les zones où le stress s’accumule.",
			"Pratiqué habillé et sans huile, il s’adapte facilement à tous les environnements : entreprise, événement ou pause dans la journée.",
		],
		benefitTitle: "Idéal pour",
		benefits: [
			"relâcher les tensions rapidement",
			"apaiser le système nerveux",
			"retrouver énergie et clarté",
		],
		duration: "15 à 45 min",
		location: "Cabinet · entreprise · événements",
		note: "Formats courts (15–20 min) réservés aux interventions en entreprise et événements.",
	},
	{
		id: "massages-ayurvediques",
		title: "Massage ayurvédique du corps",
		accent: "bg-ama-pink",
		prices: [
			{ duration: "60 min", price: "70 €" },
			{ duration: "90 min", price: "100 €", featured: true },
			{ duration: "120 min", price: "130 €" },
		],
		description: [
			"Un soin complet à l’huile tiède, à la fois profond, enveloppant et rééquilibrant.",
			"Chaque séance est adaptée à votre constitution et à vos besoins du moment : relaxante, tonique ou plus ciblée en profondeur.",
		],
		benefitTitle: "Agit sur",
		benefits: [
			"le stress et la fatigue",
			"la circulation et le drainage",
			"l’équilibre global du corps",
		],
		duration: "60 à 120 min",
		location: "Cabinet · domicile",
	},
	{
		id: "massage-crane-huile",
		title: "Massage du crâne à l’huile",
		accent: "bg-ama-pink",
		prices: [{ duration: "45 min", price: "50 €" }],
		description: [
			"Un soin profondément relaxant qui libère les tensions du haut du corps et apaise le mental.",
			"Le cuir chevelu, la nuque, les épaules et le visage se détendent en profondeur grâce à une huile ayurvédique spécifique.",
		],
		benefitTitle: "Favorise",
		benefits: [
			"la détente profonde",
			"la circulation",
			"la vitalité capillaire",
		],
		duration: "35 à 40 min",
		location: "Cabinet · domicile",
	},
	{
		id: "soins-visage",
		title: "Soins du visage",
		subtitle: "Marmalift — massage ayurvédique rajeunissant",
		accent: "bg-ama-pink",
		prices: [{ duration: "60 min", price: "70 €" }],
		description: [
			"Un soin liftant naturel qui associe techniques manuelles et stimulation des points marmas.",
			"Il détend les traits, relance la circulation et redonne éclat et vitalité à la peau.",
			"Peut également être pratiqué avec le Kansa Wand.",
		],
		benefitTitle: "Effets",
		benefits: [
			"visage détendu et repulpé",
			"teint lumineux",
			"relaxation profonde",
		],
		duration: "60 min",
		note: "Une cure de 3 à 5 séances permet d’ancrer les effets dans le temps.",
	},
	{
		id: "massage-pieds-bol-kansu",
		title: "Massage des pieds au bol Kansu",
		accent: "bg-ama-green",
		prices: [{ duration: "45 min", price: "Sur demande" }],
		description: [
			"Un soin profondément apaisant qui agit à la fois sur les pieds, les jambes et l’équilibre global du corps.",
			"Il procure une sensation de légèreté immédiate.",
		],
		benefitTitle: "Favorise",
		benefits: [
			"la détente nerveuse",
			"l’élimination des toxines",
			"l’ancrage",
			"la réduction de l’inflammation",
		],
		duration: "45 min",
		location: "Cabinet · domicile",
	},
	{
		id: "soins-cibles",
		title: "Soins ciblés — mains · ventre · pieds",
		accent: "bg-ama-green",
		prices: [
			{ duration: "30 min", price: "40 €" },
			{ duration: "45 min", price: "50 €" },
		],
		description: [
			"Des soins spécifiques, doux et profonds, pour relâcher des zones clés du corps.",
			"Le toucher est lent, précis et apaisant.",
		],
		benefitTitle: "Idéal",
		benefits: ["en complément", "ou en soin dédié"],
		duration: "20 à 45 min",
		location: "Cabinet · domicile",
		note: "Peuvent être intégrés aux séances ou proposés de manière ciblée selon votre besoin.",
	},
	{
		id: "massage-drainant",
		title: "Massage drainant",
		accent: "bg-ama-green",
		prices: [
			{ duration: "75 min", price: "80 €" },
			{ duration: "90 min", price: "100 €" },
		],
		description: [
			"Un soin doux et rythmé qui stimule la circulation lymphatique et favorise l’élimination des toxines.",
			"Il agit en profondeur tout en restant enveloppant.",
		],
		benefitTitle: "Favorise",
		benefits: [
			"la circulation et le drainage",
			"le désengorgement des tissus",
			"une meilleure vitalité globale",
		],
		duration: "1h15 ou 1h30 (incluant le visage)",
		location: "Cabinet · domicile",
	},
	{
		id: "chi-nei-tsang",
		title: "Chi Nei Tsang — massage du ventre",
		accent: "bg-ama-green",
		prices: [{ duration: "1h45", price: "115 €" }],
		description: [
			"Un soin profond centré sur la sphère abdominale, véritable centre émotionnel.",
			"Par un toucher progressif, il libère les tensions, soutient la digestion et favorise un relâchement global.",
		],
		benefitTitle: "Permet",
		benefits: [
			"libération émotionnelle",
			"détente profonde",
			"rééquilibrage énergétique",
		],
		duration: "1h45",
		location: "Cabinet · domicile",
	},
	{
		id: "accompagnement-feminin",
		title: "Massage prénatal",
		accent: "bg-ama-blue",
		prices: [
			{ duration: "75 min", price: "90 €" },
			{ duration: "90 min", price: "110 €" },
		],
		description: [
			"Un soin enveloppant, spécialement conçu pour accompagner la femme enceinte.",
			"Il soulage les tensions, améliore le sommeil et permet un moment de connexion profonde avec soi et avec le bébé.",
			"Chaque posture est adaptée pour garantir confort et sécurité.",
		],
		benefitTitle: "Apporte",
		benefits: [
			"détente physique et émotionnelle",
			"soulagement des tensions",
			"connexion au corps et au bébé",
		],
		duration: "75 à 90 min",
		location: "Cabinet · domicile",
		note: "À partir du 4ᵉ mois.",
	},
	{
		id: "yoga-doux",
		title: "Yoga doux & Yin yoga",
		accent: "bg-ama-blue",
		prices: [
			{
				duration: "Séances individuelles ou collectives",
				price: "Sur demande",
			},
		],
		description: [
			"Une pratique lente et introspective, accessible à tous (y compris femmes enceintes).",
			"Les postures sont maintenues dans l’immobilité et le relâchement, permettant d’agir sur les tissus profonds et d’apaiser le mental.",
		],
		benefitTitle: "Favorise",
		benefits: ["souplesse et mobilité", "apaisement mental", "écoute de soi"],
		duration: "1h15 à 1h30",
		location: "Salle · extérieur",
	},
	{
		id: "yoga-hormonal",
		title: "Yoga hormonal",
		accent: "bg-ama-purple",
		prices: [{ duration: "1h à 1h30", price: "Sur demande" }],
		description: [
			"Une pratique dynamique et ciblée qui soutient l’équilibre hormonal, chez la femme comme chez l’homme.",
			"À travers des enchaînements spécifiques, le souffle et le mouvement, l’énergie circule pour harmoniser le système hormonal.",
		],
		benefitTitle: "Soutient",
		benefits: [
			"l’équilibre hormonal",
			"la vitalité et l’énergie",
			"le bien-être global",
		],
		duration: "1h à 1h30",
		location: "Salle · extérieur",
	},
]
export default function SoinsEtTarifsPage() {
	return (
		<main className="relative overflow-hidden">
			<OpenDetailsFromHash />
			<section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
				<Image
					src="/graphics/ama-star-yellow.png"
					alt=""
					aria-hidden="true"
					width={220}
					height={220}
					className="pointer-events-none absolute top-10 right-8 -z-10 hidden w-32 select-none opacity-50 sm:block lg:right-[14%] lg:w-40 float-soft-slow"
				/>

				<Image
					src="/graphics/ama-circle-green.png"
					alt=""
					aria-hidden="true"
					width={260}
					height={260}
					className="pointer-events-none absolute -left-24 bottom-10 -z-10 hidden w-56 select-none opacity-35 lg:block"
				/>

				<Reveal className="mx-auto max-w-4xl text-center">
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
						Soins & tarifs
					</p>

					<h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl">
						Choisir le temps qui vous est nécessaire, et vous laisser guider.
					</h1>

					<p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
						Le massage ayurvédique du corps constitue la base des soins
						proposés, autour duquel s’articulent les différentes approches.
					</p>

					<div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-ama-purple/10 bg-white/80 p-6 text-left shadow-sm">
						<p className="text-sm font-medium uppercase tracking-[0.14em] text-ama-purple">
							Produits utilisés
						</p>

						<p className="mt-4 text-base leading-7 text-muted">
							Dans une approche respectueuse du corps, des produits biologiques
							soigneusement sélectionnés accompagnent les soins : hydrolats,
							huiles et macérât de plantes, sans huiles essentielles.
						</p>
					</div>
				</Reveal>
			</section>

			<section
				aria-labelledby="soins-tarifs-heading"
				className="px-6 pb-24 sm:pb-32 lg:px-8"
			>
				<div className="mx-auto max-w-5xl">
					<Reveal className="mx-auto max-w-2xl text-center">
						<h2
							id="soins-tarifs-heading"
							className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
						>
							Les soins & tarifs
						</h2>

						<p className="mt-6 text-base leading-7 text-muted sm:text-lg">
							Découvrez les approches proposées, leurs durées et leurs tarifs.
							Chaque soin peut être adapté selon votre besoin du moment.
						</p>
					</Reveal>

					<div className="mt-16 space-y-5">
						{cares.map((care, index) => (
							<Reveal key={care.id} delay={index % 2 === 0 ? "none" : "sm"}>
								<details
									id={care.id}
									className="group scroll-mt-36 rounded-3xl border border-ama-purple/10 bg-white/85 p-6 shadow-sm open:bg-white sm:p-8"
								>
									<summary className="flex cursor-pointer list-none items-start justify-between gap-5">
										<div className="min-w-0 flex-1 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-6">
											<div className="min-w-0">
												<div
													className={`h-1.5 w-14 rounded-full ${care.accent}`}
												/>

												<h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
													{care.title}
												</h3>

												{care.subtitle ? (
													<p className="mt-2 text-sm font-medium tracking-wide text-ama-purple">
														{care.subtitle}
													</p>
												) : null}
											</div>

											{care.prices?.length ? (
												<div className="mt-5 flex flex-wrap gap-2 md:mt-0 md:max-w-md md:justify-end">
													{care.prices.map((price) => (
														<span
															key={`${care.id}-${price.duration}`}
															className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm"
														>
															<span className="text-muted">
																{price.duration}
															</span>
															<span className="font-semibold text-foreground">
																{price.price}
																{price.featured ? " ⭐" : ""}
															</span>
														</span>
													))}
												</div>
											) : null}
										</div>

										<span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-ama-purple/10 text-ama-purple transition group-open:rotate-45">
											+
										</span>
									</summary>

									<div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
										<div className="space-y-5 text-base leading-8 text-muted">
											{care.description.map((paragraph) => (
												<p key={paragraph}>{paragraph}</p>
											))}

											{care.note ? (
												<p className="font-medium text-foreground">
													{care.note}
												</p>
											) : null}
										</div>

										<div className="rounded-2xl bg-background p-5">
											<p className="text-sm font-medium uppercase tracking-[0.14em] text-ama-purple">
												{care.benefitTitle}
											</p>

											<ul className="mt-4 space-y-3">
												{care.benefits.map((benefit) => (
													<li key={benefit} className="flex gap-x-3">
														<span
															aria-hidden="true"
															className={`mt-2 h-2 w-2 flex-none rounded-full ${care.accent}`}
														/>
														<span className="text-sm leading-6 text-foreground">
															{benefit}
														</span>
													</li>
												))}
											</ul>

											<div className="mt-6 grid gap-3 text-sm leading-6 text-muted">
												<div>
													<span className="font-semibold text-foreground">
														Durée :
													</span>{" "}
													{care.duration}
												</div>

												{care.location ? (
													<div>
														<span className="font-semibold text-foreground">
															Lieu :
														</span>{" "}
														{care.location}
													</div>
												) : null}
											</div>
										</div>
									</div>
								</details>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section
				id="interventions-evenements"
				aria-labelledby="interventions-evenements-heading"
				className="px-6 pb-24 sm:pb-32 lg:px-8"
			>
				<div className="mx-auto max-w-5xl">
					<Reveal className="mx-auto max-w-2xl text-center">
						<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
							Découverte & événements
						</p>

						<h2
							id="interventions-evenements-heading"
							className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
						>
							Interventions & événements
						</h2>
					</Reveal>

					<div className="mt-16 space-y-5">
						<Reveal>
							<details className="group rounded-3xl border border-ama-purple/10 bg-white/85 p-6 shadow-sm open:bg-white sm:p-8">
								<summary className="flex cursor-pointer list-none items-start justify-between gap-5">
									<div className="min-w-0 flex-1 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6">
										<div className="min-w-0">
											<div className="h-1.5 w-14 rounded-full bg-ama-blue" />

											<h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
												Pause détente — Champissage express
											</h3>
										</div>

										<div className="mt-5 flex flex-wrap gap-2 sm:mt-0 sm:justify-end">
											<span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm">
												<span className="text-muted">15 min</span>
												<span className="font-semibold text-foreground">
													20 €
												</span>
											</span>

											<span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm">
												<span className="text-muted">20 min</span>
												<span className="font-semibold text-foreground">
													25 €
												</span>
											</span>
										</div>
									</div>

									<span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-ama-purple/10 text-ama-purple transition group-open:rotate-45">
										+
									</span>
								</summary>

								<p className="mt-6 text-sm leading-6 text-muted">
									Idéal pour : événements bien-être · marchés · journées
									spéciales.
								</p>
							</details>
						</Reveal>

						<Reveal delay="sm">
							<details className="group rounded-3xl border border-ama-purple/10 bg-white/85 p-6 shadow-sm open:bg-white sm:p-8">
								<summary className="flex cursor-pointer list-none items-start justify-between gap-5">
									<div className="min-w-0 flex-1 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6">
										<div className="min-w-0">
											<div className="h-1.5 w-14 rounded-full bg-ama-purple" />

											<h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
												Entreprises & interventions professionnelles
											</h3>
										</div>

										<div className="mt-5 flex flex-wrap gap-2 sm:mt-0 sm:max-w-md sm:justify-end">
											<span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm">
												<span className="text-muted">Tarif</span>
												<span className="font-semibold text-foreground">
													À partir de 100 € / heure
												</span>
											</span>

											<span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm">
												<span className="text-muted">Rythme</span>
												<span className="font-semibold text-foreground">
													3 à 4 personnes / heure
												</span>
											</span>
										</div>
									</div>

									<span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-ama-purple/10 text-ama-purple transition group-open:rotate-45">
										+
									</span>
								</summary>

								<div className="mt-6 space-y-4 text-sm leading-6 text-muted">
									<p>
										Séances de massage assis (Champissage) en entreprise,
										adaptées au rythme de travail et aux besoins des équipes.
									</p>

									<p>
										Format optimisé pour intervenir auprès de plusieurs
										personnes sur un temps donné.
									</p>

									<div>
										<p className="font-semibold text-foreground">Modalités</p>
										<ul className="mt-2 space-y-1">
											<li>• durée minimum d’intervention</li>
											<li>• organisation sur site</li>
											<li>• devis personnalisé</li>
										</ul>
									</div>
								</div>
							</details>
						</Reveal>
					</div>
				</div>
			</section>

			<section
				id="informations-pratiques"
				aria-labelledby="informations-pratiques-heading"
				className="px-6 pb-24 sm:pb-32 lg:px-8"
			>
				<Reveal className="mx-auto max-w-4xl rounded-3xl border border-ama-purple/10 bg-background p-8 text-center shadow-sm sm:p-10">
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
						Informations
					</p>

					<h2
						id="informations-pratiques-heading"
						className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
					>
						Un temps d’accueil et d’intégration est toujours prévu.
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
						Les durées indiquées correspondent au temps de soin. Un temps
						d’accueil et d’intégration est toujours prévu pour accompagner
						l’expérience.
					</p>
				</Reveal>
			</section>

			<BookingCta />
		</main>
	)
}
