import type { Metadata, Viewport } from "next";
import PortfolioLayout from "@/components/layout/PortfolioLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio website",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#e4e4e7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="bg-zinc-200">
      <body className="min-w-[360px] bg-zinc-200">
        <PortfolioLayout>{children}</PortfolioLayout>
      </body>
    </html>
  );
}
