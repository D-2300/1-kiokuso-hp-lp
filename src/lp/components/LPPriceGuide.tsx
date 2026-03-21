const guides = [
  { type: "飲食店", range: "100〜350万円", img: "/images/crossover-after-01.webp" },
  { type: "美容室", range: "80〜180万円", img: "/images/salon-after-01.webp" },
  { type: "テイクアウト", range: "50〜120万円", img: "/images/owl-after-01.webp" },
  { type: "ジム", range: "150〜350万円", img: "/images/bpoint-after-01.webp" },
  { type: "物販", range: "80〜200万円", img: "/images/diag-retail.webp" },
];

export default function LPPriceGuide() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "48px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: "#222",
            margin: "0 0 32px",
          }}
        >
          業態別 価格の目安
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "24px",
            justifyItems: "center",
          }}
        >
          {guides.map((g) => (
            <div key={g.type} style={{ textAlign: "center" }}>
              <img
                src={g.img}
                alt={g.type}
                style={{
                  width: "clamp(100px, 18vw, 144px)",
                  height: "clamp(100px, 18vw, 144px)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  margin: "0 auto 12px",
                  outline: "2px solid #e8e8e8",
                  outlineOffset: "2px",
                }}
              />
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "clamp(14px, 2.5vw, 17px)",
                  fontWeight: 700,
                  color: "#222",
                }}
              >
                {g.type}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(13px, 2vw, 15px)",
                  fontWeight: 500,
                  color: "#C9A84C",
                }}
              >
                {g.range}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            color: "#bbb",
            marginTop: "24px",
          }}
        >
          ※居抜き〜スケルトンを含む目安の概算です。物件状況により変動します。
        </p>
      </div>
    </section>
  );
}
