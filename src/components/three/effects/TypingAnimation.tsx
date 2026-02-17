"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  typingSpeed?: number;
  cursorBlinkSpeed?: number;
}

/**
 * Terminal-style typing animation with blinking cursor
 */
export default function TypingAnimation({
  text,
  typingSpeed = 100,
  cursorBlinkSpeed = 500,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(interval);
  }, [cursorBlinkSpeed]);

  return (
    <div className="font-mono text-lg md:text-2xl text-center">
      <span className="text-black dark:text-green-400">{displayedText}</span>
      <span
        className={`inline-block w-[2px] h-[1em] ml-1 bg-black dark:bg-green-400 transition-opacity duration-100 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
