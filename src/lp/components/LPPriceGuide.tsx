const guides = [
  { type: "飲食店", range: "100〜350万円", img: "/images/crossover-after-01.webp" },
  { type: "美容室", range: "80〜180万円", img: "/images/salon-after-01.webp" },
  { type: "テイクアウト", range: "50〜120万円", img: "/images/owl-after-01.webp" },
  { type: "ジム", range: "150〜350万円", img: "/images/bpoint-after-01.webp" },
  { type: "物販", range: "80〜200万円", img: "/images/diag-retail.webp" },
];

export default function LPPriceGuide() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "32px 0 24px" }}>
      <p
        style={{
          textAlign: "center",
          fontSize: "13px",
          fontWeight: 700,
          color: "#333",
          margin: "0 0 20px",
          padding: "0 20px",
        }}
      >
        業態別 価格の目安
      </p>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "12px",
          padding: "0 20px",
          scrollbarWidth: "none",
        }}
      >
        {guides.map((g) => (
          <div
            key={g.type}
            style={{
              flexShrink: 0,
              width: "140px",
              scrollSnapAlign: "start",
              textAlign: "center",
            }}
          >
            <img
              src={g.img}
              alt={g.type}
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "0 auto 10px",
                display: "block",
              }}
            />
            <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: 700, color: "#333" }}>{g.type}</p>
            <p style={{ margin: 0, fontSize: "12px", color: "#C9A84C", fontWeight: 700 }}>{g.range}</p>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", fontSize: "10px", color: "#bbb", marginTop: "16px", padding: "0 20px" }}>
        ※居抜き〜スケルトンを含む目安の総額です。物件状況により変動します。
      </p>
    </section>
  );
}
