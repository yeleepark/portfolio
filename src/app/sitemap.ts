import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site";

export const dynamic = "force-static";

const sections = ["about", "skills", "projects", "work-experience", "contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const sectionRoutes = sections.map((section) => ({
    url: `${SITE_CONFIG.url}/${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: section === "about" ? 1.0 : 0.8,
  }));

  return [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...sectionRoutes,
  ];
}
