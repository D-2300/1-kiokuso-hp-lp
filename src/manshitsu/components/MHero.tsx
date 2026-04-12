import { M, C, LINE_URL } from "../tokens";

declare global {
  interface Window { dataLayer: unknown[]; }
}

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

export default function MHero() {
  return (
    <section className="m-hero">
      <style>{`
        @media (max-width: 767px) {
          .m-hero-h1 { font-size: 24px !important; }
          .m-hero-sub { font-size: 14px !important; }
        }
        @media (min-width: 768px) {
          .m-hero-h1 { font-size: 34px !important; }
          .m-hero-sub { font-size: 16px !important; }
        }
      `}</style>

      {/* ===== HERO IMAGE SECTION ===== */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <img
          src="/images/m-hero-color.webp"
          srcSet="/images/m-hero-color-sm.webp 480w, /images/m-hero-color.webp 720w"
          alt="リノベーション後の明るいアパート"
          width="720"
          height="403"
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "720px",
            margin: "0 auto",
            padding: "24px 20px 32px",
          }}
        >
          {/* Header bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <img
              src="/images/logo-manshitsu-mark-gold.webp"
              alt="満室デザインLABO"
              style={{ height: "40px", objectFit: "contain", flexShrink: 0 }}
            />
            <div>
              <p style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: C.white, letterSpacing: "0.04em", lineHeight: 1.3 }}>
                満室デザインLABO
              </p>
              <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.03em", lineHeight: 1.4 }}>
                宮城のアパート経営をサポート
              </p>
            </div>
          </div>

          {/* Badge */}
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(4px)",
                padding: "5px 14px",
                borderRadius: "4px",
                fontSize: "clamp(13px, 3vw, 15px)",
                fontWeight: 500,
                color: "#333",
              }}
            >
              宮城でアパート経営を始める方へ
            </span>
          </div>

          {/* H1 */}
          <h1 style={{ margin: "0 0 12px", padding: 0 }}>
            <span
              className="m-hero-h1"
              style={{
                display: "block",
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.5,
                letterSpacing: "0.01em",
                textShadow: "0 2px 16px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)",
              }}
            >
              みんなが狙わない物件を、
            </span>
            <span
              className="m-hero-h1"
              style={{
                display: "block",
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: 700,
                color: C.gold,
                lineHeight: 1.5,
                letterSpacing: "0.01em",
                textShadow: "0 2px 16px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)",
              }}
            >
              狙いましょう。
            </span>
          </h1>

          {/* Sub text */}
          <div style={{ marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, margin: "0 0 10px" }} />
            <p
              className="m-hero-sub"
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.85,
                letterSpacing: "0.02em",
                textShadow: "0 1px 8px rgba(0,0,0,0.4)",
              }}
            >
              ボロボロのアパートでも、内装次第で全然勝負できます。<br />
              改修費用と利回り改善を、無料で診断します。
            </p>
          </div>

          {/* Feature badges */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "20px" }}>
            {["改修費の無料診断", "物件探しサポート", "バーチャルステージング"].map((t) => (
              <span key={t} style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.12)",
                borderRadius: "4px",
                padding: "4px 10px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}>{t}</span>
            ))}
          </div>

          {/* Price comparison teaser */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px",
            marginBottom: "0",
          }}>
            <div style={{
              background: "rgba(0,0,0,0.4)",
              borderRadius: "6px", padding: "14px 12px",
              border: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>
                築20年 1K そのまま
              </div>
              <div style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "clamp(14px, 3.5vw, 17px)", fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
              }}>
                利回り <span style={{ fontSize: "clamp(20px, 5vw, 26px)" }}>4%</span>
              </div>
            </div>
            <div style={{
              background: `linear-gradient(135deg, ${M.main} 0%, ${M.dark} 100%)`,
              borderRadius: "6px", padding: "14px 12px",
              border: `1px solid ${C.gold}`,
              textAlign: "center",
            }}>
              <div style={{ fontSize: "10px", letterSpacing: "2px", color: C.goldLight, marginBottom: "4px" }}>
                改修後
              </div>
              <div style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "clamp(14px, 3.5vw, 17px)", fontWeight: 600,
                color: C.gold,
              }}>
                利回り <span style={{ fontSize: "clamp(20px, 5vw, 26px)" }}>8%</span>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", textAlign: "center", margin: "6px 0 0" }}>
            ※ 1K×6室アパート・改修費1室10万円の例
          </p>
        </div>
      </div>

      {/* ===== CTA SECTION ===== */}
      <div
        style={{
          background: `linear-gradient(160deg, ${M.main} 0%, ${M.dark} 100%)`,
          display: "flex",
          alignItems: "center",
          padding: "28px 20px 36px",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto", width: "100%", textAlign: "center" }}>
          <p style={{
            fontSize: "clamp(14px, 3vw, 16px)",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "16px",
            lineHeight: 1.7,
          }}>
            あなたの検討物件、<strong style={{ color: C.gold }}>儲かるか</strong>診断します。
          </p>

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
              borderRadius: "999px",
              padding: "15px 32px",
              fontSize: "clamp(15px, 3vw, 18px)",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: "0 4px 16px rgba(6,199,85,0.25)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            非公開の物件情報を見る
          </a>
          <p style={{ margin: "10px 0 0", fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
            1分で完了・営業なし・いつでもブロック可能
          </p>
        </div>
      </div>
    </section>
  );
}
