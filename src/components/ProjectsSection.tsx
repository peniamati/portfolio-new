import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

const langColors: Record<string, string> = {
  TypeScript: "hsl(211 60% 55%)",
  JavaScript: "hsl(50 90% 50%)",
  HTML: "hsl(12 80% 55%)",
  CSS: "hsl(200 70% 50%)",
  Python: "hsl(210 60% 45%)",
  Java: "hsl(20 70% 50%)",
  Vue: "hsl(153 50% 50%)",
};

const pymeTags = ["ecommerce", "e-commerce", "shop", "store", "management", "gestion", "pyme", "smb", "erp", "pos", "inventory"];

const isHighlightedProject = (repo: GitHubRepo) => {
  const text = `${repo.name} ${repo.description ?? ""} ${repo.topics?.join(" ") ?? ""}`.toLowerCase();
  return pymeTags.some((tag) => text.includes(tag));
};

const ProjectsSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    fetch("https://api.github.com/users/peniamati/repos?sort=updated&per_page=30")
      .then((res) => res.json())
      .then((data: GitHubRepo[]) => {
        const filtered = data
          .filter((r) => !r.name.includes(".github") && r.description)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setRepos(filtered);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-card/50" aria-label={t.projects.title}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">{t.projects.tag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            {t.projects.title}
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            {t.projects.description}
          </p>
        </motion.div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-48 rounded-lg bg-card border border-border animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => {
              const highlighted = isHighlightedProject(repo);
              return (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group flex flex-col p-6 rounded-lg bg-card border transition-all duration-300 ${
                    highlighted
                      ? "border-primary/40 ring-1 ring-primary/20 hover:ring-primary/40 hover:glow-box"
                      : "border-border hover:border-glow hover:glow-box"
                  }`}
                  aria-label={`Repositorio ${repo.name}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-mono text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {repo.name}
                    </h3>
                    <ExternalLink
                      size={14}
                      className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                    {repo.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{
                            backgroundColor:
                              langColors[repo.language] || "hsl(var(--muted-foreground))",
                          }}
                          aria-hidden="true"
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star size={12} aria-hidden="true" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork size={12} aria-hidden="true" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/peniamati?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            {t.projects.viewAll}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
