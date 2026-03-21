import Logo from "../../shared/Logo";

export default function LPFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #eee",
        padding: "32px 20px",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "8px" }}>
        <Logo type="studio" color="dark" layout="mark" size="sm" />
        <span style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.1em", color: "#333" }}>
          記憶荘 Studio
        </span>
      </div>
      <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#999" }}>仙台・宮城の店舗内装</p>
      <p style={{ margin: 0, fontSize: "11px", color: "#ccc" }}>© 2026 記憶荘 Studio</p>
    </footer>
  );
}
