import { Link } from "react-router-dom";
import Logo from "../../shared/Logo";
import LineCTAButton from "../../shared/LineCTAButton";

export default function StudioFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#4A6741",
        padding: "64px 32px 40px",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "32px" }}>
        <Logo entity="studio" color="gold" layout="horizontal" height={40} />
      </div>

      <p
        style={{
          color: "#A8BFA2",
          fontSize: "12px",
          fontWeight: 300,
          letterSpacing: "0.2em",
          marginBottom: "32px",
        }}
      >
        店舗内装スタジオ
      </p>

      <div style={{ marginBottom: "40px" }}>
        <LineCTAButton size="normal" />
      </div>

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
            color: "#A8BFA2",
            textTransform: "uppercase",
            padding: 0,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#EAF0E8")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#A8BFA2")}
        >
          TOP
        </button>
        {[
          { to: "/studio/about", label: "About" },
          { to: "/studio/works", label: "Works" },
          { to: "/studio/pricing", label: "Pricing" },
          { to: "/", label: "← Group" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              color: "#A8BFA2",
              fontFamily: "'Anton', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#EAF0E8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#A8BFA2")}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <p
        style={{
          color: "#7A9A72",
          fontSize: "11px",
          letterSpacing: "0.05em",
        }}
      >
        © 2026 記憶荘 Studio
      </p>
    </footer>
  );
}
