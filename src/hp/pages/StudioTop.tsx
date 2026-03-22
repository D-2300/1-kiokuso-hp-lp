import { Link } from "react-router-dom";
import StudioNav from "../components/StudioNav";
import StudioCTA from "../components/StudioCTA";
import StudioFooter from "../components/StudioFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import TextureBand from "../../shared/TextureBand";
import Logo from "../../shared/Logo";
import { colors } from "../../shared/design-tokens";

export default function StudioTop() {
  return (
    <div style={{ backgroundColor: colors.beige, minHeight: "100vh", paddingTop: "64px" }}>
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(4px); }
        }
        .studio-scroll-arrow {
          animation: scrollBounce 2s ease-in-out infinite;
        }
      `}</style>

      <StudioNav />

      {/* Hero */}
      <section style={{ position: "relative", height: "calc(100vh - 64px)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%" }}>
          <img src="/images/hero-bg-v2.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
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
            <Logo entity="studio" color="gold" layout="mark" height={64} />
          </div>
          <p style={{ color: "#fff", fontSize: "28px", fontWeight: 300, letterSpacing: "0.3em" }}>
            KIOKUSO STUDIO
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", fontWeight: 400, letterSpacing: "0.1em" }}>
            記憶荘 店舗内装スタジオ
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontWeight: 300, letterSpacing: "0.15em" }}>
            仙台・宮城
          </p>
        </div>

        <div
          className="studio-scroll-arrow"
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            color: "rgba(255,255,255,0.4)",
            fontSize: "20px",
            zIndex: 1,
          }}
        >
          ↓
        </div>
      </section>

      {/* Voice */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", textAlign: "center", backgroundColor: colors.beige }}>
          <div style={{ maxWidth: "480px", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              <img src="/images/about-dai.webp" alt="DAI" style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: "14px", fontWeight: 500, color: colors.text }}>DAI</p>
                <p style={{ fontSize: "11px", color: colors.mute, marginTop: "2px" }}>記憶荘 店舗内装スタジオ</p>
              </div>
            </div>

            <div style={{ fontSize: "15px", lineHeight: 2.4, color: colors.text, textAlign: "center" }}>
              <p>
                初めて店を持つ人が、
                <br />
                内装のことで不安にならなくていいように。
              </p>
              <p style={{ marginTop: "1.6em" }}>
                居抜きを活かすこと、自分の手を動かすこと、
                <br />
                予算の中で最善を一緒に考えること。
                <br />
                それが、記憶荘のやり方です。
              </p>
            </div>
            <p style={{ marginTop: "1.6em", fontSize: "13px", color: colors.mute, lineHeight: 2.0 }}>
              仙台・宮城県で、飲食店・美容室・テイクアウト店など、<br />
              さまざまな業態の店舗内装を手がけてきました。
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <TextureBand src="/assets/textures/shikkui-plaster-closeup.webp" height={200} />

      {/* Works Preview */}
      <ScrollFadeIn>
        <div>
          <img src="/images/crossover-after-02.webp" alt="" style={{ maxWidth: "520px", width: "100%", aspectRatio: "3/2", objectFit: "cover", borderRadius: "4px", display: "block", margin: "0 auto" }} />
          <div style={{ maxWidth: "520px", margin: "0 auto", padding: "32px 24px 64px" }}>
            <p style={{ fontSize: "14px", color: colors.text, lineHeight: 2.0 }}>
              既存のカウンターを活かしながら、
              <br />
              厨房の動線を見直した。
            </p>
          </div>
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div>
          <img src="/images/crossover-after-03.webp" alt="" style={{ maxWidth: "520px", width: "100%", aspectRatio: "3/2", objectFit: "cover", borderRadius: "4px", display: "block", margin: "0 auto" }} />
          <div style={{ maxWidth: "520px", margin: "0 auto", padding: "32px 24px 64px" }}>
            <p style={{ fontSize: "14px", color: colors.text, lineHeight: 2.0 }}>
              前のお店が残していった造作を、
              <br />
              新しい用途に仕立て直した。
            </p>
          </div>
        </div>
      </ScrollFadeIn>

      <div style={{ textAlign: "center", padding: "0 24px 64px" }}>
        <Link
          to="/studio/works"
          style={{
            fontSize: "13px",
            color: colors.fukamidori.main,
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          すべての施工事例を見る →
        </Link>
      </div>

      <TextureBand src="/assets/textures/tile-water-droplets-warm.webp" height={180} />

      {/* Links */}
      <ScrollFadeIn>
        <section style={{ padding: "40px 24px 64px", backgroundColor: colors.beige }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "48px" }}>
            <Link to="/studio/about" style={{ textDecoration: "none", textAlign: "center" }}>
              <p style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.15em", color: colors.text }}>
                About
              </p>
              <p style={{ fontSize: "12px", color: colors.mute, marginTop: "4px" }}>スタジオについて</p>
              <p style={{ fontSize: "13px", color: colors.fukamidori.main, marginTop: "8px" }}>→</p>
            </Link>

            <Link to="/studio/pricing" style={{ textDecoration: "none", textAlign: "center" }}>
              <p style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.15em", color: colors.text }}>
                Pricing
              </p>
              <p style={{ fontSize: "12px", color: colors.mute, marginTop: "4px" }}>料金の考え方</p>
              <p style={{ fontSize: "13px", color: colors.fukamidori.main, marginTop: "8px" }}>→</p>
            </Link>
          </div>
        </section>
      </ScrollFadeIn>

      <StudioCTA />
      <StudioFooter />
    </div>
  );
}
