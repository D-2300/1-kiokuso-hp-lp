type Step = {
  num: number;
  title: string;
  desc: string;
  tag: string;
  goldTag?: boolean;
  goldTitle?: boolean;
  goldDot?: boolean;
  detail?: {
    text: string;
    arrowLabel: string;
    photo: string;
    photoAlt: string;
  };
};

const steps: Step[] = [
  {
    num: 1,
    title: "物件探し・居抜き調査",
    desc: "業態に合う物件を一緒に見て回ります",
    tag: "記憶荘がサポート",
  },
  {
    num: 2,
    title: "資金計画・融資・補助金",
    desc: "創業融資の資料作成もお手伝い",
    tag: "記憶荘がサポート",
    detail: {
      text: "日本政策金融公庫向けの見積書・事業計画書を物件確定前から作成",
      arrowLabel: "実際の書類 ›",
      photo: "/images/solution-finance-advice-sm.webp",
      photoAlt: "資金計画サポート書類",
    },
  },
  {
    num: 3,
    title: "設計・施工",
    desc: "設計から施工まで一社完結",
    tag: "記憶荘が対応",
  },
  {
    num: 4,
    title: "保健所・消防届出",
    desc: "届出書類の準備をサポート",
    tag: "記憶荘がサポート",
    detail: {
      text: "消防検査の立会い対応も記憶荘が行います。届出まで一貫してお任せ",
      arrowLabel: "検査立会い ›",
      photo: "/images/solution-fire-inspection-sm.webp",
      photoAlt: "消防検査立会い",
    },
  },
  {
    num: 5,
    title: "オープン",
    desc: "引渡し・最終確認",
    tag: "記憶荘が伴走",
  },
  {
    num: 6,
    title: "出店後も伴走サポート",
    desc: "オープン後の不具合対応・追加工事も",
    tag: "ずっと記憶荘",
    goldTag: true,
    goldTitle: true,
    goldDot: true,
    detail: {
      text: "レイアウト変更や追加工事の相談もLINEで気軽に",
      arrowLabel: "いつでも ›",
      photo: "/images/showcase-cafe-sm.webp",
      photoAlt: "出店後サポート",
    },
  },
];

function StepRow({ step, isLast }: { step: Step; isLast: boolean }) {
  const dotBg = step.goldDot ? "#C9A84C" : "#1A1A1A";
  const dotColor = step.goldDot ? "#1A1A1A" : "#C9A84C";

  return (
    <div style={{ display: "flex", gap: 0 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          width: 48,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: dotBg,
            color: dotColor,
            fontSize: 13,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          {step.num}
        </div>
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: 1,
              backgroundColor: "#ddd",
              minHeight: 24,
            }}
          />
        )}
      </div>

      <div
        style={{
          flex: 1,
          paddingBottom: isLast ? 0 : 32,
          paddingLeft: 4,
          paddingTop: 4,
        }}
      >
        <p
          style={{
            margin: "0 0 4px",
            fontSize: "1rem",
            fontWeight: 600,
            color: step.goldTitle ? "#C9A84C" : "#1A1A1A",
            lineHeight: 1.3,
          }}
        >
          {step.title}
        </p>
        <p
          style={{
            margin: "0 0 10px",
            fontSize: "0.8125rem",
            color: "#888",
            lineHeight: 1.5,
          }}
        >
          {step.desc}
        </p>
        <span
          style={{
            display: "inline-block",
            fontSize: 11,
            padding: "3px 10px",
            borderRadius: 20,
            backgroundColor: step.goldTag ? "#C9A84C" : "#1A1A1A",
            color: step.goldTag ? "#1A1A1A" : "#C9A84C",
            fontWeight: 500,
            letterSpacing: "0.03em",
          }}
        >
          {step.tag}
        </span>

        {step.detail && (
          <div
            className="photo-row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 14,
            }}
          >
            <p
              className="photo-row-text"
              style={{
                flex: 1,
                margin: 0,
                fontSize: "0.8125rem",
                color: "#888",
                lineHeight: 1.6,
              }}
            >
              {step.detail.text}
            </p>

            <div
              className="photo-row-arrow"
              style={{
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: "#999",
                  whiteSpace: "nowrap",
                }}
              >
                {step.detail.arrowLabel}
              </span>
              <div
                style={{
                  width: 32,
                  height: 1,
                  backgroundColor: "#C9A84C",
                }}
              />
            </div>

            <div
              className="photo-row-img"
              style={{
                flexShrink: 0,
                width: 140,
                height: 100,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <img
                src={step.detail.photo}
                alt={step.detail.photoAlt}
                width="140"
                height="100"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LPSupport() {
  return (
    <section style={{ backgroundColor: "#FAFAF8", paddingTop: 32, paddingBottom: 32 }}>
      <style>{`
        @media (max-width: 640px) {
          .lp-support-section { padding-top: 32px !important; padding-bottom: 32px !important; }
          .photo-row { flex-direction: column !important; align-items: flex-start !important; }
          .photo-row-arrow { display: none !important; }
          .photo-row-img { width: 100% !important; height: 160px !important; border-radius: 8px !important; }
        }
        @media (min-width: 641px) {
          .photo-row { flex-direction: row !important; }
          .photo-row-arrow { display: flex !important; }
          .photo-row-img { width: 140px !important; height: 100px !important; }
        }
      `}</style>

      <div
        className="lp-support-section"
        style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}
      >
        <div style={{ textAlign: "center", marginBottom: 28 }}>
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
            SUPPORT
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
              whiteSpace: "pre-line",
            }}
          >
            {"店づくりに必要なこと、\nぜんぶ一緒にやります。"}
          </h2>
        </div>

        <div>
          {steps.map((step, i) => (
            <StepRow key={step.num} step={step} isLast={i === steps.length - 1} />
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid #e8e5e0",
            paddingTop: 24,
            marginTop: 32,
            textAlign: "center",
            lineHeight: 1.8,
          }}
        >
          <p style={{ margin: 0, fontSize: "0.9375rem", color: "#888" }}>
            ふつうは自分でやる部分も、
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "0.9375rem",
              fontWeight: 500,
              color: "#1A1A1A",
            }}
          >
            ぜんぶ相談できる。それが記憶荘です。
          </p>
        </div>

        <p style={{
          marginTop: 32,
          textAlign: "center",
          fontSize: "0.875rem",
          color: "#999",
          backgroundColor: "#f5f5f0",
          padding: "14px 24px",
          borderRadius: 8,
        }}>
          実際に、こうなりました。
        </p>
      </div>
    </section>
  );
}
