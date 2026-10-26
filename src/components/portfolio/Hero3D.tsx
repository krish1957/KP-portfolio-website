"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center">
      <div className="size-16 animate-spin-slow rounded-full border border-dashed border-acid/60" />
    </div>
  ),
});

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero3D() {
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      {/* atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 size-[36rem] rounded-full bg-pinky/15 blur-[140px]" />
        <div className="absolute -bottom-48 -right-32 size-[38rem] rounded-full bg-acid/12 blur-[150px]" />
        <div className="absolute left-1/2 top-1/3 size-[26rem] -translate-x-1/2 rounded-full bg-violet/10 blur-[130px]" />
      </div>

      {/* 3D scene */}
      <div className="absolute inset-0">
        <Scene3D />
      </div>

      {/* overlay typography */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between px-5 pb-24 pt-24 sm:px-8 lg:px-12">
        {/* top meta row */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-fog sm:text-xs"
        >
          <span>Folio ©2026</span>
          <span className="hidden sm:inline">Creative Developer</span>
          <span className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-acid" />
            </span>
            Open to work
          </span>
        </motion.div>

        {/* headline */}
        <div className="relative z-10 max-w-[85vw]">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="font-display uppercase leading-[0.84] tracking-tight"
          >
            <span className="block text-[clamp(3.4rem,12.5vw,11.5rem)] text-paper drop-shadow-[0_10px_40px_rgba(0,0,0,0.65)]">
              Krish
            </span>
            <span className="text-outline block text-[clamp(3.4rem,12.5vw,11.5rem)] drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              Panchal
              <span className="align-top text-[0.35em] text-acid [-webkit-text-stroke:0px] [color:var(--color-acid)]">
                ©
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease }}
            className="mt-5 max-w-md font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-fog sm:max-w-lg sm:text-sm"
          >
            Computer engineering student &amp; hackathon team leader —
            <span className="text-paper"> turning real-world chaos into shipped products</span>
            <span className="text-acid">*</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
            className="pointer-events-auto mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              See the work
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="/Krish-Panchal-Resume.docx"
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:border-acid hover:text-acid"
            >
              <FileDown className="size-4" />
              Résumé
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-fog/70"
          >
            *psst — drag the crew around, they don&apos;t bite
          </motion.p>
        </div>

        {/* bottom meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-fog sm:text-xs"
        >
          <span className="hidden sm:inline">Gujarat, India</span>
          <span className="flex items-center gap-2 text-paper">
            Scroll to explore
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <ArrowDown className="size-3.5 text-acid" />
            </motion.span>
          </span>
          <span className="hidden sm:inline">EST. 2026</span>
        </motion.div>
      </div>
    </section>
  );
}
