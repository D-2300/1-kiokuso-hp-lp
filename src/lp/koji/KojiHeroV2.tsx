const LINE_URL = "https://lin.ee/HVV0QJO";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

export default function KojiHeroV2() {
  return (
    <section
      style={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "80px 24px 60px",
        position: "relative",
        background: "linear-gradient(180deg, #FAF6F0 0%, #F0EBE3 100%)",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, maxWidth: "720px" }}>
        {/* KAI & KEN photo */}
        <div style={{
          width: "clamp(100px, 25vw, 160px)", height: "clamp(100px, 25vw, 160px)",
          borderRadius: "50%", overflow: "hidden", margin: "0 auto 20px",
          border: "4px solid #fff", boxShadow: "0 4px 24px rgba(93,74,42,0.15)",
        }}>
          <img src="/images/kai-ken-blueprint-meeting-sm.webp" alt="KAI & KEN" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <span
          style={{
            display: "inline-block",
            padding: "6px 20px",
            background: "#E8F0E4",
            color: "#6B8E5A",
            borderRadius: "100px",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.5px",
            marginBottom: "28px",
          }}
        >
          完全無料・営業一切なし
        </span>

        <h1
          style={{
            fontFamily: "'Zen Maru Gothic', 'Noto Sans JP', sans-serif",
            fontSize: "clamp(26px, 5vw, 42px)",
            fontWeight: 700,
            lineHeight: 1.5,
            color: "#3D2E16",
            marginBottom: "20px",
          }}
        >
          <span style={{ color: "#8B6914", position: "relative" }}>
            不動産プロ×内装プロ
          </span>
          が
          <br />
          あなた専用の出店プランを
          <br />
          丸ごとお届け
        </h1>

        <p
          style={{
            fontSize: "clamp(14px, 2.5vw, 17px)",
            color: "#7A6B55",
            marginBottom: "40px",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          業種・広さ・エリアを教えてください。
          <br />
          完成イメージ、費用、スケジュール——すべて含めた提案書を無料で作成いたします。
        </p>

        {/* What you get icons */}
        <div style={{
          display: "flex", justifyContent: "center", gap: "clamp(12px, 3vw, 24px)",
          flexWrap: "wrap", marginBottom: "32px",
        }}>
          {[
            { emoji: "\ud83c\udfe0", label: "\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8" },
            { emoji: "\ud83d\udcb0", label: "\u8cbb\u7528\u660e\u7d30" },
            { emoji: "\ud83d\udccd", label: "\u7269\u4ef6\u8abf\u67fb" },
            { emoji: "\ud83d\uddd3\ufe0f", label: "\u958b\u696d\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
            }}>
              <span style={{
                width: "48px", height: "48px", borderRadius: "12px",
                background: "#fff", boxShadow: "0 2px 12px rgba(93,74,42,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px",
              }}>
                {item.emoji}
              </span>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "#5C4A2A", letterSpacing: "0.02em" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "18px 48px",
            background: "#06C755",
            color: "#fff",
            borderRadius: "60px",
            fontSize: "17px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(6,199,85,0.3)",
          }}
        >
          <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "#fff", flexShrink: 0 }}>
            <path d={lineSvgPath} />
          </svg>
          LINEで受け取る
        </a>
      </div>

      <style>{`
        @keyframes koji-scroll-bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(6px); } }
      `}</style>
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "#7A6B55",
          fontSize: "11px",
          letterSpacing: "2px",
          animation: "koji-scroll-bounce 2s infinite",
        }}
      >
        SCROLL
        <div style={{ width: "1px", height: "30px", background: "#C4A35A" }} />
      </div>
    </section>
  );
}
