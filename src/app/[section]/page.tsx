import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SITE_CONFIG, SECTION_META } from "@/constants/site";
import SectionContent from "@/components/layout/SectionContent";

const validSections = ["about", "skills", "projects", "career", "contact"];

export const dynamicParams = false;

export function generateStaticParams() {
  return validSections.map((section) => ({ section }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const meta = SECTION_META[section];

  if (!meta) return {};

  const url = `${SITE_CONFIG.url}/${section}`;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | ${SITE_CONFIG.name}`,
      description: meta.description,
      url,
    },
    twitter: {
      title: `${meta.title} | ${SITE_CONFIG.name}`,
      description: meta.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  if (!validSections.includes(section)) {
    redirect("/about");
  }

  return <SectionContent section={section} />;
}
