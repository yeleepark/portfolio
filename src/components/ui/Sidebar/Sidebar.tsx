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
    <aside className="fixed left-0 top-16 w-48 h-full bg-white dark:bg-zinc-800 border-r-2 border-black dark:border-zinc-500 p-4 z-50 shadow-sidebar transition-colors">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={`/${item.id}`}
            className={`
              w-full border-2 border-black dark:border-zinc-500 px-4 py-3 font-bold text-sm text-left block
              transition-all
              ${
                activeItem === item.id
                  ? "bg-black dark:bg-zinc-100 text-white dark:text-black shadow-button-active"
                  : "bg-white dark:bg-zinc-700 text-black dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-600 shadow-button"
              }
            `}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
