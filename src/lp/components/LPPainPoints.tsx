const pains = [
  { icon: "¥", text: "費用がわかりにくい。見積もりが適正かも判断できない。" },
  { icon: "?", text: "物件の坪数で何席取れるのか、インフラ費用も見えない。" },
  { icon: "⏱", text: "オープンに間に合うか不安。工期がどれくらいか不明瞭。" },
  { icon: "…", text: "そもそも進め方がわからない。まだ物件が確定していない。" },
];

export default function LPPainPoints() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "40px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "#4A6741",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          内装工事を考えているけど、わからないことが多すぎる
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {pains.map((p) => (
            <div
              key={p.icon}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                padding: "14px 16px",
                backgroundColor: "#fafafa",
                borderRadius: "6px",
                border: "1px solid #f0f0f0",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#EAF0E8",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#555",
                  flexShrink: 0,
                }}
              >
                {p.icon}
              </span>
              <p style={{ margin: 0, fontSize: "15px", color: "#333", lineHeight: 1.7 }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
