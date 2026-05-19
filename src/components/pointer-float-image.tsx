"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

type PointerFloatImageProps = {
	src: string
	alt?: string
	width: number
	height: number
	wrapperClassName?: string
	imageClassName?: string
	strength?: number
}

export default function PointerFloatImage({
	src,
	alt = "",
	width,
	height,
	wrapperClassName = "",
	imageClassName = "",
	strength = 12,
}: PointerFloatImageProps) {
	const wrapperRef = useRef<HTMLSpanElement | null>(null)

	useEffect(() => {
		const wrapper = wrapperRef.current
		if (!wrapper) return

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches

		const hasFinePointer = window.matchMedia("(pointer: fine)").matches

		if (prefersReducedMotion || !hasFinePointer) return

		let targetX = 0
		let targetY = 0
		let currentX = 0
		let currentY = 0
		let frameId: number

		const handlePointerMove = (event: PointerEvent) => {
			const x = event.clientX / window.innerWidth - 0.5
			const y = event.clientY / window.innerHeight - 0.5

			targetX = x * strength * 8
			targetY = y * strength * 8
		}

		const animate = () => {
			currentX += (targetX - currentX) * 0.08
			currentY += (targetY - currentY) * 0.08

			wrapper.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`

			frameId = window.requestAnimationFrame(animate)
		}

		window.addEventListener("pointermove", handlePointerMove)
		frameId = window.requestAnimationFrame(animate)

		return () => {
			window.removeEventListener("pointermove", handlePointerMove)
			window.cancelAnimationFrame(frameId)
		}
	}, [strength])

	return (
		<span
			ref={wrapperRef}
			aria-hidden="true"
			className={`pointer-events-none will-change-transform ${wrapperClassName}`}
		>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={imageClassName}
                loading="eager"
			/>
		</span>
	)
}
