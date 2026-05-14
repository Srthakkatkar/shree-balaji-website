"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AmbientFX from "@/components/AmbientFX";

const IMAGES = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Gallery() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#070707]">
      <AmbientFX variant="default" />

      {/* HEADER */}
      <div
        ref={ref}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 mb-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="section-label uppercase tracking-[0.25em]"
        >
          Premium Training Fleet
        </motion.div>

        <div className="flex items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="section-title mb-0 tracking-tight"
          >
            Confidence On{" "}
            <span className="text-yellow">Wheels</span>
          </motion.h2>

          {/* Aerodynamic speed-lines accent */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="hidden md:flex flex-col gap-2 mb-3 flex-shrink-0"
          >
            {[52, 36, 20].map((w, i) => (
              <div
                key={i}
                className="h-px bg-gradient-to-r from-yellow/60 to-transparent"
                style={{ width: `${w}px`, opacity: 0.6 - i * 0.15 }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* GALLERY TRACK */}
      <div className="relative w-full overflow-hidden">
        {/* LEFT FADE */}
        <div className="absolute top-0 left-0 bottom-0 w-20 md:w-52 z-10 bg-gradient-to-r from-[#070707] to-transparent pointer-events-none" />
        {/* RIGHT FADE */}
        <div className="absolute top-0 right-0 bottom-0 w-20 md:w-52 z-10 bg-gradient-to-l from-[#070707] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {[...IMAGES, ...IMAGES].map((src, i) => (
            <div
              key={i}
              className="group relative w-[280px] h-[360px] md:w-[420px] md:h-[520px] flex-shrink-0 rounded-[28px] overflow-hidden border border-white/[0.05] bg-black hover:border-yellow/20 hover:shadow-[0_0_40px_rgba(245,197,24,0.12)] transition-all duration-500"
            >
              <Image
                src={src}
                alt="Shree Balaji Motor Training School Vehicle"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                sizes="(max-width:768px) 280px, 420px"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-65 transition duration-500" />

              {/* Top tag */}
              <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.2em] text-yellow">
                Shree Balaji Fleet
              </div>

              {/* Metallic corner bracket */}
              <div className="absolute top-5 right-5 w-5 h-5 border-t border-r border-yellow/25 rounded-tr-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Bottom text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-10 h-px bg-yellow/60 mb-4 group-hover:w-16 transition-all duration-500" />
                <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug">
                  Premium Training Vehicle
                </h3>
                <p className="text-white/60 text-sm mt-2 tracking-wide">
                  Confidence • Safety • Control
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-yellow/0 group-hover:bg-yellow/[0.07] transition-colors duration-500 mix-blend-overlay" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
