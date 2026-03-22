import { Link } from "react-router-dom";
import GroupNav from "../components/GroupNav";
import GroupFooter from "../components/GroupFooter";
import GoldDivider from "../../shared/GoldDivider";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import SectionHeading from "../../shared/SectionHeading";
import Logo from "../../shared/Logo";
import TextureBand from "../../shared/TextureBand";
import { colors } from "../../shared/design-tokens";

const businesses = [
  {
    nameJa: "記憶荘工務店",
    nameEn: "KIOKUSO BUILD",
    desc: "古い建物に新しい役割を与える、大規模リノベーション",
    color: colors.urushicha.main,
    active: false,
    to: "/koumuten",
    logoEntity: "koumuten" as const,
    gradient: "linear-gradient(135deg, #5C3A21 0%, #7A5234 100%)",
    logoSrc: "/assets/logos/logo-koumuten-gold.webp",
  },
  {
    nameJa: "記憶荘 店舗内装スタジオ",
    nameEn: "KIOKUSO STUDIO",
    desc: "初めての店づくりを、設計から施工まで一貫対応",
    color: colors.fukamidori.main,
    active: true,
    to: "/studio",
    logoEntity: "studio" as const,
    gradient: "linear-gradient(135deg, #4A6741 0%, #5E7D55 100%)",
    logoSrc: "/assets/logos/logo-studio-gold.webp",
  },
  {
    nameJa: "記憶荘リフォーム",
    nameEn: "KIOKUSO REFORM",
    desc: "キッチン・洗面・壁紙など、住まいの「ここだけ」を手軽に",
    color: colors.seiji.main,
    active: false,
    to: "/reform",
    logoEntity: "reform" as const,
    gradient: "linear-gradient(135deg, #4A7080 0%, #5E8A9A 100%)",
    logoSrc: "/assets/logos/logo-reform-gold.webp",
  },
  {
    nameJa: "記憶荘不動産",
    nameEn: "KIOKUSO ESTATE",
    desc: "場所と人をつなぐ、不動産の仲介",
    color: colors.tetsukon.main,
    active: false,
    to: "/fudousan",
    logoEntity: "fudousan" as const,
    gradient: "linear-gradient(135deg, #2E3545 0%, #3E4758 100%)",
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
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 72px;
          color: #fff;
          width: 100%;
          text-align: center;
          padding: 0 16px;
          word-break: break-word;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .hero-anton { font-size: 48px; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#E5E0DB" }}>
          <img
            src="/images/group-hero-sakura.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
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
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "18px", fontWeight: 400, letterSpacing: "0.15em" }}>
            記憶荘
          </p>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", fontWeight: 300, letterSpacing: "0.12em", marginTop: "8px" }}>
            想いが残る場所を、つくる。
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

      {/* Philosophy */}
      <ScrollFadeIn>
        <section style={{ backgroundColor: colors.beige, padding: "80px 32px", textAlign: "center" }}>
          <GoldDivider />
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              marginTop: "32px",
              marginBottom: "32px",
              lineHeight: 2.4,
              fontSize: "15px",
              fontWeight: 300,
              letterSpacing: "0.08em",
              color: colors.text,
            }}
          >
            <p>
              誰かを思って手を動かした痕跡が、
              <br />
              その場所だけの物語になる。
            </p>
            <p style={{ marginTop: "1.6em" }}>
              記憶荘は、その物語を一人にしない。
            </p>
          </div>
          <GoldDivider />
        </section>
      </ScrollFadeIn>

      <TextureBand src="/assets/textures/yakisugi-charred-wood.webp" height={220} />

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
              <span style={{ fontSize: "11px", color: "#999", letterSpacing: "0.1em" }}>記憶荘グループ</span>
            </div>

            <p style={{ fontSize: "15px", fontWeight: 400, color: "#666", lineHeight: 1.9, textAlign: "center", marginBottom: "32px", fontFamily: "'Noto Sans JP', sans-serif" }}>
              仙台を拠点に、場所の記憶を引き継ぐ仕事をしています。
              <br />
              店舗内装を中心に、建物の再生、住まいの改修、不動産の仲介まで。
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
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff", marginBottom: "4px" }}>
                    {b.nameJa}
                  </p>
                  <p style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>
                    {b.nameEn}
                  </p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", marginBottom: "16px" }}>
                    {b.desc}
                  </p>
                  <p style={{ fontSize: "12px", color: "#C9A84C", fontWeight: 500 }}>
                    詳しく見る →
                  </p>
                  {!b.active && (
                    <p style={{ fontSize: "12px", color: "#BBB", fontWeight: 400, marginTop: "4px" }}>
                      準備中
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <TextureBand src="/assets/textures/mortar-wall-cracks.webp" height={180} />

      {/* About 導線 */}
      <ScrollFadeIn>
        <section style={{ padding: "40px 24px 64px", textAlign: "center" }}>
          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <img src="/images/hp-door-light.webp" alt="" style={{ width: "100%", aspectRatio: "3/1", objectFit: "cover", borderRadius: "4px" }} />
            <div style={{ marginTop: "24px" }}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "inherit", display: "inline-block" }}
              >
                <p style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.2em", color: colors.sub }}>
                  About
                </p>
                <p style={{ fontSize: "12px", color: colors.mute, marginTop: "4px", marginBottom: "12px" }}>
                  記憶荘について
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
