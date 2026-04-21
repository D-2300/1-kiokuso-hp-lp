/**
 * TenantComparison — 「普通のテナント探し vs 記憶荘」比較表
 *
 * 目的: テナリード系LPで効いている「検索型 vs 提案型」の対比フレームを記憶荘流に移植。
 * パターン・インタラプト（公開物件は残り物）で揺らぎを与えた後、
 * 三角形（元仲介×職人×中立）に入る前に、「標準との具体差」を一枚絵で見せる。
 */

type Row = { label: string; ippan: string; kiokuso: string };

const rows: Row[] = [
  {
    label: "情報源",
    ippan: "公開ポータル（残り物）",
    kiokuso: "現場の情報ネットワーク＋非公開",
  },
  {
    label: "物件が業態に合うか",
    ippan: "自分で判断",
    kiokuso: "元仲介が〝裏〟を読んで助言",
  },
  {
    label: "内装費の見積り",
    ippan: "契約後・別会社に依頼",
    kiokuso: "物件内見と同時に職人が概算",
  },
  {
    label: "見積ズレ（追加100〜300万）",
    ippan: "よくある",
    kiokuso: "事前に把握・回避",
  },
  {
    label: "中立性",
    ippan: "仲介は貸したい側に立つ",
    kiokuso: "物件売買では儲けない",
  },
  {
    label: "費用",
    ippan: "仲介料・相談料あり",
    kiokuso: "相談・見積・提案すべて無料",
  },
];

export default function TenantComparison() {
  return (
    <section
      style={{
        padding: "56px 16px 48px",
        background: "linear-gradient(180deg, #faf7f2 0%, #f5ecd7 50%, #faf7f2 100%)",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <span style={{ flex: 1, height: "1px", maxWidth: "80px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,.55))" }} />
            <span style={{ color: "#C9A84C", fontSize: "9px" }}>◆</span>
            <span style={{ fontSize: "11px", letterSpacing: ".3em", color: "#4A6741", fontWeight: 600, textTransform: "uppercase" as const }}>
              Compare
            </span>
            <span style={{ color: "#C9A84C", fontSize: "9px" }}>◆</span>
            <span style={{ flex: 1, height: "1px", maxWidth: "80px", background: "linear-gradient(90deg, rgba(201,168,76,.55), transparent)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(19px, 4.8vw, 24px)", fontWeight: 700, color: "#2a2a2a", lineHeight: 1.6, margin: 0 }}>
            普通のテナント探しと、<br />記憶荘のやり方。
          </h2>
          <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.9, marginTop: "10px" }}>
            同じ「テナントを探す」でも、結果が違います。
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            border: "1px solid #e0d8cc",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 3px 16px rgba(60,40,20,0.08)",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(86px, 1fr) 1.1fr 1.3fr",
              background: "#faf7f2",
              borderBottom: "1px solid #ece6dc",
            }}
          >
            <div style={{ padding: "10px 10px", fontSize: "11px", color: "#8a7a6a", fontWeight: 600, letterSpacing: ".05em" }}>
              項目
            </div>
            <div style={{ padding: "10px 10px", fontSize: "11px", color: "#8a7a6a", fontWeight: 600, textAlign: "center" }}>
              普通のテナント探し
            </div>
            <div
              style={{
                padding: "10px 10px",
                fontSize: "12px",
                color: "#8a6a2a",
                fontWeight: 700,
                textAlign: "center",
                background: "linear-gradient(180deg, rgba(201,168,76,.14), rgba(245,236,215,.5))",
                borderLeft: "1px solid rgba(201,168,76,.35)",
              }}
            >
              <span style={{ color: "#C9A84C", marginRight: "4px" }}>◆</span>
              記憶荘
            </div>
          </div>

          {rows.map((r, i) => (
            <div
              key={r.label}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(86px, 1fr) 1.1fr 1.3fr",
                borderBottom: i === rows.length - 1 ? "none" : "1px solid #ece6dc",
              }}
            >
              <div
                style={{
                  padding: "12px 10px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#2a2a2a",
                  background: "#faf7f2",
                  display: "flex",
                  alignItems: "center",
                  lineHeight: 1.4,
                }}
              >
                {r.label}
              </div>
              <div
                style={{
                  padding: "12px 10px",
                  fontSize: "12px",
                  color: "#8a7a6a",
                  lineHeight: 1.7,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#c44d3f", marginRight: "5px", fontSize: "10px", flexShrink: 0 }}>✕</span>
                <span>{r.ippan}</span>
              </div>
              <div
                style={{
                  padding: "12px 10px",
                  fontSize: "12.5px",
                  color: "#2a2a2a",
                  lineHeight: 1.7,
                  background: "linear-gradient(180deg, rgba(201,168,76,.08), rgba(245,236,215,.3))",
                  borderLeft: "3px solid #C9A84C",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "#4A6741", marginRight: "5px", fontSize: "11px", flexShrink: 0, fontWeight: 700 }}>✓</span>
                <span>{r.kiokuso}</span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "12px", color: "#8a7a6a", textAlign: "center", marginTop: "18px", lineHeight: 1.8 }}>
          ※ 相見積もり歓迎・断ってOK・営業電話なし
        </p>
      </div>
    </section>
  );
}
