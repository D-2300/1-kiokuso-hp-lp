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
  { type: "美容室", range: "80万〜180万円" },
  { type: "テイクアウト店", range: "50万〜120万円" },
  { type: "ジム・フィットネス", range: "150万〜350万円" },
  { type: "物販・アパレル", range: "80万〜200万円" },
];

const costExamples = [
  {
    label: "居抜き活用",
    example: "既存のカウンターと厨房設備をそのまま使用",
    saving: "約80万円の解体・新設費用を削減",
  },
  {
    label: "施主支給",
    example: "照明器具・家具をオーナーが直接購入",
    saving: "仕入れマージン分（15〜30%）を削減",
  },
  {
    label: "DIY参加",
    example: "壁の塗装をオーナーと一緒に実施",
    saving: "塗装の人件費（約10〜20万円）を削減",
  },
  {
    label: "一人一貫対応",
    example: "設計・現場管理・施工を一人で実施",
    saving: "中間マージン（通常20〜30%）がゼロ",
  },
];

export default function StudioPricing() {
  return (
    <div style={{ backgroundColor: colors.beige, minHeight: "100vh", paddingTop: "64px" }}>
      <StudioNav />

      {/* SmallHero */}
      <section style={{ position: "relative", height: "280px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%" }}>
          <img src="/images/pricing-inuki.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
            記憶荘の価格には、理由があります。
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

      {/* コスト削減の具体例 */}
      <ScrollFadeIn>
        <section style={{ padding: "48px 24px", maxWidth: "540px", margin: "0 auto" }}>
          <SectionHeading en="Example" ja="コスト削減の例" />
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {costExamples.map((item) => (
              <div
                key={item.label}
                style={{
                  borderLeft: `2px solid ${colors.fukamidori.light}`,
                  paddingLeft: "16px",
                }}
              >
                <p style={{ fontSize: "14px", fontWeight: 500, color: colors.text, marginBottom: "4px" }}>
                  {item.label}
                </p>
                <p style={{ fontSize: "13px", color: colors.sub, lineHeight: 1.8, marginBottom: "2px" }}>
                  {item.example}
                </p>
                <p style={{ fontSize: "13px", color: colors.fukamidori.main, fontWeight: 500 }}>
                  → {item.saving}
                </p>
              </div>
            ))}
          </div>
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
