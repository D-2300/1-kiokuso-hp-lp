export default function KojiMoneyFlow() {
  return (
    <section style={{ padding: "clamp(44px, 8vw, 80px) 20px", background: "#2C2C2C", color: "#fff" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "3px", color: "#C4A35A", marginBottom: "12px" }}>
          WHY THIS PRICE
        </p>
        <h2 style={{
          fontFamily: "'Zen Maru Gothic', 'Noto Sans JP', sans-serif",
          fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: "#fff",
          marginBottom: "16px", lineHeight: 1.5,
        }}>
          同じ工事でも、<br />お金が通る道が違うだけ。
        </h2>

        {/* Always 2-column comparison */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "20px",
        }}>
          {/* General route */}
          <div style={{
            borderRadius: "12px", padding: "16px 12px",
            background: "#3A3A3A", border: "1px solid rgba(255,255,255,0.08)",
            display: "flex", flexDirection: "column", gap: "6px",
          }}>
            <div style={{ fontSize: "11px", letterSpacing: "2px", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
              一般ルート
            </div>
            <div style={{
              textAlign: "center", fontFamily: "'Zen Maru Gothic', sans-serif",
              fontSize: "clamp(22px, 5vw, 32px)", fontWeight: 700, textDecoration: "line-through",
              color: "rgba(255,255,255,0.4)", marginBottom: "4px",
            }}>
              300万
            </div>
            {["紹介料 −45万", "設計経由 −30万", "元請け −60万", "不要工事 −30万"].map((t, i) => (
              <div key={i} style={{
                padding: "6px 8px", borderRadius: "6px", fontSize: "clamp(10px, 2.2vw, 13px)",
                textAlign: "center", lineHeight: 1.4,
                background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)",
              }}>
                {t}
              </div>
            ))}
            <div style={{ textAlign: "center", marginTop: "4px", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>手元に残る工事</div>
              <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>135万</div>
            </div>
          </div>

          {/* Kiokuso route */}
          <div style={{
            borderRadius: "12px", padding: "16px 12px",
            background: "rgba(107,142,90,0.15)", border: "1px solid rgba(107,142,90,0.3)",
            display: "flex", flexDirection: "column", gap: "6px",
          }}>
            <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#C4A35A", textAlign: "center" }}>
              記憶荘ルート
            </div>
            <div style={{
              textAlign: "center", fontFamily: "'Zen Maru Gothic', sans-serif",
              fontSize: "clamp(22px, 5vw, 32px)", fontWeight: 700, color: "#fff", marginBottom: "4px",
            }}>
              80万
            </div>
            {["✓ 直接契約・中間ゼロ", "✓ 設計施工一社完結", "✓ 居抜き最大活用", "✓ 施主支給・DIY OK"].map((t, i) => (
              <div key={i} style={{
                padding: "6px 8px", borderRadius: "6px", fontSize: "clamp(10px, 2.2vw, 13px)",
                textAlign: "center", lineHeight: 1.4,
                background: "rgba(107,142,90,0.2)", color: "#E8F0E4",
              }}>
                {t}
              </div>
            ))}
            <div style={{ textAlign: "center", marginTop: "4px", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>手元に残る工事</div>
              <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 700, color: "#C4A35A" }}>80万</div>
            </div>
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: "16px", fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>
          ※ カフェ10坪・居抜き活用の例。業態・坪数で金額は変わります。
        </p>
        <p style={{ marginTop: "16px", textAlign: "center", fontSize: "clamp(13px, 2.5vw, 15px)", color: "#C4A35A", lineHeight: 1.8 }}>
          値段を下げたのではなく、<br />余計なコストをカットしただけです。
        </p>
      </div>
    </section>
  );
}
