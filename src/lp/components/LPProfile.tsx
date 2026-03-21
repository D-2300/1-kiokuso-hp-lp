export default function LPProfile() {
  return (
    <section style={{ backgroundColor: "#fafafa", padding: "48px 20px", borderTop: "1px solid #eee" }}>
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <img
          src="/images/about-dai.webp"
          alt="DAI"
          style={{
            width: "clamp(160px, 25vw, 200px)",
            height: "clamp(200px, 31vw, 248px)",
            objectFit: "cover",
            borderRadius: "10px",
            display: "block",
          }}
        />
        <div style={{ width: "100%", maxWidth: "560px" }}>
          <p
            style={{
              margin: "0 0 4px",
              fontSize: "clamp(18px, 3vw, 24px)",
              fontWeight: 700,
              color: "#222",
            }}
          >
            DAI
          </p>
          <p style={{ margin: "0 0 16px", fontSize: "13px", color: "#999" }}>記憶荘 CSO</p>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(14px, 2.5vw, 16px)",
              color: "#555",
              lineHeight: 1.9,
            }}
          >
            仙台で店舗内装の設計・施工を手がけています。初めての店づくりで不安を感じているなら、まず相場を知ることから始めましょう。LINEで物件の写真を送っていただくだけで、概算をお伝えします。
          </p>
        </div>
      </div>
    </section>
  );
}
