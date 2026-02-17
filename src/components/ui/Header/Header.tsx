const socialLinks = [
  { label: "GitHub", url: "https://github.com/yeleepark" },
  { label: "LinkedIn", url: "https://linkedin.com/in/yeleepark" },
];

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 px-4 py-2 bg-white border-b-2 border-black z-50"
      style={{
        boxShadow:
          "2px 2px 0 0 rgba(0, 0, 0, 0.25), inset -1px -1px 0 0 rgba(0, 0, 0, 0.15), inset 1px 1px 0 0 rgba(255, 255, 255, 0.9)",
      }}
    >
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        {/* 좌측: 이름 + 타이틀 */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm tracking-widest">
            {`S E O Y O O N P A R K`}
          </span>
          <span className="text-xs text-gray-700 hidden md:inline">
            / Frontend Developer
          </span>
        </div>

        {/* 우측: 소셜 링크 */}
        <div className="flex gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} 프로필 보기`}
              className="border-2 border-black px-2 py-1 text-xs font-bold
                         transition-colors hover:bg-black hover:text-white"
              style={{
                boxShadow: "2px 2px 0 0 rgba(0, 0, 0, 0.25)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
