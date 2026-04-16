import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	const siteUrl = "https://amamassageyoga.com"

	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
	]
}
