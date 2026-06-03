"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Coffee, Smartphone, Zap } from "lucide-react";
import { PERSONAL } from "@/lib/data";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "8+", label: "Apps Shipped" },
  { value: "6+", label: "Client Projects" },
  { value: "2", label: "Platforms (Android & iOS)" },
];

const traits = [
  { Icon: Smartphone, text: "Mobile-first thinker" },
  { Icon: Zap, text: "Performance obsessed" },
  { Icon: Coffee, text: "Clean code advocate" },
  { Icon: MapPin, text: PERSONAL.location },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "60px" }}
      >
        <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          About Me
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0" }}>
          Crafting apps people{" "}
          <span style={{ color: "var(--accent)" }}>actually want to use</span>
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "start" }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "20px" }}>
            {PERSONAL.bio}
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "32px" }}>
            I care deeply about the details — smooth 60fps animations, intuitive navigation, pixel-perfect UI, and code that the next developer will actually enjoy reading.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {traits.map(({ Icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                }}
              >
                <Icon size={14} color="var(--accent)" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
        >
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "28px 20px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--accent)",
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  color: "var(--accent)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {value}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 500 }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
