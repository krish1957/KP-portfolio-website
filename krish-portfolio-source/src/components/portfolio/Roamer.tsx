"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Quip from "./Quip";

/** A roam waypoint as a fraction (-1..1) of the available half width/height. */
type Waypoint = { fx: number; fy: number; r?: number };

type RoamerProps = {
  /** Transparent cutout of the character. */
  src: string;
  alt: string;
  quips: string[];
  /** Wander path inside the play area. */
  path: Waypoint[];
  /** Seconds for one full wander loop — keep unique per character. */
  loop?: number;
  /** Width classes for the character image. */
  sizeClass?: string;
  /** Caption shown under the play area. */
  caption?: string;
  /** Play-area height classes. */
  areaClass?: string;
  quipDelay?: number;
  minGap?: number;
  maxGap?: number;
};

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/**
 * A character that roams around a bounded play area inside its section,
 * speech bubble riding along. The wander path never exceeds the measured
 * play area, so the character can't drift over copy. Pauses when off-screen
 * and stands still for prefers-reduced-motion visitors.
 */
export default function Roamer({
  src,
  alt,
  quips,
  path,
  loop = 16,
  sizeClass = "w-40 sm:w-48",
  caption,
  areaClass = "h-[320px] sm:h-[400px] lg:h-[460px]",
  quipDelay = 4,
  minGap = 7,
  maxGap = 12,
}: RoamerProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const inView = useInView(boxRef, { margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [half, setHalf] = useState({ x: 0, y: 0 });

  // measure the play area and the character so the wander stays in bounds
  useEffect(() => {
    const measure = () => {
      const box = boxRef.current;
      const img = imgRef.current;
      if (!box || !img) return;
      setHalf({
        x: Math.max(0, (box.clientWidth - img.clientWidth) / 2),
        y: Math.max(0, (box.clientHeight - img.clientHeight) / 2),
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (boxRef.current) ro.observe(boxRef.current);
    if (imgRef.current) ro.observe(imgRef.current);
    return () => ro.disconnect();
  }, []);

  // keyframe track: center -> waypoints -> back to center
  const stops = [ { fx: 0, fy: 0, r: 0 }, ...path, { fx: 0, fy: 0, r: 0 } ];
  const xs = stops.map((s) => clamp(s.fx * half.x, -half.x, half.x));
  const ys = stops.map((s) => clamp(s.fy * half.y, -half.y, half.y));
  const rs = stops.map((s) => s.r ?? 0);
  const times = stops.map((_, i) => i / (stops.length - 1));

  const roaming = inView && !reduceMotion && half.x > 0;

  return (
    <div className="flex flex-col items-center">
      <div
        ref={boxRef}
        className={`relative flex w-full items-center justify-center ${areaClass}`}
      >
        <motion.div
          animate={
            roaming
              ? { x: xs, y: ys, rotate: rs }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={
            roaming
              ? { duration: loop, repeat: Infinity, ease: "easeInOut", times }
              : { duration: 0.4 }
          }
          className="relative"
        >
          <Quip
            messages={quips}
            className="absolute -top-12 left-1/2 z-20 w-max -translate-x-1/2"
            initialDelay={quipDelay}
            minGap={minGap}
            maxGap={maxGap}
          />
          <motion.img
            ref={imgRef}
            src={src}
            alt={alt}
            whileHover={{ scale: 1.08, rotate: -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 15 }}
            className={`${sizeClass} cursor-pointer select-none drop-shadow-[0_24px_36px_rgba(0,0,0,0.55)]`}
            draggable={false}
          />
        </motion.div>
      </div>
      {caption && (
        <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
          {caption}
        </p>
      )}
    </div>
  );
}
