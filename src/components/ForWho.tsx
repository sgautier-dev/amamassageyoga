import Reveal from "@/components/reveal"

export default function ForWho() {
	return (
		<section
			id="pour-qui"
			aria-labelledby="for-who-heading"
			className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8"
		>
			<Reveal className="mx-auto max-w-3xl text-center">
				<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
					Pour qui
				</p>

				<h2
					id="for-who-heading"
					className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
				>
					Pour celles et ceux qui ressentent le besoin de ralentir
				</h2>

				<p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
					De relâcher les tensions et de se reconnecter à leur corps.
				</p>
			</Reveal>
		</section>
	)
}
