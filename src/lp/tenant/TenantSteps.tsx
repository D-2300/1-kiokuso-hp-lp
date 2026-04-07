
const steps = [
  { num: 1, time: "10秒", title: "LINE友だち追加", desc: "「物件情報が欲しい」と送るだけ" },
  { num: 2, time: "2分", title: "希望条件を共有", desc: "業種・エリア・予算、わかる範囲でOK" },
  { num: 3, time: "数日〜", title: "物件情報をお届け", desc: "条件に合う物件を一緒に探します" },
];

export default function TenantSteps() {
  return (
    <section id="tenant-steps" style={{ padding: "44px 20px 40px", background: "#f9f8f6" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "12px", fontWeight: 600, letterSpacing: "0.28em", color: "#C9A84C", marginBottom: "10px" }}>
          STEPS
        </p>
        <h2 style={{ fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: "#1a1f14", textAlign: "center", marginBottom: "8px", lineHeight: 1.55 }}>
          物件情報を受け取るまでの<span style={{ color: "#06C755" }}>かんたん3ステップ</span>
        </h2>
        <p style={{ textAlign: "center", fontSize: "clamp(13px, 2.5vw, 15px)", fontWeight: 700, color: "#06C755", marginBottom: "20px" }}>
          不動産攻略ガイド プレゼント中！
        </p>

        {/* Visual flow infographic - LINE green background band */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
            marginBottom: "28px",
            padding: "16px 8px",
            background: "#06C755",
            borderRadius: "16px",
          }}
        >
          {[
            { img: "/images/step-line-register-sm.webp", label: "LINE追加", time: "10秒", highlight: true },
            { img: "/images/step-line-send-sm.webp", label: "希望を伝える", time: "2分", highlight: false },
            { img: "/images/step-tenant-info-sm.webp", label: "物件情報GET", time: "数日〜", highlight: false },
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
                <div
                  style={{
                    width: "clamp(88px, 22vw, 130px)",
                    height: "clamp(88px, 22vw, 130px)",
                    borderRadius: "14px",
                    overflow: "hidden",
                    margin: "0 auto 6px",
                    border: step.highlight ? "2.5px solid #fff" : "2px solid rgba(255,255,255,.5)",
                    boxShadow: "0 4px 16px rgba(0,0,0,.15)",
                  }}
                >
                  <img
                    src={step.img}
                    alt={step.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <span style={{ fontSize: "clamp(10px, 2vw, 12px)", fontWeight: 700, color: "#fff", display: "block" }}>{step.label}</span>
                <span style={{ fontSize: "clamp(9px, 1.6vw, 10px)", color: "rgba(255,255,255,0.6)", display: "block", marginTop: "2px" }}>{step.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Steps - removed duplicate cards, visual flow above is sufficient */}

        {/* Trust badges + message combined */}
        <div style={{
          background: "#f0faf0", border: "1px solid #c8e6c9", borderRadius: "12px",
          padding: "14px 16px", textAlign: "center", marginBottom: "20px",
        }}>
          <p style={{ fontSize: "clamp(15px, 3vw, 17px)", fontWeight: 700, color: "#2d5016", marginBottom: "8px" }}>
            💬「なんとなく聞いてみようかな」で大丈夫。
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
            {["🔒 匿名OK", "💰 無料", "🚫 営業なし", "⏰ あなたのペース"].map((t) => (
              <span key={t} style={{
                fontSize: "12px", fontWeight: 600, color: "#555",
                background: "#fff", borderRadius: "999px", padding: "4px 10px",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
