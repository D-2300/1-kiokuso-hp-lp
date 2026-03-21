const steps = [
  { step: "Step 0", name: "LINE相談", cost: "無料", costColor: "#06C755" },
  { step: "Step 1", name: "現地調査・ヒアリング", cost: "無料〜1万円", costColor: "#333" },
  { step: "Step 2", name: "詳細見積もり", cost: "3〜6万円", costColor: "#333" },
  { step: "Step 3", name: "施工", cost: "見積もり金額", costColor: "#333" },
  { step: "Step 4", name: "引渡し", cost: "", costColor: "#333" },
];

export default function LPFlow() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "32px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((s, i) => (
            <div
              key={s.step}
              style={{
                display: "flex",
                alignItems: "stretch",
                gap: "0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "32px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#4A6741",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "16px",
                  }}
                >
                  <span style={{ fontSize: "10px", color: "#fff", fontWeight: 700 }}>{i}</span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: "2px", flex: 1, backgroundColor: "#e0e0e0", minHeight: "20px" }} />
                )}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "14px 0 14px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: i < steps.length - 1 ? "none" : "none",
                }}
              >
                <div>
                  <p style={{ margin: 0, fontSize: "10px", color: "#999", letterSpacing: "0.05em" }}>{s.step}</p>
                  <p style={{ margin: "2px 0 0", fontSize: "14px", fontWeight: 700, color: "#333" }}>{s.name}</p>
                </div>
                {s.cost && (
                  <p style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: s.costColor, flexShrink: 0 }}>
                    {s.cost}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <p style={{ margin: "16px 0 0", fontSize: "12px", color: "#888", textAlign: "center", lineHeight: 1.8 }}>
          物件が決まっていなくてもStep 0から始められます。
        </p>
      </div>
    </section>
  );
}
