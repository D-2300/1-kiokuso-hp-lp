const sources = [
  { emoji: "🍶", name: "地域の酒屋さん", tag: "閉店・移転情報", bg: "#dbeafe" },
  { emoji: "🏢", name: "不動産業者", tag: "空きテナント情報", bg: "#fef3c7" },
  { emoji: "🔨", name: "工事・設備業者", tag: "居抜き物件情報", bg: "#fce7f3" },
  { emoji: "🏬", name: "大型商業施設", tag: "テナント募集情報", bg: "#d1fae5" },
  { emoji: "🤝", name: "過去のお客様", tag: "施工後紹介", bg: "#ede9fe" },
  { emoji: "📍", name: "地域コミュニティ", tag: "エリア情報", bg: "#ffedd5" },
];

export default function TenantNetworkInfo() {
  return (
    <section style={{ padding: "44px 20px 36px", background: "#fff" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "12px", fontWeight: 600, letterSpacing: "0.28em", color: "#C9A84C", marginBottom: "10px" }}>
          NETWORK
        </p>
        <h2 style={{ fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: "#1a1f14", textAlign: "center", marginBottom: "6px", lineHeight: 1.55 }}>
          なぜ<span style={{ color: "#4A6741" }}>記憶荘</span>に物件情報が集まるのか？
        </h2>
        <p style={{ textAlign: "center", fontSize: "clamp(14px, 3vw, 16px)", color: "#888", marginBottom: "20px" }}>
          公になる前の情報を、仙台の地域ネットワークからいち早くキャッチ。
        </p>

        {/* Hub with KAI & KEN */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "clamp(12px, 3vw, 20px)", margin: "0 auto 16px",
        }}>
          {/* KAI */}
          <div style={{ textAlign: "center", flexShrink: 0 }}>
            <div style={{
              width: "60px", height: "60px", borderRadius: "50%", overflow: "hidden",
              border: "2.5px solid #C9A84C", margin: "0 auto 6px",
            }}>
              <img src="/images/about-kai-sm.webp" alt="KAI"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ fontSize: "14px", fontWeight: 900, color: "#222" }}>KAI</div>
            <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.3 }}>元不動産業</div>
          </div>

          {/* Logo hub */}
          <div style={{
            width: "96px", height: "96px",
            background: "linear-gradient(135deg, #2E4229, #4A6741)",
            borderRadius: "50%",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            color: "#fff", flexShrink: 0,
            boxShadow: "0 0 0 5px rgba(74,103,65,0.12), 0 4px 16px rgba(46,66,41,0.2)",
          }}>
            <img src="/assets/logos/logo-studio-dark.webp" alt="記憶荘ロゴ"
              style={{ width: "28px", height: "28px", objectFit: "contain", marginBottom: "2px", filter: "brightness(0) invert(1)" }} />
            <span style={{ fontSize: "15px", fontWeight: 900, letterSpacing: "0.04em" }}>記憶荘</span>
          </div>

          {/* KEN */}
          <div style={{ textAlign: "center", flexShrink: 0 }}>
            <div style={{
              width: "60px", height: "60px", borderRadius: "50%", overflow: "hidden",
              border: "2.5px solid #4A6741", margin: "0 auto 6px",
            }}>
              <img src="/images/about-ken-sm.webp" alt="KEN"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ fontSize: "14px", fontWeight: 900, color: "#222" }}>KEN</div>
            <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.3 }}>大工歴20年+</div>
          </div>
        </div>

        {/* Source grid - 3 columns, compact */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          marginBottom: "20px",
        }}>
          {sources.map((s) => (
            <div key={s.name} style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "12px 8px",
              border: "1px solid #eee",
              display: "flex", flexDirection: "column", alignItems: "center",
              textAlign: "center", gap: "4px",
            }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%", background: s.bg,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px",
              }}>
                {s.emoji}
              </div>
              <div style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3 }}>
                {s.name}
              </div>
              <span style={{
                fontSize: "11px", fontWeight: 600, color: "#4A6741",
                background: "#EAF0E8", padding: "2px 6px", borderRadius: "10px",
              }}>
                {s.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom bar - compact */}
        <div style={{
          background: "linear-gradient(135deg, #2E4229, #4A6741)",
          borderRadius: "10px", padding: "14px 20px", textAlign: "center", color: "#fff",
        }}>
          <p style={{ fontSize: "clamp(15px, 3vw, 18px)", fontWeight: 900, lineHeight: 1.5 }}>
            <span style={{ color: "#A8BFA2" }}>物件探し</span>から<span style={{ color: "#A8BFA2" }}>内装工事</span>まで、ワンストップ。
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>
            ※物件情報の紹介は無料です。
          </p>
        </div>
      </div>
    </section>
  );
}
