import Image from "next/image"

import featuredImg from "@/images/featured.jpg"

const benefits = [
	"Relâcher les tensions accumulées",
	"Apaiser le système nerveux",
	"Retrouver énergie et clarté",
]

const testimonials = [
	{
		quote: "Les effets durent dans le temps.",
		author: "Camille",
	},
	{
		quote: "Mes douleurs se sont atténuées.",
		author: "Julie",
	},
]

export default function FeaturedService() {
	return (
		<section
			id="soins"
			aria-labelledby="featured-heading"
			className="relative py-24 sm:py-32"
		>
			<div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
				<div className="px-6 lg:w-1/2 lg:px-8 xl:px-0">
					<div className="relative mx-auto h-80 max-w-xl overflow-hidden rounded-3xl sm:h-96 lg:mx-0 lg:mt-24 lg:h-130 lg:max-w-none">
						<Image
							src={featuredImg}
							alt="Soin de champissage AMA Massage et Yoga"
							className="h-full w-full object-cover object-center"
							priority={false}
						/>
					</div>
				</div>

				<div className="px-6 lg:contents">
					<div className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-24 xl:w-1/2">
						<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
							Massage assis
						</p>

						<h2
							id="featured-heading"
							className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
						>
							Champissage
						</h2>

						<p className="mt-4 text-base font-medium tracking-wide text-ama-green">
							Dos · épaules · nuque · crâne
						</p>

						<p className="mt-6 text-lg leading-8 text-muted">
							Issu de la tradition indienne, le Champissage est un massage
							précis, enveloppant et profondément relaxant.
						</p>

						<div className="mt-8 max-w-xl text-base leading-8 text-muted lg:max-w-none">
							<p>
								Pratiqué habillé, sans huile, il s’intègre facilement dans tous
								les environnements.
							</p>

							<p className="mt-6">
								Ajusté selon votre disponibilité, de 15 à 45 minutes, il offre
								une pause accessible et régénérante au cœur de la journée.
							</p>

							<ul role="list" className="mt-8 space-y-4">
								{benefits.map((benefit) => (
									<li key={benefit} className="flex gap-x-3">
										<span
											aria-hidden="true"
											className="mt-2 h-2 w-2 flex-none rounded-full bg-ama-green"
										/>
										<span className="text-base leading-7 text-foreground">
											{benefit}
										</span>
									</li>
								))}
							</ul>

							<p className="mt-8">
								Idéal en entreprise, lors d’événements ou pour s’offrir une
								pause dans la journée.
							</p>

							<div className="mt-10 space-y-6">
								{testimonials.map((testimonial) => (
									<figure
										key={testimonial.author + testimonial.quote}
										className="border-l-2 border-ama-green/40 pl-6"
									>
										<blockquote className="text-lg leading-8 text-foreground italic">
											<p>“{testimonial.quote}”</p>
										</blockquote>

										<figcaption className="mt-4 text-sm leading-6">
											<span className="font-semibold text-ama-purple">
												{testimonial.author}
											</span>
										</figcaption>
									</figure>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
