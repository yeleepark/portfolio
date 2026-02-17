import Link from "next/link";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "career", label: "Career" },
  { id: "contact", label: "Contact" },
];

interface SidebarProps {
  activeItem: string | null;
}

export default function Sidebar({ activeItem }: SidebarProps) {
  return (
    <aside
      className="fixed left-0 top-16 w-48 h-full bg-white border-r-2 border-black p-4 z-50"
      style={{
        boxShadow: "2px 0 0 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={`/${item.id}`}
            className={`
              w-full border-2 border-black px-4 py-3 font-bold text-sm text-left block
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
          </Link>
        ))}
      </nav>
    </aside>
  );
}
