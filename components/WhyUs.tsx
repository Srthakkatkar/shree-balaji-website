"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LangContext";
import AmbientFX from "@/components/AmbientFX";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WhyUs() {
  const { lang } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const w = lang === "mr"
    ? {
        sectionLabel: "आम्हीच का?",
        title1: "फक्त गाडी नाही,",
        titleHighlight: "आत्मविश्वास",
        title2: "शिकवतो",
        lead: "अनुभवी प्रशिक्षण, सुरक्षित सराव आणि प्रत्येक विद्यार्थ्याकडे वैयक्तिक लक्ष — जेणेकरून तुम्ही रस्त्यावर आत्मविश्वासाने गाडी चालवाल.",
        features: [
          { num: "०१", title: "४०+ वर्षांचा अनुभव", desc: "१९८५ पासून इचलकरंजीमध्ये विश्वासार्ह ड्रायव्हिंग प्रशिक्षण." },
          { num: "०२", title: "तज्ज्ञ प्रशिक्षक", desc: "प्रत्येक विद्यार्थ्याला संयमाने आणि योग्य पद्धतीने मार्गदर्शन." },
          { num: "०३", title: "प्रत्यक्ष रस्त्यावरील सराव", desc: "फक्त मैदानावर नाही — वास्तविक वाहतुकीत सुरक्षित ड्रायव्हिंगचा सराव." },
          { num: "०४", title: "सुरक्षिततेला प्राधान्य", desc: "नियम, नियंत्रण आणि जबाबदार ड्रायव्हिंगच्या सवयींवर भर." },
          { num: "०५", title: "RTO मार्गदर्शन", desc: "ड्रायव्हिंग टेस्टसाठी आवश्यक कौशल्ये आणि योग्य मार्गदर्शन." },
          { num: "०६", title: "संपूर्ण वाहन सेवा", desc: "Driving Training सोबत RTO, PUC आणि HSRP सेवा एकाच ठिकाणी." },
        ],
      }
    : {
        sectionLabel: "WHY US",
        title1: "More Than Driving,",
        titleHighlight: "Confidence",
        title2: "Is What We Teach",
        lead: "Experienced training, safe practice and personal attention — so you drive on real roads with confidence.",
        features: [
          { num: "01", title: "40+ Years of Experience", desc: "Trusted driving training in Ichalkaranji since 1985." },
          { num: "02", title: "Expert Instructors", desc: "Patient, practical guidance tailored to every learner." },
          { num: "03", title: "Real Road Practice", desc: "Learn safe driving beyond the training ground, in real traffic." },
          { num: "04", title: "Safety First", desc: "Strong focus on road rules, vehicle control and responsible driving." },
          { num: "05", title: "RTO Test Guidance", desc: "Build the skills and confidence needed for your driving test." },
          { num: "06", title: "Complete Vehicle Services", desc: "Driving Training, RTO, PUC and HSRP services under one roof." },
        ],
      };

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
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600" />
              <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-yellow/20 group-hover:bg-yellow/50 transition-colors duration-300" />
              <div className="font-display text-[11px] tracking-[3px] text-yellow/30 mb-6 group-hover:text-yellow/60 transition-colors duration-300">
                {f.num}
              </div>
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
