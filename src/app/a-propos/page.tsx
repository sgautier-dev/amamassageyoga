import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "À propos",
	description:
		"Découvrez l’approche de Marie, praticienne en massages traditionnels et yoga doux.",
}

export default function AProposPage() {
	return (
		<main className="px-6 py-24 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-3xl text-center">
				<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
					À propos
				</p>

				<h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
					Une approche sensible du toucher
				</h1>

				<p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
					Page en construction.
				</p>
			</div>
		</main>
	)
}