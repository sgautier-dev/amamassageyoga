import Image from "next/image"

import universeImg from "@/images/universe.jpg"

export default function Universe() {
	return (
		<section
			aria-labelledby="universe-heading"
			className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8"
		>
			<div className="absolute inset-0 -z-10">
				<Image
					src={universeImg}
					alt=""
					fill
					sizes="100vw"
					className="object-cover opacity-25"
				/>
				<div className="absolute inset-0 bg-background/40" />
			</div>

			<Image
				src="/graphics/ama-circle-green.png"
				alt=""
				aria-hidden="true"
				width={320}
				height={320}
				className="pointer-events-none absolute -top-20 -left-24 -z-10 hidden w-64 select-none opacity-40 sm:block lg:w-80"
			/>

			<Image
				src="/graphics/ama-star-pink.png"
				alt=""
				aria-hidden="true"
				width={180}
				height={180}
				className="pointer-events-none absolute right-6 bottom-10 -z-10 hidden w-28 select-none opacity-50 sm:block lg:right-8 lg:bottom-8 lg:w-36"
			/>

			<div className="mx-auto max-w-3xl text-center">
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
