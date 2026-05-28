import Reveal from "@/components/reveal"

const testimonials = [
	{
		quote:
			"Ton massage m’a fait beaucoup de bien. Je suis ressortie détendue, plus sereine, et mes douleurs dans le bas du dos se sont atténuées. Tes mains sont chaudes, enveloppantes… merci encore.",
		author: "Sandra",
		accent: "bg-ama-yellow",
	},
	{
		quote:
			"Un vrai voyage… J’ai lâché prise dès les premiers instants. Je ne pensais pas que cela me ferait autant de bien. C’était exactement ce dont j’avais besoin.",
		author: "Clémence",
		accent: "bg-ama-pink",
	},
	{
		quote:
			"Ton soin ventral est exceptionnel. Je n’ai pas vu le temps passer et je me sens vraiment plus légère, presque joyeuse après ce massage. Merci mille fois.",
		author: "Isabelle",
		accent: "bg-ama-green",
	},
]

const cardDelays = ["none", "sm", "md"] as const

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

				<div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<Reveal
							key={testimonial.author + testimonial.quote}
							delay={cardDelays[index]}
						>
							<figure className="h-full rounded-3xl border border-ama-purple/10 bg-white/85 p-8 shadow-sm">
								<div
									className={`h-1.5 w-14 rounded-full ${testimonial.accent}`}
								/>

								<blockquote className="mt-6 text-base leading-8 text-foreground italic sm:text-lg">
									<p>“{testimonial.quote}”</p>
								</blockquote>

								<figcaption className="mt-6 text-sm leading-6">
									<span className="font-semibold text-ama-purple">
										{testimonial.author}
									</span>
								</figcaption>
							</figure>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	)
}
