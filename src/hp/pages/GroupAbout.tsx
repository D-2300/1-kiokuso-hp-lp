import GroupNav from "../components/GroupNav";
import GroupFooter from "../components/GroupFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import GoldDivider from "../../shared/GoldDivider";
import TextureBand from "../../shared/TextureBand";
import { colors } from "../../shared/design-tokens";

export default function GroupAbout() {
  return (
    <div style={{ backgroundColor: colors.beige, minHeight: "100vh", paddingTop: "64px" }}>
      <GroupNav />

      {/* SmallHero */}
      <section style={{ position: "relative", height: "280px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#D8D3CE" }}>
          <img
            src="/images/about-conversation.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(139,58,58,0.75) 0%, rgba(139,58,58,0.55) 100%)",
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
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>記憶荘について</p>
        </div>
      </section>

      {/* ブロック1：記憶が宿る場所 */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 0" }}>
          <img src="/images/hp-hallway-film.webp" alt="" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", filter: "grayscale(100%)" }} />
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

      {/* DAI紹介 */}
      <ScrollFadeIn>
        <div style={{ padding: "80px 24px", maxWidth: "500px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
            <img src="/images/about-dai.webp" alt="DAI" style={{ width: "100px", minWidth: "100px", aspectRatio: "1/1", objectFit: "cover" }} />
            <div>
              <p style={{ fontSize: "18px", fontWeight: 500, color: colors.text, marginBottom: "4px" }}>DAI</p>
              <p style={{ fontSize: "12px", color: colors.mute, marginBottom: "12px" }}>
                記憶荘 CSO（Creative Strategy Officer）
              </p>
              <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 1.8 }}>
                仙台を拠点に、店舗の設計から施工までを一人で担当しています。
              </p>
              <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 1.8, marginTop: "0.8em" }}>
                前職では内装施工会社で年間30件以上の店舗を手がけ、飲食店・美容室・物販・ジムなど幅広い業態を経験しました。
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
