import React from "react";

const LINE_URL = "https://lin.ee/HVV0QJO";

const lineSvgPath = "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

export default function TenantHero() {
  return (
    <section
      style={{
        minHeight: "80vh",
        maxHeight: "750px",
        background: "#1a1f14",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "36px 24px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 25%, rgba(74,103,65,.14) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "680px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: ".1em",
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,.3)",
            background: "rgba(201,168,76,.08)",
            borderRadius: "100px",
            padding: "5px 16px",
            marginBottom: "28px",
          }}
        >
          仙台・宮城エリア限定
        </div>

        {/* Category */}
        <p
          style={{
            fontSize: "clamp(12px, 2vw, 14px)",
            fontWeight: 400,
            letterSpacing: ".15em",
            color: "rgba(255,255,255,.4)",
            marginBottom: "14px",
          }}
        >
          飲食店の物件探し、始める前に。
        </p>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(24px, 5vw, 38px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.7,
            marginBottom: "16px",
            letterSpacing: ".02em",
          }}
        >
          ネットに出てない<br />
          <em style={{ fontStyle: "normal", color: "#C9A84C" }}>非公開物件</em>、あります。
        </h1>

        {/* Sub copy */}
        <p
          style={{
            fontSize: "clamp(13px, 2.3vw, 15px)",
            color: "rgba(255,255,255,.5)",
            lineHeight: 1.9,
            marginBottom: "36px",
          }}
        >
          大工歴20年の職人が解体現場から拾う「空き予定」情報と、<br />
          元不動産のプロが持つ業界人脈——<br />
          ネットに載る前の物件情報を、無料でお届けします。
        </p>

        {/* Flow infographic banner */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
            marginBottom: "32px",
            padding: "0 8px",
          }}
        >
          {[
            { img: "/images/step-line-register-sm.webp", label: "LINE追加", time: "10秒", highlight: true, pos: "center" },
            { img: "/images/step-line-send-sm.webp", label: "希望を伝える", time: "2分", highlight: false, pos: "center" },
            { img: "/images/step-tenant-info-sm.webp", label: "物件情報GET", time: "数日〜", highlight: false, pos: "center" },
          ].map((step, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <div style={{ flex: "0 0 auto", padding: "0 clamp(4px, 1.5vw, 12px)", marginBottom: "16px" }}>
                  <svg viewBox="0 0 24 12" style={{ width: "clamp(18px, 4vw, 28px)", height: "auto" }}>
                    <path d="M0 6h20m0 0l-5-4m5 4l-5 4" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              <div style={{ textAlign: "center", flex: "0 0 auto" }}>
                <div
                  style={{
                    width: "clamp(96px, 25vw, 140px)",
                    height: "clamp(96px, 25vw, 140px)",
                    borderRadius: "14px",
                    overflow: "hidden",
                    margin: "0 auto 6px",
                    border: step.highlight ? "2.5px solid #06C755" : "2px solid rgba(201,168,76,.45)",
                    boxShadow: step.highlight ? "0 0 16px rgba(6,199,85,.35)" : "0 0 12px rgba(201,168,76,.15)",
                  }}
                >
                  <img
                    src={step.img}
                    alt={step.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: step.pos, transform: step.scale ? `scale(${step.scale})` : undefined }}
                  />
                </div>
                <span style={{ fontSize: "clamp(10px, 2vw, 12px)", fontWeight: 700, color: "#fff", display: "block" }}>{step.label}</span>
                <span style={{ fontSize: "clamp(9px, 1.6vw, 10px)", color: "rgba(255,255,255,.4)", display: "block", marginTop: "2px" }}>{step.time}</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginBottom: "12px" }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#06C755",
              color: "#fff",
              borderRadius: "999px",
              padding: "16px 36px",
              fontSize: "clamp(15px, 2.8vw, 18px)",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: ".03em",
              boxShadow: "0 4px 24px rgba(6,199,85,.35)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            無料で物件情報を受け取る
          </a>
        </div>
        <div style={{
          display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "16px",
        }}>
          {["匿名OK", "営業なし", "LINE追加するだけ"].map((t) => (
            <span key={t} style={{
              fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,.7)",
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.15)",
              borderRadius: "999px", padding: "5px 14px",
              letterSpacing: ".03em",
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Scroll hint */}
        <style>{`
          @keyframes tenant-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
        `}</style>
        <div
          style={{
            marginTop: "32px",
            fontSize: "11px",
            color: "rgba(255,255,255,.2)",
            letterSpacing: ".1em",
            animation: "tenant-float 2s ease-in-out infinite",
          }}
        >
          ↓ なぜ非公開物件を持っているのか
        </div>
      </div>
    </section>
  );
}
