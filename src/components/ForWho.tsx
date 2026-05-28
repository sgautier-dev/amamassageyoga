import Image from "next/image"

import Reveal from "@/components/reveal"
import marieforWhoImg from "@/images/marie-forwho.jpg"

export default function ForWho() {
	return (
		<section
			id="pour-qui"
			aria-labelledby="for-who-heading"
			className="relative isolate overflow-hidden px-6 py-20 sm:py-28 lg:px-8"
		>
			<Image
				src="/graphics/ama-circle-green.png"
				alt=""
				aria-hidden="true"
				width={260}
				height={260}
				className="pointer-events-none absolute -right-20 top-8 -z-10 w-44 select-none opacity-15 sm:w-56 lg:right-[8%] lg:top-10 lg:w-64"
			/>
			<Reveal className="mx-auto max-w-5xl rounded-3xl border border-ama-purple/10 bg-white/85 p-8 shadow-sm sm:p-10 lg:p-12">
				<div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-10">
					<div className="mx-auto shrink-0 md:mx-0">
						<div className="overflow-hidden rounded-full bg-background ring-1 ring-ama-purple/10">
							<Image
								src={marieforWhoImg}
								alt="Marie, praticienne AMA Massage et Yoga"
								width={160}
								height={160}
								className="size-32 object-cover sm:size-40"
							/>
						</div>
					</div>

					<div className="text-center md:text-left">
						<h2
							id="for-who-heading"
							className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
						>
							Pour celles et ceux qui sentent le besoin de ralentir, de se
							régénérer…
						</h2>

						<div className="mt-6 space-y-4 text-base leading-8 text-muted sm:text-lg">
							<p>
								J’accueille ces moments où les tensions s’installent, où le
								mental s’agite, où le corps fatigue.
							</p>

							<p>
								Grâce au toucher, les sensations de calme et de présence se
								révèlent.
							</p>
						</div>
					</div>
				</div>
			</Reveal>
		</section>
	)
}
