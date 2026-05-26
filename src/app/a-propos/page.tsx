import Image from "next/image"

import BookingCta from "@/components/booking-cta"
import Reveal from "@/components/reveal"
import aboutMainImg from "@/images/about-main.jpg"

export const metadata = {
	title: "À propos",
	description:
		"Découvrez l’approche de Marie, praticienne en massages traditionnels, soins ayurvédiques et yoga doux à Parentis-en-Born.",
}

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
							ressentent le besoin de ralentir, relâcher les tensions et se
							reconnecter à leur corps.
						</p>

						<p>
							Chaque séance est une invitation à se déposer, à revenir aux
							sensations et à retrouver un espace de calme et de présence.
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
									Le massage est entré tôt dans ma vie, d’abord naturellement au
									sein de ma fratrie, puis dans le cadre de ma pratique de haut
									niveau en voile.
								</p>

								<p>
									Formée en France et à l’étranger — notamment en Thaïlande, à
									La Réunion et en Inde — j’ai progressivement construit une
									approche qui relie différentes traditions du corps et du soin.
								</p>

								<p>
									À La Réunion, j’ai également cofondé avec mon conjoint Maison
									Kailash, un espace dédié au bien-être et aux pratiques du
									corps, qui a profondément nourri ma vision de
									l’accompagnement.
								</p>

								<p>
									Au fil de ces expériences, ma pratique s’est affinée pour
									devenir à la fois intuitive, ancrée et profondément à
									l’écoute.
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
											alt="Marie dans son univers de soin"
											className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
									Une pratique qui continue de s’affiner
								</h2>
							</div>

							<div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
								<p>
									Je poursuis aujourd’hui cette exploration à travers l’étude de
									l’ayurvéda, en continuant à me former régulièrement aux
									pratiques du massage.
								</p>

								<p>
									Le massage ayurvédique constitue la base de mon travail,
									autour duquel s’articulent les différentes approches
									proposées.
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

								<p>Chaque séance est unique.</p>

								<p>
									Elle s’adapte à ce qui est là, dans l’instant, avec douceur et
									respect.
								</p>

								<p>
									C’est un espace où l’on peut relâcher, respirer, et simplement
									être.
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

							<div className="mt-8 space-y-6 text-base leading-8 text-muted sm:text-lg">
								<p>
									Je me forme également à l’accompagnement en soins palliatifs
									avec la fondation <strong>Vivir un buen morir</strong>, afin
									de soutenir les personnes en fin de vie, ainsi que leurs
									proches, à travers la présence et le toucher.
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

			<BookingCta
				title="Du corps au cœur, une invitation à revenir à soi."
			/>
		</main>
	)
}
