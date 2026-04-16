import Image from "next/image"
import Link from "next/link"

const social = [
	{
		name: "Facebook",
		href: "#", // TODO: replace with real Facebook URL
		icon: (props: React.SVGProps<SVGSVGElement>) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
					fillRule="evenodd"
					d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 
          1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 
          1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 
          21.128 22 16.991 22 12z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "Instagram",
		href: "#", // TODO: replace with real Instagram URL
		icon: (props: React.SVGProps<SVGSVGElement>) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
					fillRule="evenodd"
					d="M12.315 2c2.43 0 2.784.013 
          3.808.06 1.064.049 1.791.218 
          2.427.465a4.902 4.902 0 011.772 
          1.153 4.902 4.902 0 011.153 
          1.772c.247.636.416 1.363.465 
          2.427.048 1.067.06 1.407.06 
          4.123v.08c0 2.643-.012 2.987-.06 
          4.043-.049 1.064-.218 1.791-.465 
          2.427a4.902 4.902 0 01-1.153 
          1.772 4.902 4.902 0 01-1.772 
          1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 
          0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 
          4.902 0 01-1.772-1.153 4.902 4.902 
          0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 
          4.902 0 011.153-1.772A4.902 4.902 0 015.45 
          2.525c.636-.247 1.363-.416 2.427-.465C8.901 
          2.013 9.256 2 11.685 2h.63zM12 
          6.865a5.135 5.135 0 110 10.27 
          5.135 5.135 0 010-10.27zm0 
          1.802a3.333 3.333 0 100 6.666 
          3.333 3.333 0 000-6.666zm5.338-3.205a1.2 
          1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
]

export default function Footer() {
	return (
		<footer className="border-t border-ama-purple/10">
			<div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
				<div className="flex flex-col items-center gap-4 text-center">
					<Link href="/" className="inline-flex">
						<span className="sr-only">AMA Massage et Yoga</span>
						<Image
							src="/logo-ama.svg"
							alt="AMA Massage et Yoga"
							width={140}
							height={56}
							className="h-16 sm:h-20 w-auto"
						/>
					</Link>

					<p className="text-sm leading-6 text-muted">
						Parentis-en-Born et alentours
					</p>

					<div className="flex items-center gap-6">
						{social.map((item) => (
							<a
								key={item.name}
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-ama-purple transition-colors hover:text-ama-pink"
							>
								<span className="sr-only">{item.name}</span>
								<item.icon aria-hidden="true" className="size-5" />
							</a>
						))}
					</div>

					<p className="text-xs leading-5 text-muted">
						© {new Date().getFullYear()} AMA Massage et Yoga. Tous droits
						réservés.
					</p>
					<a
						href="https://www.sgautier.dev/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-xs leading-5 text-muted transition-colors hover:text-ama-pink"
					>
						<span translate="no">Designed by SG</span>
					</a>
				</div>
			</div>
		</footer>
	)
}
