import Image from "next/image"
import Link from "next/link"

import Reveal from "@/components/reveal"

export default function GiftCard() {
	return (
		<section
			aria-labelledby="gift-card-heading"
			className="px-6 py-12 sm:py-16 lg:px-8"
		>
			<Reveal className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-3xl border border-ama-pink/30 bg-ama-pink/15 px-6 py-12 text-center sm:px-12">
				<Image
					src="/graphics/ama-star-yellow.png"
					alt=""
					aria-hidden="true"
					width={160}
					height={160}
					className="pointer-events-none absolute -top-8 -right-8 -z-10 w-32 opacity-60 sm:w-40"
				/>
				<h2
					id="gift-card-heading"
					className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
				>
					Offrir un massage
				</h2>
				<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground">
					Faites plaisir à vos proches, vos amis, vos collaborateurs ou vos
					clients en offrant un bon cadeau de massage.
				</p>
				<Link
					href="/contact?motif=bon-cadeau"
					className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-ama-purple px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ama-purple"
				>
					Demander un bon cadeau
				</Link>
			</Reveal>
		</section>
	)
}
