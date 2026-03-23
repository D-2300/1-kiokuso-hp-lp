import LPBenefitCTA from "./LPBenefitCTA";

export default function LPLastPush() {
  return (
    <section style={{ backgroundColor: "#EAF0E8", padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        <p style={{
          margin: "0 0 10px",
          fontSize: "clamp(17px, 3vw, 22px)",
          fontWeight: 700,
          color: "#333",
          textAlign: "center",
        }}>
          まだ先の話だから、と思っていませんか。
        </p>
        <p style={{
          margin: "0 0 32px",
          fontSize: "clamp(13px, 2vw, 14px)",
          color: "#777",
          textAlign: "center",
          lineHeight: 1.8,
        }}>
          設計・見積もりに1〜2ヶ月、施工に2〜3ヶ月。<br />
          オープン日から逆算すると、半年前には動き始める方がほとんどです。
        </p>

        <LPBenefitCTA />

      </div>
    </section>
  );
}
