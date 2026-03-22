import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navLinks = [
  { to: "/", label: "Top" },
  { to: "/about", label: "About" },
  { to: "/studio", label: "Studio" },
  { to: "/koumuten", label: "Build" },
  { to: "/reform", label: "Reform" },
  { to: "/fudousan", label: "Estate" },
];

const font: React.CSSProperties = {
  fontFamily: "'Anton', sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
};

export default function GroupNav() {
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
        backgroundColor: show ? "rgba(139,58,58,0.95)" : "rgba(0,0,0,0)",
        backdropFilter: show ? "blur(8px)" : "none",
        boxShadow: show ? "0 1px 4px rgba(0,0,0,0.2)" : "none",
        transition: "background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s",
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/assets/logos/logo-group-h-gold.webp" alt="記憶荘" style={{ height: "36px", width: "auto" }} />
        </Link>

        <div style={{ marginLeft: "auto", display: "flex", gap: "32px", alignItems: "center" }} className="gnav-pc">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} style={{
              ...font, color: location.pathname === l.to ? "#fff" : "rgba(255,255,255,0.7)",
              textDecoration: "none",
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen(v => !v)} className="gnav-ham" aria-label="メニュー" style={{
          marginLeft: "auto", background: "none", border: "none", cursor: "pointer",
          padding: "8px", display: "flex", flexDirection: "column" as const, gap: "5px",
        }}>
          {[0,1,2].map(i => <span key={i} style={{ display:"block", width:"22px", height:"2px", backgroundColor:"#fff", borderRadius:"1px" }} />)}
        </button>
      </nav>

      <div style={{
        position: "fixed", inset: 0, zIndex: 300,
        backgroundColor: "rgba(139,58,58,0.98)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "40px",
        opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.3s",
      }} className="gnav-ov">
        <button onClick={() => setOpen(false)} style={{
          position:"absolute", top:"20px", right:"24px", background:"none", border:"none",
          cursor:"pointer", color:"#fff", fontSize:"28px", padding:"8px",
        }}>✕</button>
        {/* グループ本体 */}
        <p style={{
          fontSize: "10px",
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
          margin: 0,
          fontFamily: "'Anton', sans-serif",
        }}>
          Group
        </p>
        <Link to="/" style={{ ...font, color: "#fff", fontSize: "18px", letterSpacing: "0.15em", textDecoration: "none" }}>
          Top
        </Link>
        <Link to="/about" style={{ ...font, color: "#fff", fontSize: "18px", letterSpacing: "0.15em", textDecoration: "none" }}>
          About
        </Link>

        {/* 区切り線 */}
        <div style={{
          width: "40px",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.2)",
          margin: "4px 0",
        }} />

        {/* 事業体 */}
        <p style={{
          fontSize: "10px",
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
          margin: 0,
          fontFamily: "'Anton', sans-serif",
        }}>
          Services
        </p>
        <Link to="/studio" style={{ ...font, color: "#fff", fontSize: "18px", letterSpacing: "0.15em", textDecoration: "none" }}>
          Studio
        </Link>
        <Link to="/koumuten" style={{ ...font, color: "#fff", fontSize: "18px", letterSpacing: "0.15em", textDecoration: "none" }}>
          Build
        </Link>
        <Link to="/reform" style={{ ...font, color: "#fff", fontSize: "18px", letterSpacing: "0.15em", textDecoration: "none" }}>
          Reform
        </Link>
        <Link to="/fudousan" style={{ ...font, color: "#fff", fontSize: "18px", letterSpacing: "0.15em", textDecoration: "none" }}>
          Estate
        </Link>
      </div>

      <style>{`
        .gnav-pc{display:flex}
        .gnav-ham{display:none}
        .gnav-ov{display:flex}
        @media(max-width:768px){.gnav-pc{display:none!important}.gnav-ham{display:flex!important}}
        @media(min-width:769px){.gnav-ov{display:none!important}}
      `}</style>
    </>
  );
}
