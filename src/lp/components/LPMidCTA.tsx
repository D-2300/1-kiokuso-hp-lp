import { LINE_URL } from "../../shared/design-tokens";

export default function LPMidCTA() {
  return (
    <section style={{ textAlign: "center", padding: "16px 20px 24px" }}>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-gtm="line_cta_click"
        style={{
          display: "inline-block",
          backgroundColor: "#06C755",
          color: "#fff",
          borderRadius: "8px",
          padding: "14px 40px",
          fontSize: "14px",
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        LINEで無料相談する
      </a>
      <p style={{ margin: "8px 0 0", fontSize: "11px", color: "#999" }}>
        写真1枚で概算をお伝えします。断りはLINE1本でOK。
      </p>
    </section>
  );
}
