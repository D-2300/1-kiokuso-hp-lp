export default function LPLastPush() {
  return (
    <section style={{ backgroundColor: "#EAF0E8", padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        {/* 見出し */}
        <p style={{
          margin: "0 0 10px",
          fontSize: "clamp(17px, 3vw, 22px)",
          fontWeight: 700,
          color: "#333",
          textAlign: "center",
        }}>
          まだ先の話だから、と思っていませんか。
        </p>
        <p style={{
          margin: "0 0 32px",
          fontSize: "clamp(13px, 2vw, 14px)",
          color: "#777",
          textAlign: "center",
          lineHeight: 1.8,
        }}>
          設計・見積もりに1〜2ヶ月、施工に2〜3ヶ月。<br />
          オープン日から逆算すると、半年前には動き始める方がほとんどです。
        </p>

        {/* 特典エリア */}
        <div style={{
          backgroundColor: "#4A6741",
          borderRadius: "16px",
          padding: "28px 20px",
          overflow: "hidden",
        }}>
          <p style={{
            margin: "0 0 24px",
            fontSize: "clamp(14px, 2.5vw, 16px)",
            fontWeight: 700,
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.8,
          }}>
            LINE登録で、2つの
            <span style={{ color: "#C9A84C" }}>無料特典</span>
            をお渡ししています。
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* 特典1: 虎の巻 */}
            <div style={{
              backgroundColor: "#1A1A1A",
              borderRadius: "12px",
              overflow: "hidden",
            }}>
              <div style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px 16px",
              }}>
                <img
                  src="/images/toranomaki-cover.webp"
                  alt="内装見積もりの虎の巻"
                  style={{
                    width: "100%",
                    maxWidth: "320px",
                    height: "auto",
                    display: "block",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                padding: "16px 20px",
              }}>
                <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>特典 1</p>
                <p style={{ margin: "0 0 6px", fontSize: "clamp(15px, 2.5vw, 17px)", fontWeight: 700, color: "#fff" }}>
                  内装見積もりの虎の巻（PDF）
                </p>
                <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                  相場感・見積もりの読み方・業者選びのポイントをまとめた資料です。
                </p>
              </div>
            </div>

            {/* 特典2: AIパース */}
            <div style={{
              backgroundColor: "#1A1A1A",
              borderRadius: "12px",
              overflow: "hidden",
            }}>
              <div style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px 16px",
              }}>
                <img
                  src="/images/solution-ai-pers.webp"
                  alt="AIパース"
                  style={{
                    width: "100%",
                    maxWidth: "320px",
                    height: "auto",
                    display: "block",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                padding: "16px 20px",
              }}>
                <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>特典 2</p>
                <p style={{ margin: "0 0 6px", fontSize: "clamp(15px, 2.5vw, 17px)", fontWeight: 700, color: "#fff" }}>
                  AIパースを無料で作成
                </p>
                <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                  LINEで物件の写真や間取りを送るだけ。完成イメージをお届けします。
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
