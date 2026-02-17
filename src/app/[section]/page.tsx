import { notFound } from "next/navigation";
import SectionContent from "@/components/layout/SectionContent";

const validSections = ["about", "skills", "projects", "career", "contact"];

export const dynamicParams = false;

export function generateStaticParams() {
  return validSections.map((section) => ({ section }));
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  if (!validSections.includes(section)) {
    notFound();
  }

  return <SectionContent section={section} />;
}
