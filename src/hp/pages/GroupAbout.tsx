import { Link } from "react-router-dom";
import GroupNav from "../components/GroupNav";
import GroupFooter from "../components/GroupFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import GoldDivider from "../../shared/GoldDivider";
import TextureBand from "../../shared/TextureBand";
import { colors } from "../../shared/design-tokens";

const ourWork = [
  {
    nameJa: "記憶荘 店舗内装スタジオ",
    nameEn: "KIOKUSO STUDIO",
    color: "#4A6741",
    active: true,
    to: "/studio",
    body: "初めて店を持つ人のための内装工事。設計から施工まで、一人の担当者が一貫して対応します。居抜き活用・施主支給・DIY参加で、品質を落とさずに予算を最大化。仙台・宮城県が対象エリアです。",
    cta: "スタジオの詳細を見る",
  },
  {
    nameJa: "記憶荘工務店",
    nameEn: "KIOKUSO BUILD",
    color: "#8B4513",
    active: false,
    to: null,
    body: "古い建物に新しい役割を与える、大規模リノベーション。廃墟や空き家を再生し、次の使い手につなぎます。",
    cta: null,
  },
  {
    nameJa: "記憶荘リフォーム",
    nameEn: "KIOKUSO REFORM",
    color: "#7BA0A0",
    active: false,
    to: null,
    body: "キッチン・洗面・壁紙など、住まいの「ここだけ変えたい」に手を入れる部分改修。",
    cta: null,
  },
  {
    nameJa: "記憶荘不動産",
    nameEn: "KIOKUSO ESTATE",
    color: "#2B3A52",
    active: false,
    to: null,
    body: "場所と人をつなぐ不動産仲介。継ぐべき場所を、見つけ出す。",
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
            src="/assets/textures/yakisugi-charred-wood.webp"
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
          <p style={{ color: "#fff", fontFamily: "'Anton', sans-serif", fontSize: "48px", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" }}>ABOUT</p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>記憶荘について</p>
        </div>
      </section>

      {/* ブロック1：記憶が宿る場所 */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 0" }}>
          <img src="/assets/textures/memory-collar.webp" alt="" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", filter: "grayscale(100%)" }} />
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
              子供が作ってきた折り紙を、今でも大事に持っている。
              <br />
              犬がつけていた首輪も捨てられない。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.2, color: colors.text, marginTop: "1.6em" }}>
              売れるものでもないし、飾るものでもない。
              <br />
              でも捨てられない。
              <br />
              そこに「誰かを思った時間」が残っているから。
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* STEP H：橋テキスト */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 32px", textAlign: "center" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", lineHeight: 2.2, color: "#333", fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}>
              だから記憶荘は、
              <br />
              限られた予算の中で心を砕くことを、仕事にしている。
            </p>
            <p style={{ fontSize: "16px", lineHeight: 2.2, color: "#333", fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400, marginTop: "1.6em" }}>
              居抜きの設備を活かすのも、
              <br />
              施主支給を歓迎するのも、
              <br />
              オーナーと一緒にDIYをするのも、
              <br />
              全部その延長にある。
            </p>
            <p style={{ fontSize: "16px", lineHeight: 2.2, color: "#333", fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400, marginTop: "1.6em" }}>
              お金をかければいいものは作れる。
              <br />
              でも、かけられない中で手を動かすことにこそ、
              <br />
              その場所だけの物語が生まれる。
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <TextureBand src="/assets/textures/kintsugi-bowl-side.webp" height={240} />

      <GoldDivider />

      {/* ブロック2：制約の中の美しさ */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 0" }}>
          <TextureBand src="/assets/textures/kintsugi-bowl-inside.webp" height={220} />
          <img
            src="/images/hp-wood-dark.webp"
            alt=""
            style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", marginTop: "48px", filter: "grayscale(100%)" }}
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
              たくさんお金をかけなくても、いい空間は作れる。
              <br />
              制約の中で、誰かのために考え抜く時間そのものに、
              <br />
              大きな意味がある。
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <GoldDivider />

      {/* ブロック3：金継ぎとの接続 */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 0" }}>
          <TextureBand src="/assets/textures/old-new-timber-junction.webp" height={220} />
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
              金継ぎが「壊れを受け入れ、美しく仕上げる」行為であるように、
              <br />
              記憶荘は「制約を受け入れ、美しく仕上げる」行為を伴走する。
            </p>
          </div>
          <img src="/images/hp-kintsugi-light.webp" alt="" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", filter: "grayscale(100%)" }} />
        </section>
      </ScrollFadeIn>

      <TextureBand src="/assets/textures/kintsugi-collection.webp" height={220} />

      <GoldDivider />

      {/* STEP I：OUR WORK 事業体紹介 */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Anton, sans-serif", fontSize: "14px", letterSpacing: "4px", textAlign: "center", color: "#999", marginBottom: "8px" }}>OUR WORK</p>
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
                <div style={{ width: "3px", backgroundColor: item.color, flexShrink: 0, borderRadius: "2px", marginRight: "20px" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: "6px" }}>
                    <span style={{ fontSize: "15px", fontWeight: 600, color: "#333", marginRight: "10px" }}>{item.nameJa}</span>
                    <span style={{ fontSize: "12px", color: "#999", letterSpacing: "0.08em" }}>{item.nameEn}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.9, margin: "0 0 10px" }}>{item.body}</p>
                  {item.active && item.to ? (
                    <Link to={item.to} style={{ fontSize: "12px", color: item.color, textDecoration: "none", fontWeight: 500 }}>
                      {item.cta} →
                    </Link>
                  ) : (
                    <span style={{ fontSize: "12px", color: "#BBB" }}>準備中</span>
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
            <img src="/images/about-dai.webp" alt="DAI" style={{ width: "100px", minWidth: "100px", aspectRatio: "1/1", objectFit: "cover" }} />
            <div>
              <p style={{ fontSize: "18px", fontWeight: 500, color: colors.text, marginBottom: "4px" }}>DAI</p>
              <p style={{ fontSize: "12px", color: colors.mute, marginBottom: "12px" }}>
                記憶荘 CSO（Creative Strategy Officer）
              </p>
              <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 1.8 }}>
                仙台を拠点に、場所の記憶を引き継ぐ仕事をしています。
              </p>
              <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 1.8, marginTop: "0.8em" }}>
                前職では内装施工会社で年間30件以上の店舗内装を手がけ、飲食店・美容室・物販・ジムなど幅広い業態を経験しました。
              </p>
              <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 1.8, marginTop: "0.8em" }}>
                設計から現場管理、仕上げまでを一人で完結できるのは、その現場の数だけ向き合ってきた経験があるからです。
              </p>
              <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 1.8, marginTop: "0.8em" }}>
                「誰かの想いに手を動かすこと」が自分にとって最も自然な仕事の形だと気づき、記憶荘を始めました。
              </p>
            </div>
          </div>
        </div>
      </ScrollFadeIn>

      <TextureBand src="/assets/textures/reclaimed-wood-section.webp" height={180} />

      <GroupFooter />
    </div>
  );
}
