import Header from "@/components/ui/Header";
import WindowCard from "@/components/ui/WindowCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-200">
      <Header />

      <main className="min-h-screen flex items-center justify-center p-4">
        <WindowCard />
      </main>
    </div>
  );
}
