import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	const siteUrl = "https://amamassageyoga.com"
	const lastModified = new Date()

	return [
		{
			url: siteUrl,
			lastModified,
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${siteUrl}/soins-et-tarifs`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${siteUrl}/a-propos`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.8,
		},
	]
}
