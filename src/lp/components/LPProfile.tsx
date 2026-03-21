export default function LPProfile() {
  return (
    <section style={{ backgroundColor: "#fafafa", padding: "40px 20px", borderTop: "1px solid #eee" }}>
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <img
          src="/images/about-dai.webp"
          alt="DAI"
          style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
        />
        <div>
          <p style={{ margin: "0 0 2px", fontSize: "16px", fontWeight: 700, color: "#333" }}>DAI</p>
          <p style={{ margin: "0 0 12px", fontSize: "12px", color: "#888" }}>記憶荘 CSO</p>
          <p style={{ margin: 0, fontSize: "13px", color: "#555", lineHeight: 1.9 }}>
            仙台で店舗内装の設計・施工を手がけています。初めての店づくりで不安を感じているなら、まず相場を知ることから始めましょう。LINEで物件の写真を送っていただくだけで、概算をお伝えします。
          </p>
        </div>
      </div>
    </section>
  );
}
