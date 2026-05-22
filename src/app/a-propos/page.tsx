import Link from "next/link"
import Image from "next/image"

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

					<p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
						Une pratique construite autour de la présence, de l’écoute du corps
						et de la précision du geste.
					</p>
				</Reveal>
			</section>

			<section className="px-6 pb-24 sm:pb-32 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-x-16">
						<Reveal className="max-w-2xl">
							<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
								Marie
							</p>

							<h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
								Un chemin entre mouvement, soin et écoute
							</h2>

							<div className="mt-8 space-y-6 text-base leading-8 text-muted sm:text-lg">
								<p>
									Je suis Marie, praticienne en massages traditionnels et yoga
									doux. Mon lien au toucher s’est construit naturellement, dans
									une attention au corps, au rythme et à ce qui se dépose au fil
									d’une séance.
								</p>

								<p>
									Avant de me consacrer pleinement au soin, j’ai pratiqué la
									voile à haut niveau. Cette expérience m’a appris la précision,
									l’écoute fine des sensations, l’adaptation permanente et le
									respect du mouvement naturel.
								</p>

								<p>
									Ces repères sont aujourd’hui au cœur de ma pratique :
									accueillir ce qui est là, ajuster le geste, créer un espace où
									le corps peut relâcher sans forcer.
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
								<div className="h-1.5 w-14 rounded-full bg-ama-green" />

								<p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
									Formation
								</p>

								<h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
									Des traditions étudiées sur le long terme
								</h2>
							</div>

							<div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
								<p>
									Je me suis formée en France, en Thaïlande, à La Réunion et en
									Inde, auprès d’enseignants et de praticiens issus de
									différentes traditions du massage et du soin.
								</p>

								<p>
									Mon approche est aujourd’hui orientée vers l’ayurvéda, que je
									continue d’étudier dans une recherche de justesse, de
									profondeur et de simplicité.
								</p>

								<p>
									Chaque séance est pensée comme un espace d’écoute, où la
									technique reste au service de la présence et de l’adaptation à
									la personne.
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
									Mon parcours m’a aussi amenée à développer une attention
									particulière à l’accompagnement des personnes fragilisées,
									dans des moments où le toucher demande encore plus de
									délicatesse, de respect et de présence.
								</p>

								<p>
									Cette sensibilité nourrit ma manière de pratiquer : prendre le
									temps, écouter les limites, accompagner sans imposer, et
									laisser au corps la possibilité de retrouver son propre
									rythme.
								</p>
							</div>

							<div>
								<div className="h-1.5 w-14 rounded-full bg-ama-blue" />

								<p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
									Présence
								</p>

								<h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
									Un soin comme un espace de confiance
								</h2>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="px-6 pb-24 sm:pb-32 lg:px-8">
				<Reveal className="mx-auto max-w-4xl rounded-3xl bg-ama-purple px-6 py-12 text-center text-white shadow-sm sm:px-10">
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-white/75">
						Prendre rendez-vous
					</p>

					<h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
						Envie d’un temps pour vous ?
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
						Le plus simple est de me contacter directement pour choisir le soin
						le plus adapté à votre besoin du moment.
					</p>

					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Link
							href="tel:0610755048"
							className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ama-purple shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ama-yellow hover:shadow-md"
						>
							Appeler maintenant
						</Link>

						<Link
							href="/soins-et-tarifs"
							className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
						>
							Voir les soins & tarifs
						</Link>
					</div>
				</Reveal>
			</section>
		</main>
	)
}
