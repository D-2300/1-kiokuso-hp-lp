import EntityNav from "../components/EntityNav";
import EntityFooter from "../components/EntityFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import TextureBand from "../../shared/TextureBand";
import Logo from "../../shared/Logo";

interface VisionBlock {
  text: string;
  image: string;
  caption: string;
}

interface ComingSoonProps {
  name: string;
  nameLine2?: string;
  nameJa: string;
  subtitle: string;
  tagline: string;
  taglineSub: string;
  concept: string;
  vision: VisionBlock;
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
  logoEntity?: "group" | "studio" | "koumuten" | "invest" | "fudousan";
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
  vision,
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
  const visionLines = vision.text.split("\n");

  return (
    <div style={{ backgroundColor: "#F8F5F0", minHeight: "100vh" }}>
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
              background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%)",
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
            <Logo entity={logoEntity} color="gold" layout="mark" height={logoEntity === "fudousan" ? 60 : logoEntity === "koumuten" || logoEntity === "invest" ? 68 : 72} />
          </div>
          {nameLine2 ? (
            <div style={{ textAlign: "center" }}>
              <p className="hero-anton" style={{ lineHeight: 1.1, margin: 0 }}>{name}</p>
              <p className="hero-anton" style={{ lineHeight: 1.1, margin: 0 }}>{nameLine2}</p>
            </div>
          ) : (
            <p className="hero-anton">{name}</p>
          )}
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "20px", fontWeight: 700, letterSpacing: "0.14em" }}>{nameJa}</p>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.14em",
            }}
          >
            {subtitle}
          </p>
        </div>
        <p
          style={{
            position: "absolute",
            bottom: "80px",
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "24px",
            fontWeight: 700,
            letterSpacing: "6px",
            color: "rgba(255,255,255,0.5)",
            zIndex: 2,
            margin: 0,
          }}
        >
          準備中
        </p>
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

          <p style={{ fontSize: "14px", color: "#888", marginBottom: "32px", letterSpacing: "0.05em" }}>
            {taglineSub}
          </p>
        </section>
      </ScrollFadeIn>

      {/* ビジョンブロック */}
      <ScrollFadeIn>
        <section style={{ backgroundColor: "#F8F5F0", padding: "80px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "4px",
                color: "#999",
                marginBottom: "40px",
                textTransform: "uppercase",
              }}
            >
              VISION
            </p>
            <div style={{ marginBottom: "48px" }}>
              {visionLines.map((line, i) => (
                line === "" ? (
                  <div key={i} style={{ height: "1.2em" }} />
                ) : (
                  <p
                    key={i}
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#333",
                      lineHeight: 2.2,
                      letterSpacing: "0.04em",
                      margin: 0,
                    }}
                  >
                    {line}
                  </p>
                )
              ))}
            </div>
            <img
              src={vision.image}
              alt=""
              style={{
                width: "100%",
                maxWidth: "700px",
                display: "block",
                margin: "0 auto 16px",
                borderRadius: "4px",
                objectFit: "cover",
                aspectRatio: "16/9",
              }}
            />
            <p
              style={{
                fontSize: "14px",
                color: "#999",
                letterSpacing: "0.06em",
              }}
            >
              {vision.caption}
            </p>
          </div>
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
                }}
              />
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
              color: "#999",
              letterSpacing: "0.1em",
              paddingBottom: "48px",
            }}
          >
            {carouselCaption}
          </p>
        </section>
      </ScrollFadeIn>

      {/* 準備中テキスト */}
      <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          color: "#BBB",
          marginTop: "48px",
          marginBottom: "64px",
          padding: "0 24px",
          letterSpacing: "0.04em",
        }}
      >
        現在準備中です。開始時期が決まり次第、こちらでお知らせします。
      </p>

      <EntityFooter
        themeColor={themeColor}
        themeLight={themeLight}
        themeMid={themeMid}
        themeDark={themeDark}
        name={nameJa}
        tagline="次の記憶が、ここから灯る。"
        logoEntity={logoEntity}
        showTopButton={true}
        links={[{ to: "/", label: "← Group Top", logo: "/assets/logos/logo-group-gold.webp" }]}
      />
    </div>
  );
}
