"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, locales, type Locale } from "@/i18n";

function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  // 1. Check localStorage for user preference
  const stored = localStorage.getItem("locale");
  if (stored && locales.includes(stored as Locale)) {
    return stored as Locale;
  }

  // 2. Check browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("ko")) {
    return "ko";
  } else if (browserLang.startsWith("en")) {
    return "en";
  }

  // 3. Default fallback
  return defaultLocale;
}

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const locale = detectBrowserLocale();
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
