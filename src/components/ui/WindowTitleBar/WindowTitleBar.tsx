interface WindowTitleBarProps {
  title: string;
}

export default function WindowTitleBar({ title }: WindowTitleBarProps) {
  return (
    <div className="border-b-2 border-black px-3 py-2 flex items-center justify-center">
      <span className="font-bold text-sm text-black">{title}</span>
    </div>
  );
}
