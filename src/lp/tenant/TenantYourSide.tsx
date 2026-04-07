export default function TenantYourSide() {
  return (
    <section style={{ padding: "56px 20px", background: "#F8F5F0" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#4A6741",
            marginBottom: "8px",
            textTransform: "uppercase" as const,
          }}
        >
          Your Side
        </p>

        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(17px, 4.5vw, 19px)",
            fontWeight: 700,
            color: "#2a2a2a",
            marginBottom: "36px",
            lineHeight: 1.7,
          }}
        >
          物件探し、
          <span style={{ color: "#4A6741" }}>ひとりで進めようとしていませんか？</span>
        </h2>

        {/* Nudge cards */}
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Card 1: 集客 */}
          <div style={cardStyle}>
            <div style={illustStyle}>
              <svg viewBox="0 0 48 48" fill="none" style={{ width: "32px", height: "32px" }}>
                <circle cx="24" cy="24" r="18" stroke="#4A6741" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                <path d="M24 14v20M14 24h20" stroke="#4A6741" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                <circle cx="24" cy="24" r="4" fill="#4A6741" opacity="0.6" />
                <path d="M24 8l1 3h-2l1-3z" fill="#4A6741" opacity="0.5" />
                <circle cx="16" cy="18" r="2" fill="#4A6741" opacity="0.25" />
                <circle cx="32" cy="20" r="2.5" fill="#4A6741" opacity="0.25" />
                <circle cx="18" cy="32" r="1.5" fill="#4A6741" opacity="0.25" />
                <circle cx="30" cy="30" r="2" fill="#4A6741" opacity="0.35" />
                <path d="M20 16c2 1 4 1 6 0" stroke="#4A6741" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={headingStyle}>その立地、お客さんは来ますか？</p>
              <p style={descStyle}>家賃の安さだけで選ぶと、集客に苦労します。</p>
            </div>
          </div>

          {/* Card 2: 第一印象 */}
          <div style={cardStyle}>
            <div style={illustStyle}>
              <svg viewBox="0 0 48 48" fill="none" style={{ width: "32px", height: "32px" }}>
                <rect x="10" y="16" width="28" height="22" rx="2" stroke="#4A6741" strokeWidth="1.5" opacity="0.4" />
                <rect x="13" y="12" width="22" height="6" rx="1" fill="#4A6741" opacity="0.15" />
                <text x="24" y="17" textAnchor="middle" fontSize="5" fill="#4A6741" fontWeight="bold" opacity="0.5">
                  CAFE
                </text>
                <rect x="18" y="28" width="5" height="10" rx="0.5" stroke="#4A6741" strokeWidth="1" opacity="0.3" />
                <rect x="25" y="22" width="8" height="6" rx="0.5" stroke="#4A6741" strokeWidth="1" opacity="0.3" />
                <circle cx="37" cy="14" r="5" fill="#4A6741" opacity="0.1" stroke="#4A6741" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M35 14l1.5 1.5 3-3" stroke="#4A6741" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={headingStyle}>外から見た第一印象、考えていますか？</p>
              <p style={descStyle}>お客様が入りたくなるお店は、物件選びから始まっています。</p>
            </div>
          </div>

          {/* Card 3: 交渉 */}
          <div style={cardStyle}>
            <div style={illustStyle}>
              <svg viewBox="0 0 48 48" fill="none" style={{ width: "32px", height: "32px" }}>
                <circle cx="17" cy="22" r="6" stroke="#4A6741" strokeWidth="1.5" opacity="0.4" />
                <circle cx="31" cy="22" r="6" stroke="#4A6741" strokeWidth="1.5" opacity="0.4" />
                <path d="M17 28v4a2 2 0 002 2h2" stroke="#4A6741" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                <path d="M31 28v4a2 2 0 01-2 2h-2" stroke="#4A6741" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                <path d="M22 33h4" stroke="#4A6741" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <path d="M23 22l2-2 2 2" stroke="#4A6741" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                <circle cx="17" cy="20" r="1" fill="#4A6741" opacity="0.4" />
                <circle cx="31" cy="20" r="1" fill="#4A6741" opacity="0.4" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={headingStyle}>家賃や条件、交渉していますか？</p>
              <p style={descStyle}>不動産屋は物件オーナーの味方。あなた側に立つ人が必要です。</p>
            </div>
          </div>
        </div>

        {/* Bridge box */}
        <div
          style={{
            maxWidth: "500px",
            margin: "32px auto 0",
            textAlign: "center",
            padding: "24px 20px",
            background: "linear-gradient(135deg, #EAF0E8 0%, #f0f5ee 100%)",
            border: "1px solid #c8d8c0",
            borderRadius: "14px",
          }}
        >
          <p
            style={{
              fontSize: "clamp(15px, 3.5vw, 16px)",
              fontWeight: 700,
              color: "#2a2a2a",
              lineHeight: 1.8,
              marginBottom: "8px",
            }}
          >
            物件を<span style={{ color: "#4A6741" }}>つくる側</span>だから、
            <br />
            「この物件で成功できるか」から一緒に考えられます。
          </p>

          {/* 記憶荘イメージ写真 */}
          <img
            src="/images/kai-ken-onsite-check-sm.webp"
            alt="KAIとKENがお客様と一緒に物件を内見している様子"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "10px",
              margin: "16px auto 12px",
              display: "block",
              objectFit: "cover",
              maxHeight: "180px",
            }}
          />

          <p
            style={{
              fontSize: "12px",
              lineHeight: 1.7,
              color: "#666",
            }}
          >
            設計はお店が決まってから始まるのではなく、
            <br />
            物件を選ぶ時点からもう始まっています。
          </p>
          <span
            style={{
              display: "inline-block",
              marginTop: "10px",
              fontSize: "11px",
              color: "#4A6741",
              padding: "4px 14px",
              border: "1px solid #4A6741",
              borderRadius: "20px",
            }}
          >
            物件のご相談は無料です
          </span>
        </div>

        {/* Text link CTA → STEPS */}
        <p style={{ textAlign: "center", marginTop: "24px" }}>
          <a
            href="#tenant-steps"
            style={{
              color: "#4A6741",
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            ↓ まずは物件情報を受け取ってみる
          </a>
        </p>
      </div>
    </section>
  );
}

const cardStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "18px 20px",
  background: "#fff",
  border: "1px solid #e0ddd5",
  borderRadius: "14px",
  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
};

const illustStyle: React.CSSProperties = {
  flexShrink: 0,
  width: "56px",
  height: "56px",
  borderRadius: "12px",
  background: "#EAF0E8",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const headingStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 700,
  color: "#2a2a2a",
  marginBottom: "4px",
};

const descStyle: React.CSSProperties = {
  fontSize: "12px",
  lineHeight: 1.6,
  color: "#666",
};
