const pains = [
  { icon: "¥", text: "費用がわかりにくい。見積もりが適正かも判断できない。" },
  { icon: "?", text: "物件の坪数で何席取れるのか、インフラ費用も見えない。" },
  { icon: "⏱", text: "オープンに間に合うか不安。工期がどれくらいか不明瞭。" },
  { icon: "…", text: "そもそも進め方がわからない。まだ物件が確定していない。" },
];

export default function LPPainPoints() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "48px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "clamp(17px, 3vw, 22px)",
            fontWeight: 700,
            color: "#333",
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          内装工事を考えているけど、わからないことが多すぎる
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {pains.map((p) => (
            <div
              key={p.icon}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                padding: "18px 20px",
                backgroundColor: "#fafafa",
                borderRadius: "10px",
                border: "1px solid #eee",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#EAF0E8",
                  fontSize: "20px",
                  color: "#555",
                  flexShrink: 0,
                }}
              >
                {p.icon}
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  color: "#333",
                  lineHeight: 1.8,
                  paddingTop: "10px",
                }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
