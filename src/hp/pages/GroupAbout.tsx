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
            src="/assets/textures/yakisugi-charred-wood-sm.webp"
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

      <div style={{ display: "flex", justifyContent: "center", padding: "0 24px", margin: "48px 0" }}>
        <img src="/assets/textures/yakisugi-charred-wood-sm.webp" alt="" style={{ width: "100%", maxWidth: "700px", height: "200px", objectFit: "cover", display: "block" }} />
      </div>

      {/* ブロック1：記憶が宿る場所 */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 0" }}>
          <img src="/assets/textures/memory-collar-sm.webp" alt="" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", filter: "none" }} />
          <div
            style={{
              maxWidth: "560px",
              margin: "0 auto",
              padding: "0 24px",
              textAlign: "center",
              marginTop: "48px",
            }}
          >
            <p style={{ fontSize: "15px", lineHeight: 2.2, color: colors.text }}>
              これから店を始める人がいる。
              <br />
              もう一度、物件に人を呼び戻したい人がいる。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.2, color: colors.text, marginTop: "1.6em" }}>
              その一日目に立ち会いたくて、
              <br />
              私たちは物件探しから内装工事までを
              <br />
              一つの仕事として受けています。
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* STEP H：橋テキスト */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 32px", textAlign: "center" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", lineHeight: 2.2, color: "#333", fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}>
              いい物件は、ネットには載っていない。
              <br />
              いい内装屋は、物件探しの段階から相談できる。
            </p>
            <p style={{ fontSize: "16px", lineHeight: 2.2, color: "#333", fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400, marginTop: "1.6em" }}>
              居抜きを活かす選択肢も、
              <br />
              施主支給で予算を削る選択肢も、
              <br />
              オーナーと一緒にDIYで仕上げる選択肢も、
              <br />
              早い段階で相談するから、まだ選べる。
            </p>
            <p style={{ fontSize: "16px", lineHeight: 2.2, color: "#333", fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400, marginTop: "1.6em" }}>
              小さな会社だからこそ、
              <br />
              物件探しから内装工事まで、
              <br />
              一人のオーナーに一人で向き合う。
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <div style={{ display: "flex", justifyContent: "center", padding: "0 24px", margin: "48px 0" }}>
        <img src="/assets/textures/old-new-timber-junction-sm.webp" alt="" style={{ width: "100%", maxWidth: "700px", height: "200px", objectFit: "cover", display: "block" }} />
      </div>

      {/* ブロック2：制約の中の美しさ */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 0" }}>
          <img
            src="/images/hp-wood-dark-sm.webp"
            alt=""
            style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", filter: "none" }}
          />
          <div
            style={{
              maxWidth: "560px",
              margin: "0 auto",
              padding: "0 24px",
              textAlign: "center",
              marginTop: "48px",
            }}
          >
            <p style={{ fontSize: "15px", lineHeight: 2.2, color: colors.text }}>
              開業するのに、大きな予算は要らない。
              <br />
              要るのは、その物件で何ができるかを
              <br />
              早い段階で一緒に考えてくれる相手です。
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ブロック3：金継ぎとの接続 */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 0" }}>
          <div
            style={{
              maxWidth: "560px",
              margin: "0 auto",
              padding: "0 24px",
              textAlign: "center",
              marginTop: "48px",
              marginBottom: "48px",
            }}
          >
            <p style={{ fontSize: "15px", lineHeight: 2.2, color: colors.text }}>
              新しい店の一日目も、
              <br />
              眠っていた物件がもう一度動き出す日も、
              <br />
              同じくらい、次の記憶が灯る瞬間です。
            </p>
          </div>
          <img src="/images/hp-kintsugi-light-sm.webp" alt="" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", filter: "none" }} />
        </section>
      </ScrollFadeIn>

      <div style={{ display: "flex", justifyContent: "center", padding: "0 24px", margin: "48px 0" }}>
        <img src="/assets/textures/kintsugi-bowl-inside-sm.webp" alt="" style={{ width: "100%", maxWidth: "700px", height: "200px", objectFit: "cover", display: "block" }} />
      </div>

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

      <div style={{ display: "flex", justifyContent: "center", padding: "0 24px", margin: "48px 0" }}>
        <img src="/assets/textures/mortar-wall-cracks-sm.webp" alt="" style={{ width: "100%", maxWidth: "700px", height: "200px", objectFit: "cover", display: "block" }} />
      </div>

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

      <div style={{ display: "flex", justifyContent: "center", padding: "0 24px", margin: "48px 0" }}>
        <img src="/assets/textures/reclaimed-wood-section-sm.webp" alt="" style={{ width: "100%", maxWidth: "700px", height: "200px", objectFit: "cover", display: "block" }} />
      </div>

      <GroupFooter />
    </div>
  );
}
