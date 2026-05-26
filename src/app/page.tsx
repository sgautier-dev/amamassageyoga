import Contact from "@/components/Contact"
import FeaturedService from "@/components/FeaturedService"
import ForWho from "@/components/ForWho"
import Hero from "@/components/Hero"
import Location from "@/components/Location"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Universe from "@/components/Universe"

export default function HomePage() {
	return (
		<main>
			<Hero />
			<Universe />
			<Services />
			<FeaturedService />
			<ForWho />
			<Location />
			<Testimonials />
			<Contact />
		</main>
	)
}
