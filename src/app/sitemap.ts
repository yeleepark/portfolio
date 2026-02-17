import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site";
import { locales } from "@/i18n";

export const dynamic = "force-static";

const sections = ["about", "skills", "projects", "work-experience", "contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Add root
  routes.push({
    url: SITE_CONFIG.url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1.0,
  });

  // Add locale home pages and section pages
  for (const locale of locales) {
    // Locale home page
    routes.push({
      url: `${SITE_CONFIG.url}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    });

    // Locale section pages
    for (const section of sections) {
      routes.push({
        url: `${SITE_CONFIG.url}/${locale}/${section}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: section === "about" ? 1.0 : 0.8,
      });
    }
  }

  return routes;
}
