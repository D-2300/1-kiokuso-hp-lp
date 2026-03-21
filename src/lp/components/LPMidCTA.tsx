import { LINE_URL } from "../../shared/design-tokens";

export default function LPMidCTA() {
  return (
    <section style={{ textAlign: "center", padding: "24px 20px 32px" }}>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-gtm="line_cta_click"
        style={{
          display: "block",
          maxWidth: "360px",
          margin: "0 auto",
          backgroundColor: "#06C755",
          color: "#fff",
          borderRadius: "999px",
          padding: "18px 48px",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 700,
          textDecoration: "none",
          letterSpacing: "0.03em",
        }}
      >
        LINEで無料相談する
      </a>
      <p style={{ margin: "10px 0 0", fontSize: "13px", color: "#999", lineHeight: 1.7 }}>
        写真1枚で概算をお伝えします。断りはLINE1本でOK。
      </p>
    </section>
  );
}
