import Image from "next/image"

import bgOilImg from "@/images/huilecoco.jpg"

const services = [
	{
		name: "Massages ayurvédiques du corps",
		description:
			"Des soins complets à l’huile chaude, profonds et enveloppants.",
		accent: "bg-ama-pink",
		glow: "bg-linear-to-br from-ama-yellow to-ama-pink",
	},
	{
		name: "Accompagnement féminin",
		description: "Un espace de douceur et de soutien.",
		accent: "bg-ama-green",
		glow: "bg-linear-to-br from-ama-yellow to-ama-green",
	},
	{
		name: "Soins ciblés",
		description:
			"Ventre, crâne, visage, dos, pieds, mains, drainant… Des approches spécifiques pour libérer les tensions, relancer la circulation et retrouver de la fluidité.",
		accent: "bg-ama-blue",
		glow: "bg-linear-to-br from-ama-green to-ama-blue",
	},
	{
		name: "Yoga doux – Yin yoga",
		description: "Une pratique lente et introspective, sur demande.",
		accent: "bg-ama-purple",
		glow: "bg-linear-to-br from-ama-blue to-ama-purple",
	},
]

export default function Services() {
	return (
		<section
			id="services"
			aria-labelledby="services-heading"
			className="relative overflow-hidden py-24 sm:py-32"
		>
			<div className="absolute inset-y-0 right-0 w-full">
				<div className="relative h-full w-full">
					<Image
						src={bgOilImg}
						alt=""
						fill
						sizes="(min-width: 1024px) 33vw, 0vw"
						className="object-cover opacity-20"
					/>
					<div className="absolute inset-0 bg-background/40" />
				</div>
			</div>

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
						Les soins
					</p>

					<h2
						id="services-heading"
						className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
					>
						Des soins ancrés dans les traditions ayurvédique et thaïlandaise
					</h2>

					<p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
						Des approches ajustées à vos besoins, pour relâcher les tensions,
						retrouver de la fluidité et revenir à l’essentiel.
					</p>
				</div>

				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						{services.map((service) => (
							<article
								key={service.name}
								className="relative isolate overflow-hidden rounded-3xl border border-ama-purple/10 bg-white/85 p-8 shadow-sm transition hover:border-ama-purple/20 hover:shadow-md"
							>
								<div
									aria-hidden="true"
									className={`pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full blur-3xl opacity-60 ${service.glow}`}
								/>

								<div className="relative z-10">
									<div
										className={`h-1.5 w-14 rounded-full ${service.accent}`}
									/>

									<h3 className="mt-6 text-xl font-semibold text-foreground">
										{service.name}
									</h3>

									<p className="mt-4 text-base leading-7 text-muted">
										{service.description}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
