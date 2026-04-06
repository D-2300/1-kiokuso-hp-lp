import { Link } from "react-router-dom";
import Logo from "../../shared/Logo";
import LineCTAButton from "../../shared/LineCTAButton";
import ScrollFadeIn from "../../shared/ScrollFadeIn";

const BG = "#2E4229";

export default function StudioFooter() {
  return (
    <footer
      style={{
        backgroundColor: BG,
        textAlign: "center",
        padding: "80px 32px 48px",
      }}
    >
      <ScrollFadeIn>
        <p
          style={{
            color: "#fff",
            fontSize: "22px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          まだ何も決まっていなくても、大丈夫です。
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "15px",
            letterSpacing: "0.05em",
            marginTop: "12px",
            marginBottom: 0,
          }}
        >
          物件未定でもOK。断りはLINE1本で完了です。
        </p>
        <div style={{ marginTop: "32px" }}>
          <LineCTAButton size="normal" />
        </div>
      </ScrollFadeIn>

      <div style={{ maxWidth: "640px", margin: "56px auto 0", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "4px",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "16px",
            }}
          >
            SERVICE AREA
          </p>
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 2.0,
              margin: 0,
            }}
          >
            仙台市・宮城県を中心に、東北全域で対応しています。
            <br />
            ご希望があれば関東エリアなど東北以外も対応可能な場合がありますので、気軽にご相談ください。
          </p>
        </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          width: "80%",
          margin: "64px auto 0",
        }}
      />

      <div style={{ marginTop: "48px" }}>
        <Logo entity="studio" color="gold" layout="horizontal" height={40} />
      </div>

      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          marginTop: "24px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
            padding: 0,
            transition: "color 0.2s",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
        >
          <img src="/assets/logos/logo-studio-gold.webp" alt="" style={{ height: "18px", width: "auto", filter: "brightness(10)", opacity: 0.5 }} />
          TOP
        </button>
        {[
          { to: "/studio/about", label: "About", logo: null },
          { to: "/studio/works", label: "Works", logo: null },
          { to: "/studio/pricing", label: "Pricing", logo: null },
          { to: "/", label: "← Group", logo: "/assets/logos/logo-group-gold.webp" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            {link.logo && (
              <img src={link.logo} alt="" style={{ height: "18px", width: "auto", filter: "brightness(10)", opacity: 0.5 }} />
            )}
            {link.label}
          </Link>
        ))}
      </nav>

      <div style={{ marginTop: "24px", marginBottom: "8px" }}>
        <Link
          to="/privacy"
          style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px", textDecoration: "none" }}
        >
          プライバシーポリシー
        </Link>
      </div>
      <p
        style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: "14px",
          letterSpacing: "0.05em",
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        © 2026 記憶荘 Studio
      </p>
    </footer>
  );
}
