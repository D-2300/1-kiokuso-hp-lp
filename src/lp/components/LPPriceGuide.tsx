const items = [
  { name: "飲食店", price: "100〜350万円", image: "/images/crossover-after-01.webp" },
  { name: "バー", price: "90〜200万円", image: "/images/anvil-after.webp" },
  { name: "美容室", price: "80〜180万円", image: "/images/salon-after-01.webp" },
  { name: "テイクアウト", price: "50〜120万円", image: "/images/owl-after-01.webp" },
  { name: "ジム", price: "150〜350万円", image: "/images/bpoint-after-01.webp" },
  { name: "焼肉", price: "200〜500万円", image: "/images/yakiniku-after.webp" },
  { name: "ラーメン", price: "150〜400万円", image: "/images/ramen-after.webp" },
  { name: "物販", price: "80〜200万円", image: "/images/diag-retail.webp" },
];

export default function LPPriceGuide() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "48px 0" }}>
      <p style={{
        textAlign: "center",
        fontSize: "clamp(20px, 3.5vw, 28px)",
        fontWeight: 700,
        color: "#222",
        margin: "0 0 32px",
        padding: "0 20px",
      }}>
        業態別 価格の目安
      </p>

      <style>{`
        .price-carousel::-webkit-scrollbar { display: none; }
        .price-carousel { justify-content: flex-start; }
        @media (min-width: 1100px) {
          .price-carousel { justify-content: center; overflow-x: visible; }
        }
      `}</style>

      <div
        className="price-carousel"
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "24px",
          paddingBottom: "8px",
          paddingLeft: "24px",
          paddingRight: "24px",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          flexWrap: "nowrap",
        }}
      >
        {items.map(item => (
          <div key={item.name} style={{
            flex: "0 0 120px",
            scrollSnapAlign: "center",
            textAlign: "center",
          }}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                margin: "0 auto 8px",
              }}
            />
            <p style={{ fontSize: "14px", fontWeight: 500, margin: "0 0 4px", color: "#222" }}>{item.name}</p>
            <p style={{ fontSize: "13px", color: "#C9A84C", margin: 0 }}>{item.price}</p>
          </div>
        ))}
      </div>

      <p style={{
        textAlign: "center",
        fontSize: "10px",
        color: "rgba(0,0,0,0.25)",
        margin: "8px 0 0",
      }}>
        スワイプで見る ›
      </p>

      <p style={{
        textAlign: "center",
        fontSize: "13px",
        color: "#bbb",
        margin: "12px 20px 0",
      }}>
        ※居抜き〜スケルトンを含む目安の概算です。物件状況により変動します。
      </p>

      <div style={{ marginTop: "24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#999", lineHeight: 1.8 }}>
          坪単価の目安はお見せしました。<br />
          あなたの店の場合の概算は、LINEで聞いてください。
        </p>
      </div>
    </section>
  );
}
