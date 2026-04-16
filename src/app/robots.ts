import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
	const siteUrl = "https://amamassageyoga.com"

	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${siteUrl}/sitemap.xml`,
	}
}
