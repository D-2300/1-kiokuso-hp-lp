import { useState } from "react";
import StudioNav from "../components/StudioNav";
import StudioCTA from "../components/StudioCTA";
import StudioFooter from "../components/StudioFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import GoldDivider from "../../shared/GoldDivider";
import SectionHeading from "../../shared/SectionHeading";
import TextureBand from "../../shared/TextureBand";
import { colors } from "../../shared/design-tokens";

const priceRows = [
  { type: "飲食店（居抜き）", range: "100万〜200万円" },
  { type: "飲食店（スケルトン）", range: "200万〜350万円" },
  { type: "美容室", range: "80万〜180万円" },
  { type: "テイクアウト店", range: "50万〜120万円" },
  { type: "ジム・フィットネス", range: "150万〜350万円" },
  { type: "物販・アパレル", range: "80万〜200万円" },
];

const flowSteps = [
  {
    num: "0",
    title: "ご相談（無料）",
    body: "LINEで気軽にご相談いただけます。物件の写真や間取り図をお送りいただければ、概算をお伝えします。物件が決まる前でも構いません。",
    fee: "無料",
  },
  {
    num: "1",
    title: "現地調査・ヒアリング",
    body: "実際に物件を見て、設備の状態・インフラ・活かせるものを確認します。仙台市内は無料。それ以外は交通費として最大1万円いただく場合があります。",
    fee: "無料〜1万円",
  },
  {
    num: "2",
    title: "詳細見積もり",
    body: "全項目を一行ずつ記載した見積もりを作成します。融資用の書類としてもそのまま使えます。納得いかなければここで終了できます。",
    fee: "3〜6万円",
  },
  {
    num: "3",
    title: "施工",
    body: "工事開始。工程ごとに写真で進捗を共有します。DIY参加の日程もここで調整します。",
    fee: "見積もり金額",
  },
  {
    num: "4",
    title: "引渡し",
    body: "最終確認後にお引渡し。施工後の不具合はLINEでご連絡いただければ対応します。",
    fee: "",
  },
];

const faqItems = [
  {
    q: "物件が決まっていませんが相談できますか？",
    a: "はい。物件探しの段階からご相談いただけます。業態や広さのご希望を伺い、内装の観点からアドバイスすることもできます。",
  },
  {
    q: "相見積もりを取ってもいいですか？",
    a: "もちろんです。他社との比較はむしろおすすめしています。記憶荘の見積もりは全項目を一行ずつ記載しているので、比較しやすいと思います。",
  },
  {
    q: "見積もりの後に断っても大丈夫ですか？",
    a: "はい。見積もり後にお断りいただいても一切費用は発生しません（詳細見積もり費用3〜6万円を除く）。強引な営業もしません。",
  },
  {
    q: "DIYの経験がなくても参加できますか？",
    a: "はい。道具の使い方からお教えします。壁の塗装や簡単な仕上げなど、一緒にやれる工程があります。経験は不要です。",
  },
  {
    q: "融資用の見積書は作れますか？",
    a: "はい。日本政策金融公庫や銀行向けの見積書を作成できます。融資申請に必要な書式で対応します。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid #E5E0D8",
        cursor: "pointer",
      }}
      onClick={() => setOpen((v) => !v)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flex: 1 }}>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#C9A84C", minWidth: "16px" }}>Q</span>
          <span style={{ fontSize: "14px", color: "#333", lineHeight: 1.7, fontWeight: 500 }}>{q}</span>
        </div>
        <span style={{ fontSize: "18px", color: "#C9A84C", fontWeight: 300, flexShrink: 0 }}>
          {open ? "−" : "+"}
        </span>
      </div>
      {open && (
        <div style={{ padding: "0 0 20px 26px" }}>
          <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.9, margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

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
    <div style={{ backgroundColor: colors.beige, minHeight: "100vh", paddingTop: 0 }}>
      <StudioNav />

      {/* SmallHero */}
      <section style={{ position: "relative", height: "50vh", minHeight: "320px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%" }}>
          <img src="/assets/textures/earthen-wall-layers.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
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
          <p style={{ color: "#fff", fontFamily: "'Anton', sans-serif", fontSize: "48px", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" }}>Pricing</p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>料金の考え方</p>
        </div>
      </section>

      <TextureBand src="/assets/textures/earthen-wall-layers.webp" height={200} />

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

      <GoldDivider />

      {/* FLOW */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Anton, sans-serif", fontSize: "14px", letterSpacing: "4px", textAlign: "center", color: "#999", marginBottom: "8px" }}>FLOW</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, textAlign: "center", marginBottom: "48px", color: "#333", margin: "0 0 48px" }}>ご相談からお引渡しまで</h2>
          <div>
            {flowSteps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                  padding: "28px 0",
                  borderBottom: i < flowSteps.length - 1 ? "1px solid #E5E0D8" : "none",
                }}
              >
                <div style={{ minWidth: "32px", textAlign: "center" }}>
                  <span style={{ fontFamily: "Anton, sans-serif", fontSize: "11px", letterSpacing: "2px", color: "#C9A84C" }}>
                    STEP
                  </span>
                  <p style={{ fontFamily: "Anton, sans-serif", fontSize: "28px", color: "#C9A84C", margin: "0", lineHeight: 1 }}>
                    {step.num}
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px", gap: "12px" }}>
                    <p style={{ fontSize: "15px", fontWeight: 500, color: "#333", margin: 0 }}>{step.title}</p>
                    {step.fee && (
                      <span style={{ fontSize: "12px", color: "#999", whiteSpace: "nowrap", flexShrink: 0 }}>{step.fee}</span>
                    )}
                  </div>
                  <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.9, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <GoldDivider />

      {/* FAQ */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Anton, sans-serif", fontSize: "14px", letterSpacing: "4px", textAlign: "center", color: "#999", marginBottom: "8px" }}>FAQ</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, textAlign: "center", margin: "0 0 48px", color: "#333" }}>よくあるご質問</h2>
          <div style={{ borderTop: "1px solid #E5E0D8" }}>
            {faqItems.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <StudioCTA />

      {/* 対応エリア */}
      <section style={{ padding: "60px 20px", backgroundColor: "#F8F5F0" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <img
            src="/images/area-map.webp"
            alt="対応エリア：仙台市・宮城県を中心に東北全域で対応"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              display: "block",
              margin: "0 auto",
              borderRadius: "8px",
            }}
          />
          <p style={{
            margin: "16px 0 0",
            fontSize: "13px",
            color: "#999",
            lineHeight: 1.7,
          }}>
            ご希望があれば関東・東京エリアなど東北以外も対応可能な場合がありますので、気軽にご相談ください。
          </p>
        </div>
      </section>

      <StudioFooter />
    </div>
  );
}
