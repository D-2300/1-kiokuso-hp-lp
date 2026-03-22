import { Link } from "react-router-dom";
import Logo from "../../shared/Logo";

export default function LPFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#4A6741",
        borderTop: "none",
        padding: "32px 20px",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
        <Link to="/studio" style={{ textDecoration: "none", display: "inline-block" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "8px" }}>
            <Logo entity="studio" color="gold" layout="mark" height={28} />
            <span style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.1em", color: "#fff" }}>
              記憶荘 Studio
            </span>
          </div>
        </Link>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>仙台・宮城の店舗内装</p>
        <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>© 2026 記憶荘 Studio</p>
      </div>
    </footer>
  );
}
