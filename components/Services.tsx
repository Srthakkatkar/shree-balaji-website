"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LangContext";
import AmbientFX from "@/components/AmbientFX";

const ease = [0.22, 1, 0.36, 1] as const;

// Premium SVG icons for each service category
const RtoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="2" y="6" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 10h24" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="21" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 17h10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
);

const PucIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 3L4 8v7c0 5.25 4.25 10.15 10 11.35C19.75 25.15 24 20.25 24 15V8L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M9.5 14l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HsrpIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="9" width="22" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6.5" cy="14" r="1.5" fill="currentColor" />
    <circle cx="21.5" cy="14" r="1.5" fill="currentColor" />
    <path d="M9 12h10M9 16h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const iconMap: Record<string, React.FC> = {
  rto: RtoIcon,
  puc: PucIcon,
  hsrp: HsrpIcon,
};

export default function Services() {
  const { t } = useLang();
  const s = t.services;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="relative py-28 md:py-40 overflow-hidden bg-[#040404]"
    >
      {/* Side glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 15% 55%, rgba(245,197,24,0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 40%, rgba(245,197,24,0.03) 0%, transparent 60%)",
        }}
      />
      <AmbientFX variant="default" />

      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* ── Header ── */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="section-label font-marathi"
          >
            {s.sectionLabel}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="section-title"
          >
            {s.title1}{" "}
            <span className="text-yellow">{s.titleHighlight}</span>
            <br />
            {s.title2}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-gray-400 text-sm leading-loose max-w-[480px] mt-4 font-marathi"
          >
            {s.lead}
          </motion.p>
        </div>

        {/* ── Service Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {s.cards.map((card, i) => {
            const Icon = iconMap[card.iconKey] ?? RtoIcon;
            return (
              <motion.div
                key={card.iconKey}
                initial={{ opacity: 0, y: 48 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.2 + i * 0.12, ease }}
                className="group relative flex flex-col bg-white/[0.025] border border-white/[0.07] overflow-hidden hover:border-yellow/30 hover:-translate-y-2 transition-all duration-500 cursor-default"
              >
                {/* Yellow top glow strip */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600" />

                {/* Background glow blob on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,197,24,0.07) 0%, transparent 70%)",
                  }}
                />

                <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 border border-yellow/20 bg-yellow/[0.06] flex items-center justify-center text-yellow mb-6 group-hover:border-yellow/50 group-hover:bg-yellow/[0.1] transition-all duration-400">
                    <Icon />
                  </div>

                  {/* Card index */}
                  <div className="font-display text-[10px] tracking-[3px] text-yellow/30 mb-4 group-hover:text-yellow/60 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl tracking-[2px] text-white mb-2 group-hover:text-yellow transition-colors duration-400 uppercase">
                    {card.title}
                  </h3>
                  <p className="text-[12px] tracking-[1.5px] uppercase text-yellow/50 mb-5 font-marathi">
                    {card.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="w-8 h-px bg-yellow/25 mb-6 group-hover:w-16 transition-all duration-500" />

                  {/* Description */}
                  <p className="text-[13px] text-gray-400 leading-relaxed font-marathi mb-7">
                    {card.desc}
                  </p>

                  {/* Service chips */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {card.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] tracking-[1.2px] uppercase border border-white/10 px-3 py-1 text-gray-500 bg-white/[0.02] group-hover:border-yellow/20 group-hover:text-gray-400 transition-all duration-300 font-marathi"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent group-hover:via-yellow/20 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.65, ease }}
          className="mt-16 md:mt-20 border border-white/[0.06] bg-white/[0.015] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 80% at 100% 50%, rgba(245,197,24,0.04) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <p className="font-display text-[10px] tracking-[3px] uppercase text-yellow/50 mb-1">
              {s.ctaBadge}
            </p>
            <p className="text-white text-lg font-semibold font-marathi">
              {s.ctaTitle}
            </p>
          </div>
          <a href="#contact" className="btn-primary font-marathi relative z-10 whitespace-nowrap">
            <span>▶</span> {s.ctaBtn}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
