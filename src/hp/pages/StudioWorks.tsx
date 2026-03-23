import StudioNav from "../components/StudioNav";
import StudioFooter from "../components/StudioFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import TextureBand from "../../shared/TextureBand";
import { colors } from "../../shared/design-tokens";

const works = [
  {
    name: "バスケットボール Cafe&Bar CROSSOVER",
    location: "仙台市",
    type: "スポーツバー",
    kind: "スケルトン",
    cost: "¥900,000",
    period: "約10日",
    tsubo: "18坪",
    story:
      "バスケットボール好きにはたまらない空間を、極限までコストを削りながら実現しました。壁面にモルタルを施工して無骨な質感を出し、ブルーLEDが光るバーカウンターへ仕上げています。中古設備を最大限に活用しDIYを組み合わせることで、スケルトンから約90万円・10日間という驚異的なコストパフォーマンスを実現した事例です。",
    tags: ["DIY施工", "モルタル壁", "中古設備多用", "スケルトンから10日"],
    main: "/images/crossover-after-01.webp",
    subs: ["/images/crossover-after-02.webp", "/images/crossover-after-03.webp", "/images/crossover-after-04.webp"],
  },
  {
    name: "テイクアウトカフェ OWL",
    location: "仙台市",
    type: "テイクアウトカフェ",
    kind: "居抜き",
    cost: "¥800,000",
    period: "約22日",
    tsubo: "10坪",
    story:
      "居抜き物件のインフラをそのまま活かし、最小限の手数で新しいお店に生まれ変わらせた事例です。既存カウンターはそのまま残し、壁の塗装はオーナー自身がDIYで施工。厨房機器はメルカリ・ヤフオクで調達し、設置のみ記憶荘が担当しました。「使えるものは使う」を徹底して、約80万円に収めています。",
    tags: ["居抜き活用", "DIY塗装", "中古厨房機器", "施主支給"],
    main: "/images/owl-after-01.webp",
    subs: [],
  },
  {
    name: "パーソナルジム B-POINT",
    location: "仙台市",
    type: "パーソナルジム",
    kind: "スケルトン",
    cost: "¥1,400,000",
    period: "約30日",
    tsubo: "20坪",
    story:
      "スケルトン状態から防音工事・ミラー設置・床仕上げまで一気通貫で対応した事例です。トレーニングマシンはオーナーが直接調達し、記憶荘は搬入・設置を担当。公庫融資の見積書作成から保健所対応まで、開業に必要な手続きもすべてサポートしました。施主支給とDIY仕上げを組み合わせ、スケルトンで約140万円に抑えています。",
    tags: ["スケルトン施工", "防音工事", "施主支給マシン", "融資対応"],
    main: "/images/bpoint-after-01.webp",
    subs: [],
  },
  {
    name: "ネイル・アイラッシュサロン",
    location: "仙台市",
    type: "ネイル・アイラッシュサロン",
    kind: "居抜き",
    cost: "¥900,000",
    period: "約18日",
    tsubo: "15坪",
    story:
      "居抜き物件をフル活用し、床・壁・棚の仕上げをオーナー自身がすべてDIYで施工した事例です。記憶荘が担当したのは電気・給排水などのインフラ工事のみ。什器もオーナーが自分で選んで購入し、コストを最大限に圧縮しました。みやぎ中小企業チャレンジ応援基金も活用し、約90万円で開業を実現しています。",
    tags: ["居抜き活用", "DIY全面施工", "施主支給什器", "補助金活用"],
    main: "/images/salon-after-01.webp",
    subs: [],
  },
];

const textureSrcs = [
  "/assets/textures/oak-hardwood-floor.webp",
  "/assets/textures/rusted-steel-plates.webp",
  "/assets/textures/shikkui-plaster-closeup.webp",
  null,
];

export default function StudioWorks() {
  return (
    <div style={{ backgroundColor: '#2E4229' }}>
    <div style={{ paddingTop: 0, backgroundColor: colors.beige }}>
      <StudioNav />

      <section style={{ position: "relative", height: "50vh", minHeight: "320px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#CFC7BD" }}>
          <img
            src="/assets/textures/oak-hardwood-floor.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <p style={{ color: "#fff", fontFamily: "'Anton', sans-serif", fontSize: "48px", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" }}>Works</p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>施工事例</p>
        </div>
      </section>

      <div style={{ paddingTop: "16px" }}>
        {works.map((work, i) => (
          <div key={work.name}>
            <ScrollFadeIn>
              <div style={{ paddingBottom: "64px" }}>
                <img
                  src={work.main}
                  alt={work.name}
                  style={{ maxWidth: "560px", width: "100%", aspectRatio: "3/2", objectFit: "cover", borderRadius: "4px", display: "block", margin: "0 auto" }}
                />

                {work.subs.length > 0 && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: `repeat(${work.subs.length}, 1fr)`,
                      gap: "6px",
                      maxWidth: "560px",
                      margin: "6px auto 0",
                      padding: "0 0",
                    }}
                  >
                    {work.subs.map((src, j) => (
                      <img
                        key={j}
                        src={src}
                        alt=""
                        style={{ aspectRatio: "3/2", objectFit: "cover", width: "100%", borderRadius: "4px" }}
                      />
                    ))}
                  </div>
                )}

                <div style={{ maxWidth: "560px", margin: "0 auto", padding: "28px 24px 0" }}>
                  <p style={{ fontSize: "18px", fontWeight: 700, color: colors.text, margin: "0 0 18px" }}>
                    {work.name}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px", paddingBottom: "20px", borderBottom: `1px solid rgba(0,0,0,0.08)` }}>
                    {[
                      { label: "概算費用", value: work.cost },
                      { label: "工期", value: work.period },
                      { label: "物件", value: work.kind },
                      { label: "坪数", value: work.tsubo },
                    ].map((spec) => (
                      <div
                        key={spec.label}
                        style={{
                          backgroundColor: "rgba(0,0,0,0.04)",
                          borderRadius: "6px",
                          padding: "6px 12px",
                          textAlign: "center",
                        }}
                      >
                        <p style={{ margin: 0, fontSize: "10px", color: colors.mute, fontWeight: 500 }}>{spec.label}</p>
                        <p style={{ margin: "2px 0 0", fontSize: "13px", fontWeight: 700, color: colors.text, whiteSpace: "nowrap" }}>
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 2.0, margin: "0 0 16px" }}>
                    {work.story}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "11px",
                          color: "#4A6741",
                          backgroundColor: "rgba(74,103,65,0.1)",
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
            </ScrollFadeIn>
            {textureSrcs[i] && <TextureBand src={textureSrcs[i] as string} height={180} />}
          </div>
        ))}
      </div>

    </div>
    <StudioFooter />
    </div>
  );
}
