"use client";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-7 right-7 z-[500] flex flex-col items-end gap-3">
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="bg-[rgba(10,10,10,0.9)] border border-[rgba(37,211,102,0.3)] text-white px-4 py-2 rounded-full text-xs whitespace-nowrap"
        style={{ animation: "floatBtn 3s ease-in-out 0.2s infinite" }}
      >
        Chat with us!
      </motion.span>
      <motion.a
        href="https://wa.me/919850114660?text=Hello%20Shree%20Balaji%20Motor%20Training%20School!%20I%20saw%20your%20website%20and%20would%20like%20to%20know%20more."
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.12 }}
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-3xl no-underline"
        style={{
          boxShadow: "0 8px 30px rgba(37,211,102,0.4)",
          animation: "floatBtn 3s ease-in-out infinite",
        }}
        aria-label="WhatsApp"
      >
        💬
      </motion.a>
    </div>
  );
}
