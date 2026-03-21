import { LINE_URL } from "./design-tokens";

interface LineCTAButtonProps {
  size?: "normal" | "small";
  label?: string;
}

export default function LineCTAButton({
  size = "normal",
  label = "LINEで相談する",
}: LineCTAButtonProps) {
  const padding = size === "normal" ? "14px 40px" : "10px 24px";
  const fontSize = size === "normal" ? "15px" : "13px";

  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        backgroundColor: "#06C755",
        color: "#fff",
        borderRadius: "8px",
        padding,
        fontSize,
        fontWeight: 500,
        textDecoration: "none",
        transition: "opacity 0.2s",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {label}
    </a>
  );
}
