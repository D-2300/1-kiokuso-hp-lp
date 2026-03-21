type LogoType = "group" | "studio";
type LogoColor = "gold" | "dark";
type LogoLayout = "mark" | "horizontal";
type LogoSize = "sm" | "md" | "lg" | "xl";

interface LogoProps {
  type?: LogoType;
  color?: LogoColor;
  layout?: LogoLayout;
  size?: LogoSize;
}

const heightMap: Record<LogoSize, number> = {
  sm: 28,
  md: 40,
  lg: 56,
  xl: 80,
};

function getLogoSrc(type: LogoType, color: LogoColor, layout: LogoLayout): string {
  if (layout === "horizontal") {
    return `/images/logo-${type}-h-${color}.webp`;
  }
  return `/images/logo-${type}-${color}.webp`;
}

export default function Logo({
  type = "studio",
  color = "dark",
  layout = "mark",
  size = "md",
}: LogoProps) {
  const h = heightMap[size];
  const src = getLogoSrc(type, color, layout);

  return (
    <img
      src={src}
      alt={type === "group" ? "記憶荘" : "記憶荘 STUDIO"}
      style={{
        height: `${h}px`,
        width: "auto",
        display: "block",
        objectFit: "contain",
      }}
    />
  );
}
