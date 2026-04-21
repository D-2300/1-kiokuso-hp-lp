import { Link } from "react-router-dom";
import { colors } from "../../shared/design-tokens";

const subPhotos = [
  { src: "/images/kai-ken-blueprint-meeting-sm.webp", alt: "図面を見ながらの打ち合わせ" },
  { src: "/images/consultation-salon-owner-sm.webp", alt: "美容院オーナーとの現場打ち合わせ" },
  { src: "/images/consultation-client-workshop-sm.webp", alt: "工房でのクライアントとの相談" },
];

const triangle = [
  {
    label: "元仲介の目",
    title: "業界の裏を知っている",
    body: "20年仲介をやったKAIが、今は〝貸す側〟にはいません。どの情報を信じていいか、どの話が誘導か、判別できます。",
  },
  {
    label: "職人の目",
    title: "内装の本当のコストが見える",
    body: "大工歴20年のKENが、実テナントを見ながら〝これはいくらで仕上がる〟を判定。見積ズレで開業コストが崩れません。",
  },
  {
    label: "中立の立場",
    title: "物件仲介では儲けません",
    body: "内装工事の会社なので、どのテナントを選んでもらっても構いません。「このテナントは借りない方が」と本音で言えます。",
  },
];

export default function TenantSupportSection() {
  return (
    <section style={{ background: colors.beige, padding: "clamp(56px, 8vw, 96px) clamp(16px, 5vw, 48px)" }}>
      <style>{`
        .tenant-support-photos {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
          max-width: 800px; margin: 36px auto 0;
        }
        @media (max-width: 480px) {
          .tenant-support-photos { grid-template-columns: 1fr 1fr; }
        }
        .tenant-support-triangle {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px; max-width: 720px; margin: 0 auto 32px;
        }
      `}</style>

      <div style={{ maxWidth: "720px", margin: "0 auto 28px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "18px" }}>
          <span style={{ flex: 1, height: "1px", maxWidth: "80px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,.5))" }} />
          <span style={{ color: "#C9A84C", fontSize: "9px" }}>◆</span>
          <span style={{ fontSize: "11px", letterSpacing: ".3em", color: "#C9A84C", fontWeight: 500, textTransform: "uppercase" as const }}>
            Why Us
          </span>
          <span style={{ color: "#C9A84C", fontSize: "9px" }}>◆</span>
          <span style={{ flex: 1, height: "1px", maxWidth: "80px", background: "linear-gradient(90deg, rgba(201,168,76,.5), transparent)" }} />
        </div>
        <h3 style={{ fontSize: "clamp(20px, 5vw, 24px)", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 12px", lineHeight: 1.6 }}>
          なぜ、この2人に相談するのか。
        </h3>
        <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.9, margin: "0" }}>
          元仲介の目でテナントの"裏"を読み、<br />
          職人の目で内装の"本当のコスト"を見る。
        </p>
      </div>

      <div className="tenant-support-triangle">
        {triangle.map((col) => (
          <div
            key={col.label}
            style={{
              background: "#fff",
              border: "1px solid #e8dcc2",
              borderLeft: "3px solid #C9A84C",
              borderRadius: "8px",
              padding: "20px 18px",
              textAlign: "left",
              boxShadow: "0 2px 12px rgba(60,40,20,0.05)",
            }}
          >
            <div style={{ fontSize: "10px", letterSpacing: ".2em", color: "#C9A84C", fontWeight: 700, marginBottom: "8px", textTransform: "uppercase" as const }}>
              {col.label}
            </div>
            <div style={{ fontSize: "15px", fontWeight: 700, color: colors.text, marginBottom: "10px", lineHeight: 1.5 }}>
              {col.title}
            </div>
            <div style={{ fontSize: "12.5px", color: "#5A574F", lineHeight: 1.85 }}>
              {col.body}
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: "520px", margin: "0 auto", textAlign: "center", padding: "8px 0 0" }}>
        <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.9, margin: "0 0 18px" }}>
          非公開テナント情報を LINE で無料配信中。<br />
          ブロック・断り自由、営業なし。
        </p>
        <Link
          to="/lp/tenant"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#06C755",
            color: "#fff",
            borderRadius: "50px",
            padding: "14px 30px",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: ".03em",
            boxShadow: "0 4px 18px rgba(6,199,85,0.22)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          非公開テナントを見る →
        </Link>
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
