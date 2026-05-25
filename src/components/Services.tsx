import Image from "next/image"
import Link from "next/link"

import Reveal from "@/components/reveal"
import bgOilImg from "@/images/huilecoco.jpg"

const services = [
	{
		name: "Massages ayurvédiques du corps",
		description: "Le soin complet, profond et rééquilibrant, à l’huile chaude.",
		accent: "bg-ama-yellow",
		glow: "bg-linear-to-br from-ama-yellow to-ama-pink",
		href: "/soins-et-tarifs#massages-ayurvediques",
	},
	{
		name: "Accompagnement féminin",
		description: "Un espace de douceur et de soutien.",
		accent: "bg-ama-pink",
		glow: "bg-linear-to-br from-ama-yellow to-ama-pink",
		href: "/soins-et-tarifs#accompagnement-feminin",
	},
	{
		name: "Soins ciblés",
		description:
			"Relâcher les tensions localisées, soutenir la circulation et retrouver de la fluidité.",
		accent: "bg-ama-green",
		glow: "bg-linear-to-br from-ama-green to-ama-blue",
		href: "/soins-et-tarifs#soins-cibles",
	},
	{
		name: "Yoga doux — Yin yoga",
		description: "Ralentir, respirer et se reconnecter.",
		accent: "bg-ama-purple",
		glow: "bg-linear-to-br from-ama-blue to-ama-purple",
		href: "/soins-et-tarifs#yoga-doux",
	},
]

const cardDelays = ["none", "sm", "md", "lg"] as const

export default function Services() {
	return (
		<section
			id="soins"
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
				<Reveal className="mx-auto max-w-2xl text-center">
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
				</Reveal>

				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						{services.map((service, index) => (
							<Reveal key={service.name} delay={cardDelays[index]}>
								<Link
									href={service.href}
									className="group block h-full rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ama-purple/40 focus-visible:ring-offset-4"
								>
									<article className="relative isolate h-full overflow-hidden rounded-3xl border border-ama-purple/10 bg-white/85 p-8 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-ama-purple/20 group-hover:shadow-md">
										<div
											aria-hidden="true"
											className={`pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-80 ${service.glow}`}
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

											<p className="mt-6 text-sm font-semibold text-ama-purple transition-colors group-hover:text-ama-pink">
												Voir les tarifs →
											</p>
										</div>
									</article>
								</Link>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
