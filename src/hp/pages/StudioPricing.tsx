import StudioNav from "../components/StudioNav";
import StudioCTA from "../components/StudioCTA";
import StudioFooter from "../components/StudioFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import GoldDivider from "../../shared/GoldDivider";
import SectionHeading from "../../shared/SectionHeading";
import { colors } from "../../shared/design-tokens";

const priceRows = [
  { type: "飲食店（居抜き）", range: "100万〜200万円" },
  { type: "飲食店（スケルトン）", range: "200万〜350万円" },
  { type: "美容室（居抜き）", range: "80万〜180万円" },
  { type: "テイクアウト店", range: "50万〜120万円" },
];

export default function StudioPricing() {
  return (
    <div style={{ backgroundColor: colors.beige, minHeight: "100vh", paddingTop: "64px" }}>
      <StudioNav />

      {/* SmallHero */}
      <section style={{ position: "relative", height: "280px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#D5CEC6" }}>
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
          <p style={{ color: "#fff", fontSize: "28px", fontWeight: 300, letterSpacing: "0.25em" }}>Pricing</p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>料金の考え方</p>
        </div>
      </section>

      {/* なぜこの値段なのか */}
      <ScrollFadeIn>
        <section style={{ padding: "64px 24px", maxWidth: "540px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "15px", lineHeight: 2.2, color: colors.text }}>
            記憶荘の内装が手ごろな理由は、シンプルです。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.2, color: colors.text, marginTop: "1.6em" }}>
            一人が、設計から施工まで一貫して行うこと。
            <br />
            居抜きの設備や内装を活かすこと。
            <br />
            DIYや施主支給を歓迎すること。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.2, color: colors.text, marginTop: "1.6em" }}>
            間に入る会社がないから、中間マージンがない。
            <br />
            使えるものは使うから、無駄な解体費がない。
            <br />
            自分でできることは自分でやるから、人件費が抑えられる。
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 2.2,
              color: colors.fukamidori.main,
              fontWeight: 500,
              marginTop: "1.6em",
            }}
          >
            それが「わけあって、この値段です。」の正体です。
          </p>
        </section>
      </ScrollFadeIn>

      <GoldDivider />

      {/* 参考レンジ */}
      <ScrollFadeIn>
        <section style={{ padding: "64px 24px", maxWidth: "480px", margin: "0 auto" }}>
          <SectionHeading en="Reference" ja="参考レンジ" />
          <div>
            {priceRows.map((row, i) => (
              <div
                key={row.type}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom:
                    i < priceRows.length - 1
                      ? "1px solid rgba(168,191,162,0.25)"
                      : "none",
                }}
              >
                <span style={{ fontSize: "14px", color: colors.text }}>{row.type}</span>
                <span style={{ fontSize: "15px", fontWeight: 500, color: colors.fukamidori.main }}>
                  {row.range}
                </span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "24px", fontSize: "12px", color: colors.mute, lineHeight: 1.8 }}>
            ※ 物件の状態・広さ・ご要望によって変わります。
            <br />
            LINEで物件の写真をお送りいただければ、概算をお伝えします。
          </p>
        </section>
      </ScrollFadeIn>

      <StudioCTA />
      <StudioFooter />
    </div>
  );
}
