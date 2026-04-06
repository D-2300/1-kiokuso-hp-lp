import { LINE_URL } from "../../shared/design-tokens";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const priceExamples = [
  { label: "カフェ 10坪", amount: "80万〜" },
  { label: "居酒屋 15坪", amount: "250万〜" },
  { label: "美容室 12坪", amount: "150万〜" },
];

export default function KojiHero() {
  return (
    <section
      style={{
        minHeight: "72vh",
        maxHeight: "760px",
        background: "#1a1f14",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "44px 24px 28px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 25%, rgba(74,103,65,.14) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "680px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,.3)",
            background: "rgba(201,168,76,.08)",
            borderRadius: "100px",
            padding: "5px 16px",
            marginBottom: "16px",
          }}
        >
          仙台・宮城エリア限定
        </div>

        {/* Category */}
        <p
          style={{
            fontSize: "clamp(14px, 3vw, 16px)",
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,.45)",
            marginBottom: "10px",
          }}
        >
          物件が決まったら、まず見てほしい。
        </p>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(22px, 4.6vw, 34px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.5,
            marginBottom: "14px",
            letterSpacing: "0.01em",
          }}
        >
          店舗内装の
          <em style={{ fontStyle: "normal", color: "#C9A84C" }}>"本当の金額"</em>を、
          <br />
          一行ずつの明細で
          <br />
          お渡しします。
        </h1>

        {/* Sub copy */}
        <p
          style={{
            fontSize: "clamp(14px, 3vw, 16px)",
            color: "rgba(255,255,255,.55)",
            lineHeight: 1.8,
            marginBottom: "18px",
          }}
        >
          ネットに載っているのは、曖昧な坪単価だけ。
          <br />
          記憶荘は、あなたの業態・坪数・物件の状態に合わせて
          <br />
          実費の明細サンプルを LINE でお返しします。
        </p>

        {/* Price examples - large grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "4px",
            maxWidth: "420px",
            margin: "0 auto 20px",
            padding: "18px 10px 14px",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.28)",
            borderRadius: "12px",
          }}
        >
          {priceExamples.map((p) => (
            <div
              key={p.label}
              style={{ textAlign: "center", padding: "0 4px" }}
            >
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.3,
                  letterSpacing: "0.02em",
                }}
              >
                {p.label}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(20px, 5.4vw, 28px)",
                  fontWeight: 800,
                  color: "#C9A84C",
                  letterSpacing: "0.01em",
                  lineHeight: 1.1,
                }}
              >
                {p.amount}
              </p>
            </div>
          ))}
          <p
            style={{
              gridColumn: "1 / -1",
              margin: "10px 0 0",
              fontSize: "12px",
              color: "rgba(255,255,255,0.35)",
              textAlign: "center",
              letterSpacing: "0.02em",
            }}
          >
            ※ すべて "一式" を使わない明細付き
          </p>
        </div>

        {/* CTA */}
        <div style={{ marginBottom: "8px" }}>
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
              padding: "15px 32px",
              fontSize: "clamp(16px, 3vw, 19px)",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.03em",
              boxShadow: "0 4px 24px rgba(6,199,85,.35)",
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
            LINEで実費明細を受け取る
          </a>
        </div>
        <p
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,.3)",
            marginTop: "12px",
            letterSpacing: "0.02em",
          }}
        >
          無料・営業なし・2営業日以内に返信・相見積もり歓迎
        </p>

        {/* Divider */}
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "rgba(255,255,255,.1)",
            margin: "20px auto 14px",
          }}
        />

        {/* Duo mini profile */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src="/images/about-ken-sm.webp"
              alt="KEN - 大工歴20年"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "1px solid rgba(201,168,76,.3)",
              }}
            />
            <div style={{ textAlign: "left" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,.85)",
                  letterSpacing: "0.05em",
                }}
              >
                KEN
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "11px",
                  color: "rgba(255,255,255,.35)",
                  lineHeight: 1.3,
                }}
              >
                大工歴20年
              </p>
            </div>
          </div>
          <span
            style={{
              fontSize: "12px",
              color: "rgba(201,168,76,.5)",
            }}
          >
            ×
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src="/images/about-kai-sm.webp"
              alt="KAI - 元不動産"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "1px solid rgba(201,168,76,.3)",
              }}
            />
            <div style={{ textAlign: "left" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,.85)",
                  letterSpacing: "0.05em",
                }}
              >
                KAI
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "11px",
                  color: "rgba(255,255,255,.35)",
                  lineHeight: 1.3,
                }}
              >
                元不動産
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
