const mappings = [
  { worry: "「一式」ばかりで何に払うか不明", solution: "一行ずつの費用明細をお渡しします" },
  { worry: "ネット坪単価はバラバラで当てにならない", solution: "あなた専用の収支シミュレーションを作成" },
  { worry: "解体中に追加請求された話を聞く", solution: "事前の物件診断でリスクを全て洗い出し" },
  { worry: "居抜きでどこを残せるか分からない", solution: "現場調査で残す/壊すを判定いたします" },
];

export default function KojiProblem() {
  return (
    <section style={{ padding: "clamp(44px, 8vw, 80px) 20px", background: "#fff" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "3px", color: "#8B6914", marginBottom: "12px" }}>
          COMMON WORRIES
        </p>
        <h2 style={{
          fontFamily: "'Zen Maru Gothic', 'Noto Sans JP', sans-serif",
          fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: "#3D2E16",
          marginBottom: "32px", lineHeight: 1.5,
        }}>
          業者選びの、4つの不安。
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {mappings.map((m, i) => (
            <div key={i} style={{
              background: "#FAF6F0", borderRadius: "14px", overflow: "hidden",
            }}>
              {/* Worry */}
              <div style={{
                padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px",
                borderLeft: "3px solid #cc6666",
              }}>
                <span style={{
                  width: "24px", height: "24px", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(204,102,102,0.1)", color: "#cc6666",
                  borderRadius: "6px", fontSize: "13px", fontWeight: 700,
                }}>
                  ✕
                </span>
                <span style={{ fontSize: "clamp(14px, 2.8vw, 16px)", fontWeight: 600, color: "#3D2E16", lineHeight: 1.5 }}>
                  {m.worry}
                </span>
              </div>

              {/* Solution */}
              <div style={{
                padding: "14px 20px", display: "flex", alignItems: "center", gap: "12px",
                background: "rgba(107,142,90,0.08)", borderLeft: "3px solid #6B8E5A",
              }}>
                <span style={{
                  width: "24px", height: "24px", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(107,142,90,0.15)", color: "#6B8E5A",
                  borderRadius: "6px", fontSize: "13px", fontWeight: 700,
                }}>
                  ✓
                </span>
                <span style={{ fontSize: "clamp(14px, 2.8vw, 16px)", fontWeight: 700, color: "#6B8E5A", lineHeight: 1.5 }}>
                  記憶荘なら → {m.solution}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <div style={{ fontSize: "28px", color: "#8B6914", marginBottom: "12px" }}>↓</div>
          <p style={{
            fontFamily: "'Zen Maru Gothic', 'Noto Sans JP', sans-serif",
            fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: "#3D2E16", lineHeight: 1.6,
          }}>
            この4つすべて、<br />
            <span style={{ color: "#8B6914" }}>あなた専用の提案書</span>に入っています。
          </p>
        </div>
      </div>
    </section>
  );
}
