import { useState } from "react";

export default function LPSolutionPoints() {
  const [hint1, setHint1] = useState(true);
  const [hint2, setHint2] = useState(true);
  const [hint3, setHint3] = useState(true);

  return (
    <section style={{ backgroundColor: "#fff", padding: "32px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>

        <div>
          <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.12em" }}>SOLUTION</p>
          <p style={{ margin: "0 0 28px", fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: "#222" }}>だから、この価格でつくれます。</p>

          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e0e0e0", marginBottom: "32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", fontSize: "11px", fontWeight: 600 }}>
              <div style={{ padding: "12px 10px", background: "#f5f5f5", color: "#999" }}></div>
              <div style={{ padding: "12px 10px", background: "#f5f5f5", color: "#999", textAlign: "center" }}>一般的な相場</div>
              <div style={{ padding: "12px 10px", background: "#4A6741", color: "#fff", textAlign: "center" }}>記憶荘</div>
            </div>
            {[
              ["カフェ 10坪（軽微な内装）", "200〜350万", "80万円", false],
              ["カフェ 15坪（しっかりリフォーム）", "400〜600万", "150万円", true],
              ["居酒屋 12坪（軽微な内装）", "300〜500万", "180万円", false],
              ["居酒屋 20坪（通常）", "600〜900万", "320万円", true],
              ["美容室 10坪（軽微な内装）", "300〜450万", "150万円", false],
              ["美容室 18坪（通常）", "500〜700万", "250万円", true],
              ["焼肉店 25坪（軽微な内装）", "800〜1,200万", "250万円", false],
              ["テイクアウト 8坪", "150〜250万", "68万円", true],
            ].map(([type, other, kio, groupBorder], i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  borderTop: groupBorder ? "1px solid #E0E0E0" : "1px solid #eee",
                  fontSize: "12px",
                }}
              >
                <div style={{ padding: "12px 10px", color: "#555", fontWeight: 500, lineHeight: 1.4 }}>{type}</div>
                <div style={{ padding: "12px 10px", color: "#bbb", textAlign: "center", textDecoration: "line-through", alignSelf: "center" }}>{other}</div>
                <div style={{ padding: "12px 10px", color: "#4A6741", textAlign: "center", fontWeight: 700, fontSize: "13px", alignSelf: "center" }}>{kio}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Point 1 — 横スクロールカルーセル */}
        <div>
          <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Point 1
          </p>
          <p style={{ margin: "0 0 14px", fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: "#222" }}>
            設計から施工まで、一気通貫で対応
          </p>
          <p style={{ margin: "0 0 20px", fontSize: "clamp(14px, 2.5vw, 16px)", color: "#555", lineHeight: 1.85 }}>
            最初にお話を聞いた担当が、そのまま設計し、現場に立ちます。伝言ゲームが起きないので、「言った・言わない」のトラブルがありません。
          </p>

          <div style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "12px",
            margin: "0 -20px",
            padding: "0 20px 12px",
          }}>
            {[
              {
                title: "相談",
                img: "/images/why-line-chat.webp",
                desc: "LINEで気軽にご相談いただけます。物件が決まる前でもOKです。",
                tag: "Step 0",
              },
              {
                title: "設計・提案",
                img: "/images/solution-ai-pers-sm.webp",
                desc: "AIパースで完成イメージを事前に共有。図面だけではわからない空間を可視化します。",
                tag: "Step 1",
              },
              {
                title: "施工",
                img: "/images/crossover-process-01-sm.webp",
                desc: "設計した本人が現場に立ちます。途中の変更や相談も、一本の連絡で済みます。",
                tag: "Step 2-3",
              },
              {
                title: "引渡し",
                img: "/images/crossover-after-01-sm.webp",
                desc: "完成後のアフターフォローも同じ担当が対応。開業後の追加工事にも対応します。",
                tag: "Step 4",
              },
            ].map((card) => (
              <div key={card.title} style={{
                flex: "0 0 75%",
                maxWidth: "320px",
                minWidth: "260px",
                scrollSnapAlign: "start",
                border: "1px solid #e8e4de",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}>
                <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden" }}>
                  <img src={card.img} alt={card.title} width="320" height="180" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <span style={{
                    position: "absolute", bottom: "10px", left: "10px",
                    backgroundColor: "rgba(74,103,65,0.9)", color: "#fff",
                    fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "4px",
                  }}>{card.tag}</span>
                </div>
                <div style={{ padding: "18px 16px" }}>
                  <p style={{ margin: "0 0 8px", fontSize: "clamp(16px, 2.5vw, 18px)", fontWeight: 700, color: "#4A6741" }}>{card.title}</p>
                  <p style={{ margin: 0, fontSize: "clamp(12px, 2vw, 14px)", color: "#666", lineHeight: 1.8 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {hint1 && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "8px", marginBottom: "4px" }}>
              <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.25)" }}>スワイプで見る</span>
              <button onClick={() => setHint1(false)} aria-label="案内を閉じる" style={{ fontSize: "10px", color: "rgba(0,0,0,0.25)", background: "none", border: "none", cursor: "pointer", padding: "0 0 0 8px", lineHeight: 1 }}>×</button>
            </div>
          )}
        </div>

        {/* Point 2 — 横スクロールカルーセル */}
        <div>
          <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Point 2
          </p>
          <p style={{ margin: "0 0 14px", fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: "#222" }}>
            見積もりは全項目を公開
          </p>
          <p style={{ margin: "0 0 20px", fontSize: "clamp(14px, 2.5vw, 16px)", color: "#555", lineHeight: 1.85 }}>
            何にいくらかかるか、一行ずつすべて開示します。「一式」でまとめる項目はありません。
          </p>

          <div style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "12px",
            margin: "0 -20px",
            padding: "0 20px 12px",
          }}>
            {[
              {
                title: "全項目を明細で公開",
                img: "/images/why-estimate-detail.webp",
                desc: "材料費・工賃・諸経費まで一行ずつ記載。「一式」表記は使いません。",
                tag: "透明性",
              },
              {
                title: "融資用の見積書を作成",
                img: "/images/why-business-plan-sm.webp",
                desc: "日本政策金融公庫や銀行向けの見積書を、物件確定前から作成できます。",
                tag: "融資対応",
              },
              {
                title: "相見積もりに対応",
                img: "/images/solution-material-open-sm.webp",
                desc: "他社と比較しやすい形式でお出しします。断っていただいても構いません。",
                tag: "比較OK",
              },
            ].map((card) => (
              <div key={card.title} style={{
                flex: "0 0 75%",
                maxWidth: "320px",
                minWidth: "260px",
                scrollSnapAlign: "start",
                border: "1px solid #e8e4de",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}>
                <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden" }}>
                  <img src={card.img} alt={card.title} width="320" height="180" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <span style={{
                    position: "absolute", bottom: "10px", left: "10px",
                    backgroundColor: "rgba(74,103,65,0.9)", color: "#fff",
                    fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "4px",
                  }}>{card.tag}</span>
                </div>
                <div style={{ padding: "18px 16px" }}>
                  <p style={{ margin: "0 0 8px", fontSize: "clamp(16px, 2.5vw, 18px)", fontWeight: 700, color: "#4A6741" }}>{card.title}</p>
                  <p style={{ margin: 0, fontSize: "clamp(12px, 2vw, 14px)", color: "#666", lineHeight: 1.8 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {hint2 && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "8px", marginBottom: "4px" }}>
              <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.25)" }}>スワイプで見る</span>
              <button onClick={() => setHint2(false)} aria-label="案内を閉じる" style={{ fontSize: "10px", color: "rgba(0,0,0,0.25)", background: "none", border: "none", cursor: "pointer", padding: "0 0 0 8px", lineHeight: 1 }}>×</button>
            </div>
          )}
        </div>

        {/* Point 3 — 横スクロールカルーセル */}
        <div>
          <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Point 3
          </p>
          <p style={{ margin: "0 0 14px", fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: "#222" }}>
            居抜き活用・施主支給・DIYで、コストを抑える
          </p>
          <p style={{ margin: "0 0 20px", fontSize: "clamp(14px, 2.5vw, 16px)", color: "#555", lineHeight: 1.85 }}>
            使えるものは活かす。買えるものはご自身で。できる作業は一緒に。この3つを組み合わせることで、品質を落とさずに予算を最大化します。
          </p>

          {/* カルーセル（横スクロール） */}
          <div style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "12px",
            margin: "0 -20px",
            padding: "0 20px 12px",
          }}>
            {[
              {
                title: "居抜き活用",
                img: "/images/anvil-before-sm.webp",
                desc: "前のお店の設備・造作で使えるものは活かします。解体しないだけでも数十万円の差が出ます。",
                tag: "解体費を削減",
              },
              {
                title: "施主支給",
                img: "/images/solution-yahoo-floor-new-sm.webp",
                desc: "家具・照明・資材をご自身で購入いただけます。ネットで見つけた照明や、思い入れのある椅子も歓迎します。",
                tag: "仕入れコスト削減",
              },
              {
                title: "DIY参加",
                img: "/images/crossover-process-02-sm.webp",
                desc: "壁の塗装や簡単な仕上げなど、一緒にやれる工程があります。道具の使い方からお教えします。経験は不要です。",
                tag: "施工費を削減",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  flex: "0 0 75%",
                  maxWidth: "320px",
                  minWidth: "260px",
                  scrollSnapAlign: "start",
                  border: "1px solid #e8e4de",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                {/* 画像 */}
                <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden" }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    width="320"
                    height="180"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  {/* タグ */}
                  <span style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    backgroundColor: "rgba(74,103,65,0.9)",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "4px",
                    letterSpacing: "0.04em",
                  }}>
                    {card.tag}
                  </span>
                </div>

                {/* テキスト */}
                <div style={{ padding: "18px 16px" }}>
                  <p style={{
                    margin: "0 0 8px",
                    fontSize: "clamp(16px, 2.5vw, 18px)",
                    fontWeight: 700,
                    color: "#4A6741",
                  }}>
                    {card.title}
                  </p>
                  <p style={{
                    margin: 0,
                    fontSize: "clamp(12px, 2vw, 14px)",
                    color: "#666",
                    lineHeight: 1.8,
                  }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {hint3 && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "8px", marginBottom: "4px" }}>
              <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.25)" }}>スワイプで見る</span>
              <button onClick={() => setHint3(false)} aria-label="案内を閉じる" style={{ fontSize: "10px", color: "rgba(0,0,0,0.25)", background: "none", border: "none", cursor: "pointer", padding: "0 0 0 8px", lineHeight: 1 }}>×</button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
