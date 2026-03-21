import { LINE_URL } from "../../shared/design-tokens";

export default function LPFinalCTA() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "48px 20px", textAlign: "center" }}>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-gtm="line_cta_click"
        style={{
          display: "inline-block",
          backgroundColor: "#06C755",
          color: "#fff",
          borderRadius: "10px",
          padding: "18px 48px",
          fontSize: "17px",
          fontWeight: 700,
          textDecoration: "none",
          letterSpacing: "0.03em",
        }}
      >
        LINEで無料相談する
      </a>
      <p style={{ margin: "12px 0 32px", fontSize: "12px", color: "#999", lineHeight: 1.8 }}>
        強引な営業は一切しません。断りはLINE1本でOKです。
      </p>
      <img
        src="/images/line-add-friend.webp"
        alt="LINE QRコード"
        style={{ width: "110px", height: "110px", borderRadius: "8px", objectFit: "contain", margin: "0 auto", display: "block" }}
      />
    </section>
  );
}
