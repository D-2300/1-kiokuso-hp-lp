import { LINE_URL } from "../../shared/design-tokens";

export default function LPHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#e8e4de",
      }}
      className="lp-hero"
    >
      <style>{`
        @media (max-width: 767px) {
          .lp-hero { min-height: 90vh !important; }
          .lp-hero-inner { min-height: 90vh !important; }
        }
      `}</style>
      <img
        src="/images/lp-hero.webp"
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
      />
      <div
        className="lp-hero-inner"
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "28px 20px 0",
          paddingTop: "80px",
          maxWidth: "1200px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(4px)",
              padding: "6px 16px",
              borderRadius: "4px",
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: 500,
              color: "#333",
              marginBottom: "12px",
            }}
          >
            仙台・宮城限定
          </div>
          <h1
            style={{
              fontSize: "clamp(26px, 5.5vw, 48px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.6,
              margin: "0 0 16px",
              textShadow: "0 2px 12px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            設計から施工まで、一社で完結。
            <br />
            居抜き活用で、費用を抑える。
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(13px, 2.5vw, 17px)",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7,
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            見積もり内訳100%公開。物件未定でも相談できます。
          </p>
          <p
            style={{
              marginTop: "16px",
              marginBottom: 0,
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.8)",
              letterSpacing: "0.05em",
            }}
          >
            居抜き 100万円台〜 ／ スケルトン 200万円台〜
          </p>
        </div>

        <div style={{ marginTop: "auto" }}>
          <div style={{ padding: "14px 0", textAlign: "center" }}>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="line_cta_click"
              style={{
                display: "inline-block",
                backgroundColor: "#06C755",
                color: "#fff",
                borderRadius: "999px",
                padding: "12px 20px",
                fontSize: "clamp(13px, 2vw, 15px)",
                fontWeight: 700,
                textDecoration: "none",
                textAlign: "center",
                letterSpacing: "0.03em",
              }}
            >
              LINEで無料相談する
            </a>
            <p
              style={{
                margin: "8px 0 0",
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
              }}
            >
              強引な営業は一切しません。断りはLINE1本でOKです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
