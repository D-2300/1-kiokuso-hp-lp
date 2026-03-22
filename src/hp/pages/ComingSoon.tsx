import EntityNav from "../components/EntityNav";
import EntityFooter from "../components/EntityFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import TextureBand from "../../shared/TextureBand";
import Logo from "../../shared/Logo";

interface ComingSoonProps {
  name: string;
  nameJa: string;
  subtitle: string;
  tagline: string;
  taglineSub: string;
  themeColor: string;
  themeLight: string;
  themeMid: string;
  themeBg: string;
  themeDark: string;
  heroBg: string;
  photoBg1: string;
  photoBg2: string;
  photoCaption: string;
  heroImg?: string;
  photo1?: string;
  photo2?: string;
  textureBand1?: string;
  textureBand2?: string;
  logoEntity?: "group" | "studio" | "koumuten" | "reform" | "fudousan";
}

export default function ComingSoon({
  name,
  nameJa,
  subtitle,
  tagline,
  taglineSub,
  themeColor,
  themeLight,
  themeMid,
  themeBg,
  themeDark,
  heroBg,
  photoBg1,
  photoBg2,
  photoCaption,
  heroImg,
  photo1,
  photo2,
  textureBand1,
  textureBand2,
  logoEntity = "group",
}: ComingSoonProps) {
  const taglineLines = tagline.split("\n");

  return (
    <div style={{ backgroundColor: "#F8F5F0", minHeight: "100vh", paddingTop: "64px" }}>
      <EntityNav
        themeColor={themeColor}
        themeLight={themeLight}
        themeBg={themeBg}
        title={name}
        logoEntity={logoEntity}
      />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "calc(100vh - 64px)",
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "rgba(0,0,0,0.25)",
                  letterSpacing: "0.1em",
                  fontWeight: 300,
                }}
              >
                HERO PHOTO ── {subtitle}
              </span>
            </div>
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
          <p style={{ color: "#fff", fontSize: "48px", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
            {name}
          </p>
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

      {/* 一言コピー + 準備中バッジ */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", textAlign: "center" }}>
          <div
            style={{
              width: "48px",
              height: "1px",
              backgroundColor: themeLight,
              margin: "0 auto 32px",
            }}
          />
          <p style={{ fontSize: "15px", color: "#333", lineHeight: 2.2 }}>
            {taglineLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < taglineLines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <p style={{ fontSize: "13px", color: "#999", marginTop: "12px", marginBottom: "40px" }}>
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

      {/* コンセプト写真2枚 */}
      <ScrollFadeIn>
        <section style={{ padding: "0 0 64px" }}>
          <div style={{ backgroundColor: themeBg, padding: "48px 24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                maxWidth: "440px",
                margin: "0 auto",
              }}
            >
              {photo1 ? (
                <img
                  src={photo1}
                  alt=""
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                  }}
                />
              ) : (
                <div style={{ aspectRatio: "4/3", backgroundColor: photoBg1 }} />
              )}
              {photo2 ? (
                <img
                  src={photo2}
                  alt=""
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                  }}
                />
              ) : (
                <div style={{ aspectRatio: "4/3", backgroundColor: photoBg2 }} />
              )}
            </div>
            <p
              style={{
                textAlign: "center",
                fontSize: "12px",
                color: "#999",
                letterSpacing: "0.08em",
                marginTop: "20px",
              }}
            >
              {photoCaption}
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {textureBand2 && <TextureBand src={textureBand2} height={180} />}

      <EntityFooter
        themeColor={themeColor}
        themeLight={themeLight}
        themeMid={themeMid}
        themeDark={themeDark}
        name={nameJa}
        tagline="想いが残る場所を、つくる。"
        logoEntity={logoEntity}
        links={[{ to: "/", label: "← Group Top" }]}
      />
    </div>
  );
}
