import { LINE_URL } from "../../shared/design-tokens";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const cards = [
  {
    mark: "◆",
    color: "#4A6741",
    title: "残せるもの",
    items: ["給排水・厨房インフラ", "造作棚・什器", "空調・照明", "状態の良い床材"],
  },
  {
    mark: "×",
    color: "#8B6914",
    title: "壊すべきもの",
    items: ["傷んだ壁紙・クロス", "カビ・水漏れ箇所", "不要な間仕切り", "劣化した配管"],
  },
  {
    mark: "▲",
    color: "#C9A84C",
    title: "追加注意",
    items: ["電気容量の不足", "保健所NG区画", "消防動線", "換気扇の能力"],
  },
];

export default function KojiDiagnosis() {
  return (
    <section style={{ background: "#fff", padding: "36px 24px 36px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "18px" }}>
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
            PROPERTY DIAGNOSIS
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
            居抜きか、スケルトンか。
            <br />
            写真1枚で、プロが仕分けます。
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "#888",
              lineHeight: 1.8,
            }}
          >
            物件の写真を LINE で送ってください。
            <br />
            大工歴20年の職人が、こう判定します。
          </p>
        </div>

        {/* ★ 入力→査定→返信 フローインフォグラフィック */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr auto 1fr",
            gap: "6px",
            alignItems: "stretch",
            marginBottom: "18px",
          }}
        >
          {/* STEP 1: 入力 */}
          <div
            style={{
              background: "#f9f8f6",
              border: "1px solid #e8e4de",
              borderRadius: "10px",
              padding: "12px 8px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#C9A84C",
                  letterSpacing: "0.14em",
                }}
              >
                STEP 1
              </p>
              <div style={{ fontSize: "24px", marginBottom: "4px" }}>📱</div>
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#1a1f14",
                  lineHeight: 1.4,
                }}
              >
                写真を送る
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "11px",
                  color: "#888",
                  lineHeight: 1.5,
                }}
              >
                物件写真・業態・坪数
              </p>
            </div>
            <p
              style={{
                margin: "8px 0 0",
                fontSize: "11px",
                color: "#C9A84C",
                fontWeight: 700,
              }}
            >
              2分
            </p>
          </div>

          {/* Arrow 1 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C9A84C",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            →
          </div>

          {/* STEP 2: 査定 */}
          <div
            style={{
              background: "#1a1f14",
              border: "1px solid rgba(201,168,76,0.4)",
              borderRadius: "10px",
              padding: "12px 8px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#C9A84C",
                  letterSpacing: "0.14em",
                }}
              >
                STEP 2
              </p>
              <div style={{ fontSize: "24px", marginBottom: "4px" }}>🔍</div>
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.4,
                }}
              >
                職人が査定
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.5,
                }}
              >
                ◆残す × 壊す ▲注意
              </p>
            </div>
            <p
              style={{
                margin: "8px 0 0",
                fontSize: "11px",
                color: "#C9A84C",
                fontWeight: 700,
              }}
            >
              大工歴20年
            </p>
          </div>

          {/* Arrow 2 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C9A84C",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            →
          </div>

          {/* STEP 3: 返信 */}
          <div
            style={{
              background: "#f9f8f6",
              border: "1px solid #e8e4de",
              borderRadius: "10px",
              padding: "12px 8px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#C9A84C",
                  letterSpacing: "0.14em",
                }}
              >
                STEP 3
              </p>
              <div style={{ fontSize: "24px", marginBottom: "4px" }}>📝</div>
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#1a1f14",
                  lineHeight: 1.4,
                }}
              >
                明細が届く
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "11px",
                  color: "#888",
                  lineHeight: 1.5,
                }}
              >
                仕分けリスト＋概算
              </p>
            </div>
            <p
              style={{
                margin: "8px 0 0",
                fontSize: "11px",
                color: "#C9A84C",
                fontWeight: 700,
              }}
            >
              2営業日
            </p>
          </div>
        </div>

        {/* 3 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {cards.map((c, i) => (
            <div
              key={i}
              style={{
                background: "#f9f8f6",
                border: "1px solid #e8e4de",
                borderRadius: "10px",
                padding: "14px 16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "8px",
                  paddingBottom: "8px",
                  borderBottom: "1px solid #e8e4de",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: c.color,
                    lineHeight: 1,
                  }}
                >
                  {c.mark}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(14px, 3vw, 16px)",
                    fontWeight: 700,
                    color: "#1a1f14",
                  }}
                >
                  {c.title}
                </p>
              </div>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px 12px",
                }}
              >
                {c.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: "clamp(14px, 3vw, 16px)",
                      color: "#555",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* What you get */}
        <div
          style={{
            background: "#f9f8f6",
            border: "1px dashed #C9A84C",
            borderRadius: "10px",
            padding: "16px 18px",
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              fontSize: "12px",
              fontWeight: 700,
              color: "#C9A84C",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            ▼ 診断の結果、あなたに返ってくるもの
          </p>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {[
              "残せるもの／壊すべきもののリスト",
              "解体費の概算（ここまで壊せば〇万円）",
              "追加で必要になりそうな工事（電気・水道・消防）",
              "居抜きで進めるべきか／スケルトンの方が安いかの判断",
            ].map((line, i) => (
              <li
                key={i}
                style={{
                  fontSize: "clamp(14px, 3vw, 16px)",
                  color: "#1a1f14",
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                ・{line}
              </li>
            ))}
          </ul>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(14px, 3vw, 16px)",
            color: "#666",
            lineHeight: 1.8,
            margin: "0 0 20px",
            fontWeight: 600,
          }}
        >
          これは、工事会社にしか出せない情報です。
        </p>

        <div style={{ textAlign: "center" }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
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
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(6,199,85,0.3)",
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
            物件写真を送って診断を受ける
          </a>
          <p style={{ margin: "10px 0 0", fontSize: "12px", color: "#aaa" }}>
            匿名OK / 2営業日以内に返信 / 営業なし
          </p>
        </div>
      </div>
    </section>
  );
}
