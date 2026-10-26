"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

type QuipProps = {
  /** List of short messages — one is shown at a time, never twice in a row. */
  messages: string[];
  /** Positioning / sizing classes for the wrapper. The bubble is centered on the wrapper by default. */
  className?: string;
  /** Where the little tail points. */
  tailSide?: "bottom" | "right" | "left" | "top";
  /** Min seconds between two quips. */
  minGap?: number;
  /** Max seconds between two quips. */
  maxGap?: number;
  /** Seconds the bubble stays visible. */
  visibleFor?: number;
  /** Seconds before the first quip. */
  initialDelay?: number;
};

/**
 * A tiny speech bubble that pops up at random intervals with one of the
 * given messages. Only runs while visible, ignores pointer events, and
 * never repeats the same message twice in a row.
 */
export default function Quip({
  messages,
  className = "",
  tailSide = "bottom",
  minGap = 6,
  maxGap = 11,
  visibleFor = 3.2,
  initialDelay = 2.5,
}: QuipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-30px" });
  const [quip, setQuip] = useState<{ text: string; n: number } | null>(null);
  const lastIdx = useRef(-1);
  const cycle = useRef(0);

  useEffect(() => {
    if (!inView) return; // out of view: rendering is gated on inView, just stop scheduling
    let alive = true;
    const timers: Array<ReturnType<typeof setTimeout>> = [];
    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const show = () => {
      if (!alive) return;
      // pick a random index that isn't the previous one
      let i = Math.floor(Math.random() * messages.length);
      if (messages.length > 1) {
        while (i === lastIdx.current) i = Math.floor(Math.random() * messages.length);
      }
      lastIdx.current = i;
      setQuip({ text: messages[i], n: cycle.current++ });
      timers.push(setTimeout(() => alive && setQuip(null), visibleFor * 1000));
      timers.push(setTimeout(show, (visibleFor + rand(minGap, maxGap)) * 1000));
    };

    timers.push(setTimeout(show, initialDelay * 1000));
    return () => {
      alive = false;
      timers.forEach(clearTimeout);
    };
  }, [inView, messages, minGap, maxGap, visibleFor, initialDelay]);

  const tailClass = {
    bottom: "-bottom-[5px] left-1/2 -translate-x-1/2 border-b border-r",
    top: "-top-[5px] left-1/2 -translate-x-1/2 border-t border-l",
    right: "-right-[5px] top-1/2 -translate-y-1/2 border-r border-t",
    left: "-left-[5px] top-1/2 -translate-y-1/2 border-l border-b",
  }[tailSide];

  return (
    <div ref={ref} className={`pointer-events-none ${className}`} aria-live="polite">
      <AnimatePresence mode="wait">
        {inView && quip && (
          <motion.div
            key={`${quip.n}`}
            initial={{ opacity: 0, y: 10, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 8, scale: 0.88 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative whitespace-nowrap rounded-xl border border-line bg-paper px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-ink shadow-[0_12px_32px_rgba(0,0,0,0.5)] sm:text-[10px]"
          >
            {quip.text}
            <span
              aria-hidden="true"
              className={`absolute size-2.5 rotate-45 border-line bg-paper ${tailClass}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
