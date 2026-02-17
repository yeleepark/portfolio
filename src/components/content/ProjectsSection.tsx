const projects = [
  {
    title: "메가밥스(Megabobs)",
    period: "2025.08",
    description:
      "메가존클라우드 재직 시절, 구내식당 메뉴를 확인하려면 식당 내 게시판까지 직접 가야 하는 불편함이 있었습니다. 이를 해결하기 위해 어디서든 메뉴를 확인할 수 있는 구내식당 메뉴판 웹 서비스를 직접 기획하고 개발했습니다. 오픈 직후 일 방문자 수 3,000명을 넘기며 사내에서 폭발적인 반응을 얻었습니다.",
    links: [
      {
        label: "Website",
        href: "https://www.megabobs.com",
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="border-2 border-black dark:border-zinc-500 p-4 sm:p-5"
        >
          <p className="text-xs text-gray-500 dark:text-zinc-400 tracking-wide">
            {project.period}
          </p>
          <h3 className="text-base font-bold mt-0.5">{project.title}</h3>

          <p className="text-sm text-gray-700 dark:text-zinc-300 mt-2 leading-relaxed">
            {project.description}
          </p>

          {project.links.length > 0 && (
            <div className="flex gap-2 mt-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold border-2 border-black dark:border-zinc-500 px-3 py-1.5 hover:bg-black hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-colors inline-flex items-center gap-1.5"
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
