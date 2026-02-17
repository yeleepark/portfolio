"use client";

interface SidebarProps {
  onMenuClick: (menuId: string) => void;
  activeItem: string | null;
}

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "career", label: "Career" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar({ onMenuClick, activeItem }: SidebarProps) {
  return (
    <aside
      className="fixed left-0 top-12 w-48 h-full bg-white border-r-2 border-black p-4"
      style={{
        boxShadow: "2px 0 0 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav className="flex flex-col gap-2">
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
  );
}
