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
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null
  );

  // 키보드 이벤트
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

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;

    const minSwipeDistance = 30; // 최소 스와이프 거리

    // 가로/세로 중 더 큰 방향으로 판단
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // 좌우 스와이프
      if (Math.abs(deltaX) > minSwipeDistance) {
        setDirection(deltaX > 0 ? "right" : "left");
      }
    } else {
      // 상하 스와이프
      if (Math.abs(deltaY) > minSwipeDistance) {
        setDirection(deltaY > 0 ? "front" : "back");
      }
    }

    setTouchStart(null);
  };

  return (
    <div
      className="w-full border-2 bg-white border-black md:h-full md:min-h-0 flex flex-col shadow-window"
    >
      <WindowTitleBar title="S E O Y O O N P A R K" />

      {/* Content Area */}
      <div
        className="flex-1 min-h-0 p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center gap-4 sm:gap-6 touch-none select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={directionImages[direction]}
          alt="Character"
          width={500}
          height={500}
          className="pixelated h-[30vh] md:h-auto md:max-h-full w-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
