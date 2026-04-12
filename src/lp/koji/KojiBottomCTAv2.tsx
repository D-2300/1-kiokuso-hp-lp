const LINE_URL = "https://lin.ee/HVV0QJO";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

export default function KojiBottomCTAv2() {
  return (
    <section style={{
      background: "linear-gradient(180deg, #F0EBE3 0%, #FAF6F0 100%)",
      textAlign: "center", padding: "clamp(44px, 8vw, 80px) 20px",
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* KAI & KEN photo */}
        <div style={{
          width: "100%", maxWidth: "400px", margin: "0 auto 24px",
          borderRadius: "16px", overflow: "hidden",
          boxShadow: "0 4px 24px rgba(93,74,42,0.15)",
        }}>
          <img src="/images/kai-ken-casual-talk-sm.webp" alt="KAI & KEN" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        <h2 style={{
          fontFamily: "'Zen Maru Gothic', 'Noto Sans JP', sans-serif",
          fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: "#3D2E16",
          marginBottom: "12px", lineHeight: 1.5,
        }}>
          あなたの開業、<br />まるごと1冊にまとめます。
        </h2>
        <p style={{ fontSize: "15px", color: "#7A6B55", marginBottom: "36px" }}>
          業種・エリア・広さを教えてください。あとは記憶荘にお任せください。
        </p>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "20px 56px", background: "#06C755", color: "#fff",
            borderRadius: "60px", fontSize: "18px", fontWeight: 700,
            textDecoration: "none", boxShadow: "0 6px 24px rgba(6,199,85,0.35)",
          }}
        >
          <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "#fff", flexShrink: 0 }}>
            <path d={lineSvgPath} />
          </svg>
          あなたの場合の費用を見る
        </a>
        <p style={{ marginTop: "16px", fontSize: "13px", color: "#7A6B55" }}>
          1分で完了・営業なし・いつでもブロック可能
        </p>
      </div>
    </section>
  );
}
