import { Link } from "react-router-dom";
import GroupNav from "../components/GroupNav";
import GroupFooter from "../components/GroupFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import GoldDivider from "../../shared/GoldDivider";
import { colors, LINE_URL_HP } from "../../shared/design-tokens";

export default function GroupConcept() {
  return (
    <div style={{ backgroundColor: colors.beige, minHeight: "100vh" }}>
      <GroupNav />

      {/* SmallHero */}
      <section style={{ position: "relative", height: "44vh", minHeight: "300px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#E4DDD2" }}>
          <img
            src="/assets/textures/shikkui-plaster-wide-sm.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.3) 100%)",
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
          <p style={{ color: "#fff", fontFamily: "'Noto Sans JP', sans-serif", fontSize: "44px", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            CONCEPT
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", letterSpacing: "0.1em" }}>
            記憶荘が考えていること
          </p>
        </div>
      </section>

      {/* リード */}
      <ScrollFadeIn>
        <section style={{ padding: "64px 24px 32px", maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "17px", lineHeight: 2.0, color: colors.text, fontFamily: "'Noto Sans JP', sans-serif" }}>
            記憶荘は、仙台で店舗内装をやっている会社です。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", marginTop: "1.6em" }}>
            カッコつけずに、何をやっているのか、
            <br />
            何はできて何はできないのかを、
            <br />
            ここで正直に書きます。
          </p>
        </section>
      </ScrollFadeIn>

      <div style={{ display: "flex", justifyContent: "center", padding: "0 24px", margin: "40px 0 32px" }}>
        <GoldDivider />
      </div>

      {/* Q1: 何をやっている会社か */}
      <ScrollFadeIn>
        <section style={{ padding: "32px 24px", maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 12px", textTransform: "uppercase" }}>
            Q1
          </p>
          <h2 style={{ fontSize: "22px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
            何をやっている会社ですか？
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", margin: "0 0 20px" }}>
            事業用の古い空間を、次の使い手のために整える内装屋です。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", margin: "0 0 20px" }}>
            店舗を始めたいオーナーと、
            <br />
            収益物件を持っている・これから買う投資家。
            <br />
            この二種類のお客さんの仕事をしています。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", margin: 0 }}>
            店舗内装がメイン、収益物件のリノベーションも徐々に始めているところです。
          </p>
        </section>
      </ScrollFadeIn>

      {/* Q2: なぜ物件探しから */}
      <ScrollFadeIn>
        <section style={{ padding: "32px 24px", maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 12px", textTransform: "uppercase" }}>
            Q2
          </p>
          <h2 style={{ fontSize: "22px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
            なぜ、物件探しから関わるんですか？
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", margin: "0 0 20px" }}>
            物件が決まってから相談に来てもらうと、選択肢が残っていないからです。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", margin: "0 0 20px" }}>
            ダクトが通せない、電気容量が足りない、家賃が売上に対して重すぎる。
            <br />
            こういう話を、契約の後に伝えることになる。
            <br />
            オーナーは「じゃあやります」と進めるか、違約金を払って降りるかの二択になる。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", margin: 0 }}>
            物件を見る段階から一緒にいれば、この二択を作らずに済みます。
            <br />
            そのために、早い段階から相談してもらうことにしています。
          </p>
        </section>
      </ScrollFadeIn>

      {/* Q3: できること */}
      <ScrollFadeIn>
        <section style={{ padding: "32px 24px", maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 12px", textTransform: "uppercase" }}>
            Q3
          </p>
          <h2 style={{ fontSize: "22px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
            何ができますか？
          </h2>
          <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
            {[
              "仙台・宮城県での店舗内装（飲食・美容・サロン・物販・ジム等）",
              "物件探しの段階からの相談（条件整理・現地確認・費用試算）",
              "テナント情報・居抜き情報の提供（ネットに出ない案件を含む）",
              "居抜き活用・施主支給・DIY併走での費用圧縮",
              "内装費用の内訳を全部見せる見積もり",
              "収益物件のリノベーション相談（満室デザインLABO側で準備中）",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "15px", lineHeight: 1.9, color: "#444", padding: "10px 0 10px 28px", borderBottom: "1px solid rgba(201,168,76,0.18)", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, top: "10px", color: "#C9A84C" }}>○</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </ScrollFadeIn>

      {/* Q4: できないこと */}
      <ScrollFadeIn>
        <section style={{ padding: "32px 24px", maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 12px", textTransform: "uppercase" }}>
            Q4
          </p>
          <h2 style={{ fontSize: "22px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
            できないことも、書いておきます。
          </h2>
          <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
            {[
              { x: "大量の案件を同時並行", y: "月10件前後が現実的な上限です" },
              { x: "24時間対応・即レス", y: "少数精鋭で動いているので、返信が翌日になることがあります" },
              { x: "仙台・宮城から遠く離れた現場", y: "移動費が乗るほど割高になるので、東北圏内でお願いしています" },
              { x: "デザイン至上主義の尖った空間", y: "予算内で商売として回る空間づくりが得意分野です" },
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "15px", lineHeight: 1.9, color: "#444", padding: "14px 0 14px 28px", borderBottom: "1px solid rgba(139,58,58,0.15)", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, top: "14px", color: "#8B3A3A" }}>×</span>
                <span style={{ fontWeight: 500 }}>{item.x}</span>
                <span style={{ color: "#888", fontSize: "14px" }}>　{item.y}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.9, marginTop: "24px" }}>
            できないことを先に書いているのは、後で「違った」となる時間が
            <br />
            お互いもったいないからです。
          </p>
        </section>
      </ScrollFadeIn>

      {/* Q5: スタンス */}
      <ScrollFadeIn>
        <section style={{ padding: "32px 24px", maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 12px", textTransform: "uppercase" }}>
            Q5
          </p>
          <h2 style={{ fontSize: "22px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
            どんなスタンスで仕事をしていますか？
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", margin: "0 0 20px" }}>
            <strong style={{ fontWeight: 500 }}>営業電話をしません。</strong>
            <br />
            こちらから追いかけて連絡することはしません。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", margin: "0 0 20px" }}>
            <strong style={{ fontWeight: 500 }}>断ってもらって大丈夫です。</strong>
            <br />
            相談してみて合わないと感じたら、LINEブロックでも無言離脱でも構いません。気を使わないでください。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", margin: "0 0 20px" }}>
            <strong style={{ fontWeight: 500 }}>相見積もり歓迎です。</strong>
            <br />
            他社と比較して決めてもらう方が、後の信頼関係もすっきりします。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", margin: 0 }}>
            <strong style={{ fontWeight: 500 }}>一人のオーナーに一人で向き合います。</strong>
            <br />
            小さい会社なので、窓口も現場も基本は同じ人間が対応します。伝言ゲームが発生しません。
          </p>
        </section>
      </ScrollFadeIn>

      <div style={{ display: "flex", justifyContent: "center", padding: "0 24px", margin: "48px 0" }}>
        <GoldDivider />
      </div>

      {/* 小さい会社のこと */}
      <ScrollFadeIn>
        <section style={{ padding: "32px 24px 48px", maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 24px", textTransform: "uppercase" }}>
            Closing
          </p>
          <p style={{ fontSize: "16px", lineHeight: 2.0, color: colors.text, margin: "0 0 20px" }}>
            大きな会社ではないので、
            <br />
            全業種を手広く対応したり、
            <br />
            派手な広告を打ったりはできません。
          </p>
          <p style={{ fontSize: "16px", lineHeight: 2.0, color: colors.text, margin: "0 0 20px" }}>
            そのぶん、
            <br />
            物件の一軒一軒、オーナーの一人ひとりに、
            <br />
            丁寧に向き合えます。
          </p>
          <p style={{ fontSize: "16px", lineHeight: 2.0, color: colors.text, margin: 0 }}>
            これから店を始める人も、
            <br />
            眠っている物件を動かしたい人も、
            <br />
            気軽に相談してください。
          </p>
        </section>
      </ScrollFadeIn>

      {/* CTA */}
      <ScrollFadeIn>
        <section style={{ padding: "0 24px 80px", textAlign: "center" }}>
          <a
            href={LINE_URL_HP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: colors.cta,
              color: "#fff",
              padding: "16px 40px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(6,199,85,0.25)",
            }}
          >
            LINEで相談する
          </a>
          <p style={{ fontSize: "13px", color: "#888", marginTop: "14px", lineHeight: 1.8 }}>
            物件未定でも / 相談だけでもOK / 断るのはLINE1本で完了
          </p>
          <div style={{ marginTop: "40px", display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
            <Link to="/about" style={{ fontSize: "14px", color: colors.sub, textDecoration: "none", letterSpacing: "0.05em" }}>
              ← 記憶荘について
            </Link>
            <Link to="/studio" style={{ fontSize: "14px", color: colors.fukamidori.main, textDecoration: "none", letterSpacing: "0.05em" }}>
              店舗内装スタジオを見る →
            </Link>
          </div>
        </section>
      </ScrollFadeIn>

      <GroupFooter />
    </div>
  );
}
