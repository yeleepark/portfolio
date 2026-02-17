"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        size: 4 + Math.random() * 6,
        color: [
          "#f472b6",
          "#facc15",
          "#60a5fa",
          "#34d399",
          "#fb923c",
          "#c084fc",
        ][Math.floor(Math.random() * 6)],
        round: Math.random() > 0.5,
        rotate: Math.random() > 0.5 ? 360 : -360,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute animate-[confetti-fall_linear_forwards]"
          style={{
            left: `${p.x}vw`,
            top: -20,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.round ? "50%" : "0",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

export default function BirthdayEasterEgg() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const today = new Date();
    if (today.getMonth() === 1 && today.getDate() === 17) {
      const key = `birthday-seen-${today.getFullYear()}`;
      if (!sessionStorage.getItem(key)) {
        setShow(true);
        sessionStorage.setItem(key, "true");
      }
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => setDismissed(true), 4000);
    return () => clearTimeout(timer);
  }, [show]);

  if (!show) return null;

  return (
    <>
      <Confetti />
      <AnimatePresence>
        {!dismissed && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.4, exit: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setDismissed(true)}
            />
            <div className="relative border-2 border-black dark:border-zinc-500 bg-white dark:bg-zinc-800 shadow-window max-w-sm w-full">
              <div className="border-b-2 border-black dark:border-zinc-500 px-3 py-2 flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm text-black dark:text-zinc-100 flex-1 text-center">
                  🎂 H A P P Y  B I R T H D A Y 🎂
                </span>
              </div>
              <div className="p-6 text-center space-y-3">
                <p className="text-4xl">🎉🥳🎈</p>
                <p className="text-sm text-black dark:text-zinc-100 font-bold">
                  오늘은 저의 생일입니다!
                </p>
                <p className="text-xs text-gray-500 dark:text-zinc-400">
                  방문해 주셔서 감사합니다 :)
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
