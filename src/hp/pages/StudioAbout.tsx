import StudioNav from "../components/StudioNav";
import StudioFooter from "../components/StudioFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import GoldDivider from "../../shared/GoldDivider";
import TextureBand from "../../shared/TextureBand";
import TohokuMap from "../components/TohokuMap";
import { colors } from "../../shared/design-tokens";

export default function StudioAbout() {
  return (
    <div style={{ backgroundColor: '#2E4229' }}>
    <div style={{ paddingTop: 0, backgroundColor: colors.beige }}>
      <StudioNav />

      {/* SmallHero */}
      <section style={{ position: "relative", height: "50vh", minHeight: "320px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#D8D3CE" }}>
          <img
            src="/assets/textures/shikkui-plaster-wide.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
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
          <p style={{ maxWidth: "480px", margin: "0 auto", fontSize: "14px", color: colors.sub, lineHeight: 2.0 }}>
            仙台・宮城県を中心に、
            <br />
            飲食店・美容室・テイクアウト店などの
            <br />
            店舗内装を設計から施工まで一貫して行っています。
          </p>
          <p style={{ maxWidth: "480px", margin: "20px auto 0", fontSize: "14px", color: colors.sub, lineHeight: 2.0 }}>
            居抜き物件の活用、施主支給、DIYの併用で、
            <br />
            品質を落とさずにコストを抑えるのが記憶荘のやり方です。
            <br />
            物件が決まっていない段階からご相談いただけます。
          </p>
        </section>
      </ScrollFadeIn>

      {/* ① 一貫対応 */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "14px", color: "#999", letterSpacing: "0.08em", marginBottom: "32px" }}>
            業界の普通
          </p>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 2.0, maxWidth: "560px" }}>
            一般的な内装工事では、設計と施工が別の会社になることが多い。
            <br />
            デザイナーに伝えたイメージが施工会社に正確に届かない。
            <br />
            追加費用が「後から」出てくることも珍しくない。
          </p>

          {/* 図解 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1px 1fr",
              gap: "0",
              margin: "48px 0",
              backgroundColor: "#fff",
              border: "1px solid #E5E0D8",
              padding: "32px 24px",
            }}
          >
            <div style={{ padding: "0 24px 0 0", display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "11px", color: "#999", letterSpacing: "0.12em", marginBottom: "12px" }}>一般的な流れ</p>
              <div style={{ border: "1px solid #E5E0D8", padding: "10px 14px", fontSize: "13px", color: "#555", textAlign: "center" }}>
                デザイナー
              </div>
              <div style={{ textAlign: "center", fontSize: "12px", color: "#bbb", padding: "2px 0" }}>↓ 伝言</div>
              <div style={{ border: "1px solid #E5E0D8", padding: "10px 14px", fontSize: "13px", color: "#555", textAlign: "center" }}>
                施工会社
              </div>
              <div style={{ textAlign: "center", fontSize: "12px", color: "#bbb", padding: "2px 0" }}>↓</div>
              <div style={{ fontSize: "12px", color: "#999", textAlign: "center", lineHeight: 1.6 }}>
                「聞いてない」が起きる
              </div>
            </div>

            <div style={{ backgroundColor: "#E5E0D8", width: "1px", alignSelf: "stretch" }} />

            <div style={{ padding: "0 0 0 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "11px", color: "#C9A84C", letterSpacing: "0.12em", marginBottom: "12px" }}>記憶荘</p>
              <div style={{ border: "1px solid #C9A84C", padding: "24px 14px", fontSize: "13px", color: "#333", textAlign: "center", lineHeight: 1.8 }}>
                KEN
                <br />
                <span style={{ fontSize: "11px", color: "#666" }}>一人が一貫で</span>
              </div>
              <div style={{ textAlign: "center", fontSize: "12px", color: "#C9A84C", padding: "2px 0" }}>↓</div>
              <div style={{ fontSize: "12px", color: "#555", textAlign: "center", lineHeight: 1.6 }}>
                打ち合わせ通りに仕上がる
              </div>
            </div>
          </div>

          <p style={{ fontSize: "16px", color: "#333", lineHeight: 2.0, maxWidth: "560px" }}>
            記憶荘では、設計・見積もり・施工・現場管理のすべてをKEN一人が担当します。
            <br />
            打ち合わせで話したことが、そのまま現場に反映される。
            <br />
            間に入る会社がないから、中間マージンもない。
          </p>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 2.0, maxWidth: "560px", marginTop: "24px" }}>
            伝言ゲームにしたくないから。
            <br />
            「言った・言わない」をなくすことが、お互いにとって一番安心できる形だと考えています。
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
              marginTop: "40px",
            }}
          >
            <div>
              <img src="/images/why-estimate-detail.webp" alt="" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
              <p style={{ fontSize: "12px", color: "#999", marginTop: "8px", lineHeight: 1.6 }}>見積もりは全項目を一行ずつ記載</p>
            </div>
            <div>
              <img src="/images/why-line-chat.webp" alt="" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
              <p style={{ fontSize: "12px", color: "#999", marginTop: "8px", lineHeight: 1.6 }}>やりとりはLINEで完結</p>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ② 居抜きを活かす */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "14px", color: "#999", letterSpacing: "0.08em", marginBottom: "32px" }}>
            業界の普通
          </p>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 2.0, maxWidth: "560px" }}>
            内装工事はまず「解体」から始まることが多い。
            <br />
            前のお店の設備をすべて撤去して、ゼロから作り直す。
            <br />
            解体費だけで数十万円かかることもある。
          </p>

          <p style={{ fontSize: "16px", color: "#333", lineHeight: 2.0, maxWidth: "560px", marginTop: "48px" }}>
            記憶荘では、使えるものは使います。
            <br />
            カウンター、棚、厨房設備、照明のレール、壁の下地。
            <br />
            前のお店が残していったものの中に、活かせるものがあるかどうかを最初に見極めます。
          </p>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 2.0, maxWidth: "560px", marginTop: "24px" }}>
            壊さなくて済むなら、その分の予算を本当にこだわりたい場所に使える。
            <br />
            「全部新しくする」ことが正解とは限らない。
            <br />
            使い込まれた素材が、新しいお店に奥行きを与えることもあります。
          </p>

          <div style={{ marginTop: "40px" }}>
            <img src="/images/crossover-before-01.webp" alt="" style={{ width: "100%", maxWidth: "640px", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
            <p style={{ fontSize: "12px", color: "#999", marginTop: "8px", lineHeight: 1.6 }}>既存のカウンターと厨房設備を活かした例</p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ③ 施主支給・DIY */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "14px", color: "#999", letterSpacing: "0.08em", marginBottom: "32px" }}>
            業界の普通
          </p>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 2.0, maxWidth: "560px" }}>
            材料や家具は施工会社経由で仕入れるのが一般的。
            <br />
            仕入れマージンが15〜30%ほど上乗せされる。
            <br />
            オーナーが持ち込んだ材料は「保証できない」と断られることも。
          </p>

          <p style={{ fontSize: "16px", color: "#333", lineHeight: 2.0, maxWidth: "560px", marginTop: "48px" }}>
            オーナーが自分で見つけた照明、ネットで買ったタイル、思い入れのある椅子。
            <br />
            記憶荘では全部歓迎します。
            <br />
            壁の塗装や簡単な仕上げは、一緒にやることもできます。
          </p>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 2.0, maxWidth: "560px", marginTop: "24px" }}>
            「自分で選んだ」「自分の手で塗った」という体験が、お店への愛着になる。
            <br />
            内装工事はゴールではなく、お店の物語の始まり。
            <br />
            その最初のページに、オーナー自身の手が入っていることに意味がある。
          </p>

          <div style={{ marginTop: "40px" }}>
            <img src="/images/crossover-process-03.webp" alt="" style={{ width: "100%", maxWidth: "640px", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
            <p style={{ fontSize: "12px", color: "#999", marginTop: "8px", lineHeight: 1.6 }}>施主支給の照明と壁面DIYを組み合わせた仕上げ</p>
          </div>
        </section>
      </ScrollFadeIn>

      <TextureBand src="/assets/textures/ceramic-tile-pair.webp" height={180} />

      {/* Filter */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1px 1fr",
              gap: "0",
              alignItems: "start",
            }}
            className="filter-grid"
          >
            <div style={{ padding: "0 32px 0 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#C9A84C", fontFamily: "Anton, sans-serif", marginBottom: "20px" }}>FOR YOU</p>
              <p style={{ fontSize: "15px", fontWeight: 500, color: "#333", marginBottom: "20px", lineHeight: 1.5 }}>こういう方のために</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "初めて店を持つ方",
                  "予算に限りがあるけれど、妥協はしたくない方",
                  "内装のことがわからなくて、何から始めればいいか不安な方",
                  "自分の手でも何かやってみたい方",
                  "一人の担当者とじっくり進めたい方",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "13px", color: "#333", lineHeight: 1.8, display: "flex", gap: "8px" }}>
                    <span style={{ color: "#C9A84C", flexShrink: 0 }}>・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: "#C9A84C", width: "1px", alignSelf: "stretch", margin: "0" }} className="filter-divider" />

            <div style={{ padding: "0 0 0 32px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#999", fontFamily: "Anton, sans-serif", marginBottom: "20px" }}>NOT FOR YOU</p>
              <p style={{ fontSize: "15px", fontWeight: 500, color: "#555", marginBottom: "20px", lineHeight: 1.5 }}>こういう方はお断りしています</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "大規模チェーン店の内装をお探しの方",
                  "デザイナーズ空間を求めている方（専門のデザイン事務所をおすすめします）",
                  "最短工期を最優先される方（丁寧に進めるため、急ぎの対応は難しい場合があります）",
                  "施工だけを依頼したい方（設計から一貫で対応しています）",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "13px", color: "#666", lineHeight: 1.8, display: "flex", gap: "8px" }}>
                    <span style={{ color: "#bbb", flexShrink: 0 }}>・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <style>{`
            @media (max-width: 640px) {
              .filter-grid {
                grid-template-columns: 1fr !important;
              }
              .filter-divider {
                width: 100% !important;
                height: 1px !important;
                margin: 32px 0 !important;
                align-self: auto !important;
              }
              .filter-grid > div:first-child {
                padding: 0 !important;
              }
              .filter-grid > div:last-child {
                padding: 0 !important;
              }
            }
          `}</style>
        </section>
      </ScrollFadeIn>

      {/* DAI紹介 */}
      <GoldDivider />
      <ScrollFadeIn>
        <div style={{ padding: "40px 24px 64px", maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <img src="/images/about-dai.webp" alt="KEN" style={{ width: "80px", minWidth: "80px", aspectRatio: "1/1", objectFit: "cover" }} />
            <div>
              <p style={{ fontSize: "16px", fontWeight: 500, color: colors.text, marginBottom: "2px" }}>KEN</p>
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

    </div>
    <StudioFooter />
    </div>
  );
}
