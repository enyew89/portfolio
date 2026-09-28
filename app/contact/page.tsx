import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact | Enyew Yirga",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-accent selection:text-background flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-5xl w-full px-6 py-12 sm:py-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
