import { useState, useEffect } from "react";
import { LINE_URL } from "../../shared/design-tokens";

interface LPBenefitCTAProps {
  showPushText?: boolean;
}

export default function LPBenefitCTA({ showPushText = false }: LPBenefitCTAProps) {
  const [isPC, setIsPC] = useState(() => typeof window !== "undefined" && window.innerWidth >= 769);

  useEffect(() => {
    const handler = () => setIsPC(window.innerWidth >= 769);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <div style={{ padding: "0 20px" }}>
      {showPushText && (
        <p style={{
          fontSize: "16px",
          fontWeight: 500,
          color: "#333",
          textAlign: "center",
          marginBottom: "24px",
          marginTop: 0,
        }}>
          知っているだけで、数十万円変わります。
        </p>
      )}

      <div style={{
        background: "#2E4229",
        borderRadius: "16px",
        padding: "32px 20px",
        border: "1px solid rgba(201,168,76,0.25)",
        boxSizing: "border-box",
        maxWidth: "640px",
        margin: "0 auto",
      }}>
        <p style={{
          margin: "0 0 24px",
          fontSize: "18px",
          fontWeight: 700,
          color: "#C9A84C",
          textAlign: "center",
        }}>
          LINE登録で無料プレゼント
        </p>

        <div style={{
          display: "flex",
          flexDirection: isPC ? "row" : "column",
          gap: "12px",
          marginBottom: "20px",
        }}>
          <div style={{
            flex: 1,
            background: "rgba(0,0,0,0.3)",
            borderRadius: "12px",
            overflow: "hidden",
            border: "0.5px solid rgba(201,168,76,0.15)",
          }}>
            <img
              src="/images/toranomaki-cover-sm.webp"
              alt="内装見積もりの虎の巻"
              width="320"
              height="140"
              loading="lazy"
              style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }}
            />
            <div style={{ padding: "14px" }}>
              <p style={{ margin: "0 0 6px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>特典 1</p>
              <p style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
                内装見積もりの虎の巻
              </p>
              <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                見積もりチェックのポイント集。悪徳業者に騙されないための必読書。
              </p>
            </div>
          </div>

          <div style={{
            flex: 1,
            background: "rgba(0,0,0,0.3)",
            borderRadius: "12px",
            overflow: "hidden",
            border: "0.5px solid rgba(201,168,76,0.15)",
          }}>
            <img
              src="/images/ai-pers-tablet-sm.webp"
              alt="AIパースで完成イメージも作成"
              width="320"
              height="140"
              loading="lazy"
              style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }}
            />
            <div style={{ padding: "14px" }}>
              <p style={{ margin: "0 0 6px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>特典 2</p>
              <p style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
                AIパースで完成イメージも作成
              </p>
              <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
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
            width: "100%",
            background: "#06C755",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 700,
            padding: "14px 0",
            borderRadius: "28px",
            textAlign: "center",
            textDecoration: "none",
            boxSizing: "border-box",
          }}
        >
          LINEで特典を受け取る
        </a>
      </div>
    </div>
  );
}
