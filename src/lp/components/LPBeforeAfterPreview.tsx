const cases = [
  {
    before: "/images/owl-before-01.webp",
    after: "/images/owl-after-01.webp",
    label: "テイクアウトカフェ｜10坪・居抜き",
    cost: "80万円",
  },
  {
    before: "/images/crossover-before-01.webp",
    after: "/images/crossover-after-01.webp",
    label: "Cafe&Bar｜18坪・スケルトン",
    cost: "90万円",
  },
];

function PhotoLabel({ text }: { text: string }) {
  return (
    <span
      style={{
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: "rgba(0,0,0,0.55)",
        color: "#fff",
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.12em",
        padding: "3px 8px",
        borderRadius: 4,
      }}
    >
      {text}
    </span>
  );
}

function CaseCard({ before, after, label, cost }: (typeof cases)[number]) {
  return (
    <div style={{ flex: "1 1 0", minWidth: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderRadius: 12,
          overflow: "hidden",
          background: "#f7f6f4",
        }}
      >
        <div style={{ flex: 1, position: "relative", aspectRatio: "4/3", minWidth: 0 }}>
          <img
            src={before}
            alt="before"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <PhotoLabel text="BEFORE" />
        </div>

        <div
          style={{
            flexShrink: 0,
            width: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "1.25rem",
              color: "#C9A84C",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            →
          </span>
        </div>

        <div style={{ flex: 1, position: "relative", aspectRatio: "4/3", minWidth: 0 }}>
          <img
            src={after}
            alt="after"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <PhotoLabel text="AFTER" />
        </div>
      </div>

      <div style={{ marginTop: 14, paddingLeft: 2 }}>
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            color: "#666",
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          {label}
        </p>
        <p
          style={{
            margin: "4px 0 0",
            fontSize: "1.05rem",
            color: "#C9A84C",
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          {cost}
        </p>
      </div>
    </div>
  );
}

export default function LPBeforeAfterPreview() {
  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .bap-grid { flex-direction: column !important; }
        }
      `}</style>

      <div
        className="bap-section"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "0.7rem",
              fontWeight: 300,
              letterSpacing: "4px",
              color: "#C9A84C",
              textTransform: "uppercase",
            }}
          >
            WORKS
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}
          >
            実際に、こうなりました。
          </h2>
        </div>

        <div
          className="bap-grid"
          style={{
            display: "flex",
            gap: 32,
            alignItems: "flex-start",
          }}
        >
          {cases.map((c, i) => (
            <CaseCard key={i} {...c} />
          ))}
        </div>

        <p
          style={{
            marginTop: 32,
            textAlign: "center",
            color: "#999",
            fontSize: "0.875rem",
            fontWeight: 400,
          }}
        >
          ほかの事例は無料相談時にお見せします
        </p>
      </div>
    </section>
  );
}
