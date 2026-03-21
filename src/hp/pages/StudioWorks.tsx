import StudioNav from "../components/StudioNav";
import StudioCTA from "../components/StudioCTA";
import StudioFooter from "../components/StudioFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import { colors } from "../../shared/design-tokens";

const works = [
  {
    title: "カウンター越しの厨房",
    type: "カフェ",
    area: "仙台市青葉区",
    story: "前のお店が使っていたカウンターの木目が気に入って、\nそのまま活かすことにした。厨房側の動線を30cm広げて、\nオーナーが一人でも回せるレイアウトに。",
    main: "/images/crossover-after-01.webp",
    subs: ["/images/crossover-after-02.webp", "/images/crossover-after-03.webp", "/images/crossover-after-04.webp"],
  },
  {
    title: "光が入る美容室",
    type: "美容室",
    area: "仙台市宮城野区",
    story: "窓際の席を一番いい場所に配置して、\n鏡の角度を変えることで自然光が全席に届くようにした。\n天井は前のお店のまま。",
    main: "/images/salon-after-01.webp",
    subs: ["/images/salon-before-01.webp", "/images/bpoint-after-01.webp", "/images/bpoint-before-01.webp"],
  },
  {
    title: "テイクアウト専門の小さな窓",
    type: "テイクアウト",
    area: "仙台市青葉区",
    story: "4坪のスペースに必要な機能を全て収めた。\nカウンターは施主支給のアンティーク天板を使い、\n壁はオーナーが自分で塗った。",
    main: "/images/owl-after-01.webp",
    subs: ["/images/owl-before-01.webp", "/images/crossover-before-01.webp", "/images/crossover-before-02.webp"],
  },
  {
    title: "居酒屋の再出発",
    type: "居酒屋",
    area: "仙台市太白区",
    story: "居抜きで入った物件の良い部分はそのまま活かし、\n照明だけを全て入れ替えた。\n同じ空間が、まったく違う表情になった。",
    main: "/images/crossover-process-01.webp",
    subs: ["/images/crossover-process-02.webp", "/images/crossover-process-03.webp", "/images/crossover-process-04.webp"],
  },
];

export default function StudioWorks() {
  return (
    <div style={{ backgroundColor: colors.beige, minHeight: "100vh", paddingTop: "64px" }}>
      <StudioNav />

      {/* SmallHero */}
      <section style={{ position: "relative", height: "280px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#CFC7BD" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(74,103,65,0.75) 0%, rgba(74,103,65,0.5) 100%)",
            }}
          />
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
          <p style={{ color: "#fff", fontSize: "28px", fontWeight: 300, letterSpacing: "0.25em" }}>Works</p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>施工事例</p>
        </div>
      </section>

      {/* 事例一覧 */}
      <div style={{ paddingTop: "16px" }}>
        {works.map((work, i) => (
          <ScrollFadeIn key={work.title}>
            <div style={{ paddingBottom: "64px" }}>
              <img src={work.main} alt={work.title} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }} />
              <div style={{ maxWidth: "560px", margin: "0 auto", padding: "32px 24px 0" }}>
                <p style={{ fontSize: "18px", fontWeight: 500, color: colors.text }}>{work.title}</p>
                <p style={{ fontSize: "12px", color: colors.mute, marginTop: "6px", marginBottom: "16px" }}>
                  {work.type} ｜ エリア: {work.area}
                </p>
                <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 2.0, whiteSpace: "pre-line" }}>
                  {work.story}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "8px",
                    marginTop: "20px",
                  }}
                >
                  {work.subs.map((src, j) => (
                    <img key={j} src={src} alt="" style={{ aspectRatio: "1/1", objectFit: "cover", width: "100%" }} />
                  ))}
                </div>
              </div>
            </div>
            {i < works.length - 1 && (
              <div
                style={{
                  width: "1px",
                  height: "32px",
                  backgroundColor: colors.fukamidori.light,
                  margin: "0 auto",
                }}
              />
            )}
          </ScrollFadeIn>
        ))}
      </div>

      <StudioCTA />
      <StudioFooter />
    </div>
  );
}
