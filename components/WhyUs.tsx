"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LangContext";
import AmbientFX from "@/components/AmbientFX";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WhyUs() {
  const { t } = useLang();
  const w = t.whyus;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-28 md:py-36 overflow-hidden">
      <AmbientFX variant="default" />
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="section-label font-marathi"
        >
          {w.sectionLabel}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="section-title"
        >
          {w.title1} <span className="text-yellow">{w.titleHighlight}</span>
          <br />{w.title2}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="text-gray-400 text-sm leading-loose max-w-[480px] mb-16 font-marathi"
        >
          {w.lead}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {w.features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease }}
              className="relative bg-white/[0.02] border border-white/[0.06] p-10 group hover:bg-yellow/[0.04] hover:border-yellow/25 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Top shine on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600" />
              {/* Subtle corner dot */}
              <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-yellow/20 group-hover:bg-yellow/50 transition-colors duration-300" />

              {/* Number — premium display, no emoji */}
              <div className="font-display text-[11px] tracking-[3px] text-yellow/30 mb-6 group-hover:text-yellow/60 transition-colors duration-300">
                {f.num}
              </div>

              {/* Thin gold accent line */}
              <div className="w-6 h-px bg-yellow-400/40 mb-6 group-hover:w-10 transition-all duration-400" />

              <h3 className="text-base font-semibold text-white mb-3 tracking-wide leading-snug font-marathi group-hover:text-yellow transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed font-marathi">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
