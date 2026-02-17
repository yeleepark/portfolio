interface WindowTitleBarProps {
  title: string;
  onClose?: () => void;
}

export default function WindowTitleBar({ title, onClose }: WindowTitleBarProps) {
  return (
    <div className="border-b-2 border-black px-3 py-2 flex items-center justify-between">
      {onClose && (
        <button
          onClick={onClose}
          className="p-3 -m-2 relative"
          aria-label="닫기"
        >
          <div className="w-3 h-3 rounded-full bg-red-500 border border-black hover:bg-red-600 transition-colors" />
        </button>
      )}
      <span className="font-bold text-xs sm:text-sm text-black flex-1 text-center truncate px-2">
        {title}
      </span>
      {onClose && <div className="w-3" />}
    </div>
  );
}
