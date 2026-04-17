import { Link } from "react-router-dom";
import GroupNav from "../components/GroupNav";
import GroupFooter from "../components/GroupFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import SectionHeading from "../../shared/SectionHeading";
import Logo from "../../shared/Logo";
import { colors } from "../../shared/design-tokens";

function FlowStep({ step, nameJa, label, desc, color, logo }: { step: string; nameJa: string; label: string; desc: string; color: string; logo: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#fff", border: `1px solid ${color}22`, borderRadius: "10px", padding: "20px 14px", textAlign: "center" }}>
      <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#BBB", fontWeight: 600, margin: "0 0 10px" }}>STEP {step}</p>
      <img src={logo} alt="" style={{ height: "28px", marginBottom: "10px", filter: "drop-shadow(0 0 0 #fff)" }} />
      <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", color, margin: "0 0 4px" }}>{nameJa}</p>
      <p style={{ fontSize: "15px", fontWeight: 500, color: "#333", margin: "0 0 8px" }}>{label}</p>
      <p style={{ fontSize: "12px", color: "#777", lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  );
}

function FlowStepPair({ items, step }: { items: { nameJa: string; label: string; desc: string; color: string; logo: string }[]; step: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#BBB", fontWeight: 600, margin: 0, textAlign: "center" }}>STEP {step}</p>
      {items.map((it) => (
        <div key={it.nameJa} style={{ display: "flex", alignItems: "center", gap: "12px", backgroundColor: "#fff", border: `1px solid ${it.color}22`, borderRadius: "10px", padding: "12px 14px", flex: 1 }}>
          <img src={it.logo} alt="" style={{ height: "24px", flexShrink: 0 }} />
          <div style={{ textAlign: "left", flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: it.color, margin: 0 }}>{it.nameJa}</p>
            <p style={{ fontSize: "13px", fontWeight: 500, color: "#333", margin: "2px 0 0" }}>{it.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="group-flow-arrow" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A84C", fontSize: "24px" }}>
      →
    </div>
  );
}

const businesses = [
  {
    nameJa: "記憶荘 店舗内装スタジオ",
    nameEn: "KIOKUSO STUDIO",
    desc: "あなたの店が始まる場所を、一緒に見つけるところから。",
    color: colors.fukamidori.main,
    active: true,
    to: "/studio",
    logoEntity: "studio" as const,
    gradient: "linear-gradient(135deg, #5E7D55 0%, #7A9A72 100%)",
    logoSrc: "/assets/logos/logo-studio-gold.webp",
  },
  {
    nameJa: "満室デザインLABO",
    nameEn: "KIOKUSO INVEST",
    desc: "眠っている物件を、収益に変える。",
    color: colors.seiji.main,
    active: false,
    to: "/invest",
    logoEntity: "invest" as const,
    gradient: "linear-gradient(135deg, #6A4F7A 0%, #8A6FA0 100%)",
    logoSrc: "/assets/logos/logo-invest-gold.webp",
  },
  {
    nameJa: "記憶荘工務店",
    nameEn: "KIOKUSO BUILD",
    desc: "古い骨組みに、次の灯りを入れる。",
    color: colors.urushicha.main,
    active: false,
    to: "/koumuten",
    logoEntity: "koumuten" as const,
    gradient: "linear-gradient(135deg, #7A5234 0%, #A67B5B 100%)",
    logoSrc: "/assets/logos/logo-koumuten-gold.webp",
  },
  {
    nameJa: "記憶荘不動産",
    nameEn: "KIOKUSO ESTATE",
    desc: "物件探しから始まる、記憶荘の入口。",
    color: colors.tetsukon.main,
    active: false,
    to: "/fudousan",
    logoEntity: "fudousan" as const,
    gradient: "linear-gradient(135deg, #3E4758 0%, #5A6578 100%)",
    logoSrc: "/assets/logos/logo-fudousan-gold.webp",
  },
];

export default function GroupTop() {
  return (
    <div style={{ backgroundColor: colors.beige, minHeight: "100vh", paddingTop: 0 }}>
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          52% { transform: translateY(4px); }
        }
        .scroll-arrow {
          animation: scrollBounce 2s ease-in-out infinite;
        }
        .business-card-active:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
      `}</style>

      <GroupNav />

      <style>{`
        .hero-anton {
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 900;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-size: 88px;
          color: #fff;
          width: 100%;
          text-align: center;
          padding: 0 16px;
          word-break: break-word;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .hero-anton { font-size: 56px; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#E5E0DB" }}>
          <img
            src="/images/group-hero-sakura.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "12px",
          }}
        >
          <div style={{ marginBottom: "8px" }}>
            <Logo entity="group" color="gold" layout="mark" height={88} />
          </div>
          <p className="hero-anton">
            KIOKUSO
          </p>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "22px", fontWeight: 700, letterSpacing: "0.18em" }}>
            記憶荘
          </p>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "17px", fontWeight: 500, letterSpacing: "0.14em", marginTop: "8px" }}>
            次の記憶が、ここから灯る。
          </p>
        </div>
        <div
          className="scroll-arrow"
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.4)",
            fontSize: "20px",
            zIndex: 1,
          }}
        >
          ↓
        </div>
      </section>

      {/* Group */}
      <ScrollFadeIn>
        <section style={{ backgroundColor: colors.beige, padding: "80px 32px" }}>
          <SectionHeading en="Group" ja="事業内容" align="center" />
          <div
            style={{
              maxWidth: "640px",
              margin: "0 auto",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "12px",
              padding: "40px 20px 20px",
              position: "relative",
              backgroundColor: "rgba(201,168,76,0.03)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-28px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#F8F5F0",
                padding: "0 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <img src="/assets/logos/logo-group-dark.webp" alt="" style={{ height: "36px" }} />
              <span style={{ fontSize: "13px", color: "#999", letterSpacing: "0.1em" }}>記憶荘グループ</span>
            </div>

            <p style={{ fontSize: "15px", fontWeight: 400, color: "#666", lineHeight: 1.9, textAlign: "center", marginBottom: "32px", fontFamily: "'Noto Sans JP', sans-serif" }}>
              仙台を拠点に、事業用の古い空間に、次の記憶を灯す。
              <br />
              店舗内装から収益物件の再生まで、物件探しの段階から並走します。
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "16px",
              }}
            >
              {businesses.map((b) => (
                <Link
                  key={b.to}
                  to={b.to}
                  className="business-card-active"
                  style={{
                    display: "block",
                    background: b.gradient,
                    borderRadius: "8px",
                    padding: "28px 20px",
                    transition: "box-shadow 0.2s",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div style={{ marginBottom: "12px" }}>
                    <img src={b.logoSrc} alt="" style={{ height: "32px" }} />
                  </div>
                  <p style={{ fontSize: "14px", fontWeight: 500, color: "#fff", marginBottom: "4px" }}>
                    {b.nameJa}
                  </p>
                  <p style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>
                    {b.nameEn}
                  </p>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", marginBottom: "16px" }}>
                    {b.desc}
                  </p>
                  <p style={{ fontSize: "14px", color: "#C9A84C", fontWeight: 500 }}>
                    詳しく見る →
                  </p>
                  {!b.active && (
                    <p style={{ fontSize: "14px", color: "#BBB", fontWeight: 400, marginTop: "4px" }}>
                      準備中
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Flow: 事業の流れ */}
      <ScrollFadeIn>
        <section style={{ padding: "64px 24px 40px", backgroundColor: colors.beige }}>
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, textAlign: "center", margin: "0 0 8px", textTransform: "uppercase" }}>
              Flow
            </p>
            <h2 style={{ fontSize: "20px", fontWeight: 500, textAlign: "center", margin: "0 0 40px", color: colors.text, fontFamily: "'Noto Serif JP', serif" }}>
              物件探しから、内装まで。
            </h2>
            <div
              className="group-flow"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr auto 1fr",
                gap: "8px",
                alignItems: "stretch",
              }}
            >
              <FlowStep
                step="01"
                nameJa="ESTATE"
                label="物件を探す"
                desc="非公開・居抜き情報から、事業に合う場所を"
                color="#3E4758"
                logo="/assets/logos/logo-fudousan-gold.webp"
              />
              <FlowArrow />
              <FlowStepPair
                items={[
                  { nameJa: "STUDIO", label: "店舗を整える", desc: "飲食・美容・物販の内装設計", color: "#5E7D55", logo: "/assets/logos/logo-studio-gold.webp" },
                  { nameJa: "INVEST", label: "物件を整える", desc: "収益物件のリノベーション", color: "#6A4F7A", logo: "/assets/logos/logo-invest-gold.webp" },
                ]}
                step="02"
              />
              <FlowArrow />
              <FlowStep
                step="03"
                nameJa="BUILD"
                label="現場で建てる"
                desc="骨組み・大規模工事の実行"
                color="#7A5234"
                logo="/assets/logos/logo-koumuten-gold.webp"
              />
            </div>
            <p style={{ fontSize: "13px", color: "#888", textAlign: "center", marginTop: "32px", lineHeight: 1.8 }}>
              4つの事業は独立していますが、窓口は一つ。
              <br />
              物件探しの段階から、完成後まで、同じ担当者が伴走します。
            </p>
          </div>
          <style>{`
            @media (max-width: 720px) {
              .group-flow { grid-template-columns: 1fr !important; gap: 12px !important; }
              .group-flow-arrow { transform: rotate(90deg); padding: 4px 0; }
            }
          `}</style>
        </section>
      </ScrollFadeIn>

      {/* Stats: 実績スナップショット */}
      <ScrollFadeIn>
        <section style={{ padding: "40px 24px 64px", backgroundColor: colors.beige }}>
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, textAlign: "center", margin: "0 0 8px", textTransform: "uppercase" }}>
              Numbers
            </p>
            <h2 style={{ fontSize: "20px", fontWeight: 500, textAlign: "center", margin: "0 0 40px", color: colors.text, fontFamily: "'Noto Serif JP', serif" }}>
              数字で見る、記憶荘。
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                { num: "30件+", unit: "／年", label: "店舗内装の実績", sub: "代表の前職含む" },
                { num: "12", unit: "業態", label: "対応してきた業種", sub: "飲食・美容・物販・ジム他" },
                { num: "1社", unit: "完結", label: "物件〜内装〜届出", sub: "窓口と現場が同じ" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid rgba(201,168,76,0.25)",
                    borderRadius: "10px",
                    padding: "28px 20px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "36px", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.02em", margin: 0, lineHeight: 1, fontFamily: "'Noto Serif JP', serif" }}>
                    {s.num}
                    <span style={{ fontSize: "16px", color: "#888", fontWeight: 500, marginLeft: "4px" }}>{s.unit}</span>
                  </p>
                  <p style={{ fontSize: "14px", color: colors.text, fontWeight: 500, margin: "14px 0 4px" }}>
                    {s.label}
                  </p>
                  <p style={{ fontSize: "12px", color: "#999", margin: 0 }}>
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* About 導線 */}
      <ScrollFadeIn>
        <section style={{ padding: "40px 24px 64px", textAlign: "center" }}>
          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <img src="/images/hp-door-light-sm.webp" alt="" style={{ width: "100%", aspectRatio: "3/1", objectFit: "cover", borderRadius: "4px" }} />
            <div style={{ marginTop: "24px", display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "inherit", display: "inline-block" }}
              >
                <p style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.2em", color: colors.sub }}>
                  About
                </p>
                <p style={{ fontSize: "14px", color: colors.mute, marginTop: "4px", marginBottom: "12px" }}>
                  記憶荘について
                </p>
                <p style={{ fontSize: "14px", color: colors.shuurushi.main, cursor: "pointer" }}>→</p>
              </Link>
              <Link
                to="/concept"
                style={{ textDecoration: "none", color: "inherit", display: "inline-block" }}
              >
                <p style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.2em", color: colors.sub }}>
                  Concept
                </p>
                <p style={{ fontSize: "14px", color: colors.mute, marginTop: "4px", marginBottom: "12px" }}>
                  考えていること
                </p>
                <p style={{ fontSize: "14px", color: colors.shuurushi.main, cursor: "pointer" }}>→</p>
              </Link>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <GroupFooter />
    </div>
  );
}
