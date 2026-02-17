import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio website",
  icons: {
    icon: "/favicon.svg",
  },
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
        {children}
      </body>
    </html>
  );
}
