const cases = [
  {
    type: "カフェ", tsubo: "12坪", cost: "120万円", period: "6週間",
    comment: "居抜き物件を最大限活用。既存のカウンターを活かしながら、壁塗装と照明の入れ替えで印象を一新しました。",
    main: "/images/crossover-after-01.webp",
    subs: ["/images/crossover-after-02.webp", "/images/crossover-after-03.webp", "/images/crossover-after-04.webp"],
  },
  {
    type: "居酒屋", tsubo: "18坪", cost: "180万円", period: "8週間",
    comment: "スケルトンからの施工。厨房レイアウトを最初から設計し、客席20席を効率よく配置しました。",
    main: "/images/crossover-process-01.webp",
    subs: ["/images/crossover-process-02.webp", "/images/crossover-process-03.webp", "/images/crossover-process-04.webp"],
  },
  {
    type: "美容室", tsubo: "15坪", cost: "150万円", period: "7週間",
    comment: "セット面4席。施主支給の鏡とチェアでコストを削減。シンプルで清潔感のある空間に仕上げました。",
    main: "/images/salon-after-01.webp",
    subs: ["/images/salon-before-01.webp", "/images/bpoint-after-01.webp", "/images/bpoint-before-01.webp"],
  },
  {
    type: "テイクアウト", tsubo: "8坪", cost: "90万円", period: "4週間",
    comment: "小規模ながら動線を徹底的に設計。厨房と受け渡し口の位置を工夫し、一人でも回せるレイアウトに。",
    main: "/images/owl-after-01.webp",
    subs: ["/images/owl-before-01.webp", "/images/crossover-before-01.webp", "/images/crossover-before-02.webp"],
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
                  { label: "坪数", value: c.tsubo },
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
