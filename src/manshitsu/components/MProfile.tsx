import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

export default function MProfile() {
  return (
    <section style={{ backgroundColor: C.white, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader label="ABOUT" heading={"記憶荘について"} />

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
            padding: "24px",
            border: `1px solid rgba(107,64,102,0.1)`,
            borderRadius: "4px",
            backgroundColor: M.bg,
            flexWrap: "wrap",
          }}
        >
          {/* Logo mark only */}
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <img
              src="/images/logo-manshitsu-mark-gold.webp"
              alt="満室デザインLABO"
              style={{ width: "64px", height: "64px", objectFit: "contain" }}
            />
          </div>

          <div style={{ flex: 1, minWidth: "200px" }}>
            <p style={{ margin: "0 0 16px", fontSize: "clamp(13px, 3.2vw, 14px)", color: C.textMid, lineHeight: 1.9 }}>
              仙台で店舗内装の設計・施工を手がけています。カフェ、バー、美容室など、「人が集まる空間」をつくる仕事をしてきました。その技術を、賃貸物件の空室対策に活かせないかと考え、オーナー様向けのサービスを始めました。
            </p>
          </div>
        </div>

        {/* CSO KEN profile */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            padding: "20px 24px",
            marginTop: "12px",
            borderRadius: "4px",
            border: `1px solid rgba(107,64,102,0.08)`,
            backgroundColor: "#FAFAF9",
          }}
        >
          <img
            src="/images/about-dai-sm.webp"
            alt="KEN"
            width="64"
            height="64"
            loading="lazy"
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
          <div>
            <p style={{ margin: "0 0 2px", fontSize: "11px", letterSpacing: "0.08em", color: M.mid, fontWeight: 500 }}>
              CSO
            </p>
            <p style={{ margin: 0, fontSize: "clamp(16px, 3.8vw, 18px)", fontWeight: 600, color: C.textDark, letterSpacing: "0.02em" }}>
              KEN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
