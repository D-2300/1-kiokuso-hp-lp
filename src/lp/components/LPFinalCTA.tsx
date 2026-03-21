import { LINE_URL } from "../../shared/design-tokens";

export default function LPFinalCTA() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "48px 20px", textAlign: "center" }}>
      <p style={{ margin: "0 0 24px", fontSize: "22px", fontWeight: 700, color: "#333" }}>
        LINEで無料相談する
      </p>
      <div
        style={{
          display: "inline-block",
          border: "1px solid #e5e5e5",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        <img
          src="/images/line-add-friend.webp"
          alt="LINE QRコード"
          style={{ width: "160px", height: "160px", borderRadius: "8px", objectFit: "contain", display: "block" }}
        />
      </div>
      <p style={{ margin: "0 0 24px", fontSize: "15px", color: "#555", lineHeight: 1.8 }}>
        QRコードを読み取るか、下のボタンからLINEに追加できます
      </p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-gtm="line_cta_click"
        style={{
          display: "block",
          maxWidth: "320px",
          margin: "0 auto",
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
      <p style={{ margin: "12px 0 0", fontSize: "13px", color: "#999", lineHeight: 1.8 }}>
        強引な営業は一切しません。断りはLINE1本でOKです。
      </p>
    </section>
  );
}
