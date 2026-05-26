import Image from "next/image"
import Link from "next/link"

import Reveal from "@/components/reveal"
import featuredImg from "@/images/featured.jpg"

const benefits = [
	"Relâcher les tensions rapidement",
	"Apaiser le système nerveux",
	"Retrouver énergie et clarté",
]

export default function FeaturedService() {
	return (
		<section
			id="champissage"
			aria-labelledby="featured-heading"
			className="relative py-24 sm:py-32"
		>
			<div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
				<Reveal className="px-6 lg:w-1/2 lg:px-8 xl:px-0">
					<div className="group relative mx-auto h-80 max-w-xl overflow-hidden rounded-3xl shadow-sm sm:h-96 lg:mx-0 lg:mt-24 lg:h-130 lg:max-w-none">
						<Image
							src={featuredImg}
							alt="Soin de champissage AMA Massage et Yoga"
							className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
							priority={false}
						/>
					</div>
				</Reveal>

				<div className="px-6 lg:contents">
					<Reveal
						delay="sm"
						className="mx-auto max-w-2xl pt-12 pb-0 sm:pt-16 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-24 xl:w-1/2"
					>
						<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
							Massage assis
						</p>

						<h2
							id="featured-heading"
							className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
						>
							Champissage
						</h2>

						<p className="mt-4 text-base font-medium tracking-wide text-ama-green">
							Dos · épaules · nuque · crâne
						</p>

						<p className="mt-6 text-lg leading-8 text-muted">
							Un massage assis issu de la tradition ayurvédique, pensé pour
							relâcher rapidement les tensions du dos, des épaules, de la nuque
							et du crâne.
						</p>

						<div className="mt-8 max-w-xl text-base leading-8 text-muted lg:max-w-none">
							<p>
								Pratiqué habillé et sans huile, il s’adapte facilement au
								cabinet, à l’entreprise, aux événements ou à une pause dans la
								journée.
							</p>

							<ul role="list" className="mt-8 space-y-4">
								{benefits.map((benefit) => (
									<li key={benefit} className="flex gap-x-3">
										<span
											aria-hidden="true"
											className="mt-2 h-2 w-2 flex-none rounded-full bg-ama-green"
										/>
										<span className="text-base leading-7 text-foreground">
											{benefit}
										</span>
									</li>
								))}
							</ul>

							<Link
								href="/soins-et-tarifs#champissage"
								className="mt-10 inline-flex items-center justify-center rounded-full bg-ama-purple px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ama-pink hover:shadow-md"
							>
								Découvrir ce soin
							</Link>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	)
}