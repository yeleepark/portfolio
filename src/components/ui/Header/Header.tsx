const socialLinks = [
  { label: "GitHub", url: "https://github.com/yeleepark" },
  { label: "LinkedIn", url: "https://linkedin.com/in/yeleepark" },
];

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "career", label: "Career" },
  { id: "contact", label: "Contact" },
];

interface HeaderProps {
  onMenuClick?: (menuId: string) => void;
  activeItem?: string | null;
}

export default function Header({ onMenuClick, activeItem }: HeaderProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white border-b-2 border-black z-50"
      style={{
        boxShadow:
          "2px 2px 0 0 rgba(0, 0, 0, 0.25), inset -1px -1px 0 0 rgba(0, 0, 0, 0.15), inset 1px 1px 0 0 rgba(255, 255, 255, 0.9)",
      }}
    >
      {/* 모바일/태블릿: 이름 + 가로 스크롤 메뉴 */}
      <div className="lg:hidden">
        {/* 이름 */}
        <div className="px-4 py-2 text-center border-b border-black">
          <span className="font-bold text-xs sm:text-sm tracking-wide sm:tracking-widest">
            <span className="hidden sm:inline">{`S E O Y O O N P A R K`}</span>
            <span className="sm:hidden">{`S E O Y O O N P A R K`}</span>
          </span>
        </div>

        {/* 가로 스크롤 메뉴 */}
        <div className="overflow-x-auto scrollbar-hide">
          <nav className="flex gap-1 p-2 min-w-max">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onMenuClick?.(item.id)}
                className={`
                  border-2 border-black px-4 py-2 font-bold text-xs sm:text-sm whitespace-nowrap
                  transition-all
                  ${
                    activeItem === item.id
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-zinc-100"
                  }
                `}
                style={{
                  boxShadow:
                    activeItem === item.id
                      ? "inset 2px 2px 0 0 rgba(0, 0, 0, 0.3)"
                      : "2px 2px 0 0 rgba(0, 0, 0, 0.25)",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* 데스크톱: 이름 + 소셜 링크 */}
      <div className="hidden lg:flex items-center justify-between gap-2 px-4 py-2">
        {/* 좌측: 이름 + 타이틀 */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm tracking-widest">
            {`S E O Y O O N P A R K`}
          </span>
          <span className="text-xs text-gray-700">/ Frontend Developer</span>
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
              className="border-2 border-black px-4 py-2 text-sm font-bold min-h-[44px] min-w-[44px] flex items-center justify-center
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
