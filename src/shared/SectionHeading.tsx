interface SectionHeadingProps {
  en: string;
  ja?: string;
  align?: "center" | "left";
}

export default function SectionHeading({ en, ja, align = "center" }: SectionHeadingProps) {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: "40px",
      }}
    >
      <p
        style={{
          fontSize: "13px",
          fontWeight: 300,
          letterSpacing: "0.2em",
          color: "#666666",
          margin: 0,
          textTransform: "uppercase",
        }}
      >
        {en}
      </p>
      {ja && (
        <p
          style={{
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "0.05em",
            color: "#999999",
            marginTop: "4px",
            marginBottom: 0,
          }}
        >
          {ja}
        </p>
      )}
    </div>
  );
}
