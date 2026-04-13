import About from "@/components/About"
import Experience from "@/components/Experience"
import FeaturedService from "@/components/FeaturedService"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Universe from "@/components/Universe"

export default function HomePage() {
	return (
		<main>
			<Header />
			<Hero />
			<Experience />
			<FeaturedService />
			<Services/>
			<About/>
			<Universe/>
		</main>
	)
}
