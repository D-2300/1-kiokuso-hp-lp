const cases = [
  {
    type: "スポーツバー", tsubo: "15坪", cost: "165万円", period: "5週間", kind: "スケルトン",
    comment: "NBAテーマのスポーツバー。スケルトンから内装全てを施工。DIY塗装でオーナーも参加。",
    main: "/images/crossover-after-01.webp",
    subs: ["/images/crossover-after-02.webp", "/images/crossover-after-03.webp", "/images/crossover-after-04.webp"],
  },
  {
    type: "テイクアウトカフェ", tsubo: "10坪", cost: "80万円", period: "22日", kind: "居抜き",
    comment: "居抜き物件のインフラをそのまま活用。壁の塗装はオーナー自身がDIY施工。厨房機器はメルカリ・ヤフオクで調達し設置のみ記憶荘が担当。",
    main: "/images/owl-after-01.webp",
    subs: ["/images/owl-before-01.webp", "/images/owl-after-01.webp", "/images/owl-after-01.webp"],
  },
  {
    type: "パーソナルジム", tsubo: "20坪", cost: "140万円", period: "30日", kind: "スケルトン",
    comment: "スケルトンから防音・ミラー工事まで。トレーニング機器は施主が調達し記憶荘が設置。公庫融資の見積書作成から保健所対応まで一気通貫で対応。",
    main: "/images/bpoint-after-01.webp",
    subs: ["/images/bpoint-before-01.webp", "/images/bpoint-after-01.webp", "/images/bpoint-after-01.webp"],
  },
  {
    type: "ネイル・アイラッシュサロン", tsubo: "15坪", cost: "90万円", period: "18日", kind: "居抜き",
    comment: "居抜き物件をフル活用。床・壁・棚の仕上げをすべてDIYで施工。インフラ工事のみ記憶荘が担当。",
    main: "/images/salon-after-01.webp",
    subs: ["/images/salon-before-01.webp", "/images/salon-after-01.webp", "/images/salon-after-01.webp"],
  },
];

export default function LPCaseDetail() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "32px 0 48px" }}>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "16px",
          padding: "0 20px",
          scrollbarWidth: "none",
        }}
      >
        {cases.map((c) => (
          <div
            key={c.type}
            style={{
              flexShrink: 0,
              width: "clamp(280px, 78vw, 500px)",
              scrollSnapAlign: "start",
              border: "1px solid #eee",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 3px 12px rgba(0,0,0,0.07)",
            }}
          >
            <img
              src={c.main}
              alt={c.type}
              style={{
                width: "100%",
                height: "clamp(196px, 24vw, 256px)",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4px", padding: "8px" }}>
              {c.subs.map((src, j) => (
                <div key={j} style={{ height: "64px", borderRadius: "5px", overflow: "hidden" }}>
                  <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
            <div style={{ padding: "16px 20px 20px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gap: "8px",
                  marginBottom: "16px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                {[
                  { label: "業態", value: c.type },
                  { label: "種別", value: c.kind },
                  { label: "費用", value: c.cost },
                  { label: "工期", value: c.period },
                ].map((spec) => (
                  <div key={spec.label}>
                    <p style={{ margin: 0, fontSize: "11px", color: "#aaa", fontWeight: 500 }}>{spec.label}</p>
                    <p style={{ margin: "3px 0 0", fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 700, color: "#222" }}>
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{ margin: 0, fontSize: "clamp(13px, 2vw, 14px)", color: "#555", lineHeight: 1.85 }}>{c.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", fontSize: "12px", color: "#bbb", marginTop: "14px", padding: "0 20px" }}>
        ← スワイプで他の事例を見る →
      </p>
    </section>
  );
}
