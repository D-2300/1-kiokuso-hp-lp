import StudioNav from "../components/StudioNav";
import StudioFooter from "../components/StudioFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import TextureBand from "../../shared/TextureBand";
import { colors } from "../../shared/design-tokens";

const works = [
  {
    title: "カウンター越しの厨房",
    type: "カフェ",
    cost: "120万円",
    tsubo: "12坪",
    period: "6週間",
    story: "前のお店が使っていたカウンターの木目が気に入って、\nそのまま活かすことにした。厨房側の動線を少し広げて、\nオーナーが一人でも回しやすいレイアウトに仕上げた。",
    main: "/images/crossover-after-01.webp",
    subs: ["/images/crossover-after-02.webp", "/images/crossover-after-03.webp", "/images/crossover-after-04.webp"],
  },
  {
    title: "光が入る美容室",
    type: "美容室",
    cost: "150万円",
    tsubo: "15坪",
    period: "7週間",
    story: "窓際の席を一番いい場所に配置して、\n鏡の角度を変えることで自然光が全席に届くようにした。\n天井は前のお店のまま。",
    main: "/images/salon-after-01.webp",
    subs: ["/images/salon-before-01.webp", "/images/bpoint-after-01.webp", "/images/bpoint-before-01.webp"],
  },
  {
    title: "テイクアウト専門の小さな窓",
    type: "テイクアウト",
    cost: "90万円",
    tsubo: "8坪",
    period: "4週間",
    story: "8坪のスペースに必要な機能をすべて収めた。\nカウンターは施主支給のアンティーク天板を使い、\n壁はオーナーが自分で塗った。",
    main: "/images/owl-after-01.webp",
    subs: ["/images/owl-before-01.webp", "/images/crossover-before-01.webp", "/images/crossover-before-02.webp"],
  },
  {
    title: "居酒屋の再出発",
    type: "居酒屋",
    cost: "180万円",
    tsubo: "18坪",
    period: "8週間",
    story: "前の店が残していった木の壁と天井はそのまま活かし、\n照明だけをすべて入れ替えた。\n同じ空間が、まったく違う表情になった。",
    main: "/images/crossover-process-01.webp",
    subs: ["/images/crossover-process-02.webp", "/images/crossover-process-03.webp", "/images/crossover-process-04.webp"],
  },
];

export default function StudioWorks() {
  return (
    <>
    <div style={{ paddingTop: 0, backgroundColor: colors.beige }}>
      <StudioNav />

      {/* SmallHero */}
      <section style={{ position: "relative", height: "50vh", minHeight: "320px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#CFC7BD" }}>
          <img
            src="/assets/textures/oak-hardwood-floor.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.45)",
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
          <p style={{ color: "#fff", fontFamily: "'Anton', sans-serif", fontSize: "48px", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" }}>Works</p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>施工事例</p>
        </div>
      </section>

      {/* 事例一覧 */}
      <div style={{ paddingTop: "16px" }}>
        {[
          { work: works[0], textureSrc: "/assets/textures/oak-hardwood-floor.webp" },
          { work: works[1], textureSrc: "/assets/textures/rusted-steel-plates.webp" },
          { work: works[2], textureSrc: "/assets/textures/shikkui-plaster-closeup.webp" },
          { work: works[3], textureSrc: null },
        ].map(({ work, textureSrc }) => (
          <div key={work.title}>
            <ScrollFadeIn>
              <div style={{ paddingBottom: "64px" }}>
                <img src={work.main} alt={work.title} style={{ maxWidth: "560px", width: "100%", aspectRatio: "3/2", objectFit: "cover", borderRadius: "4px", display: "block", margin: "0 auto" }} />
                <div style={{ maxWidth: "560px", margin: "0 auto", padding: "32px 24px 0" }}>
                  <p style={{ fontSize: "18px", fontWeight: 500, color: colors.text }}>{work.title}</p>
                  <p style={{ fontSize: "12px", color: colors.mute, marginTop: "6px", marginBottom: "16px" }}>
                    {work.type} ｜ {work.tsubo} ｜ {work.cost} ｜ {work.period}
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
                      maxWidth: "480px",
                      margin: "20px auto 0",
                    }}
                  >
                    {work.subs.map((src, j) => (
                      <img key={j} src={src} alt="" style={{ aspectRatio: "1/1", objectFit: "cover", width: "100%" }} />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
            {textureSrc && <TextureBand src={textureSrc} height={180} />}
          </div>
        ))}
      </div>

    </div>
    <StudioFooter />
    </>
  );
}
