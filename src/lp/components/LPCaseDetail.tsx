import { useState } from "react";

export const cases = [
  {
    name: "バスケットボール Cafe&Bar CROSSOVER",
    location: "仙台市",
    type: "スポーツバー",
    kind: "スケルトン",
    cost: "¥900,000",
    period: "約10日",
    tsubo: "18坪",
    description:
      "バスケットボール好きにはたまらない空間を、極限までコストを削りながら実現しました。壁面にモルタルを施工して無骨な質感を出し、ブルーLEDが光るバーカウンターへ仕上げています。中古設備を最大限に活用しDIYを組み合わせることで、スケルトンから約90万円・10日間という驚異的なコストパフォーマンスを実現した事例です。",
    tags: ["DIY施工", "モルタル壁", "中古設備多用", "スケルトンから10日"],
    main: "/images/crossover-after-01.webp",
    subs: ["/images/crossover-after-02.webp", "/images/crossover-after-03.webp", "/images/crossover-after-04.webp"],
    before: "/images/crossover-before-01.webp",
  },
  {
    name: "テイクアウトカフェ OWL",
    location: "仙台市",
    type: "テイクアウトカフェ",
    kind: "居抜き",
    cost: "¥800,000",
    period: "約22日",
    tsubo: "10坪",
    description:
      "居抜き物件のインフラをそのまま活かし、最小限の手数で新しいお店に生まれ変わらせた事例です。既存カウンターはそのまま残し、壁の塗装はオーナー自身がDIYで施工。厨房機器はメルカリ・ヤフオクで調達し、設置のみ記憶荘が担当しました。「使えるものは使う」を徹底して、約80万円に収めています。",
    tags: ["居抜き活用", "DIY塗装", "中古厨房機器", "施主支給"],
    main: "/images/owl-after-01.webp",
    subs: [],
    before: "/images/owl-before-01.webp",
  },
  {
    name: "パーソナルジム B-POINT",
    location: "仙台市",
    type: "パーソナルジム",
    kind: "スケルトン",
    cost: "¥1,400,000",
    period: "約30日",
    tsubo: "20坪",
    description:
      "スケルトン状態から防音工事・ミラー設置・床仕上げまで一気通貫で対応した事例です。トレーニングマシンはオーナーが直接調達し、記憶荘は搬入・設置を担当。公庫融資の見積書作成から保健所対応まで、開業に必要な手続きもすべてサポートしました。施主支給とDIY仕上げを組み合わせ、スケルトンで約140万円に抑えています。",
    tags: ["スケルトン施工", "防音工事", "施主支給マシン", "融資対応"],
    main: "/images/bpoint-after-01.webp",
    subs: [],
    before: "/images/bpoint-before-01.webp",
  },
  {
    name: "ネイル・アイラッシュサロン",
    location: "仙台市",
    type: "ネイル・アイラッシュサロン",
    kind: "居抜き",
    cost: "¥900,000",
    period: "約18日",
    tsubo: "15坪",
    description:
      "居抜き物件をフル活用し、床・壁・棚の仕上げをオーナー自身がすべてDIYで施工した事例です。記憶荘が担当したのは電気・給排水などのインフラ工事のみ。什器もオーナーが自分で選んで購入し、コストを最大限に圧縮しました。みやぎ中小企業チャレンジ応援基金も活用し、約90万円で開業を実現しています。",
    tags: ["居抜き活用", "DIY全面施工", "施主支給什器", "補助金活用"],
    main: "/images/salon-after-01.webp",
    subs: [],
    before: "/images/salon-before-01.webp",
  },
  {
    name: "ANVIL",
    location: "仙台市",
    type: "バー",
    kind: "居抜き",
    cost: "¥900,000",
    period: "約14日",
    tsubo: "15坪",
    description:
      "閉店したスナックの居抜き物件。ピンクのチューリップチェアと大理石模様のカウンターが残る空間を、インダストリアルテイストのバーへ改装しました。カウンター正面にはトタン板を張り、棚や什器はすべてスチールに統一。テーブルは古材×スチール脚でオリジナル製作。裸電球のペンダントライトで無骨さの中に温かみを持たせています。既存のカウンター骨格と配管をそのまま活かし、居抜きで約90万円・2週間で完成。",
    tags: ["居抜き活用", "トタン壁", "スチール什器", "古材テーブル", "オリジナル家具"],
    main: "/images/anvil-after.webp",
    subs: [],
    before: "/images/anvil-before.webp",
  },
  {
    name: "藍",
    location: "仙台市",
    type: "バー/割烹",
    kind: "居抜き",
    cost: "¥1,200,000",
    period: "約14日",
    tsubo: "10坪",
    description:
      "長年営業していたカウンターバーの居抜き物件。無垢材のカウンターと木製棚は状態が良く、そのまま活かす判断をしました。壁面には藍色の幾何学模様の壁紙を全面に施工し、空間の印象を一変。棚には陶器の器やグラスを並べ、裸電球のペンダントライトで落ち着いた雰囲気に仕上げています。床はダーク系のフローリングに張り替え。既存カウンターを活かしたことで、居抜きで約120万円・2週間で完成。",
    tags: ["居抜き活用", "壁紙全面施工", "既存カウンター活用", "和モダン", "フローリング張替"],
    main: "/images/case6-after.webp",
    subs: [],
    before: "/images/case6-before.webp",
  },
];

export default function LPCaseDetail() {
  const [hintVisible, setHintVisible] = useState(true);

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
            key={c.name}
            style={{
              flexShrink: 0,
              width: "clamp(300px, 82vw, 520px)",
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
              alt={c.name}
              style={{
                width: "100%",
                height: "clamp(200px, 26vw, 272px)",
                objectFit: "cover",
                display: "block",
              }}
            />
            {c.subs.length > 0 && (
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${c.subs.length}, 1fr)`, gap: "4px", padding: "6px 6px 0" }}>
                {c.subs.map((src, j) => (
                  <div key={j} style={{ height: "64px", borderRadius: "5px", overflow: "hidden" }}>
                    <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            )}

            <div style={{ padding: "18px 20px 22px" }}>
              <p style={{ margin: "0 0 14px", fontSize: "clamp(15px, 2.5vw, 17px)", fontWeight: 700, color: "#1a1a1a" }}>
                {c.name}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #f0f0f0" }}>
                {[
                  { label: "概算費用", value: c.cost },
                  { label: "工期", value: c.period },
                  { label: "物件", value: c.kind },
                  { label: "坪数", value: c.tsubo },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    style={{
                      backgroundColor: "#f7f6f3",
                      borderRadius: "6px",
                      padding: "6px 10px",
                      textAlign: "center",
                    }}
                  >
                    <p style={{ margin: 0, fontSize: "10px", color: "#999", fontWeight: 500 }}>{spec.label}</p>
                    <p style={{ margin: "2px 0 0", fontSize: "13px", fontWeight: 700, color: "#222", whiteSpace: "nowrap" }}>
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              <p style={{ margin: "0 0 14px", fontSize: "clamp(13px, 2vw, 14px)", color: "#555", lineHeight: 1.85 }}>
                {c.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      color: "#4A6741",
                      backgroundColor: "rgba(74,103,65,0.08)",
                      borderRadius: "4px",
                      padding: "3px 8px",
                      fontWeight: 500,
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
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
