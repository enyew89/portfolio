import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import HomeContact from "./components/HomeContact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-accent selection:text-background flex flex-col">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-5xl px-6 py-12 sm:py-20">
        <div className="space-y-24 sm:space-y-32">
          <Hero />
          <hr className="section-divider" />
          <About />
          <hr className="section-divider" />
          <Experience />
          <hr className="section-divider" />
          <HomeContact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
