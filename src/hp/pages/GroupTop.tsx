import { Link } from "react-router-dom";
import GroupNav from "../components/GroupNav";
import GroupFooter from "../components/GroupFooter";
import GoldDivider from "../../shared/GoldDivider";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import SectionHeading from "../../shared/SectionHeading";
import PhotoPlaceholder from "../../shared/PhotoPlaceholder";
import Logo from "../../shared/Logo";
import { colors } from "../../shared/design-tokens";

const businesses = [
  {
    nameJa: "記憶荘 工務店",
    nameEn: "KIOKUSO KOUMUTEN",
    desc: "大規模リノベーション・再生",
    color: colors.urushicha.main,
    active: false,
    to: "/koumuten",
  },
  {
    nameJa: "記憶荘 店舗内装スタジオ",
    nameEn: "KIOKUSO STUDIO",
    desc: "店舗の設計・施工",
    color: colors.fukamidori.main,
    active: true,
    to: "/studio",
  },
  {
    nameJa: "記憶荘 住宅リフォームLABO",
    nameEn: "KIOKUSO REFORM LABO",
    desc: "住宅の部分リフォーム",
    color: colors.seiji.main,
    active: false,
    to: "/reform",
  },
  {
    nameJa: "記憶荘 不動産",
    nameEn: "KIOKUSO FUDOUSAN",
    desc: "不動産仲介",
    color: colors.tetsukon.main,
    active: false,
    to: "/fudousan",
  },
];

export default function GroupTop() {
  return (
    <div style={{ backgroundColor: colors.beige, minHeight: "100vh" }}>
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .scroll-arrow {
          animation: scrollBounce 2s ease-in-out infinite;
        }
        .business-card-active:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
      `}</style>

      <GroupNav />

      {/* Hero */}
      <section style={{ position: "relative", height: "calc(100vh - 64px)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#E5E0DB" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(139,58,58,0.55) 0%, rgba(92,38,38,0.7) 100%)",
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
          <p style={{ color: "#fff", fontSize: "36px", fontWeight: 300, letterSpacing: "0.35em" }}>
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

      {/* Group */}
      <ScrollFadeIn>
        <section style={{ backgroundColor: colors.beige, padding: "80px 32px" }}>
          <SectionHeading en="Group" ja="事業内容" align="center" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {businesses.map((b) =>
              b.active ? (
                <Link
                  key={b.to}
                  to={b.to}
                  className="business-card-active"
                  style={{
                    display: "block",
                    backgroundColor: colors.white,
                    borderRadius: "8px",
                    padding: "28px 20px",
                    borderLeft: `3px solid ${b.color}`,
                    transition: "box-shadow 0.2s",
                    textDecoration: "none",
                    color: "inherit",
                    opacity: 1,
                  }}
                >
                  <div style={{ marginBottom: "12px" }}>
                    <Logo size="sm" variant="light" />
                  </div>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: colors.text, marginBottom: "4px" }}>
                    {b.nameJa}
                  </p>
                  <p style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.12em", color: colors.mute, marginBottom: "8px" }}>
                    {b.nameEn}
                  </p>
                  <p style={{ fontSize: "12px", color: colors.sub, marginBottom: "16px" }}>
                    {b.desc}
                  </p>
                  <p style={{ fontSize: "12px", color: b.color, fontWeight: 500 }}>
                    詳しく見る →
                  </p>
                </Link>
              ) : (
                <div
                  key={b.to}
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: "8px",
                    padding: "28px 20px",
                    borderLeft: `3px solid ${b.color}`,
                    opacity: 0.6,
                  }}
                >
                  <div style={{ marginBottom: "12px" }}>
                    <Logo size="sm" variant="light" />
                  </div>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: colors.text, marginBottom: "4px" }}>
                    {b.nameJa}
                  </p>
                  <p style={{ fontSize: "11px", fontWeight: 300, letterSpacing: "0.12em", color: colors.mute, marginBottom: "8px" }}>
                    {b.nameEn}
                  </p>
                  <p style={{ fontSize: "12px", color: colors.sub, marginBottom: "16px" }}>
                    {b.desc}
                  </p>
                  <p style={{ fontSize: "12px", color: colors.mute }}>
                    準備中
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      </ScrollFadeIn>

      {/* About 導線 */}
      <ScrollFadeIn>
        <section style={{ padding: "40px 24px 64px", textAlign: "center" }}>
          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <img src="/images/about-exterior.webp" alt="" style={{ width: "100%", aspectRatio: "3/1", objectFit: "cover", borderRadius: "4px" }} />
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
