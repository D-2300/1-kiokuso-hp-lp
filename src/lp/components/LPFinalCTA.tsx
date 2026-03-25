import { LINE_URL } from "../../shared/design-tokens";

export default function LPFinalCTA() {
  return (
    <section data-section="final-cta" style={{ backgroundColor: "#fff", padding: "48px 20px", textAlign: "center" }}>
      <p
        style={{
          margin: "0 0 8px",
          fontSize: "clamp(22px, 4vw, 32px)",
          fontWeight: 700,
          color: "#222",
        }}
      >
        LINEで無料相談する
      </p>
      <p
        style={{
          margin: "0 0 36px",
          fontSize: "clamp(14px, 2.5vw, 17px)",
          color: "#777",
          lineHeight: 1.7,
        }}
      >
        写真1枚で概算をお伝えします
      </p>

      <div
        style={{
          display: "inline-block",
          border: "1px solid #e0e0e0",
          borderRadius: "20px",
          padding: "24px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
          marginBottom: "16px",
        }}
      >
        <img
          src="/images/line-qr.png"
          alt="LINE QRコード"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "10px",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
      <p style={{ margin: "0 0 28px", fontSize: "13px", color: "#aaa" }}>
        QRコードを読み取って友だち追加
      </p>

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
      <p style={{ margin: "12px 0 0", fontSize: "13px", color: "#aaa", lineHeight: 1.8 }}>
        強引な営業は一切しません。断りはLINE1本でOKです。
      </p>
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <a
          href="tel:08069003314"
          style={{
            fontSize: 14,
            color: "#1A1A1A",
            textDecoration: "underline",
            textUnderlineOffset: 3,
          }}
        >
          📞 電話で相談する 080-6900-3314
        </a>
        <a
          href="#contact-form"
          style={{
            fontSize: 14,
            color: "#888",
            textDecoration: "underline",
            textUnderlineOffset: 3,
          }}
        >
          ✉ メールで相談する
        </a>
      </div>
    </section>
  );
}
