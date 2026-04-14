import Image from "next/image"

import locationImg from "@/images/location.jpg"

const locations = [
	"Cabinet partagé au COSY Coffee Shop",
	"Entreprises",
	"Événements",
	"À domicile sur demande",
]

export default function Location() {
	return (
		<section
			id="location"
			aria-labelledby="location-heading"
			className="relative py-24 sm:py-32"
		>
			<div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
				<div className="lg:flex lg:w-1/2 lg:shrink-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
					<div className="relative mx-auto h-80 max-w-xl overflow-hidden rounded-3xl sm:h-96 lg:mx-0 lg:mt-24 lg:h-130 lg:max-w-none">
						<Image
							src={locationImg}
							alt="Cabinet de massage AMA à Parentis-en-Born"
							className="h-full w-full object-cover object-center"
						/>
					</div>
				</div>

				<div className="px-6 lg:contents">
					<div className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-24 xl:w-1/2">
						<p className="text-sm font-medium uppercase tracking-[0.18em] text-ama-purple">
							Où me trouver
						</p>

						<h2
							id="location-heading"
							className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
						>
							Parentis-en-Born et alentours
						</h2>

						<p className="mt-6 text-lg leading-8 text-muted">
							Un espace chaleureux pour ralentir, se déposer et s’offrir un
							moment de présence à soi.
						</p>

						<div className="mt-8 max-w-xl text-base leading-8 text-muted lg:max-w-none">
							<ul role="list" className="space-y-4">
								{locations.map((item) => (
									<li key={item} className="flex gap-x-3">
										<span
											aria-hidden="true"
											className="mt-2 h-2 w-2 flex-none rounded-full bg-ama-pink"
										/>
										<span className="text-base leading-7 text-foreground">
											{item}
										</span>
									</li>
								))}
							</ul>

							<p className="mt-8">
								Les séances se font sur rendez-vous, selon les disponibilités.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
