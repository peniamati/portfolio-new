import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#hero" className="text-xl font-bold font-mono text-gradient" aria-label="Ir al inicio">
          {"<MP />"}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            aria-label={`Cambiar idioma a ${lang === "es" ? "inglés" : "español"}`}
          >
            <Globe size={14} />
            {lang.toUpperCase()}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggleLang}
            className="p-2 rounded-lg text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Cambiar idioma a ${lang === "es" ? "inglés" : "español"}`}
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-muted-foreground"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
