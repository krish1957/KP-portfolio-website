"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  id: string;
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  live: string;
  github?: string;
  img: string;
  wide?: boolean;
};

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "UrbanFix",
    tag: "Civic Tech — Web App",
    desc: "A civic issue reporting platform that lets citizens flag potholes, dead streetlights and leaks with location + photos, then track resolution status with local authorities. Built to make cities feel accountable.",
    stack: ["React", "Node.js", "Firebase", "REST APIs"],
    live: "https://urban-resolve-tnw5.vercel.app/",
    img: "/characters/urbanfix-shot.jpg",
  },
  {
    id: "02",
    title: "EcoVision",
    tag: "AI — Decision Support",
    desc: "An AI-powered environmental platform for India that fuses satellite data, machine learning and geospatial analysis into real-time air-quality insight — built for stakeholders who need to act, not just admire dashboards.",
    stack: ["AI / ML", "Satellite Data", "Geospatial", "Vercel"],
    live: "https://eco-vision-woad.vercel.app/",
    github: "https://github.com/ruddy-codes/EcoVision",
    img: "/characters/ecovision-shot.jpg",
  },
  {
    id: "03",
    title: "Manas Charitable Trust",
    tag: "Nonprofit — Web Design & Build",
    desc: "A complete digital home for Manas Charitable Trust, Nadiad — built to champion the Manas Bhavan project in Ayodhya. Sections for the complex, live event listings, donation tiers and a full English ↔ Gujarati bilingual toggle, hand-coded and shipped to Vercel.",
    stack: ["HTML5", "CSS3", "Vanilla JS", "Bilingual EN·GU", "Vercel"],
    live: "https://manas-charitable-trust.vercel.app/",
    github: "https://github.com/krish1957/Manas-Charitable-Trust",
    img: "/characters/manas-shot.jpg",
    wide: true,
  },
];

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden bg-acid px-5 py-24 text-ink sm:px-8 sm:py-32 lg:px-12">
      {/* ghost background type */}
      <span
        aria-hidden="true"
        className="text-outline-ink pointer-events-none absolute -right-8 top-10 select-none font-display text-[18vw] uppercase leading-none opacity-[0.07]"
      >
        Work
      </span>

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-ink/70"
            >
              ( Things I&apos;ve shipped )
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-[clamp(2.2rem,7vw,5.5rem)] uppercase leading-[0.95] tracking-tight text-violet drop-shadow-[3px_3px_0_rgba(10,10,11,1)]"
            >
              Selected
              <br />
              Work*
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-ink/70"
          >
            *Three stubborn ideas that refused to die in the group chat and went live instead.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl bg-ink text-paper shadow-[0_24px_50px_rgba(10,10,11,0.35)] transition-transform duration-500 hover:-translate-y-2 ${
                p.wide ? "lg:col-span-2 lg:flex-row" : ""
              }`}
            >
              {/* screenshot */}
              <div
                className={`relative overflow-hidden border-line ${
                  p.wide
                    ? "h-60 border-b sm:h-72 lg:h-auto lg:w-[46%] lg:self-stretch lg:border-b-0 lg:border-r"
                    : "h-60 border-b sm:h-72"
                }`}
              >
                <img
                  src={p.img}
                  alt={`${p.title} screenshot`}
                  className={`transition-transform duration-700 group-hover:scale-105 ${
                    p.wide
                      ? "absolute inset-0 h-full w-full object-cover"
                      : "h-full w-full object-cover object-top"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-acid px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                  {p.id}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">{p.tag}</p>
                <h3 className="mt-3 font-display text-3xl uppercase tracking-tight text-paper transition-colors duration-300 group-hover:text-acid sm:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-fog">{p.desc}</p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tech stack for ${p.title}`}>
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fog"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-5 border-t border-line pt-5 font-mono text-xs uppercase tracking-[0.18em]">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-acid transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Live app <ArrowUpRight className="size-4" />
                  </a>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-paper transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <Github className="size-4" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
