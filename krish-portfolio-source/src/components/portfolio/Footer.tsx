"use client";

import { motion } from "framer-motion";
import { ArrowUp, FileDown, Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  {
    label: "Email",
    value: "krishpanchal1957@gmail.com",
    href: "mailto:krishpanchal1957@gmail.com",
    icon: Mail,
    wide: true,
  },
  {
    label: "GitHub",
    value: "krish1957",
    href: "https://github.com/krish1957",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "krishpanchal1957",
    href: "https://www.linkedin.com/in/krishpanchal1957",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-acid text-ink">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-24 sm:px-8 sm:pt-32 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-ink/70"
        >
          ( Got a project? A hackathon slot? A crazy idea? )
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-5xl font-display text-[clamp(2.3rem,7.5vw,6rem)] uppercase leading-[0.95] tracking-tight"
        >
          Let&apos;s create{" "}
          <span className="relative inline-block">
            good stuff
            <span className="absolute -bottom-1 left-0 h-[0.09em] w-full bg-ink" aria-hidden="true" />
          </span>{" "}
          together
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="mailto:krishpanchal1957@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid transition-transform duration-300 hover:scale-105 active:scale-95 sm:text-sm"
          >
            <Mail className="size-4 transition-transform duration-300 group-hover:-rotate-12" />
            Shoot a message
          </a>
          <a
            href="/Krish-Panchal-Resume.docx"
            download
            className="inline-flex items-center gap-3 rounded-full border-2 border-ink px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-ink hover:text-acid sm:text-sm"
          >
            <FileDown className="size-4" />
            Download CV
          </a>
        </motion.div>

        {/* link row — email gets a full row so the address never leaves its box */}
        <div className="mt-16 grid gap-4 border-t-2 border-ink/15 pt-8 sm:grid-cols-2">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`group flex items-center justify-between gap-3 rounded-xl border border-ink/15 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:text-acid ${
                l.wide ? "sm:col-span-2" : ""
              }`}
            >
              <span className="flex min-w-0 items-center gap-3">
                <l.icon className="size-4 shrink-0" />
                <span className="min-w-0">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.25em] opacity-60">
                    {l.label}
                  </span>
                  <span className="break-all font-mono text-xs font-bold leading-snug md:text-sm">{l.value}</span>
                </span>
              </span>
              <span className="shrink-0 font-mono opacity-0 transition-opacity duration-300 group-hover:opacity-100">↗</span>
            </a>
          ))}
        </div>

        {/* meta row */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70">
          <span>© 2026 Krish Panchal</span>
          <span className="hidden sm:inline">Designed &amp; coded with too much chai</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-4 py-2 transition-colors duration-300 hover:bg-ink hover:text-acid"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>

      {/* giant dot-matrix sign-off */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="select-none px-2 pb-2"
        aria-hidden="true"
      >
        <p className="dot-matrix whitespace-nowrap text-center font-display text-[13.5vw] uppercase leading-[0.9] tracking-tight">
          Portfolio/Krish
        </p>
      </motion.div>
    </footer>
  );
}
