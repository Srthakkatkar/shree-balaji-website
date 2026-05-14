"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LangContext";

const reviews = [
  { avatar: "S", name: "Sidram Mali", meta: "Ichalkaranji · 2026", text: "Balaji Motor Driving School provides good training for beginners, I recommend this driving school to others" },
  { avatar: "R", name: "Ravindra Ghorpade", meta: "Ichalkaranji · 2026", text: "प्रदीप  सर आणि येथील ट्रेनर व स्टाफ खूप नम्र, मदत करणारे आणि अनुभवी आहेत. ते शांतपणे मार्गदर्शन करतात आणि शिकणे सोपे करतात." },
  { avatar: "R", name: "Radhika Harulage", meta: "Ichalkaranji · 2025", text: " गाडी शिकत असताना खूप भीती वाटू लागली जमेल नाही जमेल यामध्ये अडकत होते पण सरांनी एक कॉन्फिडन्स निर्माण करून दिला " },
  { avatar: "A", name: "Akshay Sutar", meta: "Ichalkaranji · 2026", text: ". I recommend, please visit the center, If you wish to learn car driving on time 🙂" },
  { avatar: "H", name: "Haris Desai", meta: "Ichalkaranji · 2025", text: "RTO test ची preparation इतकी चांगली केली की exam दिवशी मला काहीच tension नव्हती. पहिल्याच attempt मध्ये pass!" },
  { avatar: "S", name: "Shubham Davari", meta: "Ichalkaranji · 2025", text: "२० दिवसात Beginner ते Confident driver! Sir चे शिकवणे इतके systematic आहे की शिकणे कधी झाले हे कळलेच नाही." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Reviews() {
  const { t } = useLang();
  const r = t.reviews;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="reviews" className="bg-gray-900 py-28 md:py-36">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="section-label font-marathi"
        >
          {r.sectionLabel}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="section-title font-marathi"
        >
          {r.title1} <span className="text-yellow">{r.titleHighlight}</span>{" "}
          {r.title2}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm leading-loose max-w-[400px] mb-16 font-marathi"
        >
          {r.lead}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease }}
              className="relative bg-white/[0.02] border border-white/[0.06] p-9 group hover:bg-yellow/[0.03] hover:border-yellow/15 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-5 left-7 text-5xl leading-none text-yellow/12 font-serif pointer-events-none select-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5 pt-2.5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow text-sm">★</span>
                ))}
              </div>

              <p className="text-sm text-gray-200 leading-loose font-marathi mb-6">{rev.text}</p>

              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.05]">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-yellow-deep to-yellow flex items-center justify-center font-bold text-black text-base font-marathi flex-shrink-0">
                  {rev.avatar}
                </div>
                <div>
                  <span className="block text-sm font-semibold font-marathi">{rev.name}</span>
                  <span className="text-[11px] text-gray-400 tracking-wide">{rev.meta}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
