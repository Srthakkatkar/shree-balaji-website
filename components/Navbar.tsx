"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(5,5,5,0.96)] backdrop-blur-xl border-b border-yellow/10 px-6 md:px-10 py-3"
            : "px-6 md:px-10 py-4"
        }`}
      >
        {/* ── Logo ── */}
        <a href="#" className="flex items-center gap-3 no-underline flex-shrink-0">
          <div className="relative w-9 h-9 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Shree Balaji Logo"
              fill
              className="object-contain"
              sizes="36px"
            />
          </div>
          <div className="leading-tight">
            <span className="block font-display text-[15px] tracking-[2px] text-white">
              SHREE BALAJI
            </span>
            <span className="block text-[8px] tracking-[2.5px] text-yellow uppercase">
              Motor Training School · इचलकरंजी
            </span>
          </div>
        </a>

        {/* ── Desktop nav ── */}
        <ul className="hidden md:flex gap-8 items-center list-none">
          {t.nav.links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[11px] tracking-[1.8px] uppercase text-gray-300 no-underline transition-colors duration-300 hover:text-yellow font-marathi"
              >
                {l.label}
              </a>
            </li>
          ))}

          {/* Language toggle */}
          <li>
            <button
              onClick={toggle}
              aria-label="Switch language"
              className="group flex items-center gap-2 border border-white/15 hover:border-yellow/40 px-3.5 py-1.5 transition-all duration-300 rounded-full bg-white/[0.03] hover:bg-yellow/[0.06]"
            >
              <span className="text-[10px] leading-none">
                {lang === "mr" ? "🇮🇳" : "🇮🇳"}
              </span>
              <span className="text-[10px] tracking-[1.5px] uppercase text-gray-300 group-hover:text-yellow transition-colors duration-300">
                {t.nav.langLabel}
              </span>
            </button>
          </li>

          {/* CTA */}
          <li>
            <a
              href="#contact"
              className="bg-yellow text-black text-[10px] tracking-[2px] uppercase font-bold px-5 py-2.5 no-underline transition-all duration-300 hover:bg-yellow-deep font-marathi"
            >
              {t.nav.cta}
            </a>
          </li>
        </ul>

        {/* ── Mobile: lang toggle + hamburger ── */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="border border-white/15 px-3 py-1 rounded-full text-[9px] tracking-wider uppercase text-gray-400 hover:text-yellow hover:border-yellow/40 transition-all duration-300"
          >
            {t.nav.langLabel}
          </button>
          <button
            className="flex flex-col gap-1.5 p-1.5 cursor-pointer bg-transparent border-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-white"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white origin-center"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 bg-[#040404] z-[999] flex flex-col items-center justify-center gap-10"
          >
            {/* Logo in menu */}
            <div className="absolute top-6 left-6 flex items-center gap-2.5">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" sizes="32px" />
              </div>
              <span className="font-display text-sm tracking-[2px] text-white">SHREE BALAJI</span>
            </div>

            {[...t.nav.links, { label: t.nav.cta, href: "#contact" }].map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: i * 0.08 }}
                onClick={closeMenu}
                className="font-display text-4xl md:text-5xl tracking-[4px] text-white no-underline hover:text-yellow transition-colors duration-300"
              >
                {l.label.toUpperCase()}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
