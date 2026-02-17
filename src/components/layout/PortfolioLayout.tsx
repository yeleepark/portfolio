"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import WindowCard from "@/components/ui/WindowCard";

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
    <div className="min-h-screen min-w-[360px] bg-zinc-200">
      <Header activeItem={activeSection} />

      <div className="flex pt-24 lg:pt-16">
        <div className="hidden lg:block">
          <Sidebar activeItem={activeSection} />
        </div>

        <main className="flex-1 min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:ml-48">
          <WindowCard />
          {children}
        </main>
      </div>
    </div>
  );
}
