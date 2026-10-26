"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const STATS = [
  { value: "8.7", label: "CPI at SVIT Vasad", accent: "text-acid" },
  { value: "3×", label: "Hackathon team leader", accent: "text-pinky" },
  { value: "160+", label: "Volunteers supervised", accent: "text-violet" },
  { value: "03", label: "Products shipped live", accent: "text-paper" },
];

function Stat({ value, label, accent, index }: (typeof STATS)[number] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 34 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-t border-line pt-5"
    >
      <span className={`absolute left-0 top-0 h-px w-8 bg-current ${accent} opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100`} />
      <p className={`font-display text-4xl sm:text-5xl ${accent}`}>{value}</p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-fog sm:text-xs">{label}</p>
    </motion.div>
  );
}

export default function Manifesto() {
  return (
    <section id="about-intro" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      {/* geometric line-art watermark (from uploaded tattoo art, inverted to glow) */}
      <motion.img
        src="/characters/geo-invert.jpg"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, rotate: 8 }}
        whileInView={{ opacity: 0.16, rotate: 14 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="pointer-events-none absolute -right-10 top-1/2 hidden w-64 -translate-y-1/2 md:block lg:w-80"
      />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-violet/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-acid"
        >
          ( The manifesto )
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-4xl font-display text-[clamp(1.7rem,4.6vw,3.6rem)] uppercase leading-[1.04] tracking-tight text-paper"
        >
          Great work isn&apos;t built by talent alone — it&apos;s forged through{" "}
          <span className="text-acid">late-night builds</span>, botched drafts &amp; one too many{" "}
          <span className="text-outline">&ldquo;just one last tweak&rdquo;</span>.
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-fog sm:text-lg"
        >
          <p>
            I&apos;m Krish — a computer engineering student at SVIT Vasad who treats every hackathon
            like a launch window. I&apos;ve led teams at Smart India Hackathon, Hackfest by GDG and
            Mecia Hacks, shipping front-ends under 36-hour deadlines and wiring AI into products
            that people actually use.
          </p>
          <p>
            Off the stage, I&apos;ve coordinated 160+ volunteers for cultural festivals, run admin
            ops for TEDxSVIT, and turned three stubborn ideas —{" "}
            <span className="text-paper">EcoVision</span>,{" "}
            <span className="text-paper">UrbanFix</span> and the{" "}
            <span className="text-paper">Manas Charitable Trust</span> website — into live
            platforms. The pattern is simple: find what&apos;s broken, learn fast, build it better.
          </p>
        </motion.div>

        {/* stats */}
        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Stat key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
