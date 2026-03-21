export default function LPFlowIntro() {
  return (
    <>
      <div style={{ height: "3px", backgroundColor: "#C9A84C" }} />
      <section style={{ backgroundColor: "#EAF0E8", padding: "32px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
          <div style={{ width: "3px", height: "36px", backgroundColor: "#4A6741" }} />
          <div>
            <p
              style={{
                margin: 0,
                fontSize: "12px",
                letterSpacing: "0.2em",
                color: "#C9A84C",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Flow
            </p>
            <p
              style={{
                margin: "3px 0 0",
                fontSize: "clamp(17px, 3vw, 22px)",
                fontWeight: 700,
                color: "#333",
                letterSpacing: "0.03em",
              }}
            >
              ご相談からお引渡しまでの流れ
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
