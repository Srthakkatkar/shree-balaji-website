"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import AmbientFX from "@/components/AmbientFX";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#040404]"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: bgY }}
      >
        <Image
          src="/hero-car.png"
          alt="Premium cinematic automotive background"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlays */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(100deg, rgba(4,4,4,0.93) 0%, rgba(4,4,4,0.72) 42%, rgba(4,4,4,0.28) 70%, rgba(4,4,4,0.18) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(4,4,4,1) 0%, rgba(4,4,4,0.85) 18%, rgba(4,4,4,0.35) 40%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 72% 48%, rgba(245,197,24,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Ambient 3D FX layer */}
      <AmbientFX variant="hero" />

      {/* Corner accents */}
      <div className="absolute top-7 left-7 z-[3] pointer-events-none hidden lg:block">
        <div className="w-10 h-px bg-yellow-400/35" />
        <div className="w-px h-10 bg-yellow-400/35" />
      </div>
      <div className="absolute bottom-7 right-7 z-[3] pointer-events-none hidden lg:block">
        <div className="w-10 h-px bg-yellow-400/25 ml-auto" />
        <div className="w-px h-10 bg-yellow-400/25 ml-auto" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 will-change-transform w-full max-w-[1400px] mx-auto px-6 md:px-14 pt-32 pb-24"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-[620px]"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-9">
            <span className="inline-flex items-center gap-2.5 border border-yellow-400/25 bg-black/30 px-5 py-2.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse-dot flex-shrink-0" />
              <span className="text-yellow-400 text-[10px] font-medium tracking-[0.18em] uppercase font-marathi">
                {h.badge}
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-marathi font-black leading-[0.88] tracking-[-0.04em]"
            style={{ fontSize: "clamp(58px, 8vw, 118px)" }}
          >
            <span className="block whitespace-nowrap">
              Confidence <span className="text-white">ने</span>
            </span>

            <span
              className="block text-yellow-400"
              style={{
                textShadow: "0 0 48px rgba(245,197,24,0.22)",
              }}
            >
              Driving
            </span>

            <span className="block text-white">
              शिका
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mt-7 mb-7">
            <div className="h-px w-8 bg-yellow-400/60 flex-shrink-0" />
            <div className="h-px flex-1 bg-white/[0.06]" />
          </motion.div>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 font-light leading-[1.8] max-w-[420px] font-marathi"
            style={{ fontSize: "clamp(13.5px, 1.4vw, 16px)" }}
          >
            {h.sub}
          </motion.p>

          {/* Stats */}
          <motion.div variants={fadeUp} className="flex gap-8 mt-8">
            {h.stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span
                  className="font-display text-yellow-400 leading-none"
                  style={{ fontSize: "clamp(24px, 2.8vw, 36px)" }}
                >
                  {s.value}
                </span>
                <span className="text-gray-500 text-[10px] tracking-[0.12em] uppercase mt-1.5 font-marathi">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
            <a href="#contact" className="btn-primary font-marathi">
              <span>▶</span>
              {h.cta1}
            </a>
            <a
              href="https://wa.me/919850114660?text=Hello%20Shree%20Balaji%20Motor%20Training%20School!%20I%20saw%20your%20website%20and%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noreferrer"
              className="btn-secondary font-marathi"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {h.cta2}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-10"
      >
        <span className="text-[8px] tracking-[4px] uppercase text-white/25 font-marathi">
          {h.scroll}
        </span>
        <div
          className="w-px h-11"
          style={{
            background: "linear-gradient(to bottom, rgba(245,197,24,0.7), transparent)",
            animation: "scrollPulse 2.2s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* Bottom-right label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-14 right-8 z-10 hidden lg:flex flex-col items-end gap-1.5 pointer-events-none"
      >
        <span className="text-[9px] tracking-[4px] uppercase text-white/18 font-light">
          Premium Experience
        </span>
        <div className="w-16 h-px bg-yellow-400/20" />
      </motion.div>
    </section>
  );
}
