interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full border-2 border-black text-black py-3 font-bold text-sm transition-colors hover:bg-black hover:text-white"
    >
      {children}
    </button>
  );
}
