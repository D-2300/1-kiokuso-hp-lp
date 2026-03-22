import LineCTAButton from "../../shared/LineCTAButton";
import ScrollFadeIn from "../../shared/ScrollFadeIn";

interface StudioCTAProps {
  heading?: string;
  subtext?: string;
}

export default function StudioCTA({
  heading = "まだ何も決まっていなくても、大丈夫です。",
  subtext = "物件未定でもOK。断りはLINE1本で完了です。",
}: StudioCTAProps) {
  return (
    <section
      style={{
        backgroundColor: "#4A6741",
        padding: "80px 32px",
        textAlign: "center",
      }}
    >
      <ScrollFadeIn>
        <p
          style={{
            color: "#EAF0E8",
            fontSize: "20px",
            fontWeight: 300,
            letterSpacing: "0.15em",
            marginBottom: "16px",
          }}
        >
          {heading}
        </p>
        <p
          style={{
            color: "#A8BFA2",
            fontSize: "13px",
            letterSpacing: "0.08em",
            marginBottom: "40px",
          }}
        >
          {subtext}
        </p>
        <LineCTAButton size="normal" />
      </ScrollFadeIn>
    </section>
  );
}
