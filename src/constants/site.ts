export const SITE_CONFIG = {
  url: "https://yeleepark.com",
  name: "Seoyoon Park",
  title: "Seoyoon Park | Frontend Developer",
  description:
    "프론트엔드 개발자 박서윤의 포트폴리오입니다. React, Next.js, TypeScript 기반의 웹 개발 프로젝트와 경력을 소개합니다.",
  locale: "ko_KR",
  author: {
    name: "Seoyoon Park",
    jobTitle: "Frontend Developer",
    email: "dev.yelee@gmail.com",
    github: "https://github.com/yeleepark",
    linkedin: "https://linkedin.com/in/yeleepark",
  },
} as const;

export const SECTION_META: Record<
  string,
  { title: string; description: string }
> = {
  about: {
    title: "About",
    description:
      "프론트엔드 개발자 박서윤을 소개합니다.",
  },
  skills: {
    title: "Skills",
    description:
      "React, Next.js, TypeScript, Tailwind CSS 등 프론트엔드 개발에 활용하는 기술 스택을 소개합니다.",
  },
  projects: {
    title: "Projects",
    description:
      "직접 기획하고 개발한 웹 프로젝트들을 소개합니다. 각 프로젝트의 기술 스택과 구현 과정을 확인하세요.",
  },
  career: {
    title: "Career",
    description:
      "프론트엔드 개발자로서의 경력과 경험을 소개합니다. 참여한 프로젝트와 역할을 확인하세요.",
  },
  contact: {
    title: "Contact",
    description:
      "프론트엔드 개발자 박서윤에게 연락하세요. 협업 제안이나 문의를 환영합니다.",
  },
};
