import { Link } from "react-router-dom";
import StudioNav from "../components/StudioNav";
import StudioFooter from "../components/StudioFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import LineCTAButton from "../../shared/LineCTAButton";
import { colors } from "../../shared/design-tokens";

export default function StudioWelcome() {
  return (
    <div style={{ backgroundColor: '#2E4229' }}>
      <div style={{ paddingTop: 0, backgroundColor: colors.beige }}>
        <StudioNav />

        {/* SmallHero */}
        <section style={{ position: "relative", height: "44vh", minHeight: "300px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#D8D3CE" }}>
            <img
              src="/assets/textures/shikkui-plaster-wide.webp"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.4) 100%)" }} />
          </div>
          <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <p style={{ color: "#fff", fontFamily: "'Noto Sans JP', sans-serif", fontSize: "clamp(28px, 8vw, 44px)", fontWeight: 900, letterSpacing: "clamp(0.06em, 1.5vw, 0.12em)", textTransform: "uppercase" }}>Welcome</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", letterSpacing: "0.1em" }}>ご相談前に、お読みください</p>
          </div>
        </section>

        {/* Lead */}
        <ScrollFadeIn>
          <section style={{ padding: "60px 24px 0", maxWidth: "640px", margin: "0 auto" }}>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", margin: "0 0 16px" }}>
              はじめまして、記憶荘 店舗内装スタジオです。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#444", margin: "0 0 16px" }}>
              LINEでご相談いただく前に、私たちが大事にしている考え方を3分でまとめました。これを先に読んでいただくと、その後のやり取りがずっとスムーズになります。
            </p>
            <p style={{ fontSize: "13px", lineHeight: 1.9, color: "#888", margin: 0, fontStyle: "italic" }}>
              ※ もちろん「読まないで質問する」のもまったく問題ありません。お急ぎなら直接LINEでメッセージを送ってください。
            </p>
          </section>
        </ScrollFadeIn>

        {/* Section 1: お金の構造 */}
        <ScrollFadeIn>
          <section style={{ padding: "64px 24px 0", maxWidth: "640px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 16px", textTransform: "uppercase" }}>
              01 — Our Structure
            </p>
            <h3 style={{ fontSize: "20px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
              ── 私たちのお金の構造
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 16px" }}>
              記憶荘の収入源は<strong style={{ color: colors.text }}>「内装工事の対価」だけ</strong>です。仲介料・コンサル料・物件紹介料は、一切いただいていません。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 16px" }}>
              物件探し、事業計画の相談、見積、現地調査——ここまではすべて無料です。「内装工事を別の会社に出したい」と決められても、追加で何かを請求することはありません。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: 0 }}>
              つまり、お客様の情報を引き出して足元を見る理由が、構造的にありません。むしろ正直な情報をいただけた方が、こちらの提案の精度が上がって、結果的にお客様が成功しやすくなる——それが私たちのビジネスモデルです。
            </p>
          </section>
        </ScrollFadeIn>

        {/* Section 2: 業界不信 */}
        <ScrollFadeIn>
          <section style={{ padding: "64px 24px 0", maxWidth: "640px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 16px", textTransform: "uppercase" }}>
              02 — Industry Distrust
            </p>
            <h3 style={{ fontSize: "20px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
              ── 業界に不信感をお持ちなのは、当然です
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 16px" }}>
              内装屋・不動産屋・建築業界は、「相場が分からない」「専門用語で煙に巻かれる」「言われるがままに高い見積を出される」と思われがちな世界です。実際そういう業者もいます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 16px" }}>
              だから「うかつに本音を話すと足元を見られそう」と身構えるのは、まったく正しい消費者行動です。私たちも邪魔するつもりはありません。最初の数回のやり取りで、私たちが信頼に足る相手かどうかをじっくり見極めてください。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: 0 }}>
              ただし、「信頼できる」と判断していただいた後も警戒したまま情報を出さずに進むと、提案がずっと的外れのまま、お互いの時間が溶けていきます。これだけは先にお伝えしておきたいポイントです。
            </p>
          </section>
        </ScrollFadeIn>

        {/* Section 3: 最初に話してほしい3点 */}
        <ScrollFadeIn>
          <section style={{ padding: "64px 24px 0", maxWidth: "640px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 16px", textTransform: "uppercase" }}>
              03 — Three Things
            </p>
            <h3 style={{ fontSize: "20px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
              ── 最初に話していただけると、ぐっとスムーズになる3つのこと
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 24px" }}>
              「これだけは先に教えてほしい」というお願いです。話したくない範囲があれば伝えなくて大丈夫ですが、その場合は提案も無難なものに留めますので、ご了承ください。
            </p>

            <div style={{ background: "#FCF8F0", borderLeft: `4px solid ${colors.gold}`, padding: "20px 24px", margin: "0 0 16px", borderRadius: "4px" }}>
              <p style={{ fontSize: "14px", fontWeight: 700, color: colors.text, margin: "0 0 8px" }}>① 経営経験・ご家族のバックボーン</p>
              <p style={{ fontSize: "14px", lineHeight: 1.85, color: "#555", margin: 0 }}>
                ご自身の経営経験／ご家族や親戚に経営者がいるか／経済的なサポートが得られる体制／本業との関係。これによって、リスク管理のお話の深さが大きく変わります。
              </p>
            </div>

            <div style={{ background: "#FCF8F0", borderLeft: `4px solid ${colors.gold}`, padding: "20px 24px", margin: "0 0 16px", borderRadius: "4px" }}>
              <p style={{ fontSize: "14px", fontWeight: 700, color: colors.text, margin: "0 0 8px" }}>② 何を「成功」と呼ぶか</p>
              <p style={{ fontSize: "14px", lineHeight: 1.85, color: "#555", margin: 0 }}>
                生計を立てる規模を目指すのか／趣味として楽しむ程度でOKか／投資回収を急ぐのか／期限を区切って楽しむのか。これが分からないと、私たちはデフォルトで「生計型」を前提に提案を組み立ててしまいます。
              </p>
            </div>

            <div style={{ background: "#FCF8F0", borderLeft: `4px solid ${colors.gold}`, padding: "20px 24px", margin: 0, borderRadius: "4px" }}>
              <p style={{ fontSize: "14px", fontWeight: 700, color: colors.text, margin: "0 0 8px" }}>③ 最終的に決めるのは誰か</p>
              <p style={{ fontSize: "14px", lineHeight: 1.85, color: "#555", margin: 0 }}>
                ご相談くださっている方が決定者ではなく、別に決定者がいるケースは多くあります。最初に伝えていただけると、提案の出し方や本人とのMTG設計が組めます。
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Section 4: 言うこと言わないこと */}
        <ScrollFadeIn>
          <section style={{ padding: "64px 24px 0", maxWidth: "640px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 16px", textTransform: "uppercase" }}>
              04 — What We Do
            </p>
            <h3 style={{ fontSize: "20px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
              ── 私たちが言うこと、言わないこと
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
              <div style={{ background: "#F0F7F0", border: "1px solid #c8dac0", borderRadius: "8px", padding: "20px 22px" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#4A6741", letterSpacing: "0.05em", margin: "0 0 10px" }}>言うこと</p>
                <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", lineHeight: 1.9, color: "#444" }}>
                  <li>「この物件はやめた方がいい」</li>
                  <li>「今は出店を見送った方がいい」</li>
                  <li>「その予算では難しい／このグレードに下げれば可能」</li>
                  <li>相場・他社見積の妥当性についての率直な意見</li>
                </ul>
              </div>
              <div style={{ background: "#FCF2EE", border: "1px solid #e8ccc0", borderRadius: "8px", padding: "20px 22px" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#8B3A3A", letterSpacing: "0.05em", margin: "0 0 10px" }}>言わないこと</p>
                <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", lineHeight: 1.9, color: "#444" }}>
                  <li>「今すぐ決めないと他に取られますよ」式の急かし</li>
                  <li>都合の悪い情報を隠した物件紹介</li>
                  <li>「一式○○万円」など内訳のない見積</li>
                  <li>当社で工事することを前提にした押し売り</li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Section 5: 次のステップ */}
        <ScrollFadeIn>
          <section style={{ padding: "64px 24px 60px", maxWidth: "640px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 16px", textTransform: "uppercase" }}>
              05 — Next Step
            </p>
            <h3 style={{ fontSize: "20px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
              ── では、お気軽にご相談ください
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 16px" }}>
              ここまで読んでいただいてありがとうございます。あとは普通にLINEでメッセージを送ってください。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 16px" }}>
              「物件は決まっていない」「予算もまだ曖昧」「やりたいことだけある」——どの段階でも大丈夫です。むしろ早い段階の方が、提案の幅は広がります。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 32px" }}>
              無理な営業はしません。返信は土日中心で構いません。お互いのペースで進めましょう。
            </p>

            <div style={{ textAlign: "center", margin: "32px 0 16px" }}>
              <LineCTAButton size="normal" label="LINEで相談する" />
            </div>
          </section>
        </ScrollFadeIn>

        {/* Deeper Info Links */}
        <ScrollFadeIn>
          <section style={{ padding: "0 24px 80px", maxWidth: "640px", margin: "0 auto" }}>
            <div style={{ borderTop: "1px solid #E0DBD0", paddingTop: "32px" }}>
              <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 12px", textTransform: "uppercase" }}>
                More to read
              </p>
              <h4 style={{ fontSize: "16px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 20px" }}>
                もっと詳しく知りたい方へ
              </h4>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                <li style={{ marginBottom: "12px" }}>
                  <Link to="/studio/articles/soudan-keikai-mode" style={{ fontSize: "14px", color: colors.urushicha.main, textDecoration: "underline" }}>
                    内装屋に最初に話してほしい3つのこと（記事）
                  </Link>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <Link to="/studio/articles/bukken-sagashi-kijun" style={{ fontSize: "14px", color: colors.urushicha.main, textDecoration: "underline" }}>
                    店舗物件を探す前にやるべきこと「基準作り」（記事）
                  </Link>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <Link to="/studio/articles/your-treasure-property" style={{ fontSize: "14px", color: colors.urushicha.main, textDecoration: "underline" }}>
                    あなたの「お宝物件」は、他の人にはお宝じゃない（記事）
                  </Link>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <Link to="/studio/guide/tenant" style={{ fontSize: "14px", color: colors.urushicha.main, textDecoration: "underline" }}>
                    テナント攻略ガイド（FAQ付き完全版）
                  </Link>
                </li>
                <li>
                  <Link to="/studio/articles" style={{ fontSize: "14px", color: colors.urushicha.main, textDecoration: "underline" }}>
                    記事一覧
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </ScrollFadeIn>

        <StudioFooter />
      </div>
    </div>
  );
}
