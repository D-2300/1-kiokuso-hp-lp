import { Link } from "react-router-dom";
import StudioNav from "../components/StudioNav";
import StudioFooter from "../components/StudioFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import TextureBand from "../../shared/TextureBand";
import Logo from "../../shared/Logo";
import { colors } from "../../shared/design-tokens";
import TenantSupportSection from "../components/TenantSupportSection";

const worksPreview = [
  { img: "/images/yakiniku-after-sm.webp", type: "焼肉店", cost: "¥360万" },
  { img: "/images/ramen-after-sm.webp", type: "ラーメン店", cost: "¥280万" },
  { img: "/images/case6-after-sm.webp", type: "バー/割烹", cost: "¥120万" },
];

export default function StudioTop() {
  return (
    <div style={{ backgroundColor: '#2E4229' }}>
      <div style={{ backgroundColor: colors.beige }}>
        <style>{`
          @keyframes scrollBounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(4px); }
          }
          .studio-scroll-arrow { animation: scrollBounce 2s ease-in-out infinite; }
          .hero-anton {
            font-family: 'Noto Sans JP', sans-serif; font-weight: 900;
            letter-spacing: 0.02em; text-transform: uppercase;
            font-size: clamp(42px, 11vw, 88px); color: #fff; width: 100%; text-align: center;
            padding: 0 16px; word-break: break-word; box-sizing: border-box;
          }
          /* responsive font-size handled by clamp above */
          .works-preview-grid {
            display: grid; grid-template-columns: repeat(3, 1fr);
            gap: 16px; max-width: 800px; margin: 0 auto; padding: 0 24px;
          }
          @media (max-width: 640px) {
            .works-preview-grid {
              display: flex; overflow-x: auto; scroll-snap-type: x mandatory;
              gap: 12px; padding: 0 24px; scrollbar-width: none;
            }
            .works-preview-grid::-webkit-scrollbar { display: none; }
            .works-preview-card { min-width: 220px; scroll-snap-align: start; }
          }
          .pickup-banner-card {
            display: grid; grid-template-columns: 140px 1fr;
            overflow: hidden; border-radius: 10px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.08);
            background: #fff; text-decoration: none; color: inherit;
            transition: box-shadow 0.3s ease, transform 0.3s ease;
          }
          .pickup-banner-card:hover {
            box-shadow: 0 4px 24px rgba(0,0,0,0.14);
            transform: translateY(-1px);
          }
          @media (max-width: 480px) {
            .pickup-banner-card { grid-template-columns: 110px 1fr; }
          }
        `}</style>

        <StudioNav />

        {/* Hero */}
        <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, height: "100%" }}>
            <img src="/images/hp-cafe-interior.webp" alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              sizes="100vw" fetchPriority="high" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)" }} />
          </div>
          <div style={{
            position: "relative", zIndex: 1, height: "100%",
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", textAlign: "center", gap: "12px",
          }}>
            <div style={{ marginBottom: "8px" }}>
              <Logo entity="studio" color="gold" layout="mark" height={76} />
            </div>
            <div style={{ textAlign: "center" }}>
              <p className="hero-anton" style={{ lineHeight: 1.1, margin: 0 }}>KIOKUSO</p>
              <p className="hero-anton" style={{ lineHeight: 1.1, margin: 0 }}>STUDIO</p>
            </div>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "18px", fontWeight: 700, letterSpacing: "0.14em" }}>
              記憶荘 店舗内装スタジオ
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: 500, letterSpacing: "0.18em" }}>
              仙台・宮城
            </p>
          </div>
          <div className="studio-scroll-arrow" style={{
            position: "absolute", bottom: "24px", left: "50%",
            color: "rgba(255,255,255,0.4)", fontSize: "20px", zIndex: 1,
          }}>
            ↓
          </div>
        </section>

        {/* V2 Trust Strip — LP トーン接続バンド */}
        <section
          style={{
            background: "linear-gradient(180deg, #232820 0%, #1e2318 60%, #1a1e16 100%)",
            padding: "34px 16px 30px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at 50% 15%, rgba(74,103,65,.28) 0%, rgba(138,171,128,.10) 35%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                fontSize: "clamp(11px, 2.3vw, 12.5px)",
                fontWeight: 700,
                letterSpacing: ".08em",
                color: "#F5D68A",
                border: "1px solid rgba(201,168,76,.55)",
                background: "linear-gradient(180deg, rgba(201,168,76,.2) 0%, rgba(74,103,65,.25) 100%)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "14px",
                boxShadow: "0 2px 12px rgba(201,168,76,.18), inset 0 1px 0 rgba(255,240,200,.15)",
              }}
            >
              <span style={{ fontSize: "8px", color: "#C9A84C", marginRight: "6px" }}>◆</span>
              宮城で店舗を出す方向け
            </div>

            <p style={{ fontSize: "clamp(11px, 2.1vw, 13px)", fontWeight: 400, letterSpacing: ".15em", color: "#C9A84C", marginBottom: "14px" }}>
              元不動産仲介20年 × 大工20年
            </p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "22px", marginBottom: "22px", flexWrap: "wrap" }}>
              {[
                { img: "/images/about-kai-sm.webp", name: "KAI", role: "元不動産" },
                { img: "/images/about-ken-sm.webp", name: "KEN", role: "職人" },
              ].map((p) => (
                <div key={p.name} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      border: "2px solid #C9A84C",
                      padding: "2px",
                      background: "rgba(201,168,76,.08)",
                      flexShrink: 0,
                      boxShadow: "0 2px 12px rgba(201,168,76,.18)",
                    }}
                  >
                    <img src={p.img} alt={p.name}
                      style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ textAlign: "left", lineHeight: 1.3 }}>
                    <div style={{ fontSize: "14px", color: "#C9A84C", fontWeight: 700, letterSpacing: ".08em" }}>{p.name}</div>
                    <div style={{ fontSize: "11px", color: "rgba(220,220,210,.75)", letterSpacing: ".05em", marginTop: "2px" }}>{p.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", maxWidth: "380px", margin: "0 auto 8px" }}>
              {[
                { num: "20", unit: "年", label: "元不動産キャリア" },
                { num: "20", unit: "年+", label: "大工歴" },
                { num: "30", unit: "件+/年", label: "施工実績" },
              ].map((b) => (
                <div key={b.label} style={{
                  padding: "11px 4px 9px",
                  border: "1px solid rgba(201,168,76,.65)",
                  background: "linear-gradient(180deg, rgba(201,168,76,.22) 0%, rgba(74,103,65,.22) 100%)",
                  borderRadius: "8px",
                  position: "relative",
                  boxShadow: "0 3px 14px rgba(201,168,76,.15), inset 0 0 0 1px rgba(255,230,170,.12), inset 0 1px 0 rgba(255,240,200,.2)",
                }}>
                  <span style={{ position: "absolute", top: "-5px", left: "50%", transform: "translateX(-50%)", fontSize: "7px", color: "#C9A84C", background: "#1e2318", padding: "0 4px", letterSpacing: ".1em" }}>◆</span>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 6.5vw, 28px)", fontWeight: 700, color: "#F5D68A", lineHeight: 1, textShadow: "0 2px 8px rgba(201,168,76,.35)" }}>
                    {b.num}
                    <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "clamp(9px, 2.3vw, 11px)", fontWeight: 700, marginLeft: "2px", color: "#E6C56A" }}>{b.unit}</span>
                  </div>
                  <div style={{ width: "20px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,.7), transparent)", margin: "5px auto 4px" }} />
                  <div style={{ fontSize: "9px", color: "rgba(230,235,225,.9)", letterSpacing: ".03em", lineHeight: 1.3, fontWeight: 500 }}>{b.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", maxWidth: "380px", margin: "8px auto 0" }}>
              <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,.5), transparent)" }} />
              <span style={{ color: "rgba(201,168,76,.85)", fontSize: "6px" }}>◆</span>
              <span style={{ fontSize: "10px", color: "#C9A84C", letterSpacing: ".12em", fontWeight: 600, whiteSpace: "nowrap" }}>
                2人で{" "}
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", fontWeight: 700, color: "#F5D68A", margin: "0 2px", textShadow: "0 1px 6px rgba(201,168,76,.5)" }}>40</span>{" "}年の現場
              </span>
              <span style={{ color: "rgba(201,168,76,.85)", fontSize: "6px" }}>◆</span>
              <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,.5), transparent)" }} />
            </div>
          </div>
        </section>

        {/* What We Do */}
        <ScrollFadeIn>
          <section style={{ padding: "80px 20px", textAlign: "center", backgroundColor: colors.beige }}>
            <div style={{ maxWidth: "480px", margin: "0 auto" }}>
              <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 20px", textTransform: "uppercase" }}>
                What We Do
              </p>
              <p style={{ fontSize: "24px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.5 }}>
                テナント探しから手伝う内装屋
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#555", margin: "0 0 32px" }}>
                仙台・宮城で店舗を始める方へ。<br />
                テナント探し・内装工事・届出まで、一社で完結。<br />
                非公開テナント情報・居抜き・スケルトン対応。
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
                {[{ label: "居抜き", num: "50", unit: "万円〜" }, { label: "スケルトン", num: "150", unit: "万円〜" }].map((badge) => (
                  <div key={badge.label} style={{
                    position: "relative",
                    padding: "14px 24px 10px",
                    border: "1px solid rgba(201,168,76,0.55)",
                    background: "linear-gradient(180deg, rgba(201,168,76,0.14) 0%, rgba(245,236,215,0.5) 100%)",
                    borderRadius: "8px",
                    boxShadow: "0 3px 14px rgba(201,168,76,0.12), inset 0 1px 0 rgba(255,240,200,0.5)",
                    minWidth: "130px",
                  }}>
                    <span style={{
                      position: "absolute", top: "-5px", left: "50%", transform: "translateX(-50%)",
                      fontSize: "8px", color: "#C9A84C", background: colors.beige, padding: "0 5px", letterSpacing: ".1em",
                    }}>◆</span>
                    <div style={{ fontSize: "11px", color: colors.mute, letterSpacing: ".05em", marginBottom: "4px" }}>{badge.label}</div>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "26px", fontWeight: 700, color: "#8a6a2a", lineHeight: 1, letterSpacing: ".01em",
                    }}>
                      {badge.num}
                      <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "12px", fontWeight: 700, marginLeft: "3px", color: "#a88a4e" }}>
                        {badge.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* KEN Voice */}
        <ScrollFadeIn>
          <section style={{ padding: "64px 24px", textAlign: "center", backgroundColor: colors.beige }}>
            <div style={{ maxWidth: "480px", margin: "0 auto" }}>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "12px", marginBottom: "32px",
              }}>
                <img src="/images/about-ken-sm.webp" alt="KEN"
                  style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontSize: "14px", fontWeight: 500, color: colors.text }}>KEN</p>
                  <p style={{ fontSize: "14px", color: colors.mute, marginTop: "2px" }}>記憶荘 店舗内装スタジオ</p>
                </div>
              </div>
              <div style={{ fontSize: "15px", lineHeight: 2.4, color: colors.text, textAlign: "center" }}>
                <p>
                  初めて店を持つ人が、<br />
                  内装のことで不安にならなくていいように。
                </p>
                <p style={{ marginTop: "1.4em" }}>
                  居抜きを活かすこと、自分の手を動かすこと、<br />
                  予算の中で最善を一緒に考えること。<br />
                  それが、記憶荘のやり方です。
                </p>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        <TextureBand src="/assets/textures/shikkui-plaster-closeup-sm.webp" height={200} />

        {/* Pickup Banner */}
        <ScrollFadeIn>
          <section style={{ padding: "48px 24px 0", maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <span style={{
                display: "inline-block", background: "#C9A84C", color: "#fff",
                fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em",
                padding: "2px 8px", borderRadius: "2px", textTransform: "uppercase",
              }}>PICKUP</span>
              <span style={{ fontSize: "13px", color: "#888", letterSpacing: "0.06em" }}>
                ピックアップ記事
              </span>
            </div>
            <Link to="/studio/works/crossover" className="pickup-banner-card">
              <img
                src="/images/crossover-after-01-sm.webp"
                alt="CROSSOVER"
                style={{ width: "100%", height: "100%", minHeight: "120px", objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "6px" }}>
                <p style={{ margin: 0, fontSize: "12px", color: "#C9A84C", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  CASE 001
                </p>
                <p style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: colors.text, lineHeight: 1.4 }}>
                  バスケットボール<br />Cafe&Bar CROSSOVER
                </p>
                <p style={{ margin: 0, fontSize: "14px", color: "#888", lineHeight: 1.6 }}>
                  ¥900,000・約10日・スケルトン
                </p>
                <span style={{ fontSize: "14px", color: "#4A6741", fontWeight: 600, marginTop: "2px" }}>
                  詳しく見る →
                </span>
              </div>
            </Link>
          </section>
        </ScrollFadeIn>

        {/* Works Preview */}
        <ScrollFadeIn>
          <section style={{ padding: "64px 0" }}>
            <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, textAlign: "center", margin: "0 0 8px", textTransform: "uppercase" }}>
              Works
            </p>
            <p style={{ fontSize: "20px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", textAlign: "center", margin: "0 0 32px" }}>
              施工事例
            </p>
            <div className="works-preview-grid">
              {worksPreview.map((w) => (
                <div key={w.type} className="works-preview-card">
                  <img src={w.img} alt={w.type}
                    style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px", display: "block" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "10px", padding: "0 2px" }}>
                    <span style={{ fontSize: "14px", color: "#555" }}>{w.type}</span>
                    <span style={{ fontSize: "15px", fontWeight: 500, color: colors.text }}>{w.cost}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "32px", padding: "0 24px" }}>
              <Link to="/studio/works"
                style={{ fontSize: "14px", color: colors.fukamidori.main, textDecoration: "none", letterSpacing: "0.05em" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                すべての施工事例を見る →
              </Link>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Tenant Support */}
        <ScrollFadeIn>
          <TenantSupportSection />
        </ScrollFadeIn>

        <TextureBand src="/assets/textures/tile-water-droplets-warm-sm.webp" height={180} />

        {/* Links */}
        <ScrollFadeIn>
          <section style={{ padding: "40px 24px 64px" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap" }}>
              <Link to="/studio/about" style={{ textDecoration: "none", textAlign: "center" }}>
                <p style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.15em", color: colors.text }}>About</p>
                <p style={{ fontSize: "14px", color: colors.mute, marginTop: "4px" }}>スタジオについて</p>
                <p style={{ fontSize: "14px", color: colors.fukamidori.main, marginTop: "8px" }}>→</p>
              </Link>
              <Link to="/studio/works" style={{ textDecoration: "none", textAlign: "center" }}>
                <p style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.15em", color: colors.text }}>Works</p>
                <p style={{ fontSize: "14px", color: colors.mute, marginTop: "4px" }}>施工事例</p>
                <p style={{ fontSize: "14px", color: colors.fukamidori.main, marginTop: "8px" }}>→</p>
              </Link>
              <Link to="/studio/pricing" style={{ textDecoration: "none", textAlign: "center" }}>
                <p style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.15em", color: colors.text }}>Pricing</p>
                <p style={{ fontSize: "14px", color: colors.mute, marginTop: "4px" }}>料金の考え方</p>
                <p style={{ fontSize: "14px", color: colors.fukamidori.main, marginTop: "8px" }}>→</p>
              </Link>
            </div>
          </section>
        </ScrollFadeIn>
      </div>
      <StudioFooter />
    </div>
  );
}
