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
				<div className="mt-8 text-center">
					<a
						href="https://www.google.com/maps/search/?api=1&query=AMA%20Massage%20et%20Yoga&query_place_id=ChIJPwF9B90o_EgRx3aijB0NWdY"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm font-medium text-ama-purple underline underline-offset-4 transition-colors hover:text-ama-pink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ama-purple"
					>
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							aria-hidden="true"
							focusable="false"
							className="shrink-0"
						>
							<path
								fill="#4285F4"
								d="M17.64 9.205c0-.638-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.909c1.702-1.567 2.683-3.875 2.683-6.614Z"
							/>
							<path
								fill="#34A853"
								d="M9 18c2.43 0 4.468-.806 5.957-2.18l-2.909-2.258c-.806.54-1.835.859-3.048.859-2.344 0-4.328-1.583-5.036-3.71H.957v2.332A9 9 0 0 0 9 18Z"
							/>
							<path
								fill="#FBBC05"
								d="M3.964 10.71A5.409 5.409 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.347 2.827.957 4.043l3.007-2.333Z"
							/>
							<path
								fill="#EA4335"
								d="M9 3.58c1.321 0 2.507.454 3.439 1.345l2.58-2.58C13.464.892 11.426 0 9 0A9 9 0 0 0 .957 4.957L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"
							/>
						</svg>
						<span>Voir tous les avis sur Google</span>
					</a>
				</div>
			</div>
		</section>
	)
}
