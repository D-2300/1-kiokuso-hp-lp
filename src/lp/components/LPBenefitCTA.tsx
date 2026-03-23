import { LINE_URL } from "../../shared/design-tokens";

export default function LPBenefitCTA() {
  return (
    <div style={{
      backgroundColor: "#1A1A1A",
      padding: "40px 20px",
      textAlign: "center",
    }}>
      <div style={{
        maxWidth: "480px",
        margin: "0 auto",
      }}>
        <div style={{ width: "40px", height: "1px", background: "#C9A84C", margin: "0 auto 16px" }} />

        <p style={{
          margin: "0 0 8px",
          fontSize: "11px",
          color: "#C9A84C",
          letterSpacing: "3px",
          fontWeight: 400,
        }}>
          FREE GIFT
        </p>

        <p style={{
          margin: "0 0 20px",
          fontSize: "clamp(18px, 4vw, 20px)",
          fontWeight: 500,
          color: "#fff",
          lineHeight: 1.5,
        }}>
          LINE登録で、<span style={{ color: "#C9A84C" }}>2つの無料特典</span>
        </p>

        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{
            flex: 1,
            border: "0.5px solid rgba(201,168,76,0.3)",
            borderRadius: "10px",
            overflow: "hidden",
          }}>
            <div style={{ height: "clamp(80px, 20vw, 100px)", background: "#2a2520", overflow: "hidden" }}>
              <img
                src="/images/why-estimate-detail.webp"
                alt="内装見積もりの虎の巻"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ padding: "10px 12px", textAlign: "left" }}>
              <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 500 }}>特典 1</p>
              <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: 500, color: "#fff", lineHeight: 1.4 }}>
                内装見積もりの虎の巻
              </p>
              <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
                数十万円変わる、見積もりチェックのポイント集
              </p>
            </div>
          </div>

          <div style={{
            flex: 1,
            border: "0.5px solid rgba(201,168,76,0.3)",
            borderRadius: "10px",
            overflow: "hidden",
          }}>
            <div style={{ height: "clamp(80px, 20vw, 100px)", background: "#2a2520", overflow: "hidden" }}>
              <img
                src="/images/about-conversation.webp"
                alt="AIパース"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ padding: "10px 12px", textAlign: "left" }}>
              <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 500 }}>特典 2</p>
              <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: 500, color: "#fff", lineHeight: 1.4 }}>
                AIパースで完成イメージ作成
              </p>
              <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
                物件写真を送るだけ。最短即日。
              </p>
            </div>
          </div>
        </div>

        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            backgroundColor: "#06C755",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            textAlign: "center",
            textDecoration: "none",
            padding: "14px 0",
            borderRadius: "28px",
            marginTop: "20px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          LINEで特典を受け取る
        </a>

        <p style={{
          marginTop: "8px",
          fontSize: "11px",
          color: "rgba(255,255,255,0.35)",
          textAlign: "center",
        }}>
          強引な営業は一切しません。断りはLINE1本でOK。
        </p>
      </div>
    </div>
  );
}
