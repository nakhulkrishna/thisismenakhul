"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PROJECTS, INSIGHTS } from "@/lib/data";

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const BADGE_COLORS: Record<string, string> = {
  Startup: "#f59e0b",
  Production: "#10b981",
  Freelance: "#6366f1",
};

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${project.color}22`;
        (e.currentTarget as HTMLElement).style.borderColor = `${project.color}44`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${project.color}, ${project.color}55)` }} />

      <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0 }}>{project.title}</h3>
              {project.badge && (
                <span
                  style={{
                    background: `${BADGE_COLORS[project.badge]}18`,
                    border: `1px solid ${BADGE_COLORS[project.badge]}44`,
                    color: BADGE_COLORS[project.badge],
                    padding: "2px 8px",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    flexShrink: 0,
                  }}
                >
                  {project.badge}
                </span>
              )}
            </div>
            <p style={{ fontSize: "0.8rem", color: project.color, fontWeight: 600, margin: 0 }}>{project.tagline}</p>
          </div>
          <div style={{ display: "flex", gap: "8px", flexShrink: 0, marginLeft: "12px", marginTop: "2px", alignItems: "center" }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--muted)", transition: "color 0.2s", display: "flex" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
              >
                <GithubIcon />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  background: `${project.color}18`,
                  border: `1px solid ${project.color}44`,
                  color: project.color,
                  padding: "4px 10px",
                  borderRadius: "5px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = `${project.color}30`)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = `${project.color}18`)}
              >
                <ExternalLink size={11} />
                {project.liveLabel || "View"}
              </a>
            )}
          </div>
        </div>

        <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "16px" }}>
          {project.description}
        </p>

        <ul style={{ margin: "0 0 18px 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
          {project.highlights.map((h) => (
            <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.82rem", color: "var(--muted)" }}>
              <span style={{ color: project.color, marginTop: "3px", flexShrink: 0, fontSize: "0.7rem" }}>▸</span>
              {h}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border)",
              color: "var(--muted)",
              padding: "3px 9px",
              borderRadius: "4px",
              fontSize: "0.75rem",
              fontWeight: 500,
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function InsightCard({ insight, index }: { insight: (typeof INSIGHTS)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "24px",
        cursor: "pointer",
        transition: "border-color 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
        <span style={{ background: "rgba(41,121,255,0.1)", border: "1px solid rgba(41,121,255,0.2)", color: "var(--accent)", padding: "3px 10px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 600 }}>
          {insight.tag}
        </span>
        <span style={{ color: "var(--muted)", fontSize: "0.75rem", display: "flex", alignItems: "center" }}>
          {insight.readTime} read
        </span>
      </div>
      <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "8px", lineHeight: 1.4 }}>{insight.title}</h4>
      <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "16px" }}>{insight.summary}</p>
      <Link
        href={`/insights/${insight.slug}`}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
      >
        Read more <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "60px" }}
        >
          <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
            Work
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}>
            Projects I&apos;m proud of
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1rem", maxWidth: "520px" }}>
            Production apps shipped across healthcare, food delivery, sales management, and education domains.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))", gap: "20px", marginBottom: "80px" }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginBottom: "40px" }}
        >
          <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
            Insights
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Things I&apos;ve learned shipping Flutter apps
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {INSIGHTS.map((insight, i) => (
            <InsightCard key={insight.title} insight={insight} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
