const experiences = [
  {
    period: "2025.09 — 현재",
    company: "바비톡",
    role: "Frontend Developer",
    descriptions: [
      { text: "글로벌 웹 담당", href: "https://web.babitalk.com/ja" },
    ],
    isCurrent: true,
  },
  {
    period: "2021.01 — 2025.09",
    company: "메가존클라우드",
    role: "Frontend Developer",
    descriptions: [
      { text: "호스팅케이알 개발", href: "https://hosting.kr" },
    ],
    isCurrent: false,
  },
];

export default function WorkExperienceSection() {
  return (
    <div className="relative pl-6">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-300 dark:bg-zinc-600" />

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="relative">
            <div
              className={`absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                exp.isCurrent
                  ? "bg-black dark:bg-zinc-100 border-black dark:border-zinc-100"
                  : "bg-white dark:bg-zinc-800 border-zinc-400 dark:border-zinc-500"
              }`}
            />

            <p className="text-xs text-gray-500 dark:text-zinc-400 tracking-wide">
              {exp.period}
            </p>

            <h3 className="text-base font-bold mt-1">
              {exp.company}
              {exp.isCurrent && (
                <span className="ml-2 text-xs font-medium text-white dark:text-black bg-black dark:bg-zinc-100 px-1.5 py-0.5 border border-black dark:border-zinc-100 align-middle">
                  재직중
                </span>
              )}
            </h3>

            <p className="text-sm text-gray-600 dark:text-zinc-400 mt-0.5">
              {exp.role}
            </p>

            <ul className="mt-2 space-y-1">
              {exp.descriptions.map((desc) => (
                <li
                  key={desc.text}
                  className="text-sm text-gray-700 dark:text-zinc-300 flex items-start gap-2"
                >
                  <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  {desc.href ? (
                    <a
                      href={desc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black dark:hover:text-zinc-100 hover:underline transition-colors"
                    >
                      {desc.text}
                    </a>
                  ) : (
                    desc.text
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
