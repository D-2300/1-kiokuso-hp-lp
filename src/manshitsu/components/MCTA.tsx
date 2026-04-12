import { M, C, LINE_URL, TEL, TEL_DISPLAY } from "../tokens";

declare global {
  interface Window { dataLayer: unknown[]; }
}

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

export default function MCTA() {
  return (
    <section
      style={{
        backgroundColor: M.main,
        padding: "52px 20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 30% 70%, rgba(201,168,76,0.06) 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative" }}>
        <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, opacity: 0.5, margin: "0 auto 20px" }} />

        <h2
          style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: "clamp(20px, 4.5vw, 28px)",
            fontWeight: 600,
            color: C.white,
            lineHeight: 1.6,
            margin: "0 0 12px",
            letterSpacing: "0.02em",
          }}
        >
          あなたの検討物件、<br />
          儲かるか診断します。
        </h2>

        <p
          style={{
            margin: "0 0 32px",
            fontSize: "clamp(14px, 3vw, 16px)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.8,
          }}
        >
          改修費・利回り改善・完成イメージを無料でお届けします。
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => pushEvent("line_cta_click_manshitsu")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: C.lineGreen,
              color: C.white,
              borderRadius: "4px",
              padding: "16px 40px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.04em",
              width: "100%",
              maxWidth: "320px",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(6,199,85,0.25)",
            }}
          >
            非公開の物件情報を見る
          </a>
          <a
            href={`tel:${TEL}`}
            onClick={() => pushEvent("phone_cta_click_manshitsu")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "transparent",
              color: C.white,
              border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: "4px",
              padding: "14px 40px",
              fontSize: "16px",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.04em",
              width: "100%",
              maxWidth: "320px",
              justifyContent: "center",
            }}
          >
            📞 {TEL_DISPLAY}
          </a>
        </div>

        <p style={{ margin: "16px 0 0", fontSize: "13px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.02em" }}>
          1分で完了・営業なし・いつでもブロック可能
        </p>
      </div>
    </section>
  );
}
