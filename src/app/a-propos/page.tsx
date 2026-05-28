import Image from "next/image"

import BookingCta from "@/components/booking-cta"
import Reveal from "@/components/reveal"
import aboutMainImg from "@/images/marie-a-propos.jpg"

export const metadata = {
	title: "À propos",
	description:
		"Découvrez l’approche de Marie, praticienne en massages traditionnels, soins ayurvédiques et yoga doux à Parentis-en-Born.",
}

const massageTrainings = [
	"Massages ayurvédiques — Maison Kailash, La Réunion · London Centre of Indian Champissage International · Tiruvannamalai",
	"Massages traditionnels thaïlandais — Loi Kroh Massage School & Sunshine Massage School, Chiang Mai",
	"Thaï Bodywork — Kim Lee",
	"Massage drainant — L’Or de vos mains",
]

const yogaTrainings = [
	"Vinyasa Flow & Devi Yoga — Initiatik Yoga / Sandra Grange",
	"Yin Yoga & Danses du Dragon — Cécile Roubaud & Valentina Duna",
	"Yoga du système hormonal — Séverine Pannier",
	"Hatha Yoga — Jean-Pierre Gaucher",
]

export default function AProposPage() {
	return (
		<main className="relative overflow-hidden">
			<section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
				<Image
					src="/graphics/ama-circle-blue.png"
					alt=""
					aria-hidden="true"
					width={260}
					height={260}
					className="pointer-events-none absolute -right-20 top-16 -z-10 hidden w-56 select-none opacity-40 sm:block lg:right-[10%] float-soft-slow"
				/>

				<Reveal className="mx-auto max-w-3xl text-center">
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
						À propos
					</p>

					<h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl">
						Une approche sensible du toucher
					</h1>

					<div className="mt-6 space-y-4 text-lg leading-8 text-muted sm:text-xl">
						<p>
							À travers le massage et le yoga, j’accompagne celles et ceux qui
							ressentent le besoin de ralentir, de s’alléger, et de se
							reconnecter à leur corps.
						</p>

						<p>
							Le soin est un dialogue qui s’ajuste au rythme de chacun, dans une
							approche douce, attentive et vivante.
						</p>
					</div>
				</Reveal>
			</section>

			<section className="px-6 pb-24 sm:pb-32 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-x-16">
						<Reveal className="max-w-2xl">
							<div className="h-1.5 w-14 rounded-full bg-ama-yellow" />

							<h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
								Un chemin entre tradition et écoute du corps
							</h2>

							<div className="mt-8 space-y-6 text-base leading-8 text-muted sm:text-lg">
								<p>
									Le massage est entré tôt dans ma vie, tout naturellement,
									auprès de ma fratrie puis durant ma pratique sportive de haut
									niveau en voile. Formée en France et à l’étranger — notamment
									en Thaïlande, à La Réunion et en Inde — j’ai progressivement
									construit une approche qui relie différentes traditions du
									corps et du soin.
								</p>

								<p>
									Au fil de ces expériences, ma pratique s’est affinée pour
									devenir à la fois intuitive, ancrée et consciente.
								</p>

								<p>
									Le massage ayurvédique constitue aujourd’hui la base de mon
									travail, autour duquel s’articulent les différentes approches
									proposées.
								</p>
							</div>
						</Reveal>

						<Reveal delay="sm" className="lg:pl-4">
							<div className="relative mx-auto max-w-xl lg:mx-0">
								<Image
									src="/graphics/ama-star-pink.png"
									alt=""
									aria-hidden="true"
									width={160}
									height={160}
									className="pointer-events-none absolute -right-8 -top-8 z-0 hidden w-24 select-none opacity-50 sm:block lg:w-28"
								/>

								<div className="group relative z-10 overflow-hidden rounded-3xl shadow-sm">
									<div className="aspect-4/5">
										<Image
											src={aboutMainImg}
											alt="Marie, praticienne AMA Massage et Yoga"
											className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
											priority
										/>
									</div>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="px-6 pb-24 sm:pb-32 lg:px-8">
				<div className="mx-auto max-w-5xl">
					<Reveal className="rounded-3xl border border-ama-purple/10 bg-white/85 p-8 shadow-sm sm:p-10 lg:p-12">
						<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
							<div>
								<div className="h-1.5 w-14 rounded-full bg-ama-pink" />

								<h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
									Le yoga comme chemin de présence
								</h2>
							</div>

							<div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
								<p>
									Le corps et le mouvement accompagnent ce parcours depuis
									l’adolescence à travers le sport, la danse, le massage et les
									pratiques de plein air.
								</p>

								<p>
									Le yoga et les pratiques méditatives ont progressivement pris
									une place essentielle sur ce chemin, comme des supports
									d’écoute, d’équilibre et de transformation.
								</p>

								<p>
									Depuis plus de 15 ans, je cultive différentes approches du
									yoga — Hatha, Vinyasa, Yin Yoga, yoga de la femme — auxquelles
									je me suis formée, ainsi que des enseignements autour de la
									relation à soi, du souffle et de la présence au corps.
								</p>

								<p>
									Aujourd’hui, ces expériences nourrissent profondément ma
									manière d’être, d’accompagner le soin et d’enseigner, dans une
									approche sensible et profondément humaine.
								</p>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="px-6 pb-24 sm:pb-32 lg:px-8">
				<div className="mx-auto max-w-5xl">
					<Reveal className="rounded-3xl border border-ama-purple/10 bg-background p-8 sm:p-10 lg:p-12">
						<div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
							<div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
								<p>
									Au-delà des techniques, j’accorde une attention particulière à
									la qualité de présence, au rythme et à l’écoute du corps.
								</p>

								<p>
									Le soin s’adapte à ce qui est là, dans l’instant, avec douceur
									et respect. C’est un lieu où l’on peut souffler, ressentir et
									simplement être.
								</p>
							</div>

							<div>
								<div className="h-1.5 w-14 rounded-full bg-ama-green" />

								<h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
									Une présence au cœur de chaque séance
								</h2>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="px-6 pb-24 sm:pb-32 lg:px-8">
				<div className="mx-auto max-w-5xl">
					<Reveal className="relative isolate overflow-hidden rounded-3xl border border-ama-purple/10 bg-white/85 p-8 shadow-sm sm:p-10 lg:p-12">
						<Image
							src="/graphics/ama-circle-green.png"
							alt=""
							aria-hidden="true"
							width={220}
							height={220}
							className="pointer-events-none absolute -right-16 -bottom-16 -z-10 hidden w-48 select-none opacity-35 sm:block"
						/>

						<div className="max-w-3xl">
							<div className="h-1.5 w-14 rounded-full bg-ama-blue" />

							<h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
								Une exploration qui se poursuit
							</h2>

							<div className="mt-8 space-y-6 text-base leading-8 text-muted sm:text-lg">
								<p>
									Mon cheminement continue aujourd’hui à travers l’étude de
									l’ayurvéda, de l’astrologie comme outil de connaissance de
									soi, ainsi que différentes approches autour du soin et de
									l’accompagnement.
								</p>

								<p>
									En 2026, l’apprentissage se poursuit auprès de la fondation
									espagnole <strong>Vivir un buen morir</strong>, dédiée à
									l’accompagnement en soins palliatifs, afin d’explorer comment
									le massage, la méditation, le yoga et l’hygiène de vie peuvent
									soutenir les personnes en fin de vie, leurs proches, les
									professionnels et les aidants.
								</p>

								<p>
									Ma soif d’approfondissement est nourrie par des formations
									régulières en massages et dans des pratiques corporelles.
								</p>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="px-6 pb-24 sm:pb-32 lg:px-8">
				<Reveal className="mx-auto max-w-4xl text-center">
					<div className="mx-auto h-1.5 w-14 rounded-full bg-ama-purple" />

					<p className="mt-8 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
						Du corps au cœur, une invitation à revenir à soi.
					</p>
				</Reveal>
			</section>

			<section className="px-6 pb-24 sm:pb-32 lg:px-8">
				<div className="mx-auto max-w-5xl">
					<Reveal className="rounded-3xl border border-ama-purple/10 bg-white/85 p-8 shadow-sm sm:p-10 lg:p-12">
						<div className="mx-auto max-w-2xl text-center">
							<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
								Formations principales
							</p>

							<h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
								Des pratiques nourries par la formation continue
							</h2>
						</div>

						<div className="mt-10 grid gap-8 lg:grid-cols-2">
							<div className="rounded-2xl bg-background p-6">
								<div className="h-1.5 w-14 rounded-full bg-ama-yellow" />

								<h3 className="mt-5 text-xl font-semibold text-foreground">
									Massage
								</h3>

								<ul className="mt-5 space-y-4 text-sm leading-6 text-muted">
									{massageTrainings.map((training) => (
										<li key={training} className="flex gap-x-3">
											<span
												aria-hidden="true"
												className="mt-2 h-2 w-2 flex-none rounded-full bg-ama-yellow"
											/>
											<span>{training}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="rounded-2xl bg-background p-6">
								<div className="h-1.5 w-14 rounded-full bg-ama-purple" />

								<h3 className="mt-5 text-xl font-semibold text-foreground">
									Yoga
								</h3>

								<ul className="mt-5 space-y-4 text-sm leading-6 text-muted">
									{yogaTrainings.map((training) => (
										<li key={training} className="flex gap-x-3">
											<span
												aria-hidden="true"
												className="mt-2 h-2 w-2 flex-none rounded-full bg-ama-purple"
											/>
											<span>{training}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<BookingCta title="S’offrir un temps pour revenir à soi" />
		</main>
	)
}
