const checkItems = [
  "見積もり内訳を100%公開",
  "物件未定・融資前でも相談OK",
  "設計から施工まで一人が一貫対応",
  "断りはLINE1本で完了",
  "居抜き活用・施主支給・DIY対応",
];

const badges = [
  { num: "100%", label: "公開" },
  { num: "相談", label: "OK" },
  { num: "一貫", label: "対応" },
];

export default function LPTrustBanner() {
  return (
    <>
      <section style={{ backgroundColor: "#EAF0E8", padding: "40px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(17px, 3vw, 22px)",
              fontWeight: 700,
              color: "#333",
              textAlign: "center",
            }}
          >
            仙台・宮城の店舗内装なら{" "}
            <span style={{ color: "#C9A84C" }}>記憶荘</span>
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {checkItems.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    backgroundColor: "#4A6741",
                    borderRadius: "5px",
                    color: "#fff",
                    fontSize: "13px",
                    flexShrink: 0,
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
                <span style={{ fontSize: "clamp(14px, 2.5vw, 16px)", color: "#333" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#4A6741", padding: "28px 20px" }}>
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "clamp(32px, 8vw, 80px)",
          }}
        >
          {badges.map((b) => (
            <div key={b.num} style={{ textAlign: "center" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(28px, 5vw, 40px)",
                  fontWeight: 700,
                  color: "#C9A84C",
                  lineHeight: 1.2,
                }}
              >
                {b.num}
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "clamp(13px, 2vw, 15px)",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {b.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
