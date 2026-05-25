import Image from "next/image"

import Reveal from "@/components/reveal"

export default function Experience() {
	return (
		<section
			id="experience"
			aria-labelledby="experience-heading"
			className="relative overflow-hidden py-24 sm:py-32"
		>
			<Image
				src="/graphics/ama-star-pink.png"
				alt=""
				aria-hidden="true"
				width={140}
				height={140}
				className="pointer-events-none absolute right-10 bottom-16 z-0 hidden w-28 select-none opacity-50 sm:block lg:right-16 lg:bottom-20 lg:w-32"
			/>

			<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
				<Reveal className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
						L’expérience AMA
					</p>

					<h2
						id="experience-heading"
						className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
					>
						Une parenthèse pour changer de rythme
					</h2>

					<div className="mt-6 space-y-6 text-lg leading-8 text-muted sm:text-xl">
						<p>
							Dans l’agitation du quotidien, s’offrir une pause devient
							essentiel.
						</p>

						<p>
							Ralentir, respirer, et laisser le corps retrouver sa fluidité.
						</p>

						<p>
							Sous mes mains, les tensions se dénouent, le mental s’apaise… pour
							laisser place à plus de calme et de présence.
						</p>
					</div>
				</Reveal>
			</div>
		</section>
	)
}