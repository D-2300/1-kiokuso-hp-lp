export default function TenantHeroBand() {
  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden", maxWidth: "960px", margin: "0 auto" }}>
      <img
        src="/images/kai-ken-blueprint-meeting.webp"
        alt="KAIとKENが施工現場で図面を広げて打ち合わせ"
        style={{
          width: "100%",
          height: "clamp(180px, 25vw, 300px)",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          borderRadius: "0",
        }}
      />
      {/* Top gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          background: "linear-gradient(to bottom, #1a1f14, transparent)",
          pointerEvents: "none",
        }}
      />
      {/* Bottom gradient overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60px",
          background: "linear-gradient(to top, #ffffff, transparent)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
