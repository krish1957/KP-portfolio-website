"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Arsenal", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="flex h-16 items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main">
        <a
          href="#top"
          className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-paper transition-colors hover:text-acid"
        >
          Krish<span className="text-acid">©</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:text-paper"
              >
                <span className="mr-1.5 text-acid/70">0{i + 1}</span>
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-acid transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper transition-all duration-300 hover:border-acid hover:bg-acid hover:text-ink sm:text-xs"
        >
          <Mail className="size-3.5" />
          <span className="hidden sm:inline">Shoot a message</span>
          <span className="sm:hidden">Say hi</span>
        </a>
      </nav>
    </motion.header>
  );
}
