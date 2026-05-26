import Link from "next/link"

import Reveal from "@/components/reveal"

type BookingCtaProps = {
	eyebrow?: string
	title?: string
	description?: string
	buttonLabel?: string
	headingId?: string
	className?: string
}

export default function BookingCta({
	eyebrow = "Prendre rendez-vous",
	title = "S’offrir un temps pour revenir à soi",
	description = "Contactez-moi par téléphone, SMS ou WhatsApp.",
	buttonLabel = "Appeler maintenant",
	headingId,
	className = "",
}: BookingCtaProps) {
	return (
		<section
			className={`px-6 pt-8 pb-24 sm:pt-12 sm:pb-32 lg:px-8 ${className}`}
		>
			<Reveal className="mx-auto max-w-4xl rounded-3xl bg-ama-purple px-6 py-12 text-center text-white shadow-sm sm:px-10">
				<p className="text-sm font-medium uppercase tracking-[0.18em] text-white/75">
					{eyebrow}
				</p>

				<h2
					id={headingId}
					className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
				>
					{title}
				</h2>

				{description ? (
					<p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
						{description}
					</p>
				) : null}

				<p className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
					+33 6 10 75 50 48
				</p>

				<div className="mt-8">
					<Link
						href="tel:+33610755048"
						className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ama-purple shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ama-yellow hover:shadow-md"
					>
						{buttonLabel}
					</Link>
				</div>
			</Reveal>
		</section>
	)
}
