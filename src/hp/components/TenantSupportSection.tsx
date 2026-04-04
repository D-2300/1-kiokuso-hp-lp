import { Link } from "react-router-dom";
import { colors } from "../../shared/design-tokens";

const subPhotos = [
  { src: "/images/kai-ken-blueprint-meeting-sm.webp", alt: "図面を見ながらの打ち合わせ" },
  { src: "/images/consultation-salon-owner-sm.webp", alt: "美容院オーナーとの現場打ち合わせ" },
  { src: "/images/consultation-client-workshop-sm.webp", alt: "工房でのクライアントとの相談" },
];

export default function TenantSupportSection() {
  return (
    <section style={{ background: colors.beige, padding: "clamp(48px, 8vw, 96px) clamp(16px, 5vw, 48px)" }}>
      <style>{`
        .tenant-support-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
          align-items: center; max-width: 800px; margin: 0 auto;
        }
        @media (max-width: 640px) {
          .tenant-support-grid { grid-template-columns: 1fr; gap: 24px; }
        }
        .tenant-support-photos {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
          max-width: 800px; margin: 40px auto 0;
        }
        @media (max-width: 480px) {
          .tenant-support-photos { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 16px", textTransform: "uppercase", textAlign: "center" }}>
          Tenant Support
        </p>
        <h3 style={{ fontSize: "20px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 40px", lineHeight: 1.6, textAlign: "center" }}>
          物件探しから、サポートします。
        </h3>
      </div>

      <div className="tenant-support-grid">
        <div>
          <img
            src="/images/consultation-cafe-owner-sm.webp"
            alt="カフェオーナーとの打ち合わせ風景"
            style={{ width: "100%", borderRadius: "12px", objectFit: "cover", display: "block", maxHeight: "320px" }}
          />
        </div>
        <div>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
            店舗内装の現場にいるからこそ、<br />
            撤退・空き物件の情報が先に入ります。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
            元不動産経験者もいるチームだから、<br />
            ただの空き情報ではなく、<br />
            その物件が本当にあなたの店に合っているかまで<br />
            お伝えできます。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 28px" }}>
            テナント・居抜き物件の情報を<br />
            LINEで無料配信中。
          </p>
          <Link
            to="/lp/tenant"
            style={{
              display: "inline-block",
              background: "#06C755",
              color: "#fff",
              borderRadius: "8px",
              padding: "14px 28px",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: ".03em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            非公開物件情報を見る →
          </Link>
        </div>
      </div>

      <div className="tenant-support-photos">
        {subPhotos.map((p) => (
          <div key={p.src} style={{ borderRadius: "12px", overflow: "hidden" }}>
            <img
              src={p.src}
              alt={p.alt}
              style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
