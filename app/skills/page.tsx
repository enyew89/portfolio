import Header from "../components/Header";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export const metadata = {
  title: "Skills | Enyew Yirga",
  description: "My technical skills and tools.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-accent selection:text-background flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-5xl w-full px-6 py-12 sm:py-20 flex flex-col justify-center">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
