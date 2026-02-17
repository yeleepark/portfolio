"use client";

import { useLocale } from "@/i18n/context";
import { getDictionary } from "@/i18n";

const Br = () => <br className="hidden lg:block" />;

export default function AboutSection() {
  const locale = useLocale();
  const dict = getDictionary(locale);
  const years = new Date().getFullYear() - 2021 + 1;

  const about = [
    dict.about.location,
    dict.about.education,
    dict.about.mbti,
    dict.about.hobby,
    dict.about.funFacts,
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p>
          {dict.about.greeting.replace("👋🏻", "")}
          <span className="ml-1 inline-block origin-[70%_70%] animate-wave">
            👋🏻
          </span>
          <br />
          {dict.about.intro3.replace("{{years}}", years.toString()).replace("<strong>박서윤</strong>", "<strong>Seoyoon Park</strong>")}
        </p>
        <p>
          {dict.about.intro1}
        </p>
        <p>
          {dict.about.intro2}
        </p>
      </div>

      <hr className="border-zinc-300 dark:border-zinc-600" />

      <div className="space-y-5">
        {about.map((item) => (
          <div key={item.label}>
            <h3 className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
              {item.label}
            </h3>
            <p className="text-sm mt-1 whitespace-pre-line">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
