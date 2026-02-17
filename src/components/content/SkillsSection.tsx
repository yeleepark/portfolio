const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js"],
  },
  {
    category: "Styling",
    items: ["HTML", "CSS", "Tailwind CSS", "MUI"],
  },
  {
    category: "State Management",
    items: ["React Query", "Zustand"],
  },
  {
    category: "Cloud / Infra",
    items: ["AWS CloudFront", "AWS S3", "AWS Amplify"],
  },
  {
    category: "Tools",
    items: ["Slack", "Jira", "Figma"],
  },
];

export default function SkillsSection() {
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
