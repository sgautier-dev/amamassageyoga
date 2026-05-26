import Reveal from "@/components/reveal"

const testimonials = [
	{
		quote: "Un pur moment de lâcher prise.",
		author: "Camille",
	},
	{
		quote: "Je ne pensais pas que cela me ferait autant de bien.",
		author: "Julie",
	},
	{
		quote: "Un des meilleurs massages de ma vie.",
		author: "Sarah",
	},
]

const cardDelays = ["none", "sm", "md"] as const

export default function Testimonials() {
	return (
		<section
			id="avis-clients"
			aria-labelledby="testimonials-heading"
			className="relative overflow-hidden py-24 sm:py-32"
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

				<div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 sm:mt-20 lg:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<Reveal
							key={testimonial.author + testimonial.quote}
							delay={cardDelays[index]}
							className="border-l-2 border-ama-pink/50 pl-6"
						>
							<blockquote className="text-lg leading-8 text-foreground italic">
								<p>“{testimonial.quote}”</p>
							</blockquote>

							<figcaption className="mt-6 text-sm leading-6">
								<span className="font-semibold text-foreground">
									{testimonial.author}
								</span>
							</figcaption>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	)
}
