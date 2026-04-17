import { Link } from "react-router-dom";
import GroupNav from "../components/GroupNav";
import GroupFooter from "../components/GroupFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import GoldDivider from "../../shared/GoldDivider";
import { colors } from "../../shared/design-tokens";

const ourWork = [
  {
    nameJa: "記憶荘 店舗内装スタジオ",
    nameEn: "KIOKUSO STUDIO",
    color: "#4A6741",
    logo: "/assets/logos/logo-studio-dark.webp",
    active: true,
    to: "/studio",
    body: "店舗オーナーのための内装工事。物件探しの段階から並走し、設計・施工まで一貫対応。居抜き活用・施主支給・DIY参加で、品質を落とさずに予算を最大化します。仙台・宮城県が対象エリア。",
    cta: "スタジオの詳細を見る",
  },
  {
    nameJa: "満室デザインLABO",
    nameEn: "KIOKUSO INVEST",
    color: "#6A4F7A",
    logo: "/assets/logos/logo-invest-gold.webp",
    active: false,
    to: null,
    body: "築古アパート・戸建て投資・ゾンビハウス再生。眠っている収益物件に、内装の工夫と市場の読みで次の使い手を連れてくる専門事業。",
    cta: null,
  },
  {
    nameJa: "記憶荘工務店",
    nameEn: "KIOKUSO BUILD",
    color: "#7A5234",
    logo: "/assets/logos/logo-koumuten-dark.webp",
    active: false,
    to: null,
    body: "STUDIO・INVESTから流れてくる施工を担う実行部隊。古い骨組みを読み解き、次の使い手が安心して商売を始められる形に整える。",
    cta: null,
  },
  {
    nameJa: "記憶荘不動産",
    nameEn: "KIOKUSO ESTATE",
    color: "#2B3A52",
    logo: "/assets/logos/logo-fudousan-dark.webp",
    active: false,
    to: null,
    body: "STUDIO・INVESTの上流にある入口。ネットに出ない空き物件・居抜き物件の情報網で、次の使い手にふさわしい場所を見つけ出す。",
    cta: null,
  },
];

export default function GroupAbout() {
  return (
    <div style={{ backgroundColor: colors.beige, minHeight: "100vh" }}>
      <GroupNav />

      {/* SmallHero */}
      <section style={{ position: "relative", height: "50vh", minHeight: "320px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#D8D3CE" }}>
          <img
            src="/assets/textures/shikkui-plaster-wide-sm.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%)",
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
          <p style={{ color: "#fff", fontFamily: "'Noto Sans JP', sans-serif", fontSize: "48px", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>ABOUT</p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>記憶荘について</p>
        </div>
      </section>

      {/* ひとこと */}
      <ScrollFadeIn>
        <section style={{ padding: "72px 24px", textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>
          <p style={{ fontSize: "16px", lineHeight: 2.0, color: colors.text, margin: 0 }}>
            仙台で店舗内装をやっている、小さな会社です。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "1.4em 0 0" }}>
            物件探しの段階から相談できるのが、
            <br />
            他の内装屋さんと少し違うところだと思います。
          </p>
        </section>
      </ScrollFadeIn>

      <GoldDivider />

      {/* STEP I：OUR WORK 事業体紹介 */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: "4px", textAlign: "center", color: "#999", marginBottom: "8px" }}>OUR WORK</p>
          <h2 style={{ fontSize: "22px", fontWeight: 500, textAlign: "center", margin: "0 0 56px", color: "#333" }}>記憶荘がやっていること</h2>
          <div style={{ borderTop: "1px solid #E5E0D8" }}>
            {ourWork.map((item) => (
              <div
                key={item.nameEn}
                style={{
                  display: "flex",
                  gap: "0",
                  borderBottom: "1px solid #E5E0D8",
                  padding: "28px 0",
                }}
              >
                <div style={{ width: "6px", backgroundColor: item.color, flexShrink: 0, borderRadius: "3px", marginRight: "20px" }} />
                <img src={item.logo} alt={item.nameJa} style={{ width: "48px", height: "48px", objectFit: "contain", flexShrink: 0, marginRight: "20px", alignSelf: "flex-start", marginTop: "2px" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: "6px" }}>
                    <span style={{ fontSize: "15px", fontWeight: 600, color: "#333", marginRight: "10px" }}>{item.nameJa}</span>
                    <span style={{ fontSize: "14px", color: "#999", letterSpacing: "0.08em" }}>{item.nameEn}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.9, margin: "0 0 10px" }}>{item.body}</p>
                  {item.active && item.to ? (
                    <Link to={item.to} style={{ fontSize: "14px", color: item.color, textDecoration: "none", fontWeight: 500 }}>
                      {item.cta} →
                    </Link>
                  ) : (
                    <span style={{ fontSize: "14px", color: "#BBB" }}>準備中</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <GoldDivider />

      {/* STEP J：DAIプロフィール（グループ視点） */}
      <ScrollFadeIn>
        <div style={{ padding: "40px 24px 64px", maxWidth: "500px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
            <img src="/images/about-ken-sm.webp" alt="KEN（謙）- 大工・施工責任者" style={{ width: "100px", minWidth: "100px", aspectRatio: "1/1", objectFit: "cover" }} />
            <div>
              <p style={{ fontSize: "18px", fontWeight: 500, color: colors.text, marginBottom: "4px" }}>KEN</p>
              <p style={{ fontSize: "14px", color: colors.mute, marginBottom: "12px" }}>
                記憶荘 CSO（Creative Strategy Officer）
              </p>
              <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 1.8 }}>
                仙台を拠点に、事業用の古い空間に次の記憶を灯す仕事をしています。
              </p>
              <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 1.8, marginTop: "0.8em" }}>
                前職では内装施工会社で年間30件以上の店舗内装を手がけ、飲食店・美容室・物販・ジムなど幅広い業態を経験しました。
              </p>
              <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 1.8, marginTop: "0.8em" }}>
                設計から現場管理、仕上げまでを一人で完結できるのは、その現場の数だけ向き合ってきた経験があるからです。
              </p>
              <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 1.8, marginTop: "0.8em" }}>
                物件探しの段階から並走するやり方が、オーナーにとって一番損の少ない形だと気づき、記憶荘を始めました。
              </p>
            </div>
          </div>
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ padding: "48px 24px 64px", textAlign: "center" }}>
          <Link
            to="/concept"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              border: "1px solid rgba(201,168,76,0.5)",
              borderRadius: "6px",
              textDecoration: "none",
              color: colors.text,
              fontSize: "14px",
              letterSpacing: "0.08em",
              backgroundColor: "rgba(201,168,76,0.06)",
            }}
          >
            記憶荘が考えていること（Concept）→
          </Link>
          <p style={{ fontSize: "13px", color: "#999", marginTop: "12px" }}>
            何ができて、何ができないのか。率直に書いています。
          </p>
        </section>
      </ScrollFadeIn>

      <GroupFooter />
    </div>
  );
}
