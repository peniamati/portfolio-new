import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import es from "@/i18n/es";
import en from "@/i18n/en";

type Lang = "es" | "en";
type Translations = typeof es;

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const dictionaries: Record<Lang, Translations> = { es, en };

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("portfolio-lang");
    return (saved === "en" || saved === "es") ? saved : "es";
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("portfolio-lang", l);
    document.documentElement.lang = l;
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "es" ? "en" : "es");
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang], setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
