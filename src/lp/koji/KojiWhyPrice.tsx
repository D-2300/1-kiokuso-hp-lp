const reasons = [
  {
    num: 1,
    title: "直接契約だから、中間マージンゼロ",
    body: "ポータルサイト経由だと紹介手数料15〜25%が上乗せ。記憶荘に直接来ていただければ、その分すべて施工のクオリティに回せます。",
  },
  {
    num: 2,
    title: "居抜きを活かすから、壊さない分だけ安い",
    body: "使えるものは全部使う。解体しないだけで、数十万円の差が出ます。これは居抜き物件を見極められる工事会社にしかできません。",
  },
  {
    num: 3,
    title: "設計も施工も、一社完結",
    body: "設計事務所→施工会社の伝言ゲームなし。最初に話を聞いた人間が、そのまま現場に立ちます。中間コストも、トラブルも発生しません。",
  },
];

// 一般ルートの各ステージでのマージン蒸発
const generalFlow = [
  { label: "お客さんの予算", amount: "300万", color: "rgba(255,255,255,0.9)", size: "large" },
  { label: "ポータル紹介料 -45万", sub: "15%", note: true },
  { label: "設計事務所を経由 -30万", sub: "10%", note: true },
  { label: "元請けマージン -60万", sub: "20%", note: true },
  { label: "解体費・不要工事 -30万", sub: "居抜き未活用", note: true },
  { label: "手元に残る工事", amount: "135万", color: "#d48f5c", size: "medium" },
];

// 記憶荘ルート
const kiokusoFlow = [
  { label: "お客さんの予算", amount: "80万", color: "rgba(255,255,255,0.9)", size: "large" },
  { label: "直接契約・中間ゼロ", check: true },
  { label: "設計・施工 一社完結", check: true },
  { label: "居抜き設備の最大活用", check: true },
  { label: "施主支給・DIY参加OK", check: true },
  { label: "手元に残る工事", amount: "80万", color: "#C9A84C", size: "medium" },
];

export default function KojiWhyPrice() {
  return (
    <section style={{ backgroundColor: "#1a1f14" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "36px 24px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
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
            WHY THIS PRICE
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(20px, 4.5vw, 28px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.55,
            }}
          >
            なぜ、この価格でできるのか。
          </h2>
          <p
            style={{
              margin: "10px 0 0",
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
            }}
          >
            同じ店舗工事でも、お金が通る道が違うだけで結果が大きく変わります。
          </p>
        </div>

        {/* ★ マージン構造インフォグラフィック */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginBottom: 20,
          }}
        >
          {/* 左：一般ルート */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "16px 12px",
            }}
          >
            <p
              style={{
                margin: "0 0 12px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.4)",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              一般ルート
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {generalFlow.map((s, i) => {
                if (s.size === "large") {
                  return (
                    <div key={i} style={{ textAlign: "center", marginBottom: 4 }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        {s.label}
                      </p>
                      <p
                        style={{
                          margin: "2px 0 0",
                          fontSize: "clamp(16px, 3.2vw, 20px)",
                          fontWeight: 700,
                          color: s.color,
                        }}
                      >
                        {s.amount}
                      </p>
                    </div>
                  );
                }
                if (s.size === "medium") {
                  return (
                    <div
                      key={i}
                      style={{
                        textAlign: "center",
                        marginTop: 6,
                        padding: "10px 8px",
                        background: "rgba(212,143,92,0.08)",
                        border: "1px solid rgba(212,143,92,0.3)",
                        borderRadius: 8,
                        width: "100%",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.55)",
                        }}
                      >
                        {s.label}
                      </p>
                      <p
                        style={{
                          margin: "2px 0 0",
                          fontSize: "clamp(14px, 2.8vw, 17px)",
                          fontWeight: 700,
                          color: s.color,
                        }}
                      >
                        {s.amount}
                      </p>
                    </div>
                  );
                }
                return (
                  <div
                    key={i}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.35)",
                        lineHeight: 1,
                      }}
                    >
                      ↓
                    </span>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#d48f5c",
                        background: "rgba(212,143,92,0.08)",
                        border: "1px solid rgba(212,143,92,0.25)",
                        borderRadius: 6,
                        padding: "4px 8px",
                        textAlign: "center",
                        lineHeight: 1.4,
                        width: "100%",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 右：記憶荘ルート */}
          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: 12,
              padding: "16px 12px",
            }}
          >
            <p
              style={{
                margin: "0 0 12px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#C9A84C",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              記憶荘ルート
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {kiokusoFlow.map((s, i) => {
                if (s.size === "large") {
                  return (
                    <div key={i} style={{ textAlign: "center", marginBottom: 4 }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        {s.label}
                      </p>
                      <p
                        style={{
                          margin: "2px 0 0",
                          fontSize: "clamp(16px, 3.2vw, 20px)",
                          fontWeight: 700,
                          color: s.color,
                        }}
                      >
                        {s.amount}
                      </p>
                    </div>
                  );
                }
                if (s.size === "medium") {
                  return (
                    <div
                      key={i}
                      style={{
                        textAlign: "center",
                        marginTop: 6,
                        padding: "10px 8px",
                        background: "rgba(201,168,76,0.12)",
                        border: "1px solid rgba(201,168,76,0.5)",
                        borderRadius: 8,
                        width: "100%",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.55)",
                        }}
                      >
                        {s.label}
                      </p>
                      <p
                        style={{
                          margin: "2px 0 0",
                          fontSize: "clamp(14px, 2.8vw, 17px)",
                          fontWeight: 700,
                          color: s.color,
                        }}
                      >
                        {s.amount}
                      </p>
                    </div>
                  );
                }
                return (
                  <div
                    key={i}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(201,168,76,0.4)",
                        lineHeight: 1,
                      }}
                    >
                      ↓
                    </span>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#C9A84C",
                        background: "rgba(201,168,76,0.1)",
                        border: "1px solid rgba(201,168,76,0.3)",
                        borderRadius: 6,
                        padding: "4px 8px",
                        textAlign: "center",
                        lineHeight: 1.4,
                        width: "100%",
                      }}
                    >
                      ✓ {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <p
          style={{
            margin: "0 0 22px",
            textAlign: "center",
            fontSize: "clamp(14px, 3vw, 16px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8,
            fontStyle: "italic",
          }}
        >
          ※ 一般相場300万の例。業態・坪数で金額は変わります。
        </p>

        {/* 3 reasons cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {reasons.map(({ num, title, body }) => (
            <div
              key={num}
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderRadius: 12,
                padding: "14px 18px",
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: "#C9A84C",
                  color: "#1a1f14",
                  fontSize: 13,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                  marginTop: 2,
                }}
              >
                {num}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: "clamp(14px, 3vw, 16px)",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.5,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(14px, 3vw, 16px)",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.75,
                  }}
                >
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: "clamp(14px, 3vw, 16px)",
            fontWeight: 500,
            color: "#C9A84C",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
          }}
        >
          値段を下げたのではなく、余計なコストをカットしただけです。
        </p>
      </div>
    </section>
  );
}
