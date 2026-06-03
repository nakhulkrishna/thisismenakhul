"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { PERSONAL } from "@/lib/data";

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XSocialIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.856L1.666 2.25H8.19l4.259 5.631 5.795-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const links = [
  { Icon: GithubIcon, label: "GitHub", href: PERSONAL.github, handle: "@nakhulkrishna" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: PERSONAL.linkedin, handle: "nakhulkrishna" },
  { Icon: XSocialIcon, label: "X / Twitter", href: PERSONAL.twitter, handle: "@nakhulkrishna" },
  { Icon: Mail, label: "Email", href: `mailto:${PERSONAL.email}`, handle: PERSONAL.email },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: "rgba(13,17,23,0.6)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
            Contact
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
            Let&apos;s build something{" "}
            <span style={{ color: "var(--accent)" }}>great together</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 48px" }}>
            Whether you have a project in mind, want to collaborate, or just want to talk Flutter — my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ marginBottom: "56px" }}
        >
          <a
            href={`mailto:${PERSONAL.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--accent)",
              color: "white",
              padding: "16px 40px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(41,121,255,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <Mail size={18} />
            Send me a message
          </a>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "12px",
          }}
        >
          {links.map(({ Icon, label, href, handle }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.07 }}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "16px 12px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                color: "var(--accent)",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
            >
              <Icon />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
              <span style={{ fontSize: "0.72rem", color: "var(--muted)", wordBreak: "break-all" }}>{handle}</span>
              <ArrowUpRight size={12} color="var(--muted)" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
