const LINE_URL = "https://lin.ee/HVV0QJO";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

export default function KojiHeroV2() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "48px 20px 40px",
        position: "relative",
        background: "linear-gradient(180deg, #FAF6F0 0%, #F0EBE3 100%)",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, maxWidth: "720px", width: "100%" }}>
        {/* Badge */}
        <span
          style={{
            display: "inline-block",
            padding: "5px 16px",
            background: "#E8F0E4",
            color: "#6B8E5A",
            borderRadius: "100px",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.5px",
            marginBottom: "20px",
          }}
        >
          仙台・宮城エリア限定
        </span>

        {/* H1 - 検索意図に即答 */}
        <h1
          style={{
            fontFamily: "'Zen Maru Gothic', 'Noto Sans JP', sans-serif",
            fontSize: "clamp(22px, 5vw, 36px)",
            fontWeight: 700,
            lineHeight: 1.6,
            color: "#3D2E16",
            marginBottom: "16px",
          }}
        >
          店舗内装、<br />
          <span style={{ color: "#8B6914" }}>いくらかかるか</span>
          知っていますか？
        </h1>

        <p
          style={{
            fontSize: "clamp(14px, 2.5vw, 17px)",
            color: "#7A6B55",
            marginBottom: "24px",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          同じ10坪のカフェでも、頼む先で<strong style={{ color: "#3D2E16", fontWeight: 600 }}>220万円</strong>変わります。<br />
          まずは「あなたの場合いくらか」を知ることから。
        </p>

        {/* Price teaser - 検索意図への即答 */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px",
          maxWidth: "380px", margin: "0 auto 28px",
        }}>
          <div style={{
            background: "#fff", borderRadius: "12px", padding: "16px 12px",
            boxShadow: "0 2px 12px rgba(93,74,42,0.08)",
          }}>
            <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#999", marginBottom: "4px" }}>一般的な相場</div>
            <div style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontSize: "clamp(20px, 5vw, 28px)", fontWeight: 700,
              color: "rgba(61,46,22,0.35)", textDecoration: "line-through",
            }}>300万〜</div>
          </div>
          <div style={{
            background: "rgba(107,142,90,0.1)", borderRadius: "12px", padding: "16px 12px",
            border: "2px solid rgba(107,142,90,0.3)",
          }}>
            <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#6B8E5A", marginBottom: "4px" }}>記憶荘の場合</div>
            <div style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontSize: "clamp(20px, 5vw, 28px)", fontWeight: 700, color: "#8B6914",
            }}>80万〜</div>
          </div>
        </div>
        <p style={{ fontSize: "11px", color: "#aaa", marginBottom: "24px" }}>
          ※ カフェ10坪・居抜き活用の例。業態・坪数で変わります
        </p>

        {/* CTA */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "16px 40px",
            background: "#06C755",
            color: "#fff",
            borderRadius: "60px",
            fontSize: "clamp(15px, 3vw, 17px)",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(6,199,85,0.3)",
          }}
        >
          <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "#fff", flexShrink: 0 }}>
            <path d={lineSvgPath} />
          </svg>
          あなたの場合の費用を見る
        </a>
        <p style={{ fontSize: "12px", color: "#aaa", marginTop: "10px" }}>
          1分で完了・営業なし・いつでもブロック可能
        </p>
      </div>
    </section>
  );
}
