/**
 * AmbientFX — Shared premium 3D ambient background layer.
 *
 * All animations use CSS transforms only (GPU-accelerated, no JS).
 * Props control which variant to render for different sections.
 */
"use client";

type Props = {
  variant?: "hero" | "stats" | "default";
};

export default function AmbientFX({ variant = "default" }: Props) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* ─── LARGE OUTER METALLIC RING ─── */}
      <div
        className="ambient-ring"
        style={{
          width: variant === "hero" ? "900px" : "640px",
          height: variant === "hero" ? "900px" : "640px",
          top: variant === "hero" ? "-15%" : "-20%",
          right: variant === "hero" ? "-22%" : "-18%",
          borderColor: "rgba(245,197,24,0.07)",
          animationDuration: "18s",
          animationDelay: "0s",
        }}
      />

      {/* ─── INNER RING — offset for depth illusion ─── */}
      <div
        className="ambient-ring"
        style={{
          width: variant === "hero" ? "580px" : "400px",
          height: variant === "hero" ? "580px" : "400px",
          top: variant === "hero" ? "4%" : "-6%",
          right: variant === "hero" ? "-10%" : "-8%",
          borderColor: "rgba(245,197,24,0.04)",
          animationDuration: "24s",
          animationDelay: "-6s",
          animationDirection: "reverse",
        }}
      />

      {/* ─── BOTTOM-LEFT ACCENT RING ─── */}
      {variant !== "stats" && (
        <div
          className="ambient-ring"
          style={{
            width: "320px",
            height: "320px",
            bottom: "-8%",
            left: "-6%",
            borderColor: "rgba(245,197,24,0.05)",
            animationDuration: "30s",
            animationDelay: "-12s",
          }}
        />
      )}

      {/* ─── GOLDEN LIGHT STREAK — top ─── */}
      <div
        className="ambient-streak"
        style={{
          top: variant === "hero" ? "18%" : "10%",
          left: variant === "hero" ? "0" : "10%",
          width: variant === "hero" ? "55%" : "40%",
          animationDuration: "8s",
          animationDelay: "0s",
        }}
      />

      {/* ─── GOLDEN LIGHT STREAK — mid ─── */}
      {variant === "hero" && (
        <div
          className="ambient-streak"
          style={{
            top: "44%",
            left: "0",
            width: "35%",
            opacity: 0.4,
            animationDuration: "11s",
            animationDelay: "-4s",
          }}
        />
      )}

      {/* ─── FLOATING METALLIC ORBS ─── */}
      <div
        className="ambient-orb"
        style={{
          width: "6px",
          height: "6px",
          top: variant === "hero" ? "22%" : "30%",
          right: variant === "hero" ? "32%" : "28%",
          background: "rgba(245,197,24,0.55)",
          boxShadow: "0 0 18px 4px rgba(245,197,24,0.2)",
          animationDuration: "7s",
          animationDelay: "0s",
        }}
      />
      <div
        className="ambient-orb"
        style={{
          width: "4px",
          height: "4px",
          top: variant === "hero" ? "58%" : "55%",
          right: variant === "hero" ? "20%" : "16%",
          background: "rgba(245,197,24,0.35)",
          boxShadow: "0 0 12px 3px rgba(245,197,24,0.12)",
          animationDuration: "9s",
          animationDelay: "-3s",
        }}
      />
      <div
        className="ambient-orb"
        style={{
          width: "3px",
          height: "3px",
          bottom: "25%",
          left: variant === "hero" ? "12%" : "8%",
          background: "rgba(255,255,255,0.2)",
          animationDuration: "12s",
          animationDelay: "-5s",
        }}
      />

      {/* ─── AERODYNAMIC SPEED LINE CLUSTER ─── */}
      <div className="absolute" style={{ bottom: "12%", right: variant === "hero" ? "6%" : "3%", display: "flex", flexDirection: "column", gap: "6px" }}>
        {[28, 18, 10].map((w, i) => (
          <div
            key={i}
            className="ambient-speedline"
            style={{
              width: `${w}px`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.4 - i * 0.08,
            }}
          />
        ))}
      </div>

      {/* ─── GLASSMORPHISM CORNER ACCENT ─── */}
      {variant === "hero" && (
        <div
          className="absolute"
          style={{
            top: "8%",
            right: "5%",
            width: "48px",
            height: "48px",
            border: "1px solid rgba(245,197,24,0.18)",
            borderRadius: "4px",
            background: "rgba(245,197,24,0.03)",
            backdropFilter: "blur(8px)",
            transform: "rotate(15deg)",
            animation: "ambientFloat 14s ease-in-out infinite",
          }}
        />
      )}
    </div>
  );
}
