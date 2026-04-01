import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border" role="contentinfo">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} Matías Peña. {t.footer.location}
        </p>
        <p className="font-mono text-xs">
          {t.footer.madeWith} <span className="text-primary">♥</span> {t.footer.andCode}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
