import Link from "next/link"

export const metadata = {
	title: "Page introuvable | AMA Massage et Yoga",
}

export default function NotFound() {
	return (
		<main className="grid min-h-screen place-items-center px-6 lg:px-8">
			<div className="max-w-xl text-center">
				<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
					404
				</p>

				<h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
					Page introuvable
				</h1>

				<p className="mt-6 text-base leading-8 text-muted sm:text-lg">
					Désolée, la page que vous recherchez n’existe pas ou n’est plus
					disponible.
				</p>

				<div className="mt-10 flex items-center justify-center">
					<Link
						href="/"
						className="inline-flex items-center justify-center rounded-full bg-ama-purple px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-ama-pink hover:shadow-md"
					>
						Retour à l’accueil
					</Link>
				</div>
			</div>
		</main>
	)
}
