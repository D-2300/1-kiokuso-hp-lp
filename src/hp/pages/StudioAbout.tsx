import StudioNav from "../components/StudioNav";
import StudioCTA from "../components/StudioCTA";
import StudioFooter from "../components/StudioFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import GoldDivider from "../../shared/GoldDivider";
import TextureBand from "../../shared/TextureBand";
import TohokuMap from "../components/TohokuMap";
import { colors } from "../../shared/design-tokens";

const points = [
  {
    img: "/images/crossover-process-01.webp",
    heading: "一貫対応",
    body: "設計・見積もり・施工・仕上げまで、最初から最後まで同じ担当者が対応します。\n間に入る人がいないから、伝言ゲームにならない。\n「言った・言わない」のトラブルが起きない仕組みです。\n打ち合わせで話したことが、そのまま現場に反映されます。",
  },
  {
    img: "/images/crossover-process-02.webp",
    heading: "居抜きを活かす",
    body: "前のお店の設備や内装を活かすことで、\n大幅にコストを抑えながら、あなたの店に仕上げます。\nカウンター、棚、厨房設備など、使えるものは使う。\n解体しないだけでも数十万円の差が出ることがあります。",
  },
  {
    img: "/images/crossover-process-03.webp",
    heading: "DIY・施主支給OK",
    body: "自分で塗りたい壁がある。ネットで見つけた照明を使いたい。\nそういう思いを、一緒に形にします。\n道具の使い方からお教えしますので、経験がなくても大丈夫です。\n「自分の手で作った」という体験が、お店への愛着になります。",
  },
];

export default function StudioAbout() {
  return (
    <div style={{ backgroundColor: colors.beige, minHeight: "100vh", paddingTop: "64px" }}>
      <StudioNav />

      {/* SmallHero */}
      <section style={{ position: "relative", height: "45vh", minHeight: "320px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#D8D3CE" }}>
          <img
            src="/assets/textures/shikkui-plaster-wide.webp"
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
          <p style={{ color: "#fff", fontFamily: "'Anton', sans-serif", fontSize: "48px", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" }}>About</p>
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
          <p
            style={{
              maxWidth: "480px",
              margin: "20px auto 0",
              fontSize: "14px",
              color: colors.sub,
              lineHeight: 2.0,
            }}
          >
            居抜き物件の活用、施主支給、DIYの併用で、
            <br />
            品質を落とさずにコストを抑えるのが記憶荘のやり方です。
            <br />
            物件が決まっていない段階からご相談いただけます。
          </p>
        </section>
      </ScrollFadeIn>

      {/* どうやっているか */}
      <TextureBand src="/assets/textures/shikkui-plaster-wide.webp" height={220} />
      <ScrollFadeIn key={points[0].heading}>
        <div>
          <img src={points[0].img} alt={points[0].heading} style={{ maxWidth: "480px", width: "100%", aspectRatio: "3/2", objectFit: "cover", borderRadius: "4px", display: "block", margin: "0 auto" }} />
          <div style={{ maxWidth: "520px", margin: "0 auto", padding: "32px 24px 56px" }}>
            <p style={{ fontSize: "16px", fontWeight: 500, color: colors.text, marginBottom: "12px" }}>
              {points[0].heading}
            </p>
            <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 2.0, whiteSpace: "pre-line" }}>
              {points[0].body}
            </p>
          </div>
        </div>
      </ScrollFadeIn>

      <TextureBand src="/assets/textures/ceramic-tile-blue-glaze.webp" height={180} />
      <ScrollFadeIn key={points[1].heading}>
        <div>
          <img src={points[1].img} alt={points[1].heading} style={{ maxWidth: "480px", width: "100%", aspectRatio: "3/2", objectFit: "cover", borderRadius: "4px", display: "block", margin: "0 auto" }} />
          <div style={{ maxWidth: "520px", margin: "0 auto", padding: "32px 24px 56px" }}>
            <p style={{ fontSize: "16px", fontWeight: 500, color: colors.text, marginBottom: "12px" }}>
              {points[1].heading}
            </p>
            <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 2.0, whiteSpace: "pre-line" }}>
              {points[1].body}
            </p>
          </div>
        </div>
      </ScrollFadeIn>

      <TextureBand src="/assets/textures/brass-patina.webp" height={180} />
      <ScrollFadeIn key={points[2].heading}>
        <div>
          <img src={points[2].img} alt={points[2].heading} style={{ maxWidth: "480px", width: "100%", aspectRatio: "3/2", objectFit: "cover", borderRadius: "4px", display: "block", margin: "0 auto" }} />
          <div style={{ maxWidth: "520px", margin: "0 auto", padding: "32px 24px 56px" }}>
            <p style={{ fontSize: "16px", fontWeight: 500, color: colors.text, marginBottom: "12px" }}>
              {points[2].heading}
            </p>
            <p style={{ fontSize: "14px", color: colors.sub, lineHeight: 2.0, whiteSpace: "pre-line" }}>
              {points[2].body}
            </p>
          </div>
        </div>
      </ScrollFadeIn>

      <TextureBand src="/assets/textures/ceramic-tile-pair.webp" height={180} />

      {/* DAI紹介 */}
      <GoldDivider />
      <ScrollFadeIn>
        <div style={{ padding: "40px 24px 64px", maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <img src="/images/about-dai.webp" alt="DAI" style={{ width: "80px", minWidth: "80px", aspectRatio: "1/1", objectFit: "cover" }} />
            <div>
              <p style={{ fontSize: "16px", fontWeight: 500, color: colors.text, marginBottom: "2px" }}>DAI</p>
              <p style={{ fontSize: "11px", color: colors.mute, marginBottom: "10px" }}>記憶荘 CSO</p>
              <p style={{ fontSize: "13px", color: colors.sub, lineHeight: 1.8 }}>
                仙台を拠点に、店舗の設計から施工までを一貫して担当しています。
                前職では内装施工会社で年間30件以上の店舗内装を手がけ、
                飲食店・美容室・物販・ジムなど幅広い業態を経験してきました。
              </p>
              <p style={{ fontSize: "13px", color: colors.sub, lineHeight: 1.8, marginTop: "0.8em" }}>
                設計から現場管理、仕上げまで一人で完結できるのは、
                その現場の数だけ向き合ってきた経験があるからです。
              </p>
              <p style={{ fontSize: "13px", color: colors.sub, lineHeight: 1.8, marginTop: "0.8em" }}>
                初めての店づくりは、わからないことばかりで当然です。
                物件が決まっていなくても構いません。LINEで気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </ScrollFadeIn>

      {/* 対応エリア */}
      <GoldDivider />
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", fontFamily: "'Noto Sans JP', sans-serif" }}>
                対応エリア
              </p>
              <p style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A1A", fontFamily: "'Noto Sans JP', sans-serif", marginTop: "32px" }}>
                仙台市・宮城県を中心に、東北全域で対応
              </p>
              <p style={{ fontSize: "14px", fontWeight: 300, color: "#666666", fontFamily: "'Noto Sans JP', sans-serif", lineHeight: 1.9, marginTop: "12px" }}>
                仙台市・宮城県を中心に、福島・岩手・山形・秋田・青森など東北地方に広く対応しています。
                <br />
                ご希望があれば関東・東京エリアなど東北以外も対応可能な場合がありますので、気軽にご相談ください。
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TohokuMap />
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <StudioCTA />
      <StudioFooter />
    </div>
  );
}
