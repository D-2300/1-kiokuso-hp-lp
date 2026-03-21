import { LINE_URL } from "../../shared/design-tokens";

export default function LPHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "80vh",
        overflow: "hidden",
        backgroundColor: "#e8e4de",
      }}
    >
      <img
        src="/images/hero-bg-v2.webp"
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "28px 20px 0",
          maxWidth: "960px",
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
              marginBottom: "16px",
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
            }}
          >
            今あるものを、活かす。
            <br />
            あなたの店を、一緒につくる。
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(13px, 2.5vw, 17px)",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7,
            }}
          >
            写真1枚で概算をお伝えします。断りはLINE1本でOK。
          </p>
        </div>

        <div style={{ marginTop: "auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginBottom: "0",
            }}
          >
            {[
              { label: "居抜き", range: "100〜200万円", img: "/images/pricing-inuki.webp" },
              { label: "スケルトン", range: "200〜350万円", img: "/images/pricing-skeleton.webp" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: "rgba(255,255,255,0.92)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "clamp(140px, 18vw, 176px)", overflow: "hidden" }}>
                  <img
                    src={item.img}
                    alt={item.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "12px 14px" }}>
                  <p style={{ margin: 0, fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 500, color: "#666" }}>
                    {item.label}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: "clamp(18px, 3.5vw, 24px)",
                      fontWeight: 700,
                      color: "#222",
                    }}
                  >
                    {item.range}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: "20px 0" }}>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="line_cta_click"
              style={{
                display: "block",
                backgroundColor: "#06C755",
                color: "#fff",
                borderRadius: "999px",
                padding: "16px 24px",
                fontSize: "clamp(15px, 2.5vw, 18px)",
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
