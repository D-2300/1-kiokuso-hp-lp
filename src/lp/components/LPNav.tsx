import Logo from "../../shared/Logo";
import { LINE_URL } from "../../shared/design-tokens";

export default function LPNav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #eee",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Logo type="studio" color="dark" layout="mark" size="sm" />
          <span style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.1em", color: "#333" }}>
            記憶荘 STUDIO
          </span>
        </div>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="line_cta_click"
          style={{
            display: "inline-block",
            backgroundColor: "#06C755",
            color: "#fff",
            borderRadius: "6px",
            padding: "8px 16px",
            fontSize: "12px",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          LINEで相談
        </a>
      </div>
    </nav>
  );
}
