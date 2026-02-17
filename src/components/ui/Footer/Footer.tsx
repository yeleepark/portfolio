"use client";

import { SITE_CONFIG } from "@/constants/site";
import { useLocale } from "@/i18n/context";
import { getDictionary } from "@/i18n";

export default function Footer() {
  const locale = useLocale();
  const dict = getDictionary(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-black dark:border-zinc-500 bg-white dark:bg-zinc-800 px-4 py-3 text-center transition-colors">
      <p className="text-xs text-gray-500 dark:text-zinc-400">
        &copy; {currentYear} {SITE_CONFIG.name}. {dict.footer.rights}
      </p>
    </footer>
  );
}
