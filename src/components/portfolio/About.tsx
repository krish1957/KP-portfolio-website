"use client";

import { motion } from "framer-motion";
import Roamer from "./Roamer";

const TRAITS = ["Leadership", "Problem Solving", "Adaptive Learning", "Teamwork"];

const COURAGE_QUIPS = [
  "not scared — you are",
  "2am build buddy",
  "anxiety mascot on duty",
  "boop the snoot",
];

export default function About() {
  return (
    <section className="relative overflow-hidden border-t border-line px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="pointer-events-none absolute right-0 top-0 size-[30rem] rounded-full bg-pinky/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Courage — background-trimmed cutout, roams his half of the section */}
        <div className="order-2 lg:order-1">
          <Roamer
            src="/characters/courage-cut.png"
            alt="Courage the Cowardly Dog — the studio's anxiety mascot, roaming the section"
            quips={COURAGE_QUIPS}
            path={[
              { fx: -0.8, fy: -0.45, r: -5 },
              { fx: 0.65, fy: 0.2, r: 4 },
              { fx: -0.35, fy: 0.6, r: -3 },
              { fx: 0.8, fy: -0.6, r: 6 },
              { fx: 0.1, fy: 0.4, r: -4 },
            ]}
            loop={17}
            sizeClass="w-44 sm:w-52"
            caption="Mood mascot — he roams, he judges"
            quipDelay={4}
          />
        </div>

        {/* copy */}
        <div className="order-1 lg:order-2">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-pinky"
          >
            ( The human behind the pixels )
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-[clamp(1.9rem,4.5vw,3.4rem)] uppercase leading-[1.02] tracking-tight text-paper"
          >
            Leader. Builder.
            <br />
            <span className="text-pinky">Chaotic-good</span> engineer.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl space-y-4 leading-relaxed text-fog"
          >
            <p>
              Results-oriented and slightly sleep-deprived, I turn real-world problems into
              technology-driven solutions — an AI environmental analysis platform here, a civic
              issue reporting app there. If it can be demoed at 2 AM, I&apos;ve probably built it.
            </p>
            <p>
              Leadership isn&apos;t a buzzword on my résumé; it&apos;s 160+ volunteers coordinated
              under my supervision, three hackathon teams steered from idea to pitch, and a campus
              podcast club kept in order. I code the front-end, own the roadmap, and take the blame
              when the demo gods strike.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
            aria-label="Soft skills"
          >
            {TRAITS.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper transition-all duration-300 hover:border-pinky hover:text-pinky sm:text-xs"
              >
                {t}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
