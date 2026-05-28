import Image from "next/image"

import Reveal from "@/components/reveal"

export default function Universe() {
	return (
		<section
			aria-labelledby="universe-heading"
			className="relative isolate overflow-hidden px-6 py-20 sm:py-28 lg:px-8"
		>
			<Image
	src="/graphics/ama-star-pink.png"
	alt=""
	aria-hidden="true"
	width={180}
	height={180}
	className="pointer-events-none absolute right-4 bottom-8 -z-10 w-14 select-none opacity-20 sm:right-6 sm:w-24 sm:opacity-40 lg:right-10 lg:bottom-10 lg:w-32"
/>

			<Reveal className="mx-auto max-w-3xl text-center">
				<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
					Univers AMA
				</p>

				<h2
					id="universe-heading"
					className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
				>
					AMA — un espace pour se poser
				</h2>

				<div className="mt-8 space-y-6 text-lg leading-8 text-muted sm:text-xl">
					<p>
						Un lieu où le temps ralentit… où l’on peut simplement se laisser
						porter, se déposer.
					</p>

					<p>
						Le toucher invite à la détente, la respiration s’approfondit et le
						corps retrouve peu à peu son rythme.
					</p>
				</div>
			</Reveal>
		</section>
	)
}
