import Image from "next/image"

import aboutMainImg from "@/images/about-main.jpg"

export default function About() {
	return (
		<section
			id="about"
			aria-labelledby="about-heading"
			className="overflow-hidden py-24 sm:py-32"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-x-16">
					<div className="max-w-2xl">
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
								Formée en Thaïlande, à La Réunion et en Inde, j’ai développé une
								pratique fondée sur la présence, la précision du geste et la
								qualité de l’écoute.
							</p>

							<p>
								Orientée vers l’approche ayurvédique, je continue d’étudier sur
								le long terme, dans une recherche de justesse, de profondeur et
								de simplicité.
							</p>

							<p>
								Chaque soin est un espace où l’on peut se déposer en confiance,
								retrouver son rythme et sa fluidité.
							</p>
						</div>
					</div>

					<div className="lg:pl-4">
						<div className="relative mx-auto max-w-xl overflow-hidden rounded-3xl shadow-sm lg:mx-0">
							<div className="aspect-4/5">
								<Image
									src={aboutMainImg}
									alt="Marie dans son univers de soin"
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
