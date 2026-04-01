import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navLinks = [
  { to: "/studio", label: "Top" },
  { to: "/studio/about", label: "About" },
  { to: "/studio/works", label: "Works" },
  { to: "/studio/articles", label: "Articles" },
  { to: "/studio/pricing", label: "Pricing" },
];

const font: React.CSSProperties = {
  fontFamily: "'Noto Sans JP', sans-serif",
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
};

export default function StudioNav() {
  const location = useLocation();
  const [s, setS] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setS(window.scrollY > 50);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const show = s || open;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: "64px", display: "flex", alignItems: "center", padding: "0 24px",
        backgroundColor: show ? "rgba(74,103,65,0.95)" : "rgba(0,0,0,0)",
        backdropFilter: show ? "blur(8px)" : "none",
        boxShadow: show ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
        transition: "background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s",
      }}>
        <Link to="/studio" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src="/assets/logos/logo-studio-h-gold.webp"
            alt="記憶荘 STUDIO"
            style={{ height: "36px", width: "auto" }}
          />
        </Link>

        <div style={{ marginLeft: "auto", display: "flex", gap: "32px", alignItems: "center" }} className="snav-pc">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} style={{
              ...font,
              color: show
                ? (location.pathname === l.to ? "#fff" : "rgba(255,255,255,0.7)")
                : (location.pathname === l.to ? "#fff" : "rgba(255,255,255,0.75)"),
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: l.to === "/studio" ? "5px" : undefined,
            }}>
              {l.to === "/studio" && (
                <img src="/assets/logos/logo-studio-gold.webp" alt="" style={{ height: "14px", width: "auto" }} />
              )}
              {l.label}
            </Link>
          ))}
          <Link to="/" style={{
            ...font, fontSize: "12px", marginLeft: "8px", paddingLeft: "16px",
            borderLeft: "1px solid rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.5)",
            textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: "6px",
          }}>
            <img src="/assets/logos/logo-group-gold.webp" alt="" style={{ height: "14px", width: "auto", filter: "brightness(10)", opacity: 0.5 }} />
            ← Group
          </Link>
        </div>

        <button onClick={() => setOpen(v => !v)} className="snav-ham" aria-label="メニュー" style={{
          marginLeft: "auto", background: "none", border: "none", cursor: "pointer",
          padding: "8px", display: "flex", flexDirection: "column" as const, gap: "5px",
        }}>
          {[0,1,2].map(i => <span key={i} style={{ display:"block", width:"22px", height:"2px", backgroundColor: "#fff", borderRadius:"1px" }} />)}
        </button>
      </nav>

      <div style={{
        position: "fixed", inset: 0, zIndex: 300,
        backgroundColor: "rgba(74,103,65,0.97)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "40px",
        opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.3s",
      }} className="snav-ov">
        <button onClick={() => setOpen(false)} style={{
          position:"absolute", top:"20px", right:"24px", background:"none", border:"none",
          cursor:"pointer", color:"#FFFFFF", fontSize:"28px", padding:"8px",
        }}>✕</button>
        {/* スタジオ内ページ */}
        <p style={{
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
          margin: 0,
          fontFamily: "'Noto Sans JP', sans-serif",
        }}>
          Studio
        </p>
        <Link to="/studio" style={{ ...font, color: "#fff", fontSize: "18px", letterSpacing: "0.15em", textDecoration: "none" }}>
          Top
        </Link>
        <Link to="/studio/about" style={{ ...font, color: "#fff", fontSize: "18px", letterSpacing: "0.15em", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/studio/works" style={{ ...font, color: "#fff", fontSize: "18px", letterSpacing: "0.15em", textDecoration: "none" }}>
          Works
        </Link>
        <Link to="/studio/articles" style={{ ...font, color: "#fff", fontSize: "18px", letterSpacing: "0.15em", textDecoration: "none" }}>
          Articles
        </Link>
        <Link to="/studio/pricing" style={{ ...font, color: "#fff", fontSize: "18px", letterSpacing: "0.15em", textDecoration: "none" }}>
          Pricing
        </Link>

        {/* 区切り線 */}
        <div style={{
          width: "40px",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.2)",
          margin: "4px 0",
        }} />

        {/* グループへの導線 */}
        <Link to="/" style={{
          ...font,
          color: "rgba(255,255,255,0.5)",
          fontSize: "13px",
          letterSpacing: "0.15em",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          <img src="/assets/logos/logo-group-gold.webp" alt="" style={{ height: "14px", width: "auto", filter: "brightness(10)", opacity: 0.5 }} />
          記憶荘グループ TOP
        </Link>
      </div>

      <style>{`
        .snav-pc{display:flex}
        .snav-ham{display:none}
        .snav-ov{display:flex}
        @media(max-width:768px){.snav-pc{display:none!important}.snav-ham{display:flex!important}}
        @media(min-width:769px){.snav-ov{display:none!important}}
      `}</style>
    </>
  );
}
