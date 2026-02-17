"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import WindowCard from "@/components/ui/WindowCard";
import Footer from "@/components/ui/Footer";

const validSections = ["about", "skills", "projects", "career", "contact"];

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const activeSection =
    validSections.find((s) => pathname === `/${s}`) ?? null;

  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden min-w-[360px] bg-zinc-200 dark:bg-zinc-900 flex flex-col transition-colors">
      <Header activeItem={activeSection} />

      <div className="flex flex-1 pt-24 lg:pt-16 md:min-h-0">
        <div className="hidden lg:block">
          <Sidebar activeItem={activeSection} />
        </div>

        <div className="flex-1 flex flex-col min-h-0 lg:ml-48">
          <main className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-[1fr_2fr] items-start md:items-stretch gap-4 sm:gap-6 lg:gap-8 p-6 sm:p-8 md:p-10 lg:p-12">
            <WindowCard />
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
