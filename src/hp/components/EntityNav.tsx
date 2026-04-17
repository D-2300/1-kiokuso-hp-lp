import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

type LogoEntity = "group" | "studio" | "koumuten" | "invest" | "fudousan";

interface EntityNavProps {
  themeColor: string;
  themeLight: string;
  themeBg: string;
  title: string;
  logoEntity?: LogoEntity;
  logoTo?: string;
  links?: { to: string; label: string }[];
}

function toRgba(hex: string, a: number) {
  const c = hex.replace("#", "");
  return `rgba(${parseInt(c.substring(0,2),16)},${parseInt(c.substring(2,4),16)},${parseInt(c.substring(4,6),16)},${a})`;
}

const font: React.CSSProperties = {
  fontFamily: "'Noto Sans JP', sans-serif",
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
};

export default function EntityNav({ themeColor, logoEntity = "group", logoTo, links = [] }: EntityNavProps) {
  const [s, setS] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setS(window.scrollY > 50);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
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
        backgroundColor: show ? toRgba(themeColor, 0.95) : "rgba(0,0,0,0)",
        backdropFilter: show ? "blur(8px)" : "none",
        boxShadow: show ? "0 1px 4px rgba(0,0,0,0.2)" : "none",
        transition: "background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s",
      }}>
        {logoTo ? (
          <Link to={logoTo} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src={`/assets/logos/logo-${logoEntity}-h-gold.webp`} alt={logoEntity} style={{ height: "36px", width: "auto" }} />
          </Link>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`/assets/logos/logo-${logoEntity}-h-gold.webp`} alt={logoEntity} style={{ height: "36px", width: "auto" }} />
          </div>
        )}

        <div style={{ marginLeft: "auto", display: "flex", gap: "32px", alignItems: "center" }} className="enav-pc">
          {links.map((l) => (
            <Link key={l.to} to={l.to} style={{ ...font, color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/" style={{
            ...font, color: "rgba(255,255,255,0.6)", fontSize: "12px",
            paddingLeft: links.length > 0 ? "8px" : "0",
            borderLeft: links.length > 0 ? "1px solid rgba(255,255,255,0.2)" : "none",
            textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: "6px",
          }}>
            <img src="/assets/logos/logo-group-gold.webp" alt="" style={{ height: "14px", width: "auto", filter: "brightness(10)", opacity: 0.6 }} />
            ← Group Top
          </Link>
        </div>

        <button onClick={() => setOpen(v => !v)} className="enav-ham" aria-label="メニュー" style={{
          marginLeft: "auto", background: "none", border: "none", cursor: "pointer",
          padding: "8px", display: "flex", flexDirection: "column" as const, gap: "5px",
        }}>
          {[0,1,2].map(i => <span key={i} style={{ display:"block", width:"22px", height:"2px", backgroundColor:"#fff", borderRadius:"1px" }} />)}
        </button>
      </nav>

      <div style={{
        position: "fixed", inset: 0, zIndex: 300,
        backgroundColor: toRgba(themeColor, 0.98),
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "40px",
        opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.3s",
      }} className="enav-ov">
        <button onClick={() => setOpen(false)} style={{
          position:"absolute", top:"20px", right:"24px", background:"none", border:"none",
          cursor:"pointer", color:"#fff", fontSize:"28px", padding:"8px",
        }}>✕</button>
        <Link to="/" style={{ ...font, color: "#fff", fontSize: "18px", letterSpacing: "0.15em", textDecoration: "none" }}>
          ← Group Top
        </Link>
      </div>

      <style>{`
        .enav-pc{display:flex}
        .enav-ham{display:none}
        .enav-ov{display:flex}
        @media(max-width:768px){.enav-pc{display:none!important}.enav-ham{display:flex!important}}
        @media(min-width:769px){.enav-ov{display:none!important}}
      `}</style>
    </>
  );
}
