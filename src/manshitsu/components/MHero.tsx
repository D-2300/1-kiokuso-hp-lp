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

export default function MHero() {
  return (
    <section className="m-hero">
      <style>{`
        @media (max-width: 767px) {
          .m-hero-h1 { font-size: 26px !important; }
          .m-hero-sub { font-size: 14px !important; }
          .m-hero-img-wrap { height: 280px !important; }
        }
        @media (min-width: 768px) {
          .m-hero-h1 { font-size: 36px !important; }
          .m-hero-sub { font-size: 16px !important; }
          .m-hero-img-wrap { height: 360px !important; }
        }
      `}</style>

      {/* ===== IMAGE SECTION (top) ===== */}
      <div
        style={{
          backgroundColor: M.dark,
          padding: "40px 20px 0",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {/* Logo mark - large */}
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <img
              src="/images/logo-manshitsu-mark-gold.webp"
              alt="満室デザインLABO"
              style={{ height: "56px", objectFit: "contain" }}
            />
          </div>

          {/* Badge */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-block",
                border: `1px solid ${C.gold}`,
                color: C.gold,
                fontSize: "clamp(12px, 2vw, 14px)",
                fontWeight: 500,
                letterSpacing: "0.08em",
                padding: "6px 16px",
                borderRadius: "2px",
              }}
            >
              仙台・宮城の賃貸オーナー様へ
            </span>
          </div>

          {/* H1 */}
          <h1 style={{ margin: "0 0 16px", padding: 0, textAlign: "center" }}>
            <span
              className="m-hero-h1"
              style={{
                display: "block",
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.5,
                letterSpacing: "0.01em",
              }}
            >
              退去から<span style={{ color: C.gold }}>2週間</span>で、
            </span>
            <span
              className="m-hero-h1"
              style={{
                display: "block",
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.5,
                letterSpacing: "0.01em",
              }}
            >
              内見が入る部屋にします。
            </span>
          </h1>

          {/* Sub text */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, opacity: 0.5, margin: "0 auto 12px" }} />
            <p
              className="m-hero-sub"
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.85,
                letterSpacing: "0.02em",
              }}
            >
              店舗内装のプロが、中間マージンなしで直接施工。<br />
              ただ元に戻すだけじゃない。次の入居者が決まる部屋をつくります。
            </p>
          </div>

          {/* Hero image - contained rectangle */}
          <div
            className="m-hero-img-wrap"
            style={{
              borderRadius: "6px 6px 0 0",
              overflow: "hidden",
              position: "relative",
              height: "320px",
            }}
          >
            <img
              src="/images/m-hero-gray.webp"
              srcSet="/images/m-hero-gray-sm.webp 480w, /images/m-hero-gray.webp 720w"
              alt="施工後の明るいLDK"
              width="720"
              height="403"
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 720px) 100vw, 720px"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                filter: "brightness(0.95) contrast(1.05)",
              }}
            />
            {/* Subtle bottom fade to purple */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "80px",
                background: `linear-gradient(to top, ${M.main} 0%, transparent 100%)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* ===== PURPLE SECTION (bottom) - price + CTA ===== */}
      <div
        style={{
          background: `linear-gradient(160deg, ${M.main} 0%, ${M.dark} 100%)`,
          padding: "32px 20px 48px",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {/* Feature badges */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: "24px" }}>
            {["中間マージンなし", "自社施工・一括対応", "退去当日の見積もり可", "断りはLINE1本"].map((t) => (
              <span key={t} style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "4px",
                padding: "5px 12px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}>{t}</span>
            ))}
          </div>

          {/* Price box */}
          <div
            style={{
              border: `1px solid ${C.gold}`,
              borderRadius: "4px",
              padding: "16px 20px",
              marginBottom: "24px",
              backgroundColor: "rgba(201,168,76,0.06)",
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em", marginBottom: "4px" }}>
              クロス張替え
            </p>
            <p style={{ margin: 0, fontFamily: "'Noto Serif JP', serif" }}>
              <span style={{ fontSize: "clamp(26px, 6vw, 34px)", color: C.gold, fontWeight: 600 }}>900</span>
              <span style={{ fontSize: "14px", color: C.goldLight }}> 円/㎡〜（税別）</span>
            </p>
            <p style={{ margin: "4px 0 0", fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>
              めくり・下地処理・廃材処分込み
            </p>
          </div>

          {/* CTA buttons */}
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
                borderRadius: "999px",
                padding: "15px 24px",
                fontSize: "clamp(15px, 2.5vw, 17px)",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.04em",
                width: "100%",
                maxWidth: "320px",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(6,199,85,0.25)",
              }}
            >
              LINEで無料相談する
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
                borderRadius: "999px",
                padding: "13px 24px",
                fontSize: "15px",
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
            <p style={{ margin: "6px 0 0", fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>
              受付 9:00〜18:00（土日対応可）/ LINEは24時間受付
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
