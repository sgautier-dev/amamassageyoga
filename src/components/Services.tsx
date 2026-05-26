import Image from "next/image"
import Link from "next/link"

import Reveal from "@/components/reveal"
import bgOilImg from "@/images/huilecoco.jpg"

const services = [
	{
		name: "Massages ayurvédiques du corps",
		description: "Le soin complet, profond et rééquilibrant, à l’huile chaude.",
		accent: "bg-ama-yellow",
		hash: "massages-ayurvediques",
	},
	{
		name: "Accompagnement féminin",
		description: "Un espace de douceur et de soutien.",
		accent: "bg-ama-pink",
		hash: "accompagnement-feminin",
	},
	{
		name: "Soins ciblés",
		description:
			"Relâcher les tensions localisées, soutenir la circulation et retrouver de la fluidité.",
		accent: "bg-ama-green",
		hash: "soins-cibles",
	},
	{
		name: "Yoga doux — Yin yoga",
		description: "Ralentir, respirer et se reconnecter.",
		accent: "bg-ama-purple",
		hash: "yoga-doux",
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
						Des approches adaptées à vos besoins, pour relâcher les tensions et
						retrouver de la fluidité.
					</p>
				</Reveal>

				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						{services.map((service, index) => (
							<Reveal key={service.name} delay={cardDelays[index]}>
								<Link
									href={{
										pathname: "/soins-et-tarifs",
										hash: service.hash,
									}}
									className="group block h-full rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ama-purple/40 focus-visible:ring-offset-4"
								>
									<article className="relative h-full rounded-3xl border border-ama-purple/10 bg-white/85 p-8 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-ama-purple/20 group-hover:bg-white/95 group-hover:shadow-md">
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
											Découvrir le soin →
										</p>
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
