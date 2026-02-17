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
      initial={{ scaleY: 0.02, scaleX: 0.6, opacity: 0 }}
      animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
      exit={{ scaleY: 0.02, scaleX: 0.6, opacity: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.2, 0.9, 0.3, 1],
        opacity: { duration: 0.15 },
      }}
      style={{ transformOrigin: "top center" }}
      className="w-full border-2 bg-white dark:bg-zinc-800 border-black dark:border-zinc-500 flex flex-col md:h-full md:min-h-0 shadow-window transition-colors"
    >
      <WindowTitleBar title={title} onClose={onClose} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.25 }}
        className="flex-1 md:overflow-y-auto p-3 sm:p-6 md:p-8 text-black dark:text-zinc-100"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
