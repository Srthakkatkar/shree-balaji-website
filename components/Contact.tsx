"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LangContext";

const ICONS = [
  /* Phone */ <svg key="phone" viewBox="0 0 24 24" className="w-5 h-5 fill-yellow"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>,
  /* WhatsApp */ <svg key="wa" viewBox="0 0 24 24" className="w-5 h-5 fill-yellow"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>,
  /* Instagram */ <svg key="ig" viewBox="0 0 24 24" className="w-5 h-5 fill-yellow"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
  /* Location */ <svg key="loc" viewBox="0 0 24 24" className="w-5 h-5 fill-yellow"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>,
];

const HREFS = [
  "tel:+919850114660",
  "https://wa.me/919850114660?text=Hello%20Shree%20Balaji%20Motor%20Training%20School!%20I%20saw%20your%20website%20and%20would%20like%20to%20know%20more.",
  "https://www.instagram.com/balajimotorschool/",
  "https://maps.app.goo.gl/WJJHZZc3iAtUc5bH8",
];

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(245,197,24,0.04), transparent)" }} />

      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-marathi font-black text-center leading-[0.93] mb-4"
          style={{ fontSize: "clamp(40px, 8vw, 100px)" }}
        >
          {c.headline1} <span className="text-yellow">{c.headlineHighlight}</span>
          <br />{c.headline2}
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} className="text-center text-gray-400 text-sm tracking-wide mb-16 font-marathi">
          {c.sub}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex flex-col gap-4 mb-10">
              {c.actions.map((a, i) => (
                <motion.a
                  key={a.label}
                  href={HREFS[i]}
                  target={HREFS[i].startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-5 px-7 py-6 bg-white/[0.02] border border-white/[0.06] text-white no-underline group hover:bg-yellow/[0.06] hover:border-yellow/25 hover:translate-x-1.5 transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {ICONS[i]}
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-[2px] uppercase text-gray-400 mb-1 font-marathi">{a.label}</span>
                    <span className="text-sm font-semibold font-marathi">{a.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}>
              <div className="section-label mb-5 font-marathi">{c.formLabel}</div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const data = Object.fromEntries(fd.entries());

                  const text = `Hello Shree Balaji Motor Training School! I want to inquire about driving lessons.
                  
*Name:* ${data.name}
*Phone:* ${data.phone}
*Vehicle Type:* ${data.vehicle}
*Experience:* ${data.exp}

*Message:* ${data.msg || "No additional message"}`;

                  const url = `https://wa.me/919850114660?text=${encodeURIComponent(text)}`;
                  window.open(url, "_blank");
                  setSubmitted(true);
                }}
              >
                {submitted ? (
                  <div className="bg-yellow/10 border border-yellow/30 p-8 text-center rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-yellow/20 border border-yellow/40 flex items-center justify-center mx-auto mb-3">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-yellow"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                    </div>
                    <p className="font-semibold text-yellow font-marathi">{c.successMsg}</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] tracking-[2px] uppercase text-gray-400 font-marathi">{c.fields[0].label}</label>
                      <input name="name" required type="text" placeholder={c.fields[0].placeholder} className="bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 px-4 py-3.5 text-sm outline-none focus:border-yellow focus:bg-yellow/[0.03] transition-colors duration-300 font-marathi" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] tracking-[2px] uppercase text-gray-400 font-marathi">{c.fields[1].label}</label>
                      <input name="phone" required type="tel" placeholder={c.fields[1].placeholder} className="bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 px-4 py-3.5 text-sm outline-none focus:border-yellow focus:bg-yellow/[0.03] transition-colors duration-300 font-marathi" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] tracking-[2px] uppercase text-gray-400 font-marathi">{c.fields[2].label}</label>
                      <input name="vehicle" type="text" placeholder={c.fields[2].placeholder} className="bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 px-4 py-3.5 text-sm outline-none focus:border-yellow focus:bg-yellow/[0.03] transition-colors duration-300 font-marathi" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] tracking-[2px] uppercase text-gray-400 font-marathi">{c.fields[3].label}</label>
                      <input name="exp" type="text" placeholder={c.fields[3].placeholder} className="bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 px-4 py-3.5 text-sm outline-none focus:border-yellow focus:bg-yellow/[0.03] transition-colors duration-300 font-marathi" />
                    </div>

                    <div className="sm:col-span-2 flex flex-col gap-2">
                      <label className="text-[10px] tracking-[2px] uppercase text-gray-400 font-marathi">{c.msgLabel}</label>
                      <textarea name="msg" placeholder={c.msgPlaceholder} rows={3} className="bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 px-4 py-3.5 text-sm outline-none focus:border-yellow focus:bg-yellow/[0.03] transition-colors duration-300 resize-none font-marathi" />
                    </div>
                    <div className="sm:col-span-2">
                      <button type="submit" className="btn-primary-full font-marathi">{c.submitBtn}</button>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Map / address panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900 border border-white/[0.06] rounded-lg overflow-hidden min-h-[400px] flex flex-col items-center justify-center gap-5 p-10 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-yellow/10 border border-yellow/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-yellow"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
            </div>
            <div>
              <p className="font-marathi font-semibold text-lg text-white mb-1">इचलकरंजी, महाराष्ट्र</p>
              <p className="text-sm text-gray-400 tracking-wide font-marathi">श्री बालाजी मोटर ट्रेनिंग स्कूल</p>
            </div>
            <a href="https://maps.app.goo.gl/WJJHZZc3iAtUc5bH8" target="_blank" rel="noreferrer" className="btn-primary mt-2 no-underline font-marathi">
              {c.directions}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
