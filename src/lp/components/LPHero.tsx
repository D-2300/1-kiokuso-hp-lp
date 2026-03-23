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
          .ba-card-img { height: 80px !important; }
          .hero-catch { font-size: 28px !important; }
        }
        @media (min-width: 768px) {
          .ba-card-img { height: 120px !important; }
          .hero-catch { font-size: 36px !important; }
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

          <h1
            className="hero-catch"
            style={{
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.4,
              margin: "0 0 10px",
              textShadow: "0 2px 12px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)",
              whiteSpace: "nowrap",
            }}
          >
            設計から施工まで、一社完結。
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            見積もり内訳 100%公開。物件未定でも相談OK。
          </p>
        </div>

        <div style={{ marginTop: "auto" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto", display: "flex", gap: "8px", marginBottom: "14px" }}>
            {[
              { src: "/images/crossover-after-01.webp", alt: "居抜き施工例", label: "居抜き", price: "50" },
              { src: "/images/crossover-after-03.webp", alt: "スケルトン施工例", label: "スケルトン", price: "150" },
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
                    {card.price}<span style={{ fontSize: "12px", fontWeight: 400 }}>万円〜</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: "0 0 14px", textAlign: "center" }}>
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
