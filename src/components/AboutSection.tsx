import { motion } from "framer-motion";
import { Code2, ShoppingCart, Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Code2, ShoppingCart, Bot];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 lg:py-32" aria-label={t.about.title}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">{t.about.tag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-8">
            {t.about.title}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t.about.p1Start}{" "}
                <span className="text-foreground font-medium">{t.about.p1Company}</span>
                {t.about.p1End}
              </p>
              <p>
                {t.about.p2Start}{" "}
                <span className="text-foreground font-medium">{t.about.p2Company}</span>
                {t.about.p2End}
              </p>
              <p>
                {t.about.p3Start}{" "}
                <span className="text-foreground font-medium">{t.about.p3Company}</span>
                {t.about.p3End}
              </p>
            </div>

            <div className="grid gap-4">
              {t.about.highlights.map((item, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-glow hover:glow-box transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
