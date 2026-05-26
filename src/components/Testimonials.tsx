import Reveal from "@/components/reveal"

const testimonials = [
	{
		quote: "Un pur moment de lâcher-prise.",
		author: "Aziliz",
		accent: "bg-ama-yellow",
		featured: false,
	},
	{
		quote: "Je ne pensais pas que cela me ferait autant de bien.",
		author: "Isabelle",
		accent: "bg-ama-pink",
		featured: false,
	},
	{
		quote: "Un des meilleurs massages de ma vie.",
		author: "Sébastien",
		accent: "bg-ama-green",
		featured: true,
	},
	{
		quote: "Les effets durent dans le temps.",
		author: "Michel",
		accent: "bg-ama-blue",
		featured: false,
	},
	{
		quote: "Mes douleurs se sont atténuées.",
		author: "Sandra",
		accent: "bg-ama-purple",
		featured: false,
	},
]

const cardDelays = ["none", "sm", "md", "lg", "none"] as const

export default function Testimonials() {
	return (
		<section
			id="avis-clients"
			aria-labelledby="testimonials-heading"
			className="relative overflow-hidden py-20 sm:py-28"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<Reveal className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
						Témoignages
					</p>

					<h2
						id="testimonials-heading"
						className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
					>
						Avis clients
					</h2>
				</Reveal>

				<div className="mx-auto mt-14 flow-root max-w-5xl sm:mt-16">
					<div className="-mt-6 sm:-mx-3 sm:columns-2 sm:text-[0] lg:columns-3">
						{testimonials.map((testimonial, index) => (
							<Reveal
								key={testimonial.author + testimonial.quote}
								delay={cardDelays[index]}
								className={`pt-6 sm:inline-block sm:w-full sm:px-3 ${
									testimonial.featured ? "lg:break-before-column" : ""
								}`}
							>
								<figure
									className={`rounded-3xl border border-ama-purple/10 bg-white/85 shadow-sm ${
										testimonial.featured ? "p-8 sm:p-10" : "p-8"
									}`}
								>
									<div
										className={`h-1.5 w-14 rounded-full ${testimonial.accent}`}
									/>

									<blockquote
										className={`mt-6 text-foreground italic ${
											testimonial.featured
												? "text-xl leading-9"
												: "text-lg leading-8"
										}`}
									>
										<p>“{testimonial.quote}”</p>
									</blockquote>

									<figcaption className="mt-6 text-sm leading-6">
										<span
											className={
												testimonial.featured
													? "font-semibold text-ama-purple"
													: "font-semibold text-foreground"
											}
										>
											{testimonial.author}
										</span>
									</figcaption>
								</figure>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}