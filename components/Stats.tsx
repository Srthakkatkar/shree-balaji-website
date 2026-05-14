"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LangContext";
import AmbientFX from "@/components/AmbientFX";

const RAW_STATS = [
  { value: 25, suffix: "+", decimal: false },
  { value: 5000, suffix: "+", decimal: false },
  { value: 98, suffix: "%", decimal: false },
  { value: 4.9, suffix: "★", decimal: true },
];

function Counter({ value, suffix, decimal }: { value: number; suffix: string; decimal: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * value);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-yellow" style={{ fontSize: "clamp(48px,5vw,72px)", lineHeight: 1 }}>
      {decimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
      <span className="text-yellow-deep">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative bg-gray-900 border-t border-b border-yellow/10 py-20 px-6 md:px-10 overflow-hidden">
      <AmbientFX variant="stats" />
      <div
        className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4"
        style={{ gap: "1px", background: "rgba(245,197,24,0.08)" }}
      >
        {RAW_STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="relative bg-gray-900 px-5 py-12 text-center group overflow-hidden hover:bg-yellow/[0.04] transition-colors duration-500 cursor-default"
          >
            {/* Bottom fill bar */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            {/* Top glass highlight on hover */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Counter value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
            <p className="text-[11px] tracking-[2px] uppercase text-gray-400 mt-3 font-marathi">
              {t.stats.items[i].label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
