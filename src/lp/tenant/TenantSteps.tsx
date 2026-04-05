const LINE_URL = "https://lin.ee/HVV0QJO";
const lineSvgPath = "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const steps = [
  { num: 1, time: "10秒", title: "LINE友だち追加", desc: "「物件情報が欲しい」と送るだけ" },
  { num: 2, time: "2分", title: "希望条件を共有", desc: "業種・エリア・予算、わかる範囲でOK" },
  { num: 3, time: "数日〜", title: "物件情報をお届け", desc: "条件に合う物件を一緒に探します" },
];

export default function TenantSteps() {
  return (
    <section style={{ padding: "44px 20px 40px", background: "#f9f8f6" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "10px", fontWeight: 600, letterSpacing: "0.28em", color: "#C9A84C", marginBottom: "10px" }}>
          STEPS
        </p>
        <h2 style={{ fontSize: "clamp(17px, 3.4vw, 22px)", fontWeight: 700, color: "#1a1f14", textAlign: "center", marginBottom: "20px", lineHeight: 1.55 }}>
          物件情報を受け取るまでの<span style={{ color: "#06C755" }}>かんたん3ステップ</span>
        </h2>

        {/* Steps - compact horizontal cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "20px" }}>
          {steps.map((s, i) => {
            const isFirst = s.num === 1;
            return (
              <div key={s.num}>
                <div style={{
                  display: "flex", gap: "12px", alignItems: "center",
                  padding: isFirst ? "14px 16px" : "12px 14px",
                  background: isFirst ? "#06C755" : "#fff",
                  borderRadius: "12px",
                  border: isFirst ? "none" : "1px solid #eee",
                }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%", flexShrink: 0,
                    background: isFirst ? "#fff" : "linear-gradient(135deg, #06C755, #05a847)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: isFirst ? "#06C755" : "#fff", fontSize: "15px", fontWeight: 900,
                  }}>
                    {s.num}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <span style={{ fontSize: "clamp(13px, 2.5vw, 15px)", fontWeight: 700, color: isFirst ? "#fff" : "#222" }}>{s.title}</span>
                      <span style={{ fontSize: "10px", fontWeight: 600, color: isFirst ? "rgba(255,255,255,0.7)" : "#06C755" }}>{s.time}</span>
                    </div>
                    <p style={{ fontSize: "clamp(11px, 1.8vw, 12px)", color: isFirst ? "rgba(255,255,255,0.85)" : "#888", marginTop: "2px", fontWeight: isFirst ? 600 : 400 }}>{s.desc}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ textAlign: "center", color: "#ddd", fontSize: "14px", lineHeight: 1, padding: "2px 0" }}>↓</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust badges + message combined */}
        <div style={{
          background: "#f0faf0", border: "1px solid #c8e6c9", borderRadius: "12px",
          padding: "14px 16px", textAlign: "center", marginBottom: "20px",
        }}>
          <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", fontWeight: 700, color: "#2d5016", marginBottom: "8px" }}>
            💬「なんとなく聞いてみようかな」で大丈夫。
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
            {["🔒 匿名OK", "💰 無料", "🚫 営業なし", "⏰ あなたのペース"].map((t) => (
              <span key={t} style={{
                fontSize: "10px", fontWeight: 600, color: "#555",
                background: "#fff", borderRadius: "999px", padding: "4px 10px",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#06C755", color: "#fff", borderRadius: "999px",
              padding: "14px 32px", fontSize: "clamp(14px, 2.5vw, 16px)",
              fontWeight: 700, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(6,199,85,.25)",
            }}>
            <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            LINEで物件情報を受け取る
          </a>
          <p style={{ fontSize: "11px", color: "#bbb", marginTop: "10px" }}>
            無料・匿名OK・営業なし
          </p>
        </div>
      </div>
    </section>
  );
}
