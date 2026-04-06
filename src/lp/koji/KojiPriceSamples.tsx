import { LINE_URL } from "../../shared/design-tokens";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

// 削減レバー比率（CASE 01 の 220万の内訳）
const leverColors = ["#C9A84C", "#B8954A", "#A68148", "#946D46", "#825944"];

const samples = [
  {
    title: "カフェ 10坪 / 居抜き活用",
    market: "300万〜",
    kioku: "80万",
    diff: "220万",
    breakdown: [
      { label: "中間マージン削減（直接契約）", value: "45万", amount: 45 },
      { label: "居抜き設備の継承（解体費ゼロ）", value: "60万", amount: 60 },
      { label: "施主支給・中古什器の活用", value: "55万", amount: 55 },
      { label: "DIY参加（壁塗装・仕上げ）", value: "30万", amount: 30 },
      { label: "設計施工一体化（伝言ゲーム削減）", value: "30万", amount: 30 },
    ],
    open: true,
  },
  {
    title: "居酒屋 15坪 / スケルトンから",
    market: "600万〜",
    kioku: "250万",
    diff: "350万",
    breakdown: [
      { label: "直接契約の中間マージン削減", value: "90万", amount: 90 },
      { label: "中古厨房機器・メルカリ/ヤフオク活用", value: "80万", amount: 80 },
      { label: "内装材の施主支給（TEMU・海外通販）", value: "60万", amount: 60 },
      { label: "設計施工ワンストップ", value: "60万", amount: 60 },
      { label: "DIY参加（塗装・仕上げ）", value: "60万", amount: 60 },
    ],
    open: false,
  },
  {
    title: "美容室 12坪 / 既存店の改装",
    market: "350万〜",
    kioku: "150万",
    diff: "200万",
    breakdown: [
      { label: "既存造作の活用（解体最小化）", value: "50万", amount: 50 },
      { label: "直接契約の中間マージン削減", value: "50万", amount: 50 },
      { label: "施主支給（椅子・鏡・照明）", value: "50万", amount: 50 },
      { label: "設計施工一体化", value: "30万", amount: 30 },
      { label: "DIY参加（簡易仕上げ）", value: "20万", amount: 20 },
    ],
    open: false,
  },
];

export default function KojiPriceSamples() {
  const handleClick = () => {
    (window as unknown as { dataLayer?: Record<string, unknown>[] }).dataLayer?.push({
      event: "line_cta_click",
      cta_location: "koji_price_samples",
    });
    window.open(LINE_URL, "_blank");
  };

  return (
    <section style={{ background: "#f9f8f6", padding: "36px 20px 40px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "#C9A84C",
              textTransform: "uppercase",
            }}
          >
            REAL ESTIMATE
          </p>
          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(20px, 4.5vw, 28px)",
              fontWeight: 700,
              color: "#1a1f14",
              lineHeight: 1.55,
            }}
          >
            「一式」を使わない明細を、
            <br />
            先にお見せします。
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "#888",
              lineHeight: 1.8,
            }}
          >
            ネットには曖昧な坪単価しかありません。
            <br />
            記憶荘は、実費の明細を一行ずつ公開しています。
          </p>
        </div>

        {/* Sample cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {samples.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #e8e4de",
                borderRadius: "14px",
                padding: "16px 18px 18px",
              }}
            >
              {/* Case label */}
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  color: "#C9A84C",
                  textTransform: "uppercase",
                }}
              >
                CASE {String(i + 1).padStart(2, "0")}
              </p>
              <h3
                style={{
                  margin: "0 0 14px",
                  fontSize: "clamp(14px, 2.6vw, 16px)",
                  fontWeight: 700,
                  color: "#1a1f14",
                  lineHeight: 1.5,
                }}
              >
                {s.title}
              </h3>

              {/* Total row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "8px",
                  marginBottom: s.open ? "16px" : "6px",
                  padding: "12px 10px",
                  background: "#f9f8f6",
                  borderRadius: "8px",
                  border: "1px solid #e8e4de",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      margin: "0 0 2px",
                      fontSize: "11px",
                      color: "#999",
                      letterSpacing: "0.05em",
                    }}
                  >
                    一般相場
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "clamp(14px, 3vw, 16px)",
                      fontWeight: 500,
                      color: "#999",
                      textDecoration: "line-through",
                    }}
                  >
                    {s.market}
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      margin: "0 0 2px",
                      fontSize: "11px",
                      color: "#C9A84C",
                      letterSpacing: "0.05em",
                      fontWeight: 700,
                    }}
                  >
                    記憶荘
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "clamp(14px, 2.8vw, 18px)",
                      fontWeight: 700,
                      color: "#1a1f14",
                    }}
                  >
                    {s.kioku}
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      margin: "0 0 2px",
                      fontSize: "11px",
                      color: "#999",
                      letterSpacing: "0.05em",
                    }}
                  >
                    差額
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "clamp(14px, 3vw, 16px)",
                      fontWeight: 700,
                      color: "#4A6741",
                    }}
                  >
                    -{s.diff}
                  </p>
                </div>
              </div>

              {/* Breakdown - only expanded on first case */}
              {s.open && (
                <>
                  <p
                    style={{
                      margin: "0 0 10px",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#C9A84C",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    ▼ その {s.diff} 円の内訳
                  </p>

                  {/* 積み上げバー（比率可視化） */}
                  {(() => {
                    const total = s.breakdown.reduce(
                      (sum, b) => sum + b.amount,
                      0
                    );
                    return (
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "22px",
                          borderRadius: "6px",
                          overflow: "hidden",
                          marginBottom: "12px",
                          border: "1px solid #e8e4de",
                        }}
                      >
                        {s.breakdown.map((b, j) => {
                          const pct = (b.amount / total) * 100;
                          return (
                            <div
                              key={j}
                              title={`${b.label} ${b.value}`}
                              style={{
                                width: `${pct}%`,
                                background: leverColors[j],
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "11px",
                                color: "#fff",
                                fontWeight: 700,
                                letterSpacing: "0.02em",
                                borderRight:
                                  j < s.breakdown.length - 1
                                    ? "1px solid rgba(255,255,255,0.2)"
                                    : "none",
                              }}
                            >
                              {Math.round(pct)}%
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    {s.breakdown.map((b, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "6px 0",
                          borderBottom:
                            j < s.breakdown.length - 1
                              ? "1px dashed #e8e4de"
                              : "none",
                          gap: "10px",
                        }}
                      >
                        <span
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "2px",
                            background: leverColors[j],
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "clamp(14px, 3vw, 16px)",
                            color: "#555",
                            lineHeight: 1.5,
                            flex: 1,
                          }}
                        >
                          {b.label}
                        </span>
                        <span
                          style={{
                            fontSize: "clamp(14px, 3vw, 16px)",
                            fontWeight: 700,
                            color: "#1a1f14",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {b.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {!s.open && (
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "12px",
                    color: "#aaa",
                    textAlign: "center",
                    letterSpacing: "0.02em",
                  }}
                >
                  ※ 内訳はLINEで受け取れます
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "18px",
            padding: "18px 20px",
            background: "#1a1f14",
            borderRadius: "14px",
            textAlign: "center",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <p
            style={{
              margin: "0 0 4px",
              fontSize: "clamp(14px, 3vw, 16px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.6,
            }}
          >
            全部、一行ずつの数字でお渡しします。
          </p>
          <p
            style={{
              margin: "0 0 14px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.6,
            }}
          >
            カフェ / バー / 居酒屋 / 美容室 / 焼肉 / エステ / ネイル / ジム …
            <br />
            業態を教えていただければ、該当する明細をお送りします。
          </p>
          <button
            onClick={handleClick}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#06C755",
              color: "#fff",
              borderRadius: "999px",
              padding: "14px 32px",
              fontSize: "clamp(16px, 3vw, 19px)",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(6,199,85,0.35)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{
                width: "20px",
                height: "20px",
                fill: "#fff",
                flexShrink: 0,
              }}
            >
              <path d={lineSvgPath} />
            </svg>
            業態別の実費明細を受け取る
          </button>
          <p
            style={{
              margin: "10px 0 0",
              fontSize: "12px",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            無料・営業なし・相見積もり歓迎
          </p>
        </div>
      </div>
    </section>
  );
}
