import Link from "next/link"
import Image from "next/image"

import Reveal from "@/components/reveal"

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

type CareItem = {
	name: string
	prices: Price[]
	note?: string
}

type Category = {
	id: string
	label: string
	title: string
	description: string
	accent: string
	glow: string
	items: CareItem[]
}

const categories: Category[] = [
	{
		id: "champissage",
		label: "Massage assis",
		title: "Champissage",
		description:
			"Un massage assis issu de la tradition indienne, idéal pour relâcher rapidement les tensions du dos, des épaules, de la nuque et du crâne.",
		accent: "bg-ama-green",
		glow: "bg-linear-to-br from-ama-yellow to-ama-green",
		items: [
			{
				name: "Champissage",
				prices: [
					{ duration: "30 min", price: "40 €" },
					{ duration: "45 min", price: "50 €" },
				],
				note: "Formats courts de 15 à 20 min réservés aux interventions en entreprise et événements.",
			},
		],
	},
	{
		id: "massages-ayurvediques",
		label: "Soins du corps",
		title: "Massages ayurvédiques du corps",
		description:
			"Des soins complets à l’huile chaude, profonds et enveloppants, pensés pour relâcher les tensions et retrouver une sensation d’équilibre.",
		accent: "bg-ama-pink",
		glow: "bg-linear-to-br from-ama-yellow to-ama-pink",
		items: [
			{
				name: "Massage ayurvédique du corps",
				prices: [
					{ duration: "60 min", price: "70 €" },
					{ duration: "90 min", price: "100 €", featured: true },
					{ duration: "120 min", price: "120 €" },
				],
			},
			{
				name: "Massage du crâne à l’huile",
				prices: [{ duration: "45 min", price: "50 €" }],
			},
			{
				name: "Soins du visage",
				prices: [{ duration: "60 min", price: "70 €" }],
			},
		],
	},
	{
		id: "soins-cibles",
		label: "Approches spécifiques",
		title: "Soins ciblés",
		description:
			"Des soins plus localisés pour accompagner une zone précise du corps, soutenir la circulation ou libérer des tensions spécifiques.",
		accent: "bg-ama-blue",
		glow: "bg-linear-to-br from-ama-green to-ama-blue",
		items: [
			{
				name: "Massage drainant",
				prices: [
					{ duration: "75 min", price: "80 €" },
					{ duration: "90 min", price: "100 €" },
				],
			},
			{
				name: "Chi Nei Tsang — massage du ventre",
				prices: [{ duration: "1h45", price: "115 €" }],
			},
			{
				name: "Soins ciblés — mains · ventre · pieds",
				prices: [
					{ duration: "30 min", price: "40 €" },
					{ duration: "45 min", price: "50 €" },
				],
				note: "Peuvent être intégrés aux séances ou proposés de manière ciblée selon votre besoin.",
			},
		],
	},
	{
		id: "accompagnement-feminin",
		label: "Accompagnement féminin",
		title: "Massage prénatal",
		description:
			"Un soin doux et enveloppant, pensé pour accompagner le corps pendant la grossesse avec attention, écoute et sécurité.",
		accent: "bg-ama-green",
		glow: "bg-linear-to-br from-ama-yellow to-ama-green",
		items: [
			{
				name: "Massage prénatal",
				prices: [
					{ duration: "75 min", price: "90 €" },
					{ duration: "90 min", price: "110 €" },
				],
			},
		],
	},
	{
		id: "yoga-doux",
		label: "Yoga",
		title: "Yoga doux & Yin yoga",
		description:
			"Une pratique lente, introspective et accessible, proposée en séances individuelles ou collectives.",
		accent: "bg-ama-purple",
		glow: "bg-linear-to-br from-ama-blue to-ama-purple",
		items: [
			{
				name: "Séances individuelles ou collectives",
				prices: [{ duration: "Tarif", price: "Sur demande" }],
			},
		],
	},
	{
		id: "evenements",
		label: "Découverte & événements",
		title: "Pause détente — Champissage express",
		description:
			"Un format court et accessible, idéal pour les événements bien-être, marchés, journées spéciales, entreprises et temps de découverte.",
		accent: "bg-ama-yellow",
		glow: "bg-linear-to-br from-ama-yellow to-ama-pink",
		items: [
			{
				name: "Champissage express",
				prices: [
					{ duration: "15 min", price: "20 €" },
					{ duration: "20 min", price: "25 €" },
				],
				note: "Idéal pour événements bien-être, marchés et journées spéciales.",
			},
		],
	},
]

export default function SoinsEtTarifsPage() {
	return (
		<main className="relative overflow-hidden">
			<section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
				<Image
					src="/graphics/ama-star-yellow.png"
					alt=""
					aria-hidden="true"
					width={220}
					height={220}
					className="pointer-events-none absolute top-10 right-8 -z-10 hidden w-32 select-none opacity-50 sm:block lg:right-[14%] lg:w-40"
				/>

				<Image
					src="/graphics/ama-circle-green.png"
					alt=""
					aria-hidden="true"
					width={260}
					height={260}
					className="pointer-events-none absolute -left-24 bottom-10 -z-10 hidden w-56 select-none opacity-35 lg:block"
				/>

				<Reveal className="mx-auto max-w-3xl text-center">
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
						Soins & tarifs
					</p>

					<h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl">
						Choisir le temps qui vous est nécessaire
					</h1>

					<p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
						Chaque séance s’adapte à votre besoin du moment, dans une approche à
						l’écoute du corps.
					</p>

					<p className="mt-4 text-base leading-7 text-muted">
						Le massage ayurvédique du corps constitue la base des soins
						proposés, autour duquel s’articulent les différentes approches.
					</p>
				</Reveal>
			</section>

			<section
				aria-labelledby="tarifs-heading"
				className="px-6 pb-24 sm:pb-32 lg:px-8"
			>
				<div className="mx-auto max-w-7xl">
					<Reveal className="mx-auto max-w-2xl text-center">
						<h2
							id="tarifs-heading"
							className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
						>
							Les tarifs
						</h2>

						<p className="mt-6 text-lg leading-8 text-muted">
							Les durées indiquées permettent de choisir un format adapté à
							votre rythme, à votre disponibilité et à l’intention du soin.
						</p>
					</Reveal>

					<div className="mt-16 space-y-10">
						{categories.map((category, index) => (
							<Reveal key={category.id} delay={index % 2 === 0 ? "none" : "sm"}>
								<section
									id={category.id}
									aria-labelledby={`${category.id}-heading`}
									className="scroll-mt-28 rounded-3xl border border-ama-purple/10 bg-white/85 p-6 shadow-sm sm:p-8 lg:p-10"
								>
									<div className="grid gap-8 lg:grid-cols-[0.95fr_1.3fr] lg:gap-12">
										<div>
											<div
												className={`h-1.5 w-14 rounded-full ${category.accent}`}
											/>

											<p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
												{category.label}
											</p>

											<h3
												id={`${category.id}-heading`}
												className="mt-3 text-3xl font-semibold tracking-tight text-foreground"
											>
												{category.title}
											</h3>

											<p className="mt-5 text-base leading-7 text-muted">
												{category.description}
											</p>
										</div>

										<div className="space-y-5">
											{category.items.map((item) => (
												<div
													key={item.name}
													className="relative isolate overflow-hidden rounded-2xl border border-ama-purple/10 bg-background/80 p-5"
												>
													<div
														aria-hidden="true"
														className={`pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-45 blur-3xl ${category.glow}`}
													/>

													<div className="relative z-10">
														<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
															<h4 className="text-lg font-semibold text-foreground">
																{item.name}
															</h4>

															<div className="space-y-2 sm:min-w-40">
																{item.prices.map((price) => (
																	<div
																		key={`${item.name}-${price.duration}`}
																		className="flex items-center justify-between gap-6 rounded-full bg-white px-4 py-2 text-sm shadow-xs"
																	>
																		<span className="text-muted">
																			{price.duration}
																		</span>
																		<span className="font-semibold text-foreground">
																			{price.price}
																			{price.featured ? " ⭐" : ""}
																		</span>
																	</div>
																))}
															</div>
														</div>

														{item.note ? (
															<p className="mt-4 text-sm leading-6 text-muted">
																{item.note}
															</p>
														) : null}
													</div>
												</div>
											))}
										</div>
									</div>
								</section>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section
				id="informations-pratiques"
				aria-labelledby="informations-pratiques-heading"
				className="px-6 pb-24 sm:pb-32 lg:px-8"
			>
				<Reveal className="mx-auto max-w-4xl rounded-3xl bg-ama-purple px-6 py-12 text-center text-white shadow-sm sm:px-10">
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-white/75">
						Informations pratiques
					</p>

					<h2
						id="informations-pratiques-heading"
						className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
					>
						Une question ou envie de prendre rendez-vous ?
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
						Les séances se font sur rendez-vous. Pour choisir le soin le plus
						adapté, le plus simple est de me contacter directement.
					</p>

					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Link
							href="tel:0610755048"
							className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ama-purple shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ama-yellow hover:shadow-md"
						>
							Appeler maintenant
						</Link>

						<Link
							href="/#contact"
							className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
						>
							Voir le contact
						</Link>
					</div>
				</Reveal>
			</section>
		</main>
	)
}
