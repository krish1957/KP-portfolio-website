"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Quip from "./Quip";

const SPIDEY_QUIPS = [
  "still scrolling? same",
  "web checkout complete",
  "to the footer we go",
  "your friendly dev",
  "drama-free code only",
];

/**
 * Spider-Man scroll companion — rappels down the right edge as you scroll,
 * swaying gently on his web line. Hidden on touch/small screens.
 */
export default function SpiderCompanion() {
  const [enabled, setEnabled] = useState(false);
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 500], [-190, 10]);
  const y = useSpring(rawY, { stiffness: 60, damping: 16, mass: 0.8 });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ y }}
      className="pointer-events-none fixed right-8 top-0 z-40 select-none"
    >
      <div className="animate-sway relative">
        {/* web line */}
        <div className="absolute left-1/2 top-0 h-[62vh] w-px -translate-x-1/2 bg-gradient-to-b from-paper/60 via-paper/25 to-transparent" />
        {/* spidey */}
        <img
          src="/characters/spiderman-cut.png"
          alt=""
          className="relative mt-[9vh] w-[74px] drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]"
          draggable={false}
        />
        {/* label */}
        <Quip
          messages={SPIDEY_QUIPS}
          tailSide="right"
          className="absolute right-full top-[13vh] mr-4 xl:top-[15vh]"
          initialDelay={3}
          minGap={9}
          maxGap={15}
        />
      </div>
    </motion.div>
  );
}
