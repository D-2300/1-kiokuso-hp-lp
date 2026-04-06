
const steps = [
  { num: 1, time: "10秒", title: "LINE友だち追加", desc: "「物件情報が欲しい」と送るだけ" },
  { num: 2, time: "2分", title: "希望条件を共有", desc: "業種・エリア・予算、わかる範囲でOK" },
  { num: 3, time: "数日〜", title: "物件情報をお届け", desc: "条件に合う物件を一緒に探します" },
];

export default function TenantSteps() {
  return (
    <section style={{ padding: "44px 20px 40px", background: "#f9f8f6" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "12px", fontWeight: 600, letterSpacing: "0.28em", color: "#C9A84C", marginBottom: "10px" }}>
          STEPS
        </p>
        <h2 style={{ fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: "#1a1f14", textAlign: "center", marginBottom: "20px", lineHeight: 1.55 }}>
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
                      <span style={{ fontSize: "clamp(15px, 3vw, 17px)", fontWeight: 700, color: isFirst ? "#fff" : "#222" }}>{s.title}</span>
                      <span style={{ fontSize: "12px", fontWeight: 600, color: isFirst ? "rgba(255,255,255,0.7)" : "#06C755" }}>{s.time}</span>
                    </div>
                    <p style={{ fontSize: "clamp(13px, 2.5vw, 14px)", color: isFirst ? "rgba(255,255,255,0.85)" : "#888", marginTop: "2px", fontWeight: isFirst ? 600 : 400 }}>{s.desc}</p>
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
