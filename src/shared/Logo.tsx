type LogoEntity = "group" | "studio" | "koumuten" | "invest" | "fudousan";
type LogoColor = "gold" | "dark";
type LogoLayout = "mark" | "horizontal";

interface LogoProps {
  entity?: LogoEntity;
  color?: LogoColor;
  layout?: LogoLayout;
  height?: number;
  centered?: boolean;
}

const altMap: Record<LogoEntity, string> = {
  group: "記憶荘",
  studio: "記憶荘 STUDIO",
  koumuten: "記憶荘 工務店",
  invest: "満室デザインLABO",
  fudousan: "記憶荘 不動産",
};

function getLogoSrc(entity: LogoEntity, color: LogoColor, layout: LogoLayout): string {
  if (layout === "horizontal") {
    return `/assets/logos/logo-${entity}-h-${color}.webp`;
  }
  return `/assets/logos/logo-${entity}-${color}.webp`;
}

export default function Logo({
  entity = "studio",
  color = "dark",
  layout = "mark",
  height = 40,
  centered = true,
}: LogoProps) {
  const src = getLogoSrc(entity, color, layout);

  return (
    <img
      src={src}
      alt={altMap[entity]}
      style={{
        height: `${height}px`,
        width: "auto",
        display: "block",
        objectFit: "contain",
        margin: centered ? "0 auto" : undefined,
      }}
    />
  );
}
