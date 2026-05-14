"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { content, Lang } from "@/lib/lang";

interface LangCtx {
  lang: Lang;
  toggle: () => void;
  t: typeof content.mr;
}

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("mr"); // Marathi default

  const toggle = () => setLang((l) => (l === "mr" ? "en" : "mr"));
  const t = content[lang];

  return <Ctx.Provider value={{ lang, toggle, t }}>{children}</Ctx.Provider>;
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
