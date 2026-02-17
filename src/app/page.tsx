"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/ui/Header";
import WindowCard from "@/components/ui/WindowCard";
import Sidebar from "@/components/ui/Sidebar";
import ContentWindow from "@/components/ui/ContentWindow";
import AboutSection from "@/components/content/AboutSection";
import SkillsSection from "@/components/content/SkillsSection";
import ProjectsSection from "@/components/content/ProjectsSection";
import CareerSection from "@/components/content/CareerSection";
import ContactSection from "@/components/content/ContactSection";

const windowTitles: Record<string, string> = {
  about: "A B O U T",
  skills: "S K I L L S",
  projects: "P R O J E C T S",
  career: "C A R E E R",
  contact: "C O N T A C T",
};

const validWindows = ["about", "skills", "projects", "career", "contact"];

export default function Home() {
  const [openWindow, setOpenWindow] = useState<string | null>("about");

  // 초기 로드 시 URL 해시 읽기
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && validWindows.includes(hash)) {
      setOpenWindow(hash);
    } else {
      // 해시가 없거나 유효하지 않으면 기본값으로 about 설정
      window.location.hash = "about";
    }
  }, []);

  // 해시 변경 감지
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && validWindows.includes(hash)) {
        setOpenWindow(hash);
      } else if (!hash) {
        setOpenWindow(null);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // 메뉴 클릭 시 해시 업데이트
  const handleMenuClick = (menuId: string) => {
    window.location.hash = menuId;
  };

  // 윈도우 닫기 시 해시 제거
  const handleCloseWindow = () => {
    window.history.pushState(null, "", window.location.pathname);
    setOpenWindow(null);
  };

  const renderContent = (windowId: string) => {
    switch (windowId) {
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "career":
        return <CareerSection />;
      case "contact":
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-200">
      <Header />

      <div className="flex pt-16">
        <Sidebar onMenuClick={handleMenuClick} activeItem={openWindow} />

        <main className="flex-1 min-h-[calc(100vh-4rem)] flex items-center justify-center gap-8 p-4 ml-48">
          <WindowCard />

          <AnimatePresence>
            {openWindow && (
              <ContentWindow
                title={windowTitles[openWindow]}
                onClose={handleCloseWindow}
                isOpen={!!openWindow}
              >
                {renderContent(openWindow)}
              </ContentWindow>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
