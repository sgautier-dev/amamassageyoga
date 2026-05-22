import Link from "next/link"

import Reveal from "@/components/reveal"

type BookingCtaProps = {
	title?: string
	eyebrow?: string
	description?: string
	phoneHref?: string
	buttonLabel?: string
	className?: string
}

export default function BookingCta({
	title = "S’offrir un temps pour revenir à soi",
	eyebrow = "Prendre rendez-vous",
	description,
	phoneHref = "tel:0610755048",
	buttonLabel = "Appeler maintenant",
	className = "",
}: BookingCtaProps) {
	return (
		<section className={`px-6 pb-24 sm:pb-32 lg:px-8 ${className}`}>
			<Reveal className="mx-auto max-w-4xl rounded-3xl bg-ama-purple px-6 py-12 text-center text-white shadow-sm sm:px-10">
				<p className="text-sm font-medium uppercase tracking-[0.18em] text-white/75">
					{eyebrow}
				</p>

				<h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
					{title}
				</h2>

				{description ? (
					<p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">
						{description}
					</p>
				) : null}

				<div className="mt-8">
					<Link
						href={phoneHref}
						className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ama-purple shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ama-yellow hover:shadow-md"
					>
						{buttonLabel}
					</Link>
				</div>
			</Reveal>
		</section>
	)
}
