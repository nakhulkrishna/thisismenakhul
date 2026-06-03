"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { type Insight } from "@/lib/data";

const TAG_COLORS: Record<string, string> = {
  Architecture: "#6366f1",
  Monetization: "#f59e0b",
  Analytics: "#06b6d4",
  Performance: "#10b981",
  "Mobile Dev": "#f43f5e",
  Integrations: "#8b5cf6",
  "State Management": "#2979ff",
  Deployment: "#f97316",
};

export default function InsightArticle({ insight }: { insight: Insight }) {
  const tagColor = TAG_COLORS[insight.tag] ?? "var(--accent)";

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      {/* Top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(5,8,16,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          padding: "0 24px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--muted)",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 500,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
        >
          <ArrowLeft size={16} />
          Back
        </Link>
        <span
          style={{
            background: `${tagColor}18`,
            border: `1px solid ${tagColor}44`,
            color: tagColor,
            padding: "4px 12px",
            borderRadius: "4px",
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {insight.tag}
        </span>
      </div>

      {/* Hero */}
      <div
        style={{
          padding: "72px 24px 48px",
          maxWidth: "720px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "300px",
            background: `radial-gradient(circle, ${tagColor}14 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--muted)", fontSize: "0.85rem" }}>
              <Clock size={14} />
              {insight.readTime} read
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--muted)", fontSize: "0.85rem" }}>
              <Tag size={14} />
              {insight.tag}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "20px",
              color: "var(--foreground)",
            }}
          >
            {insight.title}
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              borderLeft: `3px solid ${tagColor}`,
              paddingLeft: "16px",
            }}
          >
            {insight.summary}
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: "720px", margin: "0 auto 0", padding: "0 24px" }}>
        <div style={{ height: "1px", background: "var(--border)" }} />
      </div>

      {/* Article body */}
      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px 100px" }}>
        {insight.sections.map((section, i) => (
          <motion.div
            key={section.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: "easeOut" }}
            style={{ marginBottom: "44px" }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                marginBottom: "14px",
                color: "var(--foreground)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: tagColor,
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              />
              {section.heading}
            </h2>

            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.85,
                fontSize: "1rem",
                marginBottom: section.code ? "20px" : "0",
              }}
            >
              {section.body}
            </p>

            {section.code && (
              <div
                style={{
                  background: "#0d1117",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                {/* Code header bar */}
                <div
                  style={{
                    background: "#161b22",
                    borderBottom: "1px solid var(--border)",
                    padding: "10px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <span
                      key={c}
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: c,
                        display: "inline-block",
                      }}
                    />
                  ))}
                </div>
                <pre
                  style={{
                    margin: 0,
                    padding: "20px",
                    fontSize: "0.82rem",
                    lineHeight: 1.7,
                    color: "#e6edf3",
                    overflowX: "auto",
                    fontFamily: "var(--font-geist-mono), 'Fira Code', monospace",
                    whiteSpace: "pre",
                  }}
                >
                  <code>{section.code}</code>
                </pre>
              </div>
            )}
          </motion.div>
        ))}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            marginTop: "60px",
            padding: "32px",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "16px" }}>
            Want to talk Flutter, architecture, or mobile development?
          </p>
          <Link
            href="/#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--accent)",
              color: "white",
              padding: "12px 28px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Get in touch
          </Link>
        </motion.div>
      </article>
    </div>
  );
}
