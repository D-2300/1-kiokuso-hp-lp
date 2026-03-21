const steps = [
  { step: "Step 0", name: "LINE相談", cost: "無料", costColor: "#06C755" },
  { step: "Step 1", name: "現地調査・ヒアリング", cost: "無料〜1万円", costColor: "#555" },
  { step: "Step 2", name: "詳細見積もり", cost: "3〜6万円", costColor: "#555" },
  { step: "Step 3", name: "施工", cost: "見積もり金額", costColor: "#555" },
  { step: "Step 4", name: "引渡し", cost: "", costColor: "#555" },
];

export default function LPFlow() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "32px 20px 48px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((s, i) => (
            <div key={s.step} style={{ display: "flex", alignItems: "stretch" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "40px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#C9A84C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "14px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#fff", fontWeight: 700 }}>{i}</span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: "2px", flex: 1, backgroundColor: "#e0e0e0", minHeight: "24px" }} />
                )}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "16px 0 16px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: i < steps.length - 1 ? "1px solid #f5f5f5" : "none",
                }}
              >
                <div>
                  <p style={{ margin: 0, fontSize: "11px", color: "#aaa", letterSpacing: "0.06em" }}>{s.step}</p>
                  <p
                    style={{
                      margin: "3px 0 0",
                      fontSize: "clamp(16px, 3vw, 20px)",
                      fontWeight: 700,
                      color: "#222",
                    }}
                  >
                    {s.name}
                  </p>
                </div>
                {s.cost && (
                  <p
                    style={{
                      margin: 0,
                      fontSize: "clamp(16px, 3vw, 20px)",
                      fontWeight: 700,
                      color: s.costColor,
                      flexShrink: 0,
                      paddingLeft: "12px",
                    }}
                  >
                    {s.cost}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <p style={{ margin: "20px 0 0", fontSize: "13px", color: "#888", textAlign: "center", lineHeight: 1.8 }}>
          物件が決まっていなくてもStep 0から始められます。
        </p>
      </div>
    </section>
  );
}
