declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const LINE_URL = "https://lin.ee/HVV0QJO";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const losses = [
  { text: "中間マージン15〜25%を知らずに払っている", amount: "15〜25%" },
  { text: "居抜き物件の造作を活かさず不要な解体費", amount: "数十万円" },
  { text: "什器を全て新品で揃えている", amount: "30万円〜" },
  { text: "保健所の事前相談をせず追加工事が発生", amount: "20万円〜" },
  { text: "追加料金が見積もりに含まれていない", amount: "数十万円" },
];

export default function LPGuideSection() {
  const handleClick = () => {
    window.dataLayer?.push({
      event: "line_cta_click",
      cta_location: "lp_guide_section",
    });
    window.open(LINE_URL, "_blank");
  };

  return (
    <section style={{ background: "#fff", padding: "56px 24px 48px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "12px" }}>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "#C9A84C",
            }}
          >
            FREE GUIDE
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(20px, 4vw, 28px)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.6,
            }}
          >
            知らないだけで、
            <br />
            数十万〜数百万円
            <em style={{ fontStyle: "normal", color: "#C9A84C" }}>損</em>
            しています。
          </h2>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(13px, 2.3vw, 15px)",
            color: "#666",
            lineHeight: 1.8,
            margin: "0 0 32px",
          }}
        >
          内装工事で後悔しないために知っておくべきことを
          <br />
          大工歴20年の職人がまとめました。
        </p>

        {/* Guide card */}
        <div
          style={{
            background: "rgba(74,103,65,0.06)",
            borderRadius: "16px",
            padding: "32px 24px",
            border: "1px solid rgba(74,103,65,0.2)",
            marginBottom: "28px",
          }}
        >
          <p
            style={{
              margin: "0 0 4px",
              fontSize: "11px",
              fontWeight: 700,
              color: "#4A6741",
              letterSpacing: "0.1em",
            }}
          >
            LINE登録で無料プレゼント
          </p>
          <h3
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(20px, 4vw, 26px)",
              fontWeight: 700,
              color: "#222",
              lineHeight: 1.4,
            }}
          >
            内装見積もりの虎の巻
          </h3>

          {/* Book cover image */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <img
              src="/images/toranomaki-cover-sm.webp"
              alt="内装見積もりの虎の巻"
              style={{
                width: "clamp(200px, 60vw, 320px)",
                height: "auto",
                display: "block",
                margin: "0 auto",
                borderRadius: "8px",
                filter: "drop-shadow(0 4px 16px rgba(74,103,65,0.2))",
              }}
            />
          </div>

          {/* Loss-aversion header */}
          <p
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(15px, 2.8vw, 18px)",
              fontWeight: 700,
              color: "#cc3333",
            }}
          >
            知らないと、こうなります：
          </p>

          {/* Loss items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {losses.map((loss, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  background: "rgba(204,51,51,0.04)",
                  borderRadius: "10px",
                  border: "1px solid rgba(204,51,51,0.08)",
                }}
              >
                <span
                  style={{
                    color: "#cc3333",
                    flexShrink: 0,
                    fontSize: "clamp(14px, 2.5vw, 16px)",
                    fontWeight: 700,
                  }}
                >
                  ✕
                </span>
                <span
                  style={{
                    fontSize: "clamp(13px, 2.3vw, 15px)",
                    fontWeight: 700,
                    color: "#333",
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {loss.text}
                </span>
                <span
                  style={{
                    fontSize: "clamp(14px, 2.5vw, 16px)",
                    fontWeight: 700,
                    color: "#cc3333",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {loss.amount}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              margin: "20px 0 0",
              fontSize: "clamp(12px, 2vw, 13px)",
              color: "#999",
              textAlign: "center",
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            ※ これらは全て、知っていれば防げることです。
          </p>
        </div>

        {/* CTA box */}
        <div
          style={{
            background: "#1a1f14",
            borderRadius: "16px",
            padding: "28px 24px",
            textAlign: "center",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <p
            style={{
              margin: "0 0 6px",
              fontSize: "clamp(15px, 2.8vw, 18px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.6,
            }}
          >
            工事してから「知らなかった」では
            <br />
            もう取り戻せません。
          </p>
          <p
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(12px, 2vw, 13px)",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.6,
            }}
          >
            LINE登録で虎の巻を無料でお渡ししています。
          </p>

          <button
            onClick={handleClick}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              background: "#06C755",
              color: "#fff",
              borderRadius: "999px",
              padding: "16px 36px",
              fontSize: "clamp(15px, 2.8vw, 18px)",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.03em",
              boxShadow: "0 4px 24px rgba(6,199,85,0.35)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{
                width: "22px",
                height: "22px",
                fill: "#fff",
                flexShrink: 0,
              }}
            >
              <path d={lineSvgPath} />
            </svg>
            LINEで虎の巻を受け取る
          </button>
          <p
            style={{
              margin: "12px 0 0",
              fontSize: "11px",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            無料・営業なし・LINE追加するだけ
          </p>
        </div>
      </div>
    </section>
  );
}
