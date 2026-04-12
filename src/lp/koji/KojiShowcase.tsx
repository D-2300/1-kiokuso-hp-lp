const LINE_URL = "https://lin.ee/HVV0QJO";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const pages = [
  { img: "/images/solution-ai-pers-sm.webp", label: "AI完成イメージ", caption: "業種に合わせた外観・内観パース" },
  { img: "/images/pricing-skeleton-sm.webp", label: "概算コスト全項目", caption: "「一式」を使わない明細" },
  { img: "/images/crossover-after-01-sm.webp", label: "Before / After", caption: "居抜き活用の仕上がり" },
  { img: "/images/why-business-plan-sm.webp", label: "収支シミュレーション", caption: "売上別3パターン比較" },
  { img: "/images/solution-fire-inspection-sm.webp", label: "許認可チェックリスト", caption: "保健所・消防・届出一覧" },
  { img: "/images/area-map-sm.webp", label: "開業ロードマップ", caption: "物件探し〜オープンまで" },
];

const contents = [
  "AI完成パース", "収支シミュレーション", "概算コスト全項目",
  "Before/After", "居抜き診断", "許認可リスト",
  "成功・失敗シナリオ", "開業ロードマップ",
];

export default function KojiShowcase() {
  return (
    <section style={{ padding: "clamp(44px, 8vw, 80px) 20px", background: "#FAF6F0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "3px", color: "#8B6914", marginBottom: "12px" }}>
          SAMPLE
        </p>
        <h2 style={{
          fontFamily: "'Zen Maru Gothic', 'Noto Sans JP', sans-serif",
          fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: "#3D2E16",
          marginBottom: "20px", lineHeight: 1.5,
        }}>
          実際にお届けした提案書を、<br />ご覧ください。
        </h2>
        <p style={{ fontSize: "clamp(14px, 2.5vw, 16px)", color: "#7A6B55", marginBottom: "24px", lineHeight: 1.8 }}>
          LINEで業種・エリア・ご希望を教えていただくだけ。このような提案書を無料で作成しております。
        </p>

        {/* Sample proposal card */}
        <div style={{
          background: "#fff", borderRadius: "20px", overflow: "hidden",
          boxShadow: "0 8px 40px rgba(93,74,42,0.12)", marginBottom: "24px",
        }}>
          {/* Header */}
          <div style={{
            padding: "20px 24px",
            background: "linear-gradient(135deg, #3D2E16 0%, #5C4A2A 100%)",
            color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <h3 style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: "16px", fontWeight: 500 }}>
              カフェダイニング — 出店シミュレーション
            </h3>
            <span style={{ fontSize: "11px", padding: "4px 12px", background: "rgba(255,255,255,0.15)", borderRadius: "100px", letterSpacing: "1px" }}>
              サンプル
            </span>
          </div>

          {/* Pages grid - 3 columns */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", background: "#F0EBE3",
          }}>
            {pages.map((page, i) => (
              <div key={i} style={{ background: "#fff", padding: "12px" }}>
                <div style={{
                  width: "100%", aspectRatio: "4/3", borderRadius: "8px", overflow: "hidden",
                }}>
                  <img src={page.img} alt={page.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <p style={{ fontSize: "11px", fontWeight: 600, color: "#3D2E16", marginTop: "6px", textAlign: "center" }}>
                  {page.label}
                </p>
                <p style={{ fontSize: "10px", color: "#7A6B55", textAlign: "center" }}>
                  {page.caption}
                </p>
              </div>
            ))}
          </div>

          {/* Contents */}
          <div style={{ padding: "20px 24px", borderTop: "1px solid #F0EBE3" }}>
            <h4 style={{ fontSize: "13px", fontWeight: 500, color: "#8B6914", marginBottom: "12px", letterSpacing: "1px" }}>
              提案書に含まれる内容
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {contents.map((c, i) => (
                <span key={i} style={{
                  display: "inline-block", padding: "5px 14px", background: "#FAF6F0",
                  borderRadius: "100px", fontSize: "12px", color: "#7A6B55",
                }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: "#1a1f14", borderRadius: "14px",
          padding: "20px 20px", textAlign: "center",
        }}>
          <p style={{ fontSize: "clamp(14px, 2.8vw, 16px)", fontWeight: 700, color: "#fff", lineHeight: 1.6, marginBottom: "4px" }}>
            あなた専用の提案書も、無料で作成いたします。
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "14px" }}>
            業種・エリア・広さをLINEで教えてください。
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#06C755", color: "#fff", borderRadius: "999px",
              padding: "14px 32px", fontSize: "clamp(14px, 2.5vw, 16px)",
              fontWeight: 700, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(6,199,85,0.35)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            あなた専用の提案書を受け取る
          </a>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", marginTop: "10px" }}>
            1分で完了・営業なし・いつでもブロック可能
          </p>
        </div>
      </div>
    </section>
  );
}
