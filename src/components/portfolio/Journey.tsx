"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Users } from "lucide-react";
import Roamer from "./Roamer";

const BUGS_QUIPS = [
  "what's up, doc?",
  "8.7 cpi, no cap",
  "that's all folks… for now",
  "attitude: unlimited",
];

const HACKATHONS = [
  {
    year: "2025 & 2026",
    title: "Smart India Hackathon",
    role: "Team Leader · Front-end Developer",
    note: "Steered the team from problem scoping to pitch; owned the interface that judges actually touched.",
  },
  {
    year: "2026",
    title: "Hackfest by GDG",
    role: "Team Leader · Front-end Developer",
    note: "Led a crew through 36 hours of caffeine-fueled shipping — prototype to demo without losing the plot.",
  },
  {
    year: "2026",
    title: "Mecia Hacks 3.0",
    role: "Team Leader · AI Implementation",
    note: "Wired the intelligence layer — turning the team's idea into something that could actually think.",
  },
];

const CAMPUS = [
  { role: "IP Cell — Admin Head", org: "SVIT Vasad · Current" },
  { role: "SVIT Podcast Club — Admin & Logistics", org: "SVIT Vasad · Current" },
  { role: "TEDxSVIT 2026 — Admin & Logistics", org: "SVIT Vasad" },
  { role: "ISTE 2026 — Admin Member", org: "SVIT Vasad" },
  { role: "MCT Nadiad — Volunteer Supervisor", org: "160+ volunteers under supervision" },
];

const EDUCATION = [
  {
    school: "Sardar Vallabhbhai Patel Institute of Technology, Vasad",
    degree: "Bachelor of Computer Engineering",
    years: "2025 — Present",
    score: "CPI 8.7",
  },
  {
    school: "ETS CBSE, Nadiad",
    degree: "Class 11–12 · CBSE",
    years: "2023 — 2025",
    score: "12th 84% · JEE 92.8 PR",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden border-t border-line px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="pointer-events-none absolute -left-32 top-1/3 size-[26rem] rounded-full bg-violet/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 size-[24rem] rounded-full bg-pinky/8 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-violet"
        >
          ( The journey )
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl font-display text-[clamp(1.9rem,4.5vw,3.4rem)] uppercase leading-[1.02] tracking-tight text-paper"
        >
          Battle scars &amp; <span className="text-outline">breadcrumbs</span>
        </motion.h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* hackathon timeline */}
          <div>
            <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-acid">
              <Trophy className="size-4" /> Hackathon command
            </h3>
            <ol className="mt-8 space-y-0">
              {HACKATHONS.map((h, i) => (
                <motion.li
                  key={h.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative border-l border-line pb-10 pl-8 last:pb-0"
                >
                  <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-acid shadow-[0_0_12px_rgba(200,255,46,0.8)] transition-transform duration-300 group-hover:scale-150" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">{h.year}</p>
                  <h4 className="mt-2 font-display text-xl uppercase tracking-tight text-paper transition-colors duration-300 group-hover:text-acid sm:text-2xl">
                    {h.title}
                  </h4>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-violet">{h.role}</p>
                  <p className="mt-3 max-w-md leading-relaxed text-fog">{h.note}</p>
                </motion.li>
              ))}
            </ol>

            {/* campus duty */}
            <h3 className="mt-14 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-pinky">
              <Users className="size-4" /> Campus duty roster
            </h3>
            <ul className="mt-6 space-y-1">
              {CAMPUS.map((c, i) => (
                <motion.li
                  key={c.role}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                  className="group flex items-baseline justify-between gap-4 rounded-lg px-3 py-3 transition-colors duration-300 hover:bg-panel"
                >
                  <span className="text-sm text-paper transition-transform duration-300 group-hover:translate-x-1.5">
                    {c.role}
                  </span>
                  <span className="shrink-0 text-right font-mono text-[10px] uppercase tracking-[0.16em] text-fog">
                    {c.org}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* bugs + education */}
          <div className="space-y-12">
            <Roamer
              src="/characters/bugs-cut.png"
              alt="Bugs Bunny in sunglasses — attitude supervisor of this section, hopping around the timeline"
              quips={BUGS_QUIPS}
              path={[
                { fx: 0.5, fy: -0.55, r: 4 },
                { fx: -0.55, fy: -0.15, r: -5 },
                { fx: 0.35, fy: 0.5, r: 3 },
                { fx: -0.3, fy: -0.6, r: -3 },
                { fx: 0.6, fy: 0.15, r: 5 },
              ]}
              loop={14}
              sizeClass="w-36 sm:w-44"
              caption="Attitude supervisor — patrolling the timeline"
              quipDelay={5}
              minGap={7}
              maxGap={12}
            />

            <div>
              <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-paper">
                <GraduationCap className="size-4 text-acid" /> Education
              </h3>
              <div className="mt-6 space-y-4">
                {EDUCATION.map((e, i) => (
                  <motion.div
                    key={e.school}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className="group rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-acid/50"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog">{e.years}</span>
                      <span className="rounded-full bg-acid/15 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-acid">
                        {e.score}
                      </span>
                    </div>
                    <h4 className="mt-3 leading-snug text-paper transition-colors duration-300 group-hover:text-acid">
                      {e.school}
                    </h4>
                    <p className="mt-1 text-sm text-fog">{e.degree}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
