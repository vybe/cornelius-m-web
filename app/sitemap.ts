import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";
import { getAllConcepts } from "@/lib/concepts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/beliefs", "/concepts", "/about"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const conceptRoutes = getAllConcepts().map((concept) => ({
    url: `${siteConfig.url}/concepts/${concept.slug}`,
    lastModified: new Date(concept.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...conceptRoutes];
}
