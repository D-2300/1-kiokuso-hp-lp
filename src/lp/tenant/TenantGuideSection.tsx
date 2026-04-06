declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const LINE_URL = "https://lin.ee/HVV0QJO";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const losses = [
  "仲介手数料20万円以上を払っている",
  "フリーレント交渉せず家賃2ヶ月分を損",
  "敷金6ヶ月のまま交渉せず契約",
  "原状回復で退去時に想定外の請求",
  "造作譲渡料を言い値で払っている",
];

export default function TenantGuideSection() {
  const handleClick = () => {
    window.dataLayer?.push({
      event: "line_cta_click",
      cta_location: "tenant_guide_section",
    });
    window.open(LINE_URL, "_blank");
  };

  return (
    <section style={{ background: "#fff", padding: "44px 20px 36px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>

        {/* Header + Book */}
        <p style={{ textAlign: "center", fontSize: "12px", fontWeight: 600, letterSpacing: "0.28em", color: "#C9A84C", marginBottom: "10px" }}>
          FREE GUIDE
        </p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: "#1a1f14", lineHeight: 1.55, marginBottom: "16px" }}>
          <span style={{ fontSize: "clamp(14px, 3vw, 16px)", color: "#888", fontWeight: 400 }}>"不動産屋の仕組み"を知らないだけで、</span><br />
          数十万〜数百万円<em style={{ fontStyle: "normal", color: "#C9A84C" }}>損</em>しています。
        </h2>
        <img
          src="/images/guide-fudousan-book-sm.webp"
          alt="不動産攻略ガイド"
          style={{
            display: "block",
            width: "clamp(160px, 40vw, 220px)", height: "auto",
            margin: "0 auto 16px",
            filter: "drop-shadow(0 4px 14px rgba(107,58,80,0.2))",
          }}
        />
        <p style={{ textAlign: "center", fontSize: "clamp(14px, 3vw, 16px)", color: "#888", lineHeight: 1.6, marginBottom: "20px" }}>
          物件契約の前に知っておくべきことを<br />元不動産のプロがまとめました。
        </p>

        {/* Loss items - compact list */}
        <div style={{
          background: "rgba(204,51,51,0.03)", borderRadius: "12px",
          padding: "12px 14px", marginBottom: "16px",
          border: "1px solid rgba(204,51,51,0.08)",
        }}>
          <p style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 700, color: "#cc3333", marginBottom: "8px" }}>
            知らないと、こうなります：
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {losses.map((text, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#cc3333", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>✕</span>
                <span style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 600, color: "#444", lineHeight: 1.6 }}>{text}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "12px", color: "#aaa", marginTop: "8px", textAlign: "center" }}>
            ※ これらは全て、知っていれば防げることです。
          </p>
        </div>

        {/* CTA */}
        <div style={{
          background: "#1a1f14", borderRadius: "14px",
          padding: "20px 20px", textAlign: "center",
        }}>
          <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", fontWeight: 700, color: "#fff", lineHeight: 1.6, marginBottom: "4px" }}>
            これだけでも、受け取ってください。
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "14px" }}>
            LINE登録で攻略ガイドを無料でお渡ししています。
          </p>
          <button
            onClick={handleClick}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#06C755", color: "#fff", borderRadius: "999px",
              padding: "14px 32px", fontSize: "clamp(14px, 2.5vw, 16px)",
              fontWeight: 700, border: "none", cursor: "pointer",
              boxShadow: "0 4px 20px rgba(6,199,85,0.35)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            LINEで攻略ガイドを受け取る
          </button>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", marginTop: "10px" }}>
            無料・営業なし・LINE追加するだけ
          </p>
        </div>
      </div>
    </section>
  );
}
