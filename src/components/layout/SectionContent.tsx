"use client";

import { useRouter } from "next/navigation";
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

function renderContent(section: string) {
  switch (section) {
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
}

export default function SectionContent({ section }: { section: string }) {
  const router = useRouter();

  return (
    <ContentWindow
      title={windowTitles[section]}
      onClose={() => router.push("/")}
    >
      {renderContent(section)}
    </ContentWindow>
  );
}
