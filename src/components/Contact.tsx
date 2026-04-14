import Link from "next/link"

export default function Contact() {
	return (
		<section
			id="contact"
			aria-labelledby="contact-heading"
			className="isolate px-6 py-24 sm:py-32 lg:px-8"
		>
			<div className="mx-auto max-w-2xl text-center">
				<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
					Contact
				</p>

				<h2
					id="contact-heading"
					className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
				>
					S’offrir un moment pour soi commence ici
				</h2>

				<p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
					Pour prendre rendez-vous, le plus simple est de me contacter
					directement par téléphone.
				</p>

				<div className="mt-10 rounded-3xl border border-ama-purple/10 bg-white p-8 shadow-sm">
					<p className="text-sm font-medium uppercase tracking-[0.14em] text-ama-purple">
						Prise de rendez-vous
					</p>

					<p className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
						06 10 75 50 48
					</p>

					<p className="mt-4 text-base leading-7 text-muted">
						Appel ou message selon vos préférences et les disponibilités du
						moment.
					</p>

					<div className="mt-8">
						<Link
							href="tel:0610755048"
							className="inline-flex items-center justify-center rounded-full bg-ama-purple px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
						>
							Appeler maintenant
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
