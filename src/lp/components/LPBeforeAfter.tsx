const cases = [
  { type: "カフェ", cost: "120万円", before: "/images/crossover-before-01.webp", after: "/images/crossover-after-01.webp" },
  { type: "居酒屋", cost: "180万円", before: "/images/crossover-before-02.webp", after: "/images/crossover-after-02.webp" },
  { type: "美容室", cost: "150万円", before: "/images/salon-before-01.webp", after: "/images/salon-after-01.webp" },
  { type: "テイクアウト", cost: "90万円", before: "/images/owl-before-01.webp", after: "/images/owl-after-01.webp" },
];

export default function LPBeforeAfter() {
  return (
    <section style={{ padding: "32px 20px", maxWidth: "960px", margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
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
                  <div style={{ height: "clamp(96px, 12vw, 128px)", overflow: "hidden", position: "relative" }}>
                    <img
                      src={label === "Before" ? c.before : c.after}
                      alt={`${c.type} ${label}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <span style={{
                      position: "absolute", bottom: "6px", left: "8px",
                      fontSize: "11px", fontWeight: 700, color: "#fff",
                      backgroundColor: "rgba(0,0,0,0.45)",
                      padding: "2px 8px", borderRadius: "3px",
                      letterSpacing: "0.04em",
                    }}>{label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "10px 12px" }}>
              <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>{c.type}</p>
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
