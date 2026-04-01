import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    type: "work" as const,
    title: "Frontend Developer",
    company: "Calipso · Visma",
    period: "Feb 2025 – Presente",
    description:
      "Desarrollo de interfaces y funcionalidades en la plataforma de gestión empresarial Calipso, parte del grupo Visma.",
  },
  {
    type: "work" as const,
    title: "Operaciones & Tecnología",
    company: "Sector Aeroportuario",
    period: "2023 – Feb 2025",
    description:
      "Participación en operaciones tecnológicas en entornos de alta exigencia y sistemas críticos del sector aeroportuario.",
  },
  {
    type: "work" as const,
    title: "Desarrollador Frontend",
    company: "Inoxilab",
    period: "2022 – 2023",
    description:
      "Desarrollo de aplicaciones web a medida para clientes, trabajando con React, JavaScript y herramientas modernas de frontend.",
  },
];

const certifications = [
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    year: "2023",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2022",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2022",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">
            // experiencia & certificaciones
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-12">
            Mi trayectoria
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-8">
              <Briefcase size={18} className="text-primary" />
              Experiencia laboral
            </h3>
            <div className="relative pl-6 border-l border-border space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <p className="font-mono text-xs text-primary mb-1">
                    {exp.period}
                  </p>
                  <h4 className="font-semibold text-foreground">{exp.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-8">
              <Award size={18} className="text-primary" />
              Certificaciones
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-4 rounded-lg bg-card border border-border hover:border-glow hover:glow-box transition-all duration-300"
                >
                  <h4 className="font-medium text-sm text-foreground mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </p>
                </motion.div>
              ))}

              <motion.a
                href="https://www.linkedin.com/in/matias-pe%C3%B1a-4a5242218/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono mt-4"
              >
                Ver perfil completo en LinkedIn →
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
