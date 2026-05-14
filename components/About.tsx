"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LangContext";
import AmbientFX from "@/components/AmbientFX";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative py-28 md:py-40 overflow-hidden bg-[#060606]"
    >
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 30%, rgba(245,197,24,0.05) 0%, transparent 65%)",
        }}
      />
      <AmbientFX variant="default" />

      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-6 md:px-12"
      >
        {/* ── Section Header ── */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="section-label font-marathi inline-block"
          >
            {a.sectionLabel}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="section-title mt-3"
          >
            {a.title1}{" "}
            <span className="text-yellow">{a.titleHighlight}</span>
            <br />
            {a.title2}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-gray-400 text-sm leading-loose max-w-[520px] mx-auto mt-4 font-marathi"
          >
            {a.lead}
          </motion.p>
        </div>

        {/* ── Legacy Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 md:mb-28"
        >
          {a.stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.3 + i * 0.08, ease }}
              className="relative border border-yellow/10 bg-white/[0.02] p-6 md:p-8 text-center group hover:border-yellow/30 hover:bg-yellow/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Top shimmer on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="font-display text-[clamp(30px,5vw,52px)] text-yellow leading-none font-bold">
                {s.value}
              </div>
              <div className="text-[11px] tracking-[2px] uppercase text-gray-400 mt-2 font-marathi">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow/40 via-yellow/15 to-transparent origin-top hidden sm:block"
            style={{ transform: "translateX(-50%)" }}
          />

          <div className="space-y-12 md:space-y-0">
            {a.timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -36 : 36 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.75, delay: 0.45 + i * 0.12, ease }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-40px)] ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"} pl-10 sm:pl-0`}>
                    <div
                      className={`relative bg-white/[0.025] border border-white/[0.07] p-7 md:p-8 group hover:border-yellow/25 hover:bg-yellow/[0.03] transition-all duration-500 ${isLeft ? "" : ""}`}
                    >
                      {/* Corner accent */}
                      <div className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} w-8 h-px bg-yellow/30`} />
                      <div
                        className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} w-px h-8 bg-yellow/30`}
                      />

                      <div className="font-display text-[11px] tracking-[3px] text-yellow/50 mb-2 group-hover:text-yellow/80 transition-colors duration-300">
                        {item.year}
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2 tracking-wide font-marathi group-hover:text-yellow transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed font-marathi">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Centre dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#060606] border border-yellow/40 items-center justify-center z-10 shadow-[0_0_16px_rgba(245,197,24,0.25)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow" />
                  </div>

                  {/* Mobile dot */}
                  <div className="absolute left-0 top-8 sm:hidden w-4 h-4 rounded-full border border-yellow/40 bg-[#060606] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom trust strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease }}
          className="mt-20 md:mt-28 border-t border-white/[0.06] pt-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-display text-[11px] tracking-[3px] uppercase text-yellow/50 mb-1">
              {a.trustBadge}
            </p>
            <p className="text-white text-lg font-semibold font-marathi">
              {a.trustTitle}
            </p>
            {/* Co-founder attribution */}
            <div className="flex items-center gap-3 mt-4">
              <div className="w-4 h-px bg-yellow/30" />
              <span className="text-[10px] tracking-[2.5px] uppercase text-gray-500">
                Co-Founder
              </span>
              <span className="text-[11px] tracking-[1.5px] text-gray-400 font-light">
                Pradeep Arjun Kanoje
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            {a.pillars.map((p) => (
              <div key={p} className="text-center">
                <div className="w-px h-8 bg-yellow/20 mx-auto mb-2" />
                <span className="text-[11px] tracking-[2px] uppercase text-gray-500 font-marathi">
                  {p}
                </span>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn-primary font-marathi">
            <span>▶</span> {a.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
