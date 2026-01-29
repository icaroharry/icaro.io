import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Decorative top border */}
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent z-50" />

      {/* Background gradient orbs */}
      <div className="fixed top-1/4 left-0 -translate-x-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-0 translate-x-1/2 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-emerald-600/3 rounded-full blur-[100px] pointer-events-none" />

      <main className="relative min-h-screen px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <Hero />
        <Timeline />
        <Footer />
      </main>
    </>
  );
}
