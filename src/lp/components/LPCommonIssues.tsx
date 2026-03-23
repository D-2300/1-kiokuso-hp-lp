import LPVoiceBubble from './LPVoiceBubble';

const issues = [
  {
    bold: "追加料金",
    text: "が発生 ── 契約後に追加の見積もりが出てくる",
    detail: "「想定外の工事が必要でした」と後から追加される。最初の見積もりは何だったのか。",
  },
  {
    bold: "不明瞭",
    text: "な見積もり ── 内容がざっくりすぎて何にいくらかわからない",
    detail: "「内装工事一式 150万円」としか書いていない。内訳を聞いても曖昧な回答。",
  },
  {
    bold: "コミュニケーションが面倒",
    text: " ── デザインと工事が別の会社",
    detail: "デザイナーに伝えたことが現場に伝わっていない。同じ説明を何度もすることに。",
  },
  {
    bold: "完成イメージ",
    text: "がわからない ── 図面だけ渡されて「こうなります」と言われても想像できない",
    detail: "平面図を見せられても空間の広さや雰囲気はピンとこない。完成してから「思ってたのと違う」となることも。",
  },
];

export default function LPCommonIssues() {
  return (
    <>
      <section style={{ backgroundColor: "#4A6741", padding: "40px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "clamp(17px, 3vw, 22px)",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            業界の「当たり前」が、おかしいんです。
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "720px", margin: "0 auto" }}>
            {issues.map((item) => (
              <div
                key={item.bold}
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "16px 20px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(14px, 2.5vw, 16px)",
                    color: "rgba(255,255,255,0.92)",
                    lineHeight: 1.7,
                  }}
                >
                  <span style={{ color: "#C9A84C", fontWeight: 700 }}>{item.bold}</span>
                  {item.text}
                </p>
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: "clamp(12px, 2vw, 13px)",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p style={{
            margin: "24px 0 8px",
            fontSize: "15px",
            fontWeight: 600,
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.7,
          }}>
            記憶荘は、この4つを全部なくしました。
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#EAF0E8", padding: "28px 20px 36px" }}>
        <p
          style={{
            margin: '0 0 24px',
            fontSize: "clamp(15px, 2.5vw, 18px)",
            fontWeight: 700,
            color: "#333",
            textAlign: "center",
            lineHeight: 1.8,
          }}
        >
          そのお悩み、すべて{" "}
          <span style={{ color: "#C9A84C" }}>記憶荘</span>{" "}
          で解決できます。
        </p>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <LPVoiceBubble
            text="まさに全部当てはまっていました。追加料金が怖くて動けなかったけど、記憶荘は最初の見積もりから変わらなかった。"
            author="バーオーナー"
            detail="仙台市青葉区・8坪"
            img="/images/voice-bar-owner.webp"
          />
        </div>
      </section>
    </>
  );
}
