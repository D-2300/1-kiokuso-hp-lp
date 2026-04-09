export default function KojiTeam() {
  return (
    <section style={{ padding: "clamp(44px, 8vw, 80px) 20px", background: "#FAF6F0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "3px", color: "#8B6914", marginBottom: "12px" }}>
          TEAM
        </p>
        <h2 style={{
          fontFamily: "'Zen Maru Gothic', 'Noto Sans JP', sans-serif",
          fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: "#3D2E16",
          marginBottom: "20px", lineHeight: 1.5,
        }}>
          専門チームが、直接対応します。
        </h2>

        <div style={{
          display: "flex", gap: "24px", marginTop: "32px", justifyContent: "center", alignItems: "center",
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: "100px", height: "100px", borderRadius: "50%",
              overflow: "hidden", margin: "0 auto 12px",
              border: "3px solid #fff", boxShadow: "0 2px 20px rgba(93,74,42,0.08)",
            }}>
              <img src="/images/about-ken-sm.webp" alt="KEN" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: "20px", fontWeight: 700, color: "#3D2E16" }}>KEN</div>
            <div style={{ fontSize: "13px", color: "#8B6914", fontWeight: 500 }}>大工歴20年</div>
          </div>

          <div style={{ fontSize: "28px", color: "#C4A35A", paddingTop: "20px" }}>×</div>

          <div style={{ textAlign: "center" }}>
            <div style={{
              width: "100px", height: "100px", borderRadius: "50%",
              overflow: "hidden", margin: "0 auto 12px",
              border: "3px solid #fff", boxShadow: "0 2px 20px rgba(93,74,42,0.08)",
            }}>
              <img src="/images/about-kai-sm.webp" alt="KAI" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: "20px", fontWeight: 700, color: "#3D2E16" }}>KAI</div>
            <div style={{ fontSize: "13px", color: "#8B6914", fontWeight: 500 }}>元不動産</div>
          </div>
        </div>

        <p style={{
          marginTop: "28px", textAlign: "center", fontSize: "15px",
          color: "#7A6B55", lineHeight: 2,
        }}>
          大工歴20年の職人が現場を見て、元不動産のプロが物件とお金を見る。<br />
          記憶荘では、最初から最後まで専門チームが直接対応。<br />
          間に誰も挟まないから、話が早い。コストも下がる。
        </p>
      </div>
    </section>
  );
}
