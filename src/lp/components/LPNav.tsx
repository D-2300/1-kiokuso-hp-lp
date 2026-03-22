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
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/logos/logo-studio-h-gold.webp" alt="記憶荘 STUDIO" style={{ height: "32px", width: "auto" }} />
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
