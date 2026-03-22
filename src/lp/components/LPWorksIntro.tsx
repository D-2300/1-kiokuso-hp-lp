export default function LPWorksIntro() {
  return (
    <>
      <section style={{ backgroundColor: "#4A6741", padding: "40px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ margin: "0 0 12px", fontSize: "14px", color: "rgba(255,255,255,0.9)", lineHeight: 1.8 }}>
            仙台・宮城県で、一つひとつのお店に向き合ってきました。
          </p>
          <p style={{ margin: "0 0 28px", fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
            他社との比較もぜひしてみてください。違いが伝わると思います。
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>
            <div style={{ width: "3px", height: "28px", backgroundColor: "#C9A84C" }} />
            <div>
              <p style={{ margin: 0, fontSize: "12px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Works</p>
              <p style={{ margin: "2px 0 0", fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>施工事例</p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: "3px", backgroundColor: "#C9A84C" }} />
    </>
  );
}
