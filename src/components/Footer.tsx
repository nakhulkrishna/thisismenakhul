import { PERSONAL } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "28px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
        © {new Date().getFullYear()} {PERSONAL.name}. Built with Next.js & Framer Motion.
      </span>
      <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
        Made with ❤️ and lots of{" "}
        <span style={{ color: "var(--accent)" }}>Dart</span>
      </span>
    </footer>
  );
}
