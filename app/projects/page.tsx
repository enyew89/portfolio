import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export const metadata = {
  title: "Projects | Enyew Yirga",
  description: "Things I've built.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-accent selection:text-background flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-5xl w-full px-6 py-12 sm:py-20">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
