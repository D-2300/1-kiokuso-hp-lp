import { Link } from "react-router-dom";
import Logo from "../../shared/Logo";
import LineCTAButton from "../../shared/LineCTAButton";

interface FooterLink {
  to: string;
  label: string;
}

interface EntityFooterProps {
  themeColor: string;
  themeLight: string;
  themeMid: string;
  themeDark: string;
  name: string;
  tagline?: string;
  links?: FooterLink[];
}

export default function EntityFooter({
  themeColor,
  themeLight,
  themeMid,
  name,
  tagline,
  links = [],
}: EntityFooterProps) {
  return (
    <footer
      style={{
        backgroundColor: themeColor,
        padding: "64px 32px 40px",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "32px" }}>
        <Logo type="group" color="dark" layout="mark" size="md" />
      </div>

      <p
        style={{
          color: themeLight,
          fontSize: "12px",
          fontWeight: 300,
          letterSpacing: "0.2em",
          marginBottom: "32px",
        }}
      >
        {name}
      </p>

      <div style={{ marginBottom: "40px" }}>
        <LineCTAButton size="normal" />
      </div>

      {tagline && (
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "13px",
            letterSpacing: "0.08em",
            lineHeight: 1.8,
            marginBottom: "24px",
          }}
        >
          {tagline}
        </p>
      )}

      {links.length > 0 && (
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: themeLight,
                fontSize: "12px",
                letterSpacing: "0.08em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <p
        style={{
          color: themeMid,
          fontSize: "11px",
          letterSpacing: "0.05em",
        }}
      >
        © 2026 {name}
      </p>
    </footer>
  );
}
