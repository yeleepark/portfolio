"use client";

interface SidebarProps {
  onMenuClick: (menuId: string) => void;
  activeItem: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "career", label: "Career" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar({
  onMenuClick,
  activeItem,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* 모바일 오버레이 백드롭 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={onClose}
          aria-label="사이드바 닫기"
        />
      )}

      <aside
        className={`
          fixed left-0 top-16 w-48 h-full bg-white border-r-2 border-black p-4 z-50
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        style={{
          boxShadow: "2px 0 0 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <nav className="flex flex-col gap-2">
          {/* 모바일 닫기 버튼 */}
          <button
            onClick={onClose}
            className="lg:hidden w-full border-2 border-black px-4 py-3 font-bold text-sm bg-red-500 text-white hover:bg-red-600 transition-colors"
            style={{ boxShadow: "2px 2px 0 0 rgba(0, 0, 0, 0.25)" }}
            aria-label="메뉴 닫기"
          >
            Close
          </button>

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onMenuClick(item.id)}
              className={`
                w-full border-2 border-black px-4 py-3 font-bold text-sm text-left
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
      </aside>
    </>
  );
}
