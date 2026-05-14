"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import AmbientFX from "@/components/AmbientFX";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Journey() {
  const { t } = useLang();
  const j = t.journey;

  const ref = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div id="journey" className="relative bg-[#070707] py-28 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(245,197,24,0.04) 0%, transparent 70%)",
        }}
      />
      <AmbientFX variant="default" />

      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        {/* ── LEFT ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="section-label font-marathi"
          >
            {j.sectionLabel}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="section-title font-marathi"
          >
            {j.title1}
            <br />
            <span className="text-yellow">{j.titleHighlight}</span>
            <br />
            {j.title2}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="text-gray-400 text-sm leading-loose mt-2 max-w-[400px] font-marathi"
          >
            {j.lead}
          </motion.p>

          {/* Steps */}
          <div className="mt-12">
            {j.steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -28 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.28 + i * 0.1, ease }}
                className="group flex gap-5 py-5 border-b border-white/[0.06] hover:pl-2 transition-all duration-500 cursor-default"
              >
                <span className="font-display text-[44px] leading-none min-w-[52px] text-yellow/10 group-hover:text-yellow/80 transition-colors duration-500">
                  {step.num}
                </span>
                <div className="pt-1">
                  <h4 className="text-[13px] font-semibold tracking-wide mb-1.5 group-hover:text-yellow transition-colors duration-300 font-marathi">
                    {step.title}
                  </h4>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300 font-marathi">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.75, ease }}
            className="mt-10"
          >
            <a href="#contact" className="btn-primary font-marathi">
              <span>▶</span> {j.cta}
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT — CINEMATIC PHOTO ── */}
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.2, ease }}
          className="relative"
        >
          <div
            className="absolute -inset-4 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(245,197,24,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] group">
            <div className="relative w-full" style={{ paddingBottom: "118%" }}>
              <motion.div className="absolute inset-[-8%]" style={{ y: photoY }}>
                <Image
                  src="/journey-driving.png"
                  alt="Premium driving experience"
                  fill
                  quality={92}
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              {/* Bottom gradient */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: "linear-gradient(to top, rgba(4,4,4,0.96) 0%, rgba(4,4,4,0.55) 35%, transparent 65%)",
                }}
              />

              {/* Gold top border */}
              <div className="absolute top-0 left-0 right-0 h-px z-20 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.9, delay: 0.6, ease }}
                  className="mb-5"
                >
                  <div className="h-px w-8 bg-yellow-400/70 mb-4" />
                  <p
                    className="font-display tracking-widest uppercase leading-tight text-white"
                    style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
                  >
                    {j.photoOverlay1}{" "}
                    <span className="text-yellow-400">{j.photoOverlay2}</span>
                  </p>
                  <p className="mt-3 text-gray-400 text-[12px] tracking-[0.18em] uppercase font-marathi">
                    {j.photoSub}
                  </p>
                </motion.div>

                {/* Chips */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8, ease }}
                  className="flex gap-3 flex-wrap"
                >
                  {j.chips.map((chip) => (
                    <div
                      key={chip.label}
                      className="flex flex-col border border-yellow-400/20 bg-yellow-400/[0.06] backdrop-blur-md px-4 py-2.5 rounded-lg"
                    >
                      <span className="text-yellow-400 text-[13px] font-semibold leading-none font-marathi">
                        {chip.label}
                      </span>
                      <span className="text-gray-400 text-[10px] tracking-[0.12em] uppercase mt-1 font-marathi">
                        {chip.sub}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-5 right-5 z-20 pointer-events-none">
                <div className="flex flex-col items-end gap-1">
                  <div className="w-6 h-px bg-yellow-400/40" />
                  <div className="w-px h-6 bg-yellow-400/40 self-end" />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1, ease }}
            className="mt-5 flex items-center justify-end gap-3 pr-1"
          >
            <span className="text-[10px] tracking-[3px] uppercase text-gray-600">
              Premium Training Experience
            </span>
            <div className="w-8 h-px bg-yellow-400/30" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
