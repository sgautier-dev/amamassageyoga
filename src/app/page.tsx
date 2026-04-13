import Header from "@/components/Header"
import Hero from "@/components/Hero"

export default function HomePage() {
	return (
		<main>
			<Header />
			<Hero />
            {/* Temporary section to test sticky header behavior */}
      <section className="min-h-[200vh] bg-ama-pink/10" />
		</main>
	)
}
