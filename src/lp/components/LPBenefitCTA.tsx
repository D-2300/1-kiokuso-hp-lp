import { LINE_URL } from "../../shared/design-tokens";

export default function LPBenefitCTA() {
  return (
    <div style={{
      backgroundColor: "#1A1A1A",
      borderRadius: "16px",
      padding: "28px 20px",
      overflow: "hidden",
    }}>
      <p style={{
        margin: "0 0 20px",
        fontSize: "clamp(16px, 3vw, 22px)",
        fontWeight: 700,
        color: "#C9A84C",
        textAlign: "center",
      }}>
        LINE登録で無料プレゼント
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

        <div style={{
          display: "flex",
          backgroundColor: "rgba(255,255,255,0.08)",
          borderRadius: "10px",
          padding: "16px",
          gap: "14px",
          alignItems: "flex-start",
        }}>
          <img
            src="/images/why-estimate-detail.webp"
            alt="内装見積もりの虎の巻"
            style={{
              width: "80px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "6px",
              flexShrink: 0,
            }}
          />
          <div>
            <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>特典 1</p>
            <p style={{ margin: "0 0 6px", fontSize: "16px", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
              内装見積もりの虎の巻
            </p>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
              知っているだけで数十万円変わる、見積もりチェックのポイント集。悪徳業者に騙されないための必読書。
            </p>
          </div>
        </div>

        <div style={{
          display: "flex",
          backgroundColor: "rgba(255,255,255,0.08)",
          borderRadius: "10px",
          padding: "16px",
          gap: "14px",
          alignItems: "flex-start",
        }}>
          <img
            src="/images/about-conversation.webp"
            alt="AIパース"
            style={{
              width: "80px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "6px",
              flexShrink: 0,
            }}
          />
          <div>
            <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>特典 2</p>
            <p style={{ margin: "0 0 6px", fontSize: "16px", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
              +AIパースで完成イメージも作成
            </p>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
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
          fontSize: "16px",
          fontWeight: 700,
          textAlign: "center",
          textDecoration: "none",
          padding: "14px 0",
          borderRadius: "28px",
          marginTop: "20px",
          letterSpacing: "0.03em",
        }}
      >
        LINEで特典を受け取る
      </a>
    </div>
  );
}
