const cases = [
  { type: "カフェ", cost: "120万円" },
  { type: "居酒屋", cost: "180万円" },
  { type: "美容室", cost: "150万円" },
  { type: "テイクアウト", cost: "90万円" },
];

export default function LPBeforeAfter() {
  return (
    <section style={{ padding: "32px 20px", maxWidth: "960px", margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        {cases.map((c) => (
          <div
            key={c.type}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #eee",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {["Before", "After"].map((label) => (
                <div key={label}>
                  <div
                    style={{
                      height: "72px",
                      backgroundColor: label === "Before" ? "#ddd8d0" : "#ccc8c0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.3)" }}>{label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "10px 12px" }}>
              <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>{c.type}</p>
              <p style={{ margin: "4px 0 0", fontSize: "18px", fontWeight: 700, color: "#333" }}>
                {c.cost}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
