import { SITE_CONFIG } from "@/constants/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-black dark:border-zinc-500 bg-white dark:bg-zinc-800 px-4 py-3 text-center transition-colors">
      <p className="text-xs text-gray-500 dark:text-zinc-400">
        &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
      </p>
    </footer>
  );
}
