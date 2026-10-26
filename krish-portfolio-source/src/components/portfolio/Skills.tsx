"use client";

import { motion } from "framer-motion";
import Roamer from "./Roamer";

const PANTHER_QUIPS = [
  "stay cool, ship fast",
  "vibes: fully loaded",
  "bubble tea powered",
  "too glam to debug",
];

const GROUPS = [
  {
    title: "Code & Web",
    accent: "text-acid",
    items: ["C", "HTML / CSS", "React", "Node.js", "REST APIs"],
  },
  {
    title: "Data & Cloud",
    accent: "text-pinky",
    items: ["Firebase / Firestore"],
  },
  {
    title: "AI & Automation",
    accent: "text-violet",
    items: ["ChatGPT", "Claude", "Google Gemini", "n8n workflows"],
  },
  {
    title: "Ship It",
    accent: "text-paper",
    items: ["GitHub Pages", "Vercel", "Git & GitHub"],
  },
];

function PantherRoamer() {
  return (
    <Roamer
      src="/characters/panther-cut.png"
      alt="Pink Panther in sunglasses sipping bubble tea — official vibe of this stack, patrolling the section"
      quips={PANTHER_QUIPS}
      path={[
        { fx: -0.6, fy: -0.4, r: -3 },
        { fx: 0.55, fy: 0.25, r: 2 },
        { fx: 0.15, fy: -0.65, r: -2 },
        { fx: -0.5, fy: 0.5, r: 3 },
        { fx: 0.6, fy: -0.2, r: -3 },
      ]}
      loop={21}
      sizeClass="w-40 sm:w-52"
      caption="CTO of vibes — on permanent patrol"
      quipDelay={6}
      minGap={8}
      maxGap={13}
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-line px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="pointer-events-none absolute -left-24 top-24 size-96 rounded-full bg-acid/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-pinky/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-acid"
            >
              ( Arsenal )
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-[clamp(1.9rem,4.5vw,3.4rem)] uppercase leading-[1.02] tracking-tight text-paper"
            >
              Weapons of
              <br />
              mass <span className="text-outline">creation</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-fog"
          >
            A stack chosen for speed of shipping, not hype. Everything here has survived a
            hackathon demo.
          </motion.p>
        </div>

        {/* Content first, mascot second — at every breakpoint */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            {GROUPS.map((g, gi) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group border-t border-line pt-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className={`font-display text-lg uppercase tracking-wide sm:text-xl ${g.accent}`}>
                    {g.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
                    0{gi + 1}
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-panel px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-acid hover:text-acid sm:text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Pink Panther patrols the right half — after the content */}
          <PantherRoamer />
        </div>
      </div>
    </section>
  );
}
