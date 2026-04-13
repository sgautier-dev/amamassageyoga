import Experience from "@/components/Experience"
import FeaturedService from "@/components/FeaturedService"
import Header from "@/components/Header"
import Hero from "@/components/Hero"

export default function HomePage() {
	return (
		<main>
			<Header />
			<Hero />
			<Experience />
			<FeaturedService />
		</main>
	)
}
