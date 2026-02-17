"use client";

import ContentWindow from "@/components/ui/ContentWindow";
import HomeSection from "@/components/content/HomeSection";
import { useLocale } from "@/i18n/context";
import { getDictionary } from "@/i18n";

export default function HomeContent() {
  const locale = useLocale();
  const dict = getDictionary(locale);

  return (
    <ContentWindow title={dict.home.welcome}>
      <HomeSection />
    </ContentWindow>
  );
}
