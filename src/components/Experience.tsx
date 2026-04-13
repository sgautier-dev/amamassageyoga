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

export default function Experience() {
	return (
		<section
			id="experience"
			aria-labelledby="experience-heading"
			className="py-24 sm:py-32"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
						L’expérience AMA
					</p>

					<h2
						id="experience-heading"
						className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
					>
						Une parenthèse pour changer de rythme
					</h2>

					<p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
						Dans l’agitation du quotidien, s’offrir une pause devient essentiel.
						Ralentir, respirer, et laisser le corps retrouver son propre flow.
					</p>

					<p className="mt-6 text-base leading-8 text-muted sm:text-lg">
						Sous mes mains, les tensions se dénouent, la respiration
						s’approfondit, l’esprit s’ouvre au silence intérieur… Pour se
						laisser traverser, se déposer…
					</p>
				</div>

				<div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 sm:mt-20 lg:grid-cols-3">
					{testimonials.map((testimonial) => (
						<figure
							key={testimonial.author + testimonial.quote}
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
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
