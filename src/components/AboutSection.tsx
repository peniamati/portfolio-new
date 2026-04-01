import { motion } from "framer-motion";
import { Code2, ShoppingCart, Bot } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Desarrollo Frontend",
    desc: "Experiencia en React, TypeScript y ecosistemas modernos de desarrollo web.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Pymes",
    desc: "Soluciones digitales enfocadas en plataformas de venta y gestión para pequeñas empresas.",
  },
  {
    icon: Bot,
    title: "Integración de IA",
    desc: "Implementación de herramientas de inteligencia artificial para optimizar flujos de trabajo.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">// sobre mí</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-8">
            Un poco de mi historia
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Comencé mi carrera profesional en{" "}
                <span className="text-foreground font-medium">Inoxilab</span>,
                donde desarrollé mis primeras habilidades en frontend y participé
                en proyectos de desarrollo de software a medida.
              </p>
              <p>
                Posteriormente trabajé en el{" "}
                <span className="text-foreground font-medium">sector aeroportuario</span>,
                donde adquirí experiencia en entornos de alta exigencia operativa
                y sistemas críticos, hasta febrero de 2025.
              </p>
              <p>
                Actualmente formo parte del equipo de{" "}
                <span className="text-foreground font-medium">Calipso (Visma)</span>,
                donde contribuyo al desarrollo de soluciones empresariales de
                gestión, combinando buenas prácticas de UI/UX con código limpio y
                mantenible.
              </p>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-glow hover:glow-box transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
