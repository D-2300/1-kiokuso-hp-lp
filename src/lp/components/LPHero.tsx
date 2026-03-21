export default function LPHero() {
  return (
    <section
      style={{
        position: "relative",
        height: "70vh",
        minHeight: "400px",
        overflow: "hidden",
        backgroundColor: "#e8e4de",
      }}
    >
      <img
        src="/images/hero-bg-v2.webp"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.25) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "24px 20px 0",
          maxWidth: "960px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(255,255,255,0.85)",
              padding: "4px 10px",
              borderRadius: "4px",
              fontSize: "11px",
              color: "#333",
              marginBottom: "12px",
            }}
          >
            仙台・宮城県限定
          </div>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            今あるものを、活かす。
            <br />
            あなたの店を、一緒につくる。
          </h1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            marginTop: "auto",
          }}
        >
          {[
            { label: "居抜き", range: "100〜200万円" },
            { label: "スケルトン", range: "200〜350万円" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                backgroundColor: "rgba(255,255,255,0.88)",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <div style={{ height: "80px", overflow: "hidden" }}>
                <img
                  src={item.label === "居抜き" ? "/images/pricing-inuki.webp" : "/images/pricing-skeleton.webp"}
                  alt={item.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "10px 12px" }}>
                <p style={{ margin: 0, fontSize: "11px", color: "#666", letterSpacing: "0.05em" }}>
                  {item.label}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "16px", fontWeight: 700, color: "#333" }}>
                  {item.range}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
