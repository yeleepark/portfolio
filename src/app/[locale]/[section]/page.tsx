import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { locales, isValidLocale, type Locale } from "@/i18n";
import { getDictionary } from "@/i18n";
import SectionContent from "@/components/layout/SectionContent";

const validSections = [
  "about",
  "skills",
  "projects",
  "work-experience",
  "contact",
];

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: string; section: string }[] = [];

  for (const locale of locales) {
    for (const section of validSections) {
      params.push({ locale, section });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}): Promise<Metadata> {
  const { locale, section } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale as Locale);
  const url = `${SITE_CONFIG.url}/${locale}/${section}`;

  let meta: { title: string; description: string } = {
    title: "",
    description: "",
  };

  switch (section) {
    case "about":
      meta = dict.meta.about;
      break;
    case "skills":
      meta = dict.meta.skills;
      break;
    case "projects":
      meta = dict.meta.projects;
      break;
    case "work-experience":
      meta = dict.meta.workExperience;
      break;
    case "contact":
      meta = dict.meta.contact;
      break;
  }

  if (!meta.title) return {};

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
      languages: {
        ko: `${SITE_CONFIG.url}/ko/${section}`,
        en: `${SITE_CONFIG.url}/en/${section}`,
      },
    },
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale, section } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  if (!validSections.includes(section)) {
    redirect(`/${locale}`);
  }

  return <SectionContent section={section} />;
}
