import Nav from "@/components/portfolio/Nav";
import Hero3D from "@/components/portfolio/Hero3D";
import Marquee from "@/components/portfolio/Marquee";
import Manifesto from "@/components/portfolio/Manifesto";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Work from "@/components/portfolio/Work";
import Journey from "@/components/portfolio/Journey";
import Footer from "@/components/portfolio/Footer";
import SpiderCompanion from "@/components/portfolio/SpiderCompanion";
import Cursor from "@/components/portfolio/Cursor";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen bg-ink text-paper">
      {/* global film grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[55] opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <Cursor />
      <SpiderCompanion />
      <Nav />

      <main>
        <Hero3D />

        <Marquee
          variant="acid"
          items={[
            "Creative Developer",
            "Hackathon Team Leader",
            "AI Builder",
            "Front-end Engineer",
            "Problem Solver",
            "Chaotic Good",
          ]}
        />

        <Manifesto />
        <About />
        <Skills />
        <Work />

        <Marquee
          variant="ghost"
          slow
          items={[
            "Smart India Hackathon",
            "Hackfest by GDG",
            "Mecia Hacks 3.0",
            "TEDxSVIT 2026",
            "ISTE 2026",
            "160+ Volunteers Led",
          ]}
        />

        <Journey />
      </main>

      <Footer />
    </div>
  );
}
