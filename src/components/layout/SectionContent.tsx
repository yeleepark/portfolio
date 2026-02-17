"use client";

import { useRouter } from "next/navigation";
import ContentWindow from "@/components/ui/ContentWindow";
import AboutSection from "@/components/content/AboutSection";
import SkillsSection from "@/components/content/SkillsSection";
import ProjectsSection from "@/components/content/ProjectsSection";
import WorkExperienceSection from "@/components/content/WorkExperienceSection";
import ContactSection from "@/components/content/ContactSection";

const windowTitles: Record<string, string> = {
  about: "A B O U T",
  skills: "S K I L L S",
  projects: "P R O J E C T S",
  "work-experience": "W O R K  E X P E R I E N C E",
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
    case "work-experience":
      return <WorkExperienceSection />;
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
