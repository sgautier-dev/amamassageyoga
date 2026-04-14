"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const navigation = [
	{ name: "Soins", href: "#services" },
	{ name: "À propos", href: "#about" },
	{ name: "Contact", href: "#contact" },
]

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [isAtTop, setIsAtTop] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			setIsAtTop(window.scrollY < 8)
		}

		handleScroll()

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<header
			className={`sticky top-0 z-20 transition-all duration-300 ${
				isAtTop
					? "bg-background"
					: "bg-background/80 shadow-sm backdrop-blur-md"
			}`}
		>
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-0 lg:px-8"
			>
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">AMA Massage et Yoga</span>
						<Image
							src="/logo-ama.svg"
							alt="AMA Massage et Yoga"
							width={140}
							height={48}
							priority
							className="h-20 sm:h-25 w-auto"
						/>
					</Link>
				</div>

				<div className="hidden lg:flex lg:gap-x-10">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm font-semibold text-foreground transition hover:text-ama-purple"
						>
							{item.name}
						</Link>
					))}
				</div>

				<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
					<Link
						href="#contact"
						className="inline-flex items-center justify-center rounded-full bg-ama-purple px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ama-pink hover:shadow-md"
					>
						Prendre rendez-vous
					</Link>
				</div>

				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="size-6" />
					</button>
				</div>
			</nav>

			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-50 bg-black/20" />

				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-0 sm:max-w-sm sm:ring-1 sm:ring-ama-purple/10">
					<div className="flex items-center">
						<Link
							href="/"
							className="-m-1.5 p-1.5"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">AMA Massage et Yoga</span>
							<Image
								src="/logo-ama.svg"
								alt="AMA Massage et Yoga"
								width={140}
								height={48}
								className="h-20 sm:h-25 w-auto"
							/>
						</Link>

						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="ml-auto -m-2.5 rounded-md p-2.5 text-foreground"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="size-6" />
						</button>
					</div>

					<div className="mt-8 flow-root">
						<div className="space-y-2">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									onClick={() => setMobileMenuOpen(false)}
									className="block rounded-2xl px-4 py-3 text-base font-semibold text-foreground transition hover:bg-ama-purple/5 hover:text-ama-purple"
								>
									{item.name}
								</Link>
							))}
						</div>

						<div className="mt-8">
							<Link
								href="#contact"
								className="inline-flex items-center justify-center rounded-full bg-ama-purple px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ama-pink hover:shadow-md"
							>
								Prendre rendez-vous
							</Link>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}
