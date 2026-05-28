import Image, { type StaticImageData } from "next/image"

import Reveal from "@/components/reveal"
import BookingCta from "@/components/booking-cta"
import OpenDetailsFromHash from "@/components/openDetailsFromHash"
import massageAyurvediqueImg from "@/images/soins/massage-ayurvedique.png"
import massagePiedsBolKansuImg from "@/images/soins/massage-pieds-bol-kansu.png"
import soinsVisageMarmaliftImg from "@/images/soins/soins-visage-marmalift.png"
import champissageImg from "@/images/soins/champissage.jpg"
import massagePrenatalImg from "@/images/soins/massage-prenatal.jpg"
import yinYogaImg from "@/images/soins/yin-yoga.jpg"

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
	thumbnail?: StaticImageData
	thumbnailAlt?: string
}

type CareGroup = {
	title: string
	items: Care[]
}

const careGroups: CareGroup[] = [
	{
		title: "Soins du corps",
		items: [
			{
				id: "massages-ayurvediques",
				title: "Massage ayurvédique du corps",
				subtitle: "Abhyanga",
				accent: "bg-ama-yellow",
				thumbnail: massageAyurvediqueImg,
				thumbnailAlt: "Massage ayurvédique du corps",
				prices: [
					{ duration: "60 min", price: "70 €" },
					{ duration: "90 min", price: "100 €", featured: false },
					{ duration: "120 min", price: "130 €" },
				],
				description: [
					"Massage à l’huile chaude inspiré de la tradition ayurvédique, l’Abhyanga alterne mouvements enveloppants, pressions et rythmes plus profonds pour soutenir la circulation, détendre le corps et favoriser un rééquilibrage global.",
					"Le soin s’adapte à votre constitution et aux besoins du moment, dans une approche plus relaxante, tonique ou ciblée.",
				],
				benefitTitle: "Agit sur",
				benefits: [
					"tensions musculaires et nerveuses",
					"fatigue physique et mentale",
					"circulation sanguine et énergétique",
					"sommeil et récupération",
					"sensation d’ancrage et de vitalité",
				],
				duration: "60 à 120 min",
				location: "Cabinet · domicile",
			},
			{
				id: "massage-drainant",
				title: "Massage drainant",
				accent: "bg-ama-yellow",
				prices: [
					{ duration: "75 min", price: "80 €" },
					{ duration: "90 min", price: "100 €" },
				],
				description: [
					"Un soin doux et rythmé qui stimule la circulation lymphatique et favorise l’élimination des toxines.",
					"La version longue s’accompagne d’un massage du visage aux guashas en quartz rose, pour détendre les traits et raviver naturellement l’éclat du visage.",
				],
				benefitTitle: "Favorise",
				benefits: [
					"la circulation et le drainage",
					"le désengorgement des tissus",
					"le soutien des défenses naturelles",
					"une meilleure vitalité globale",
				],
				duration: "1h15 ou 1h30",
				location: "Cabinet · domicile",
			},
			{
				id: "accompagnement-feminin",
				title: "Massage prénatal",
				accent: "bg-ama-pink",
				thumbnail: massagePrenatalImg,
				thumbnailAlt: "Massage prénatal",
				prices: [
					{ duration: "75 min", price: "90 €" },
					{ duration: "90 min", price: "110 €" },
				],
				description: [
					"Massage spécialement conçu pour accompagner la grossesse, ce soin enveloppant soutient les transformations physiques et émotionnelles de la future maman avec douceur et attention.",
					"Réalisé avec des postures adaptées et un toucher profondément réconfortant, il invite à relâcher les inconforts liés à la grossesse tout en soutenant le lien avec le bébé.",
					"Le massage prénatal est proposé à partir du 4ᵉ mois de grossesse.",
				],
				benefitTitle: "Apporte",
				benefits: [
					"détente physique et émotionnelle",
					"soulagement des tensions du dos, du bassin et des jambes",
					"circulation sanguine et lymphatique",
					"sommeil et récupération",
					"sensation de légèreté et de confort corporel",
					"connexion au corps et au bébé",
				],
				duration: "75 à 90 min",
				location: "Cabinet · domicile",
			},
		],
	},
	{
		title: "Soins spécifiques",
		items: [
			{
				id: "champissage",
				title: "Champissage — Massage indien de la tête",
				subtitle: "Dos · épaules · nuque · crâne · visage",
				accent: "bg-ama-pink",
				thumbnail: champissageImg,
				thumbnailAlt: "Massage assis Champissage",
				prices: [
					{ duration: "30 min", price: "40 €" },
					{ duration: "45 min", price: "50 €" },
				],
				description: [
					"Issu de la tradition ayurvédique, le Champissage est un massage assis, précis et enveloppant, qui agit directement sur les zones où le stress s’accumule.",
					"Pratiqué habillé et sans huile, il s’adapte facilement à différents environnements : cabinet, entreprise, événement ou pause dans la journée.",
					"Accessible à tous — enfants, adolescents, adultes et seniors — il est proposé sans contre-indication.",
				],
				benefitTitle: "Favorise",
				benefits: [
					"détente du haut du corps et de la nuque",
					"diminution du stress et de la fatigue nerveuse",
					"clarté mentale et concentration",
					"sommeil et récupération",
					"circulation au niveau du cuir chevelu",
					"sensation d’énergie et de légèreté",
				],
				duration: "15 à 45 min",
				location: "Cabinet · entreprise · événements",
				note: "Formats courts (15–20 min) réservés aux interventions en entreprise et événements.",
			},
			{
				id: "massage-crane-huile",
				title: "Shiroabhyanga",
				subtitle: "Massage ayurvédique du crâne à l’huile",
				accent: "bg-ama-green",
				prices: [{ duration: "45 min", price: "50 €" }],
				description: [
					"Pratiqué assis et à l’huile chaude, le Shiroabhyanga est un massage ayurvédique du haut du corps qui cible le dos, les épaules, les bras, la nuque, le crâne et le visage dans une approche profondément enveloppante et apaisante.",
					"Ce soin aide à délier les tensions accumulées, calmer l’agitation mentale et favoriser une profonde sensation de détente tout en prenant soin du cuir chevelu et de la chevelure.",
				],
				benefitTitle: "Effets",
				benefits: [
					"détente du haut du corps et de la nuque",
					"diminution du stress et de la fatigue nerveuse",
					"clarté mentale et concentration",
					"sommeil et récupération",
					"circulation au niveau du cuir chevelu",
					"vitalité et qualité de la chevelure",
				],
				duration: "35 à 40 min",
				location: "Cabinet · domicile",
			},
			{
				id: "soins-visage",
				title: "Marmalift",
				subtitle: "Soin visage ayurvédique",
				accent: "bg-ama-green",
				thumbnail: soinsVisageMarmaliftImg,
				thumbnailAlt: "Soin du visage Marmalift",
				prices: [{ duration: "60 min", price: "70 €" }],
				description: [
					"Un soin liftant naturel qui associe techniques manuelles et stimulation des points marmas, points d’acupressure issus de l’Ayurveda.",
					"Il aide à détendre les traits, tonifier les muscles du visage, stimuler la circulation et raviver naturellement l’éclat et la vitalité de la peau.",
					"Le soin peut également être pratiqué avec le Kansa Wand, un outil ayurvédique traditionnel en alliage de cuivre et bois, utilisé pour détendre les tensions du visage et illuminer le teint.",
					"Une cure de 3 à 5 séances permet de prolonger et d’ancrer les effets dans le temps.",
				],
				benefitTitle: "Bienfaits",
				benefits: [
					"détente des tensions du visage et de la mâchoire",
					"éclat et tonicité de la peau",
					"circulation sanguine et drainage du visage",
					"relaxation profonde et apaisement mental",
					"stimulation des points marmas",
					"sensation de fraîcheur et de légèreté",
				],
				duration: "60 min",
			},
			{
				id: "chi-nei-tsang",
				title: "Chi Nei Tsang",
				subtitle: "Massage abdominal taoïste",
				accent: "bg-ama-green",
				prices: [{ duration: "1h45", price: "115 €" }],
				description: [
					"Le Chi Nei Tsang est un massage abdominal issu de la tradition taoïste chinoise, qui agit en profondeur sur la zone du ventre et les organes internes à travers un toucher à la fois doux, conscient et profond.",
					"Considéré comme notre “deuxième cerveau”, le ventre porte les traces du stress, des tensions et des émotions accumulées. Ce soin accompagne progressivement leur libération tout en soutenant la digestion, la circulation énergétique et la connexion au corps.",
					"Pratiqué habillé, sur table ou au sol, le soin peut être complété par l’utilisation de pochons chauds aux herbes pour prolonger la détente et l’ancrage.",
				],
				benefitTitle: "Agit sur",
				benefits: [
					"tensions abdominales et viscérales",
					"stress et surcharge émotionnelle",
					"digestion et inconforts intestinaux",
					"fatigue et manque de vitalité",
					"respiration et relâchement profond",
					"sensation d’ancrage et de recentrage",
				],
				duration: "1h45",
				location: "Cabinet · domicile",
			},
			{
				id: "massage-pieds-bol-kansu",
				title: "Massage des pieds",
				subtitle: "Bol Kansu Vatki",
				accent: "bg-ama-blue",
				thumbnail: massagePiedsBolKansuImg,
				thumbnailAlt: "Massage des pieds au bol Kansu Vatki",
				prices: [{ duration: "45 min", price: "Sur demande" }],
				description: [
					"Ce massage des pieds au bol Kansu Vatki associe réflexologie plantaire, stimulation des points marmas et utilisation d’un petit bol composé de cuivre, zinc et étain.",
					"Pratiqué au ghee ou à l’huile de coco, ce soin aide à apaiser le système nerveux, relancer la circulation et rééquilibrer l’énergie du corps tout en procurant une profonde sensation d’ancrage et de détente.",
					"Le contact du bol sur les pieds diffuse une chaleur douce et enveloppante qui favorise le relâchement du corps et du mental.",
				],
				benefitTitle: "Favorise",
				benefits: [
					"récupération physique et nerveuse",
					"apaisement du stress et de l’agitation mentale",
					"circulation sanguine et lymphatique",
					"sommeil et détente profonde",
					"sensation d’ancrage et de stabilité",
					"légèreté et confort des jambes et des pieds",
				],
				duration: "45 min",
				location: "Cabinet · domicile",
			},
			{
				id: "soins-cibles",
				title: "Soins ayurvédiques ciblés",
				subtitle: "Mains · ventre · pieds",
				accent: "bg-ama-blue",
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
		],
	},
	{
		title: "Yoga",
		items: [
			{
				id: "yoga-doux",
				title: "Yin yoga & yoga doux",
				accent: "bg-ama-purple",
				thumbnail: yinYogaImg,
				thumbnailAlt: "Yin yoga et yoga doux",
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
				benefits: [
					"souplesse et mobilité",
					"apaisement mental",
					"écoute de soi",
				],
				duration: "1h15 à 1h30",
				location: "Salle · extérieur",
			},
			{
				id: "yoga-hormonal",
				title: "Yoga du système hormonal",
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
		],
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

					<div className="mt-16 space-y-16">
						{careGroups.map((group, groupIndex) => (
							<div key={group.title} className="space-y-5">
								<Reveal>
									<div className="relative">
										<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
											{group.title}
										</p>
									</div>
								</Reveal>

								<div className="space-y-5">
									{group.items.map((care, index) => (
										<Reveal
											key={care.id}
											delay={index % 2 === 0 ? "none" : "sm"}
										>
											<details
												id={care.id}
												className="group scroll-mt-36 rounded-3xl border border-ama-purple/10 bg-white/85 p-6 shadow-sm open:bg-white sm:p-8"
											>
												<summary className="flex cursor-pointer list-none items-start justify-between gap-5">
													<div className="min-w-0 flex-1 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-6">
														<div className="min-w-0">
															<div className="flex items-start gap-4">
																{care.thumbnail ? (
																	<div className="shrink-0 overflow-hidden rounded-full bg-background ring-1 ring-ama-purple/10">
																		<Image
																			src={care.thumbnail}
																			alt={care.thumbnailAlt ?? care.title}
																			width={56}
																			height={56}
																			className="size-14 object-cover"
																		/>
																	</div>
																) : null}

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
															</div>
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

					<div className="mx-auto mt-6 max-w-2xl space-y-3 text-base leading-7 text-muted sm:text-lg">
						<p>
							Les durées indiquées correspondent au temps de soin. Un temps
							d’accueil et d’intégration est toujours prévu pour accompagner
							l’expérience.
						</p>

						<p className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ama-purple shadow-sm ring-1 ring-ama-purple/10">
							🎁 Bons cadeaux disponibles sur demande.
						</p>
					</div>
				</Reveal>
			</section>

			<BookingCta />
		</main>
	)
}
