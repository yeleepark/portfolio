"use client";

import { motion } from "framer-motion";
import WindowTitleBar from "@/components/ui/WindowTitleBar";

interface ContentWindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export default function ContentWindow({
  title,
  children,
  onClose,
  isOpen,
}: ContentWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full max-w-[calc(100vw-2rem)] sm:max-w-xl md:max-w-2xl border-2 bg-white border-black max-h-[85vh] sm:max-h-[80vh] flex flex-col"
      style={{
        boxShadow:
          "4px 4px 0 0 rgba(0, 0, 0, 0.25), inset -1px -1px 0 0 rgba(0, 0, 0, 0.15), inset 1px 1px 0 0 rgba(255, 255, 255, 0.9)",
      }}
    >
      <WindowTitleBar title={title} onClose={onClose} />

      <div className="flex-1 overflow-y-auto p-3 sm:p-6 md:p-8">
        {children}
      </div>
    </motion.div>
  );
}
