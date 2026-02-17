"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "@/i18n/context";
import { locales } from "@/i18n";

export default function LocaleToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLocale = (newLocale: string) => {
    // Save preference to localStorage
    localStorage.setItem("locale", newLocale);

    // Get the path without the current locale
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    router.push(newPath);
  };

  return (
    <div className="flex gap-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`
            border-2 border-black dark:border-zinc-500 w-10 h-10 flex items-center justify-center
            font-bold text-xs transition-all
            ${
              currentLocale === locale
                ? "bg-black dark:bg-zinc-100 text-white dark:text-black shadow-button-active"
                : "bg-white dark:bg-zinc-700 text-black dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-600 shadow-button"
            }
          `}
          aria-label={`Switch to ${locale.toUpperCase()}`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
