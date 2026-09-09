import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-accent-cream">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}