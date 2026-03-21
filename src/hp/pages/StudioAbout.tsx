import StudioNav from "../components/StudioNav";
import StudioCTA from "../components/StudioCTA";
import StudioFooter from "../components/StudioFooter";
import PhotoPlaceholder from "../../shared/PhotoPlaceholder";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import GoldDivider from "../../shared/GoldDivider";
import { colors } from "../../shared/design-tokens";

const points = [
  {
    bg: "#D8D3CE",
    heading: "一人一貫対応",
    body: "設計・見積もり・施工・仕上げまで、一人が一貫して担当します。\n間に入る人がいないから、伝言ゲームにならない。",
  },
  {
    bg: "#CFC7BD",
    heading: "居抜きを活かす",
    body: "前のお店の設備や内装を活かすことで、\n大幅にコストを抑えながら、あなたの店に仕上げます。",
  },
  {
    bg: "#D5CEC6",
    heading: "DIY・施主支給OK",
    body: "自分で塗りたい壁がある。ネットで見つけた照明を使いたい。\nそういう思いを、一緒に形にします。",
  },
];

export default function StudioAbout() {
  return (
    <div style={{ backgroundColor: colors.beige, minHeight: "100vh", paddingTop: "64px" }}>
      <StudioNav />

      {/* SmallHero */}
      <section style={{ position: "relative", height: "280px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#D8D3CE" }}>
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
          <p style={{ color: "#fff", fontSize: "28px", fontWeight: 300, letterSpacing: "0.25em" }}>About</p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>スタジオについて</p>
        </div>
      </section>

      {/* 何をやっているか */}
      <ScrollFadeIn>
        <section style={{ padding: "64px 24px", textAlign: "center" }}>
          <p style={{ fontSize: "18px", fontWeight: 500, color: colors.text, marginBottom: "16px" }}>
            店舗内装の設計・施工
          </p>
          <p
            style={{
              maxWidth: "480px",
              margin: "0 auto",
              fontSize: "14px",
              color: colors.sub,
              lineHeight: 2.0,
            }}
          >
            仙台・宮城県を中心に、
            <br />
            飲食店・美容室・テイクアウト店などの
            <br />
            店舗内装を設計から施工まで一貫して行っています。
          </p>
        </section>
      </ScrollFadeIn>

      {/* どうやっているか */}
      {points.map((pt) => (
        <ScrollFadeIn key={pt.heading}>
          <div>
            <div style={{ width: "100%", aspectRatio: "16/9", backgroundColor: pt.bg }} />
            <div style={{ maxWidth: "520px", margin: "0 auto", padding: "32px 24px 56px" }}>
              <p style={{ fontSize: "16px", fontWeight: 500, color: colors.text, marginBottom: "12px" }}>
                {pt.heading}
              </p>
              <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 2.0, whiteSpace: "pre-line" }}>
                {pt.body}
              </p>
            </div>
          </div>
        </ScrollFadeIn>
      ))}

      {/* DAI紹介 */}
      <GoldDivider />
      <ScrollFadeIn>
        <div style={{ padding: "40px 24px 64px", maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ width: "80px", minWidth: "80px", aspectRatio: "1/1", backgroundColor: "#E5E0DB", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "9px", color: "#bbb", letterSpacing: "0.05em" }}>PHOTO</span>
            </div>
            <div>
              <p style={{ fontSize: "16px", fontWeight: 500, color: colors.text, marginBottom: "2px" }}>DAI</p>
              <p style={{ fontSize: "11px", color: colors.mute, marginBottom: "10px" }}>記憶荘 CSO</p>
              <p style={{ fontSize: "13px", color: colors.sub, lineHeight: 1.8 }}>
                仙台を拠点に、店舗の設計から施工まで一人で担当しています。
              </p>
            </div>
          </div>
        </div>
      </ScrollFadeIn>

      <StudioCTA />
      <StudioFooter />
    </div>
  );
}
