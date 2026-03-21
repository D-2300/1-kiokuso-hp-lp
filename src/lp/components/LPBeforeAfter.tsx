const cases = [
  { type: "カフェ", cost: "120万円", before: "/images/crossover-before-01.webp", after: "/images/crossover-after-01.webp" },
  { type: "居酒屋", cost: "180万円", before: "/images/crossover-before-02.webp", after: "/images/crossover-after-02.webp" },
  { type: "美容室", cost: "150万円", before: "/images/salon-before-01.webp", after: "/images/salon-after-01.webp" },
  { type: "テイクアウト", cost: "90万円", before: "/images/owl-before-01.webp", after: "/images/owl-after-01.webp" },
];

export default function LPBeforeAfter() {
  return (
    <section style={{ padding: "48px 20px", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {cases.map((c) => (
            <div
              key={c.type}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #eee",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {(["Before", "After"] as const).map((label) => (
                  <div key={label} style={{ position: "relative" }}>
                    <div style={{ height: "clamp(144px, 18vw, 176px)", overflow: "hidden" }}>
                      <img
                        src={label === "Before" ? c.before : c.after}
                        alt={`${c.type} ${label}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <span
                      style={{
                        position: "absolute",
                        bottom: "8px",
                        left: "8px",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#fff",
                        backgroundColor: label === "Before" ? "rgba(55,65,81,0.85)" : "rgba(22,163,74,0.85)",
                        padding: "3px 10px",
                        borderRadius: "4px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "12px 14px" }}>
                <p style={{ margin: 0, fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 500, color: "#555" }}>
                  {c.type}
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "clamp(17px, 3vw, 20px)",
                    fontWeight: 700,
                    color: "#222",
                  }}
                >
                  {c.cost}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
