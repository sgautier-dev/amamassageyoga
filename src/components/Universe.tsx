import Image from "next/image"

import universeImg from "@/images/universe.jpg"

export default function Universe() {
	return (
		<section
			aria-labelledby="universe-heading"
			className="relative overflow-hidden py-24 sm:py-32"
		>
			<div className="absolute inset-0 -z-10">
				<Image
					src={universeImg}
					alt=""
					fill
					sizes="100vw"
					className="object-cover opacity-8"
				/>
				<div className="absolute inset-0 bg-background/92" />
			</div>

			<div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
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
						Un lieu où le temps ralentit… où l’on peut, simplement, se laisser
						porter, se laisser traverser.
					</p>

					<p>
						Le toucher guide vers le silence, la réconciliation avec le corps,
						pour retrouver l’apaisement en soi.
					</p>

					<p>Un espace pour soulager, s’alléger… et revenir à l’essentiel.</p>
				</div>
			</div>
		</section>
	)
}
