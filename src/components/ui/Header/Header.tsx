"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LocaleToggle from "@/components/ui/LocaleToggle";
import { useLocale } from "@/i18n/context";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "work-experience", label: "Work Experience" },
  { id: "contact", label: "Contact" },
];

interface HeaderProps {
  activeItem?: string | null;
}

export default function Header({ activeItem }: HeaderProps) {
  const locale = useLocale();
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-zinc-800 border-b-2 border-black dark:border-zinc-500 z-50 shadow-window transition-colors">
      {/* 모바일/태블릿: 이름 + 가로 스크롤 메뉴 */}
      <div className="lg:hidden">
        {/* 이름 + 토글들 */}
        <div className="px-4 py-2 flex items-center justify-between border-b border-black dark:border-zinc-500">
          <span className="font-bold text-xs sm:text-sm tracking-wide sm:tracking-widest text-black dark:text-zinc-100">
            {`S E O Y O O N P A R K`}
          </span>
          <div className="flex gap-2">
            <LocaleToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* 가로 스크롤 메뉴 */}
        <div className="overflow-x-auto scrollbar-hide">
          <nav className="flex gap-1 p-2 min-w-max">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={`/${locale}/${item.id}`}
                className={`
                  border-2 border-black dark:border-zinc-500 px-4 py-2 font-bold text-xs sm:text-sm whitespace-nowrap
                  transition-all
                  ${
                    activeItem === item.id
                      ? "bg-black dark:bg-zinc-100 text-white dark:text-black shadow-button-active"
                      : "bg-white dark:bg-zinc-700 text-black dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-600 shadow-button"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* 데스크톱: 이름 + 다크모드 토글 */}
      <div className="hidden lg:flex items-center justify-between gap-2 px-4 py-2">
        {/* 좌측: 이름 + 타이틀 */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm tracking-widest text-black dark:text-zinc-100">
            {`S E O Y O O N P A R K`}
          </span>
          <span className="text-xs text-gray-700 dark:text-zinc-400">
            / Frontend Developer
          </span>
        </div>

        {/* 우측: 언어 + 다크모드 토글 */}
        <div className="flex gap-2">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
