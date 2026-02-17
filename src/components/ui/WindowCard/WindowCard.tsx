"use client";

import WindowTitleBar from "@/components/ui/WindowTitleBar";
import Image from "next/image";
import { useState, useEffect } from "react";

type Direction = "front" | "back" | "left" | "right";

const directionImages: Record<Direction, string> = {
  front: "/assets/crop_front.png",
  back: "/assets/crop_back.png",
  left: "/assets/crop_left.png",
  right: "/assets/crop_right.png",
};

export default function WindowCard() {
  const [direction, setDirection] = useState<Direction>("front");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          setDirection("back");
          break;
        case "ArrowDown":
        case "s":
        case "S":
          setDirection("front");
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          setDirection("left");
          break;
        case "ArrowRight":
        case "d":
        case "D":
          setDirection("right");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="w-full max-w-[calc(100vw-2rem)] sm:max-w-sm border-2 bg-white border-black"
      style={{
        boxShadow:
          "2px 2px 0 0 rgba(0, 0, 0, 0.25), inset -1px -1px 0 0 rgba(0, 0, 0, 0.15), inset 1px 1px 0 0 rgba(255, 255, 255, 0.9)",
      }}
    >
      <WindowTitleBar title="S E O Y O O N P A R K" />

      {/* Content Area */}
      <div className="p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center gap-4 sm:gap-6">
        <Image
          src={directionImages[direction]}
          alt="Character"
          width={500}
          height={500}
          className="pixelated h-[30vh] sm:h-[40vh] md:h-[50vh] w-auto"
          priority
        />
      </div>
    </div>
  );
}
