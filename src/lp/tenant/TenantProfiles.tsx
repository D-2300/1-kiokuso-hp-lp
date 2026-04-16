const profiles = [
  {
    name: "KAI",
    role: "ビジネス・交渉担当",
    img: "/images/about-kai-sm.webp",
    alt: "KAI - ビジネス・交渉担当",
    body: "元不動産業。物件の仲介・管理を経験した後、店舗内装の世界へ。不動産会社との人脈が今もあり、ネットに出回る前の物件情報が入ります。ビジネス経験を活かして、物件の交渉や出店計画の相談にも対応します。",
    tags: ["元不動産業", "物件交渉", "出店計画"],
  },
  {
    name: "KEN",
    role: "現場・施工担当",
    img: "/images/about-ken-sm.webp",
    alt: "KEN - 現場・施工担当",
    body: "大工一筋20年以上。店舗内装の設計・施工を年間30件以上手がけています。撤退・解体の現場にも立ち会うから、物件の中身を誰よりも知っている。居抜きで何が使えて何を変えるべきか、現場を見て即判断できます。",
    tags: ["大工歴20年+", "年間30件+施工", "設計〜施工一貫"],
  },
];

export default function TenantProfiles() {
  return (
    <section style={{ padding: "48px 20px", background: "#fff" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "12px", fontWeight: 600, letterSpacing: "0.28em", color: "#C9A84C", marginBottom: "10px" }}>
          WHO WE ARE
        </p>
        <h2 style={{ fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: "#1a1f14", textAlign: "center", marginBottom: "24px", lineHeight: 1.55, letterSpacing: "0.05em" }}>
          KAI &amp; KEN
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {profiles.map((p) => (
            <div key={p.name} style={{ background: "#f9f8f6", borderRadius: "12px", padding: "20px 20px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <img
                src={p.img}
                alt={p.alt}
                style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", flexShrink: 0, background: "#e0e0e0" }}
              />
              <div>
                <p style={{ fontSize: "16px", fontWeight: 900, color: "#1a1f14", marginBottom: "2px", letterSpacing: ".05em" }}>{p.name}</p>
                <p style={{ fontSize: "13px", color: "#999", marginBottom: "8px" }}>{p.role}</p>
                <p style={{ fontSize: "clamp(14px, 3vw, 16px)", color: "#666", lineHeight: 1.75 }}>{p.body}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "11px", fontWeight: 500, color: "#4A6741", background: "#EAF0E8", padding: "3px 9px", borderRadius: "100px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Studio logo */}
        <div style={{ marginTop: "32px", textAlign: "center", paddingTop: "24px", borderTop: "1px solid #eee" }}>
          <img
            src="/assets/logos/logo-studio-h-dark.webp"
            alt="記憶荘 店舗内装スタジオ"
            style={{ height: "24px", width: "auto", margin: "0 auto 8px", opacity: 0.45, display: "block" }}
          />
          <p style={{ fontSize: "12px", color: "#999", lineHeight: 1.6 }}>記憶荘 店舗内装スタジオ｜テナント探しから手伝う内装屋（仙台・宮城）</p>
        </div>
      </div>
    </section>
  );
}
