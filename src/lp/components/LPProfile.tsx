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
          src="/images/about-dai-sm.webp"
          alt="KEN"
          width="200"
          height="248"
          loading="lazy"
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
            KEN
          </p>
          <p style={{ margin: "0 0 20px", fontSize: "13px", color: "#999" }}>記憶荘 CSO</p>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(14px, 2.5vw, 16px)",
              color: "#555",
              lineHeight: 1.9,
            }}
          >
            仙台で店舗内装の設計・施工を手がけています。
          </p>
          <p
            style={{
              marginTop: "1em",
              fontSize: "clamp(14px, 2.5vw, 16px)",
              color: "#555",
              lineHeight: 1.9,
            }}
          >
            前職では内装施工会社で年間30件以上の店舗内装に携わってきました。飲食店・美容室・物販・ジムなど業態を問わず、設計から現場管理、仕上げまでを一貫して担当してきた経験が記憶荘の土台です。
          </p>
          <p
            style={{
              marginTop: "1em",
              fontSize: "clamp(14px, 2.5vw, 16px)",
              color: "#555",
              lineHeight: 1.9,
            }}
          >
            初めての店づくりは、わからないことだらけで当然です。まず相場を知ることから始めましょう。LINEで物件の写真を送っていただくだけで、概算をお伝えします。
          </p>
        </div>
      </div>
    </section>
  );
}
