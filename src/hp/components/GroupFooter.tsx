import { Link } from "react-router-dom";
import Logo from "../../shared/Logo";
import LineCTAButton from "../../shared/LineCTAButton";

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
        {[
          { to: "/", label: "Top" },
          { to: "/about", label: "About" },
          { to: "/studio", label: "Studio" },
          { to: "/koumuten", label: "Build" },
          { to: "/reform", label: "Reform" },
          { to: "/fudousan", label: "Estate" },
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
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F5EAEA")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#D4A0A0")}
          >
            {link.label}
          </Link>
        ))}
      </nav>

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
