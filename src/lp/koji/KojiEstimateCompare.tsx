const generalRows = [
  { label: "内装工事 一式", amount: "150万" },
  { label: "設備工事 一式", amount: "80万" },
  { label: "電気工事 一式", amount: "40万" },
  { label: "その他工事 一式", amount: "80万" },
];

const kiokusoRows = [
  { label: "木工造作（カウンター）", amount: "23万" },
  { label: "塗装工事（壁・天井）", amount: "18万" },
  { label: "電気工事（配線・照明）", amount: "25万" },
  { label: "給排水工事", amount: "32万" },
  { label: "空調ダクト・換気", amount: "28万" },
];

export default function KojiEstimateCompare() {
  return (
    <section style={{ background: "#fff", padding: "32px 20px 36px", borderTop: "1px solid #f0ece4" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
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
            ESTIMATE COMPARISON
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(20px, 4.5vw, 28px)",
              fontWeight: 700,
              color: "#1a1f14",
              lineHeight: 1.55,
            }}
          >
            「一式見積もり」と「明細見積もり」、
            <br />
            どちらが安心ですか？
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginBottom: "18px",
          }}
        >
          {/* 左: 一般業者の一式見積もり */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e0dcd3",
              borderRadius: "12px",
              padding: "14px 12px",
              position: "relative",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: "#999",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              一般業者
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginBottom: "10px",
              }}
            >
              {generalRows.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "6px 8px",
                    background: "#faf7f2",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                >
                  <span style={{ color: "#888", fontWeight: 500 }}>
                    {r.label}
                  </span>
                  <span style={{ color: "#888", fontWeight: 600 }}>
                    {r.amount}
                  </span>
                </div>
              ))}
              <div
                style={{
                  padding: "8px",
                  borderTop: "2px solid #d4c9b8",
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#1a1f14",
                }}
              >
                <span>合計</span>
                <span>350万</span>
              </div>
            </div>

            <div
              style={{
                background: "#fdf4f1",
                border: "1px solid #e8b8a8",
                borderRadius: "6px",
                padding: "8px 10px",
                fontSize: "12px",
                lineHeight: 1.6,
                color: "#b05a3a",
              }}
            >
              <p style={{ margin: "0 0 4px", fontWeight: 700 }}>
                ❓ 何にいくら？
              </p>
              <p style={{ margin: "0 0 4px", fontWeight: 700 }}>
                ❓ 削れる項目は？
              </p>
              <p style={{ margin: 0, fontWeight: 700 }}>❓ 比較の土台なし</p>
            </div>
          </div>

          {/* 右: 記憶荘の明細見積もり */}
          <div
            style={{
              background: "#1a1f14",
              borderRadius: "12px",
              padding: "14px 12px",
              border: "1px solid rgba(201,168,76,0.3)",
              position: "relative",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: "#C9A84C",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              記憶荘
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginBottom: "10px",
              }}
            >
              {kiokusoRows.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "5px 7px",
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: "4px",
                    fontSize: "11px",
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.75)" }}>
                    {r.label}
                  </span>
                  <span style={{ color: "#fff", fontWeight: 700 }}>
                    {r.amount}
                  </span>
                </div>
              ))}
              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.35)",
                  textAlign: "center",
                  letterSpacing: "0.02em",
                }}
              >
                … 全32項目を開示
              </p>
              <div
                style={{
                  padding: "8px",
                  borderTop: "2px solid rgba(201,168,76,0.4)",
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#C9A84C",
                }}
              >
                <span>合計</span>
                <span>220万</span>
              </div>
            </div>

            <div
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.4)",
                borderRadius: "6px",
                padding: "8px 10px",
                fontSize: "12px",
                lineHeight: 1.6,
                color: "#C9A84C",
              }}
            >
              <p style={{ margin: "0 0 4px", fontWeight: 700 }}>
                ✓ 一行ずつ全公開
              </p>
              <p style={{ margin: "0 0 4px", fontWeight: 700 }}>
                ✓ 削れる項目が見える
              </p>
              <p style={{ margin: 0, fontWeight: 700 }}>✓ 相見積もりに使える</p>
            </div>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(14px, 3vw, 16px)",
            color: "#1a1f14",
            lineHeight: 1.8,
            fontWeight: 600,
            margin: "0 0 0",
          }}
        >
          「一式」を使わない見積もりを、
          <br />
          記憶荘は標準にしています。
        </p>
      </div>
    </section>
  );
}
