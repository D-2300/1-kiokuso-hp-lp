const pains = [
  { mark: "◆", label: "「一式」ばかりで\n何に払うか不明" },
  { mark: "◆", label: "ネット坪単価は\nバラバラで当てにならない" },
  { mark: "◆", label: "解体中に追加請求\nされた話を聞く" },
  { mark: "◆", label: "居抜きで\nどこを残せるか分からない" },
];

const answers = [
  {
    value: "-60%",
    label: "一般相場からの\n平均削減率",
    note: "実例3件の平均",
  },
  {
    value: "256万",
    label: "一件あたり\n平均削減額",
    note: "カフェ/居酒屋/美容室",
  },
  {
    value: "32項目",
    label: "見積もりを\n一行ずつ公開",
    note: "「一式」は使いません",
  },
  {
    value: "2営業日",
    label: "LINE で写真から\n明細までお返し",
    note: "無料・営業なし",
  },
];

export default function KojiPainPoints() {
  return (
    <section style={{ background: "#f9f8f6", padding: "36px 20px 40px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {/* ── Problem: 4 worries as compact 2x2 ── */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <p
            style={{
              margin: "0 0 8px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "#C9A84C",
              textTransform: "uppercase",
            }}
          >
            COMMON WORRIES
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(20px, 4.5vw, 28px)",
              fontWeight: 700,
              color: "#1a1f14",
              lineHeight: 1.5,
            }}
          >
            業者選びの、4つの不安。
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6px",
            marginBottom: "24px",
          }}
        >
          {pains.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #e8e4de",
                borderRadius: "8px",
                padding: "10px 12px",
                display: "flex",
                alignItems: "flex-start",
                gap: "6px",
              }}
            >
              <span
                style={{
                  color: "#C9A84C",
                  fontSize: "13px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  flexShrink: 0,
                }}
              >
                {p.mark}
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(14px, 3vw, 16px)",
                  fontWeight: 600,
                  color: "#1a1f14",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                }}
              >
                {p.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Answer: big numbers block ── */}
        <div
          style={{
            background: "#1a1f14",
            borderRadius: "14px",
            padding: "26px 18px 22px",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          <p
            style={{
              margin: "0 0 6px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "#C9A84C",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            OUR ANSWER
          </p>
          <h3
            style={{
              margin: "0 0 22px",
              fontSize: "clamp(20px, 4.5vw, 28px)",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              lineHeight: 1.55,
            }}
          >
            この4つすべてに、
            <br />
            記憶荘は数字で答えを持っています。
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            {answers.map((a, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(201,168,76,0.07)",
                  border: "1px solid rgba(201,168,76,0.28)",
                  borderRadius: "10px",
                  padding: "14px 10px 12px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    margin: "0 0 4px",
                    fontSize: "clamp(22px, 6vw, 32px)",
                    fontWeight: 800,
                    color: "#C9A84C",
                    lineHeight: 1.05,
                    letterSpacing: "0.01em",
                  }}
                >
                  {a.value}
                </p>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.4,
                    whiteSpace: "pre-line",
                  }}
                >
                  {a.label}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.3,
                  }}
                >
                  {a.note}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              margin: "18px 0 0",
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
              textAlign: "center",
              lineHeight: 1.6,
              letterSpacing: "0.02em",
            }}
          >
            ※ 実例3件（カフェ10坪 / 居酒屋15坪 / 美容室12坪）の平均値。
            <br />
            金額は物件状態で変動します。
          </p>
        </div>
      </div>
    </section>
  );
}
