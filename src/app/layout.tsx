import type { Metadata, Viewport } from "next";
import { SITE_CONFIG } from "@/constants/site";
import PortfolioLayout from "@/components/layout/PortfolioLayout";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "프론트엔드 개발자",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "포트폴리오",
    SITE_CONFIG.name,
  ],
  authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.author.name,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.title,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e4e4e7" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.author.name,
  jobTitle: SITE_CONFIG.author.jobTitle,
  url: SITE_CONFIG.url,
  sameAs: [SITE_CONFIG.author.github, SITE_CONFIG.author.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="bg-zinc-200 dark:bg-zinc-900" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-w-[360px] bg-zinc-200 dark:bg-zinc-900 transition-colors">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PortfolioLayout>{children}</PortfolioLayout>
      </body>
    </html>
  );
}
