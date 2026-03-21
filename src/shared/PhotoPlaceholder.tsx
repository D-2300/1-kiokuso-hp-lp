interface PhotoPlaceholderProps {
  aspect?: string;
  label?: string;
  className?: string;
}

export default function PhotoPlaceholder({
  aspect = "16/9",
  label = "PHOTO",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={className}
      style={{
        aspectRatio: aspect,
        background: "#E5E0DB",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          color: "#999999",
          fontSize: "13px",
          fontWeight: 300,
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </span>
    </div>
  );
}
