import Image from "next/image"
import Link from "next/link"

import Reveal from "@/components/reveal"
import aboutTeaserImg from "@/images/about-teaser.jpg"

export default function About() {
	return (
		<section
			id="apropos"
			aria-labelledby="about-heading"
			className="overflow-hidden py-24 sm:py-32"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-x-16">
					<Reveal className="max-w-2xl">
						<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
							À propos
						</p>

						<h2
							id="about-heading"
							className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
						>
							Une approche sensible du toucher
						</h2>

						<p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
							Je suis Marie, praticienne en massages traditionnels et yoga doux.
						</p>

						<div className="mt-8 space-y-6 text-base leading-8 text-muted sm:text-lg">
							<p>
								Mon parcours entre mouvement, soin et traditions corporelles
								nourrit une pratique fondée sur la présence, la précision du
								geste et l’écoute du corps.
							</p>

							<p>
								Chaque séance est pensée comme un espace de confiance, pour
								laisser le corps relâcher, respirer et retrouver son propre
								rythme.
							</p>
						</div>

						<Link
							href="/a-propos"
							className="mt-8 inline-flex items-center justify-center rounded-full bg-ama-purple px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ama-pink hover:shadow-md"
						>
							Découvrir mon approche
						</Link>
					</Reveal>

					<Reveal delay="sm" className="lg:pl-4">
						<div className="relative mx-auto max-w-xl lg:mx-0">
							<Image
								src="/graphics/ama-circle-blue.png"
								alt=""
								aria-hidden="true"
								width={260}
								height={260}
								className="pointer-events-none absolute -top-10 -right-10 z-0 hidden w-40 select-none opacity-50 sm:block lg:w-52"
							/>

							<div className="group relative z-10 overflow-hidden rounded-3xl shadow-sm">
								<div className="aspect-4/5">
									<Image
										src={aboutTeaserImg}
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
	)
}
