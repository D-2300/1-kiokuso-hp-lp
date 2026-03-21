type LogoSize = "sm" | "md" | "lg";
type LogoVariant = "light" | "dark";

interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
}

const sizeMap: Record<LogoSize, number> = {
  sm: 28,
  md: 40,
  lg: 56,
};

export default function Logo({ size = "md", variant = "light" }: LogoProps) {
  const px = sizeMap[size];
  const fill = variant === "light" ? "#F8F5F0" : "#1A1A1A";
  const stroke = variant === "light" ? "#ddd" : "#333";

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="38" height="38" rx="4" fill={fill} stroke={stroke} strokeWidth="1" />
      <line x1="20" y1="4" x2="20" y2="36" stroke="#C9A84C" strokeWidth="2" />
      <line x1="4" y1="20" x2="36" y2="20" stroke="#C9A84C" strokeWidth="2" />
      <circle cx="20" cy="20" r="4" fill="#C9A84C" />
    </svg>
  );
}
