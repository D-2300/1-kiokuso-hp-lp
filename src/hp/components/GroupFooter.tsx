import { Link } from "react-router-dom";
import Logo from "../../shared/Logo";

export default function GroupFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#8B3A3A",
        padding: "64px 32px 40px",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "32px" }}>
        <Logo entity="group" color="gold" layout="horizontal" height={40} />
      </div>

      <p
        style={{
          color: "#D4A0A0",
          fontSize: "12px",
          fontWeight: 300,
          letterSpacing: "0.2em",
          marginBottom: "32px",
        }}
      >
        想いが残る場所を、つくる。
      </p>

      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Anton', sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "0.1em",
            color: "#D4A0A0",
            textTransform: "uppercase",
            padding: 0,
            transition: "color 0.2s",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#F5EAEA")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#D4A0A0")}
        >
          <img src="/assets/logos/logo-group-gold.webp" alt="" style={{ height: "18px", width: "auto", filter: "brightness(10)", opacity: 0.6 }} />
          TOP
        </button>
        {[
          { to: "/about", label: "About", logo: null },
          { to: "/studio", label: "Studio", logo: "/assets/logos/logo-studio-gold.webp" },
          { to: "/koumuten", label: "Build", logo: "/assets/logos/logo-koumuten-gold.webp" },
          { to: "/reform", label: "Reform", logo: "/assets/logos/logo-reform-gold.webp" },
          { to: "/fudousan", label: "Estate", logo: "/assets/logos/logo-fudousan-gold.webp" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              color: "#D4A0A0",
              fontFamily: "'Anton', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F5EAEA")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#D4A0A0")}
          >
            {link.logo && (
              <img src={link.logo} alt="" style={{ height: "18px", width: "auto", filter: "brightness(10)", opacity: 0.6 }} />
            )}
            {link.label}
          </Link>
        ))}
      </nav>

      <div style={{ marginBottom: "8px" }}>
        <Link
          to="/privacy"
          style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", textDecoration: "none" }}
        >
          プライバシーポリシー
        </Link>
      </div>
      <p
        style={{
          color: "#B06060",
          fontSize: "11px",
          letterSpacing: "0.05em",
        }}
      >
        © 2026 記憶荘
      </p>
    </footer>
  );
}
