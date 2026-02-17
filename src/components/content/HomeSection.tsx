"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/context";
import { getDictionary } from "@/i18n";
import ParticleScene from "@/components/three/ParticleScene";
import CRTEffect from "@/components/three/effects/CRTEffect";
import TypingAnimation from "@/components/three/effects/TypingAnimation";

export default function HomeSection() {
  const locale = useLocale();
  const dict = getDictionary(locale);
  const [isDark, setIsDark] = useState(false);

  // Track dark mode changes
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.9, 0.3, 1] }}
      className="relative w-full h-full min-h-[60vh] md:min-h-0 flex flex-col items-center justify-center overflow-hidden"
      role="img"
    >
      {/* Three.js Particle System */}
      <div className="absolute inset-0 z-0">
        <ParticleScene isDark={isDark} />
      </div>

      {/* CRT Effect Overlay */}
      <CRTEffect />

      {/* Typing Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-10 mt-auto mb-8 px-4"
      >
        <TypingAnimation
          text={`${dict.common.name} | ${dict.common.jobTitle}`}
        />
      </motion.div>
    </motion.div>
  );
}
