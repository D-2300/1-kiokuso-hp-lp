const promises = [
  "提案書をお受け取りいただいた後、お断りいただいても構いません。LINEで一言いただくだけで結構です。",
  "電話営業・訪問営業は一切いたしません。ご連絡はLINEのみです。",
  "物件が決まっていなくても大丈夫です。むしろその段階からご一緒に検討いたします。",
  "相見積もり歓迎です。他社様と比較していただくのが一番だと考えております。",
  "提案書は融資申請のたたき台としてもご活用いただけます。",
];

export default function KojiTrust() {
  return (
    <section style={{ padding: "clamp(44px, 8vw, 80px) 20px", background: "#fff" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "3px", color: "#8B6914", marginBottom: "12px" }}>
          PROMISE
        </p>
        <h2 style={{
          fontFamily: "'Zen Maru Gothic', 'Noto Sans JP', sans-serif",
          fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: "#3D2E16",
          marginBottom: "20px", lineHeight: 1.5,
        }}>
          安心してお受け取りください。
        </h2>

        <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
          {promises.map((text, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "15px", color: "#3D2E16", lineHeight: 1.8 }}>
              <span style={{
                width: "28px", height: "28px", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "#E8F0E4", color: "#6B8E5A", borderRadius: "8px",
                fontWeight: 700, fontSize: "14px",
              }}>
                ✓
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
