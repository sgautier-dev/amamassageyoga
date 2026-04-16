import Image from "next/image"
import Link from "next/link"

import heroImg from "@/images/hero.jpg"

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<Image
				src="/graphics/ama-star-yellow.png"
				alt=""
				aria-hidden="true"
				width={360}
				height={360}
				className="pointer-events-none absolute w-32 top-6 right-10 z-0 hidden opacity-50 select-none sm:block lg:top-10 md:right-[10%] lg:right-[40%] xl:right-[50%] lg:w-40"
			/>

			<div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
				<div className="relative z-10 px-6 pt-14 pb-16 sm:pb-20 lg:col-span-7 lg:px-0 lg:pt-24 lg:pb-24 xl:col-span-6">
					<div className="mx-auto max-w-lg lg:mx-0">
						<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
							Massage & yoga à Parentis-en-Born
						</p>

						<h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
							Du corps au cœur, un temps de retour à soi
						</h1>

						<p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
							Un espace pour ralentir, respirer… et se retrouver.
						</p>

						<p className="mt-4 text-base leading-7 text-muted">
							Des soins inspirés des traditions ayurvédique et thaïlandaise,
							pour relâcher les tensions, apaiser le système nerveux et revenir
							à l’essentiel.
						</p>

						<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
							<Link
								href="#contact"
								className="inline-flex items-center justify-center rounded-full bg-ama-purple px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ama-pink hover:shadow-md"
							>
								Prendre rendez-vous
							</Link>

							<Link
								href="#soins"
								className="inline-flex items-center justify-center rounded-full border border-ama-purple/20 bg-white px-6 py-3 text-sm font-semibold text-ama-purple transition hover:border-ama-purple/40 hover:bg-ama-purple/5"
							>
								Découvrir les soins
							</Link>
						</div>
					</div>
				</div>

				<div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
					<div className="relative h-full min-h-88 w-full lg:min-h-160">
						<Image
							src={heroImg}
							alt="Soin bien-être AMA Massage et Yoga"
							priority
							className="h-full w-full object-cover lg:absolute lg:inset-0"
						/>

						<div className="absolute inset-0 bg-linear-to-t from-ama-purple/10 via-transparent to-ama-pink/10" />
					</div>
				</div>
			</div>
		</section>
	)
}
