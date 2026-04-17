function CompareCol({
  type,
  label,
  headline,
  items,
}: {
  type: "general" | "kiokuso";
  label: string;
  headline: React.ReactNode;
  items: string[];
}) {
  const isK = type === "kiokuso";
  return (
    <div
      style={{
        borderRadius: "14px",
        padding: "18px 14px 16px",
        background: isK ? "#1a1f14" : "#fff",
        border: isK ? "1px solid #2E4229" : "1px solid #e5e5e5",
        color: isK ? "#fff" : "#333",
        position: "relative",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textAlign: "center",
          marginBottom: "10px",
          color: isK ? "#C9A84C" : "#999",
        }}
      >
        {label}
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: "clamp(14px, 3vw, 16px)",
          fontWeight: 700,
          lineHeight: 1.5,
          marginBottom: "14px",
          color: isK ? "#fff" : "#555",
          paddingBottom: "12px",
          borderBottom: isK ? "1px solid rgba(201,168,76,0.25)" : "1px solid #eee",
        }}
      >
        {headline}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((t, i) => (
          <li
            key={i}
            style={{
              fontSize: "clamp(12px, 2.5vw, 14px)",
              lineHeight: 1.55,
              display: "flex",
              alignItems: "flex-start",
              gap: "6px",
              color: isK ? "rgba(255,255,255,0.88)" : "#777",
            }}
          >
            <span style={{ flexShrink: 0, color: isK ? "#C9A84C" : "#ccc", fontWeight: 900, marginTop: "1px" }}>
              {isK ? "◆" : "×"}
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TenantFairEval() {
  return (
    <section style={{ padding: "56px 20px", background: "#f9f8f6" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        {/* Header */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "#C9A84C",
            marginBottom: "10px",
          }}
        >
          WHY FAIR
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 4.5vw, 28px)",
            fontWeight: 700,
            color: "#1a1f14",
            textAlign: "center",
            marginBottom: "8px",
            lineHeight: 1.55,
          }}
        >
          なぜ記憶荘は<br />
          フラットに物件を評価できるのか
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(14px, 3vw, 16px)",
            color: "#888",
            marginBottom: "24px",
            lineHeight: 1.6,
          }}
        >
          物件紹介で利益を得ないから、あなたの味方でいられます。
        </p>

        {/* Illustration: consultation with client */}
        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto 28px",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 4px 18px rgba(60,40,20,0.08)",
            background: "#fff",
          }}
        >
          <img
            src="/images/consultation-client-workshop-sm.webp"
            alt="お客様と物件について相談するKAI。背景で職人が作業中。"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            loading="lazy"
          />
        </div>

        {/* VS Comparison */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginBottom: "18px",
            position: "relative",
          }}
        >
          <CompareCol
            type="general"
            label="一般的な不動産仲介"
            headline={<>仲介手数料で<br />利益を得る</>}
            items={[
              "手数料の高い物件を優先しがち",
              "成約しないと収益にならない",
              "内装は別業者を探す必要あり",
            ]}
          />
          <CompareCol
            type="kiokuso"
            label="記憶荘の場合"
            headline={<>物件紹介では<br />一切利益を得ない</>}
            items={[
              "どの物件もフラットに評価",
              "合わない物件は勧めない",
              "物件探し〜内装まで一貫対応",
            ]}
          />
          {/* VS badge */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid #e5e5e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: 900,
              color: "#999",
              letterSpacing: "0.05em",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              zIndex: 2,
            }}
          >
            VS
          </div>
        </div>

        {/* Revenue model - single line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
            padding: "14px 12px",
            background: "#fff",
            border: "1px solid #e8e6e0",
            borderRadius: "12px",
            marginBottom: "32px",
          }}
        >
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", color: "#C9A84C" }}>
            収益モデル
          </span>
          <span style={{ color: "#ddd" }}>|</span>
          <span style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 700, color: "#1a1f14" }}>
            物件探し <span style={{ color: "#999", fontWeight: 900 }}>¥0</span>
          </span>
          <span style={{ fontSize: "12px", color: "#ccc" }}>→</span>
          <span style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 700, color: "#2E4229" }}>
            内装工事が本業
          </span>
        </div>

        {/* Footnote */}
        <p style={{ textAlign: "center", fontSize: "12px", color: "#aaa", lineHeight: 1.7 }}>
          ※ 物件情報のご紹介・ご相談は無料です。契約を急かすことは一切ありません。
        </p>
      </div>
    </section>
  );
}
