"use client";

import { motion } from "framer-motion";
import WindowTitleBar from "@/components/ui/WindowTitleBar";

interface ContentWindowProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export default function ContentWindow({
  title,
  children,
  onClose,
}: ContentWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full border-2 bg-white border-black flex flex-col md:h-full md:min-h-0 shadow-window"
    >
      <WindowTitleBar title={title} onClose={onClose} />

      <div className="flex-1 md:overflow-y-auto p-3 sm:p-6 md:p-8">
        {children}
      </div>
    </motion.div>
  );
}
