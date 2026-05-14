"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LangContext";

const reels = [
  { views: "215K", label: "दोन गाड्यांमधून गाडी काढताना घाबरता ?", image: "/reels/reel1.jpeg", link: "https://www.instagram.com/p/DX-3H5sshGM/" },
  { views: "100K", label: "तुम्ही ही चुक करता का ?", image: "/reels/reel2.jpeg", link: "https://www.instagram.com/reel/DYFmf6WyhuN/?igsh=MWxyYjZkNnRzMHNkbg==" },
  { views: "85K",  label: "ड्रायव्हिंग करताना गियर कधी बदलायचे ?", image: "/reels/reel3.jpeg", link: "https://www.instagram.com/p/DWsdrTwyitJ/" },
  { views: "30K",  label: "Safe distance कसं judge करायचं ?", image: "/reels/reel4.jpeg", link: "https://www.instagram.com/p/DYM7FblMjB_/" },
  { views: "19K",  label: "Driving करताना काय लक्षात ठेवावे?", image: "/reels/reel5.png",  link: "https://www.instagram.com/p/DXTFlpRMTZ0/" },
  { views: "13K",  label: "90% drivers ही चूक करतात", image: "/reels/reel6.png",  link: "https://www.instagram.com/p/DXs1f4uyQCh/" },
];

export default function Reels() {
  const { t } = useLang();
  const rl = t.reels;
  const ref = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 2;
  };

  return (
    <section id="reels" className="py-28 md:py-36 overflow-hidden">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-10 mb-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="section-label font-marathi">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-yellow flex-shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            {rl.sectionLabel}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="section-title mb-0">
            {rl.title} <span className="text-yellow">{rl.titleHighlight}</span>
          </motion.h2>
        </div>
        <motion.a initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} href="https://instagram.com/balajimotorschool" target="_blank" rel="noreferrer" className="btn-secondary whitespace-nowrap flex-shrink-0 font-marathi">
          {rl.followBtn}
        </motion.a>
      </div>

      <div ref={trackRef} className="flex gap-5 px-6 md:px-10 overflow-x-auto no-scrollbar select-none" style={{ cursor: "grab" }} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} onMouseMove={onMouseMove}>
        {reels.map((reel, i) => (
          <motion.a key={i} href={reel.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }} className="group relative flex-shrink-0 w-56 h-[420px] md:w-[260px] md:h-[480px] rounded-[24px] overflow-hidden border border-white/[0.08] bg-black hover:border-yellow/40 hover:shadow-[0_0_40px_rgba(245,197,24,0.12)] transition-all duration-500">
            <img src={reel.image} alt={reel.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] text-yellow border border-white/10">Driving Tips</div>
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white border border-white/10">{reel.views} views</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-yellow flex items-center justify-center shadow-[0_0_40px_rgba(245,197,24,0.4)] group-hover:scale-110 transition duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black ml-0.5"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="inline-block mb-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.2em] text-yellow">@balajimotorschool</div>
              <h3 className="text-white text-base font-bold leading-snug font-marathi">{reel.label}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
