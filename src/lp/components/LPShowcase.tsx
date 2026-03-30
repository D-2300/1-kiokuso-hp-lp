import { useState } from "react";

export default function LPShowcase() {
  const [hintVisible, setHintVisible] = useState(true);
  const items = [
    { src: "/images/showcase-cafe-sm.webp", label: "カフェ" },
    { src: "/images/showcase-izakaya-sm.webp", label: "居酒屋・バー" },
    { src: "/images/showcase-salon-sm.webp", label: "美容室" },
    { src: "/images/showcase-gym-sm.webp", label: "ジム" },
    { src: "/images/showcase-takeout-sm.webp", label: "テイクアウト" },
    { src: "/images/showcase-shop-sm.webp", label: "物販" },
    { src: "/images/showcase-nail-sm.webp", label: "ネイルサロン" },
    { src: "/images/showcase-ramen-sm.webp", label: "ラーメン店" },
    { src: "/images/showcase-clinic-sm.webp", label: "整体・治療院" },
    { src: "/images/showcase-office-sm.webp", label: "事務所" },
    { src: "/images/showcase-bakery-sm.webp", label: "ベーカリー" },
    { src: "/images/showcase-flower-sm.webp", label: "花屋" },
  ];

  return (
    <section style={{ backgroundColor: "#fff", padding: "16px 0 40px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 20px" }}>
        <p style={{
          fontSize: "clamp(18px, 3.5vw, 24px)",
          fontWeight: 700,
          color: "#222",
          textAlign: "center",
          margin: "0 0 6px",
        }}>
          こんなお店を、つくれます。
        </p>
      </div>

      <div style={{
        display: "flex",
        gap: "12px",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        padding: "0 20px 16px",
      }}>
        {items.map((item) => (
          <div key={item.label} style={{
            flex: "0 0 auto",
            width: "220px",
            scrollSnapAlign: "start",
          }}>
            <div style={{
              width: "220px",
              height: "148px",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#e8e4de",
            }}>
              <img
                src={item.src}
                alt={item.label}
                width="220"
                height="148"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <p style={{
              margin: "8px 0 0",
              fontSize: "13px",
              fontWeight: 600,
              color: "#444",
              textAlign: "center",
            }}>
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {hintVisible && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "8px", marginBottom: "4px" }}>
          <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.25)" }}>スワイプで見る</span>
          <button
            onClick={() => setHintVisible(false)}
            aria-label="案内を閉じる"
            style={{
              fontSize: "10px",
              color: "rgba(0,0,0,0.25)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 0 0 8px",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
