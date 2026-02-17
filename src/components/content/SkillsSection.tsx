"use client";

import { useLocale } from "@/i18n/context";
import { getDictionary } from "@/i18n";

export default function SkillsSection() {
  const locale = useLocale();
  const dict = getDictionary(locale);

  const skills = [
    {
      category: dict.skills.frontend,
      items: ["React", "TypeScript", "Next.js"],
    },
    {
      category: dict.skills.styling,
      items: ["HTML", "CSS", "Tailwind CSS", "MUI"],
    },
    {
      category: dict.skills.stateManagement,
      items: ["React Query", "Zustand"],
    },
    {
      category: dict.skills.cloudInfra,
      items: ["AWS CloudFront", "AWS S3", "AWS Amplify"],
    },
    {
      category: dict.skills.tools,
      items: ["Slack", "Jira", "Figma"],
    },
  ];
  return (
    <div className="space-y-5">
      {skills.map((group) => (
        <div key={group.category}>
          <h3 className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="text-sm border-2 border-black dark:border-zinc-500 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
