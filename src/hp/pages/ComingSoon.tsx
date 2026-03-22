import EntityNav from "../components/EntityNav";
import EntityFooter from "../components/EntityFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import TextureBand from "../../shared/TextureBand";
import Logo from "../../shared/Logo";

interface ComingSoonProps {
  name: string;
  nameLine2?: string;
  nameJa: string;
  subtitle: string;
  tagline: string;
  taglineSub: string;
  concept: string;
  themeColor: string;
  themeLight: string;
  themeMid: string;
  themeBg: string;
  themeDark: string;
  heroBg: string;
  heroImg?: string;
  textureBand1?: string;
  carouselImages: string[];
  carouselCaption: string;
  logoEntity?: "group" | "studio" | "koumuten" | "reform" | "fudousan";
  logoTo?: string;
}

export default function ComingSoon({
  name,
  nameLine2,
  nameJa,
  subtitle,
  tagline,
  taglineSub,
  concept,
  themeColor,
  themeLight,
  themeMid,
  themeBg,
  themeDark,
  heroBg,
  heroImg,
  textureBand1,
  carouselImages,
  carouselCaption,
  logoEntity = "group",
  logoTo,
}: ComingSoonProps) {
  const conceptLines = concept.split("\n");

  return (
    <div style={{ backgroundColor: "#F8F5F0", minHeight: "100vh" }}>
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
      <EntityNav
        themeColor={themeColor}
        themeLight={themeLight}
        themeBg={themeBg}
        title={name}
        logoEntity={logoEntity}
        logoTo={logoTo}
      />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          {heroImg ? (
            <img
              src={heroImg}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(100%)",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: heroBg,
              }}
            />
          )}
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
            gap: "16px",
          }}
        >
          <div style={{ marginBottom: "8px" }}>
            <Logo entity={logoEntity} color="gold" layout="mark" height={72} />
          </div>
          {nameLine2 ? (
            <div style={{ textAlign: "center" }}>
              <p className="hero-anton" style={{ lineHeight: 1.1, margin: 0 }}>{name}</p>
              <p className="hero-anton" style={{ lineHeight: 1.1, margin: 0 }}>{nameLine2}</p>
            </div>
          ) : (
            <p className="hero-anton">{name}</p>
          )}
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px" }}>{nameJa}</p>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "12px",
              letterSpacing: "0.12em",
            }}
          >
            {subtitle}
          </p>
        </div>
      </section>

      {textureBand1 && <TextureBand src={textureBand1} height={180} />}

      {/* コンセプトセクション */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
          <div
            style={{
              width: "48px",
              height: "1px",
              backgroundColor: themeLight,
              margin: "0 auto 40px",
            }}
          />

          <p
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#1a1a1a",
              lineHeight: 1.9,
              letterSpacing: "0.04em",
              marginBottom: "32px",
            }}
          >
            {tagline}
          </p>

          <div
            style={{
              textAlign: "left",
              borderLeft: `3px solid ${themeLight}`,
              paddingLeft: "20px",
              marginBottom: "40px",
            }}
          >
            {conceptLines.map((line, i) => (
              line === "" ? (
                <div key={i} style={{ height: "1em" }} />
              ) : (
                <p
                  key={i}
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    lineHeight: 2.0,
                    letterSpacing: "0.05em",
                  }}
                >
                  {line}
                </p>
              )
            ))}
          </div>

          <p style={{ fontSize: "13px", color: "#888", marginBottom: "32px", letterSpacing: "0.05em" }}>
            {taglineSub}
          </p>

          <span
            style={{
              display: "inline-block",
              border: `1px solid ${themeLight}`,
              borderRadius: "6px",
              padding: "10px 28px",
              fontSize: "13px",
              color: themeColor,
              letterSpacing: "0.05em",
            }}
          >
            準備中
          </span>
        </section>
      </ScrollFadeIn>

      {/* テクスチャカルーセル */}
      <ScrollFadeIn>
        <section style={{ padding: "0 0 64px", backgroundColor: themeBg }}>
          <div
            style={{
              overflowX: "auto",
              display: "flex",
              gap: "12px",
              padding: "48px 24px 32px",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            {carouselImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                style={{
                  width: "70vw",
                  maxWidth: "480px",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  borderRadius: "4px",
                  flexShrink: 0,
                  scrollSnapAlign: "center",
                  filter: "grayscale(100%)",
                }}
              />
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "#999",
              letterSpacing: "0.1em",
              paddingBottom: "48px",
            }}
          >
            {carouselCaption}
          </p>
        </section>
      </ScrollFadeIn>

      <EntityFooter
        themeColor={themeColor}
        themeLight={themeLight}
        themeMid={themeMid}
        themeDark={themeDark}
        name={nameJa}
        tagline="想いが残る場所を、つくる。"
        logoEntity={logoEntity}
        showTopButton={true}
        links={[{ to: "/", label: "← Group Top" }]}
      />
    </div>
  );
}
