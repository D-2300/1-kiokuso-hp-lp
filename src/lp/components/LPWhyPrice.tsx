const reasons = [
  {
    num: 1,
    title: "直接だから、中間マージンゼロ",
    body: "ポータルサイト経由だと紹介手数料15〜25%が上乗せ。記憶荘に直接ご相談いただければ、その分まるごと施工のクオリティに回せます。",
  },
  {
    num: 2,
    title: "居抜き活用で、壊さない分だけ安い",
    body: "使えるものは活かす。前の店の設備や造作を解体しないだけで、数十万円の差が出ます。",
  },
  {
    num: 3,
    title: "設計も施工も一社完結",
    body: "設計事務所→施工会社の伝言ゲームなし。中間コストも発生しません。最初に話を聞いた人が、そのまま現場に立ちます。",
  },
];

export default function LPWhyPrice() {
  return (
    <section style={{ backgroundColor: "#FAFAF8", border: "3px solid blue" }}>
      <style>{`
        @media (max-width: 640px) {
          .wyp-card-title { font-size: 0.9375rem !important; }
          .wyp-card-body { font-size: 0.8125rem !important; }
        }
      `}</style>

      <div
        className="wyp-section"
        style={{ maxWidth: 640, margin: "0 auto", padding: "64px 24px" }}
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
            WHY THIS PRICE
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
            なぜ、この価格でできるのか。
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {reasons.map(({ num, title, body }) => (
            <div
              key={num}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                padding: "20px 24px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: "#1A1A1A",
                  color: "#C9A84C",
                  fontSize: 14,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                  marginTop: 1,
                }}
              >
                {num}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  className="wyp-card-title"
                  style={{
                    margin: "0 0 8px",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#1A1A1A",
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </p>
                <p
                  className="wyp-card-body"
                  style={{
                    margin: 0,
                    fontSize: "0.875rem",
                    color: "#888",
                    lineHeight: 1.7,
                  }}
                >
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 32,
            textAlign: "center",
            fontSize: "0.9375rem",
            fontWeight: 500,
            color: "#1A1A1A",
            lineHeight: 1.6,
          }}
        >
          「安い」のではなく、余計なコストがないだけです。
        </p>

        <p
          style={{
            marginTop: 40,
            textAlign: "center",
            fontSize: "15px",
            color: "#999",
          }}
        >
          でも、不安はありますよね。
        </p>
      </div>
    </section>
  );
}
