const LINE_URL = "https://lin.ee/HVV0QJO";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

export default function KojiHowItWorks() {
  return (
    <section style={{ padding: "clamp(36px, 7vw, 60px) 20px clamp(36px, 7vw, 50px)", background: "#FAF6F0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "3px", color: "#8B6914", marginBottom: "12px", textAlign: "center" }}>
          HOW IT WORKS
        </p>
        <h2 style={{
          fontFamily: "'Zen Maru Gothic', 'Noto Sans JP', sans-serif",
          fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: "#3D2E16",
          marginBottom: "8px", lineHeight: 1.5, textAlign: "center",
        }}>
          ご相談は、3分で完了します。
        </h2>

        {/* Step images in LINE green band */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "0", marginBottom: "24px", padding: "16px 8px",
          background: "#06C755", borderRadius: "16px",
        }}>
          {[
            { img: "/images/step-line-register-sm.webp", label: "LINE追加", time: "10秒" },
            { img: "/images/step-line-send-sm.webp", label: "3つ教える", time: "3分" },
            { img: "/images/finalcta-step04-end-sm.webp", label: "提案書が届く", time: "数日〜" },
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && (
                <div style={{ padding: "0 clamp(4px, 1.5vw, 12px)", marginBottom: "16px" }}>
                  <svg viewBox="0 0 24 12" style={{ width: "clamp(18px, 4vw, 28px)", height: "auto" }}>
                    <path d="M0 6h20m0 0l-5-4m5 4l-5 4" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              <div style={{ textAlign: "center" }}>
                <div style={{
                  width: "clamp(88px, 22vw, 130px)", height: "clamp(88px, 22vw, 130px)",
                  borderRadius: "14px", overflow: "hidden", margin: "0 auto 6px",
                  border: "2px solid rgba(255,255,255,.5)", boxShadow: "0 4px 16px rgba(0,0,0,.15)",
                }}>
                  <img src={step.img} alt={step.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <span style={{ fontSize: "clamp(10px, 2vw, 12px)", fontWeight: 700, color: "#fff", display: "block" }}>{step.label}</span>
                <span style={{ fontSize: "clamp(9px, 1.6vw, 10px)", color: "rgba(255,255,255,0.6)", display: "block", marginTop: "2px" }}>{step.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div style={{
          background: "#f0faf0", border: "1px solid #c8e6c9", borderRadius: "12px",
          padding: "14px 16px", textAlign: "center", marginBottom: "20px",
        }}>
          <p style={{ fontSize: "clamp(15px, 3vw, 17px)", fontWeight: 700, color: "#2d5016", marginBottom: "8px" }}>
            「なんとなく聞いてみようかな」で大丈夫。
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
            {["匿名OK", "無料", "営業なし", "断ってOK"].map((t) => (
              <span key={t} style={{
                fontSize: "12px", fontWeight: 600, color: "#555",
                background: "#fff", borderRadius: "999px", padding: "4px 10px",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "16px 40px", background: "#06C755", color: "#fff",
              borderRadius: "60px", fontSize: "16px", fontWeight: 700,
              textDecoration: "none", boxShadow: "0 4px 20px rgba(6,199,85,0.3)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            LINEで提案書を受け取る
          </a>
        </div>
      </div>
    </section>
  );
}
