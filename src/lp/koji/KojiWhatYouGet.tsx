const items = [
  { img: "/images/solution-ai-pers-sm.webp", title: "AI完成パース", desc: "業種に合わせた\n外観・内観イメージ" },
  { img: "/images/pricing-skeleton-sm.webp", title: "費用シミュレーション", desc: "「一式」なし\n一行ずつの明細" },
  { img: "/images/area-map-sm.webp", title: "エリア調査", desc: "希望エリアの物件を\n実際に調べます" },
  { img: "/images/solution-fire-inspection-sm.webp", title: "許認可リスト", desc: "保健所・消防・警察\n何が必要か一覧" },
  { img: "/images/why-business-plan-sm.webp", title: "開業ロードマップ", desc: "いつ何をやるか\n月単位で" },
  { img: "/images/ai-pers-tablet-sm.webp", title: "あなた専用URL", desc: "HTMLページで\nいつでも見返せる" },
];

export default function KojiWhatYouGet() {
  return (
    <section style={{ padding: "clamp(44px, 8vw, 80px) 20px", background: "#FAF6F0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "3px", color: "#8B6914", marginBottom: "12px" }}>
          WHAT YOU GET
        </p>
        <h2 style={{
          fontFamily: "'Zen Maru Gothic', 'Noto Sans JP', sans-serif",
          fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: "#3D2E16",
          marginBottom: "20px", lineHeight: 1.5,
        }}>
          あなた専用のページに、<br />ぜんぶまとまっています。
        </h2>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "32px",
        }}>
          {items.map((item, i) => (
            <div key={i} style={{
              background: "#fff", borderRadius: "14px", overflow: "hidden",
              boxShadow: "0 2px 20px rgba(93,74,42,0.08)",
            }}>
              <div style={{ width: "100%", aspectRatio: "3/2", overflow: "hidden" }}>
                <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "14px 14px 16px", textAlign: "center" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#3D2E16", marginBottom: "4px" }}>{item.title}</h3>
                <p style={{ fontSize: "12px", color: "#7A6B55", lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          section > div > div[style*="repeat(3"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
