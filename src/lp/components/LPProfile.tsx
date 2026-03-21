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
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "#ddd8d0",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "9px", color: "rgba(0,0,0,0.3)" }}>写真</span>
        </div>
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
