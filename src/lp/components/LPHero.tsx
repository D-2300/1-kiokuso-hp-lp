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
          .ba-card-img { height: 130px !important; }
          .hero-catch-line1 { font-size: 28px !important; }
          .hero-catch-line2 { font-size: 20px !important; }
        }
        @media (min-width: 768px) {
          .ba-card-img { height: 180px !important; }
          .hero-catch-line1 { font-size: 40px !important; }
          .hero-catch-line2 { font-size: 26px !important; }
        }
      `}</style>
      <img
        src="/images/lp-hero.webp"
          srcSet="/images/lp-hero-sm.webp 480w, /images/lp-hero.webp 1200w"
        alt=""
        width="1200"
        height="800"
        loading="eager"
        sizes="100vw"
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
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%)",
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

          <p
            style={{
              margin: "0 0 6px",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "3px",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            店舗内装
          </p>

          <h1 style={{ margin: 0, padding: 0 }}>
            <span
              className="hero-catch-line1"
              style={{
                display: "block",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
                textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              予算<span style={{ color: "#C9A84C" }}>100万円以下</span>でも、
            </span>
            <span
              className="hero-catch-line1"
              style={{
                display: "block",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
                textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              あなたの店はつくれます。
            </span>
          </h1>
          <div
            style={{
              marginTop: "16px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <div style={{ width: "40px", height: "1px", backgroundColor: "#C9A84C" }} />
            <p
              style={{
                margin: 0,
                fontSize: "18px",
                fontWeight: 500,
                color: "#C9A84C",
                textShadow: "0 1px 6px rgba(0,0,0,0.4)",
              }}
            >
              開業準備、ぜんぶ一緒に。
            </p>
            <div style={{ width: "40px", height: "1px", backgroundColor: "#C9A84C" }} />
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#999999",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              カフェ・バー・居酒屋・美容室・サロン・ジムなど業態を問わず対応
            </p>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "0 0 16px" }}>
            {["見積もり無料", "見積もり内訳100%公開", "物件未定でもOK", "断りはLINE1本"].map((t) => (
              <span key={t} style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "4px",
                padding: "4px 10px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}>{t}</span>
            ))}
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            居抜き活用 × 設計施工一社完結。内容と面積で変わります。
          </p>
        </div>

        <div style={{ marginTop: "auto" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto", display: "flex", gap: "8px", marginBottom: "14px" }}>
            {[
              { src: "/images/pricing-inuki-sm.webp", alt: "居抜き施工例", label: "居抜き状態", price: "60万円台" },
              { src: "/images/pricing-skeleton-sm.webp", alt: "スケルトン施工例", label: "スケルトン仕様", price: "120万円台" },
            ].map((card) => (
              <div
                key={card.label}
                style={{
                  flex: 1,
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="ba-card-img"
                  width="320"
                  height="180"
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.3)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "12px",
                  }}
                >
                  <p style={{ margin: 0, fontSize: "11px", color: "#fff", fontWeight: 400, lineHeight: 1.3 }}>
                    {card.label}
                  </p>
                  <p style={{ margin: 0, fontSize: "20px", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
                    {card.price}<span style={{ fontSize: "12px", fontWeight: 400 }}>〜</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: "0 0 40px", textAlign: "center" }}>
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
