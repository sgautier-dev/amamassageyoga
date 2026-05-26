"use client"

import { useEffect } from "react"

function getCleanHash() {
	const rawHash = window.location.hash

	if (!rawHash) return ""

	const hash = rawHash.replace(/^#/, "").split("#").filter(Boolean).at(-1)

	return hash ? decodeURIComponent(hash) : ""
}

export default function OpenDetailsFromHash() {
	useEffect(() => {
		function openDetailsFromHash() {
			const hash = getCleanHash()

			if (!hash) return

			const element = document.getElementById(hash)

			if (!(element instanceof HTMLDetailsElement)) return

			element.open = true

			// Cleaning duplicate url
			window.history.replaceState(null, "", `/soins-et-tarifs#${hash}`)

			requestAnimationFrame(() => {
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
				})
			})
		}

		openDetailsFromHash()

		window.addEventListener("hashchange", openDetailsFromHash)

		return () => {
			window.removeEventListener("hashchange", openDetailsFromHash)
		}
	}, [])

	return null
}
