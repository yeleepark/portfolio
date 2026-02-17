import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { locales, isValidLocale, type Locale } from "@/i18n";
import { getDictionary } from "@/i18n";
import { LocaleProvider } from "@/i18n/context";
import PortfolioLayout from "@/components/layout/PortfolioLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale as Locale);
  const url = `${SITE_CONFIG.url}/${locale}`;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: dict.meta.title,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.author.name,
    icons: {
      icon: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      url,
      siteName: dict.meta.title,
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    alternates: {
      canonical: url,
      languages: {
        ko: `${SITE_CONFIG.url}/ko`,
        en: `${SITE_CONFIG.url}/en`,
      },
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.author.name,
  jobTitle: SITE_CONFIG.author.jobTitle,
  url: SITE_CONFIG.url,
  sameAs: [SITE_CONFIG.author.github, SITE_CONFIG.author.linkedin],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <LocaleProvider locale={locale as Locale}>
      <div className="bg-zinc-200 dark:bg-zinc-900" lang={locale}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PortfolioLayout>{children}</PortfolioLayout>
      </div>
    </LocaleProvider>
  );
}
