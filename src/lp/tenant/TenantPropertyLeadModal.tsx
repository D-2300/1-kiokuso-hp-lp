import { Fragment, useEffect } from "react";

const LINE_URL = "https://lin.ee/9TamhEC";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

interface Props {
  /** 開閉状態 */
  open: boolean;
  /** 物件エリア名（例: "青葉通"）。ヘッダー文言に差し込む */
  propertyArea?: string | null;
  /** モーダルを閉じる */
  onClose: () => void;
  /** モーダルを開いたコンテキスト（GA4 ラベル）。例: "property_card" / "remaining_count_cta" / "non_public_list_cta" */
  source?: string;
}

/**
 * TenantPropertyLeadModal
 *
 * 物件カードや「他にも●件あります」テキストをタップしたら開く
 * LINE登録への誘導モーダル（lead capture）。
 *
 * 設計意図:
 *   - I版ヒートマップ分析で「物件カード自体をタップする人が圧倒的に多い」が判明
 *     → タップ→LINE登録への自然な動線を作る
 *   - 物件名を文言に差し込んで、続きが見たい欲求を加速させる
 *   - 単一CTA（LINE登録）で迷わせない。閉じるボタンは目立たせない
 *   - 既存の TenantExitPopup と被らない控えめなスタイル
 */
export default function TenantPropertyLeadModal({ open, propertyArea, onClose, source = "property_card" }: Props) {
  useEffect(() => {
    if (!open) return;
    // body スクロールロック
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // GA4 イベント: モーダル open
    window.dataLayer?.push({
      event: "property_lead_modal_open",
      property_area: propertyArea ?? "",
      modal_source: source,
    });

    // ESC で閉じる
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, propertyArea, source, onClose]);

  if (!open) return null;

  const headline = propertyArea
    ? `「${propertyArea}」の詳細を、LINEでお送りします`
    : "詳細を、LINEでお送りします";

  return (
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(20, 16, 12, 0.55)",
          zIndex: 9998,
          animation: "tenantPropModalFade 180ms ease-out",
        }}
      />

      {/* modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="tenant-prop-modal-title"
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(92vw, 380px)",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 18px 60px rgba(0,0,0,0.32)",
          zIndex: 9999,
          padding: "22px 20px 18px",
          animation: "tenantPropModalIn 220ms cubic-bezier(.2,.8,.2,1)",
          fontFamily: "'Noto Sans JP', sans-serif",
        }}
      >
        {/* close button */}
        <button
          onClick={onClose}
          aria-label="閉じる"
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            width: "32px",
            height: "32px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "#999",
            fontSize: "18px",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ×
        </button>

        {/* lock icon (非公開を示す) */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "linear-gradient(180deg, rgba(201,168,76,.18), rgba(201,168,76,.05))",
              border: "1px solid rgba(201,168,76,.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" style={{ width: "22px", height: "22px" }} aria-hidden="true">
              <rect x="5" y="11" width="14" height="9" rx="2" stroke="#8a6a2a" strokeWidth="1.6" />
              <path d="M8 11V8a4 4 0 018 0v3" stroke="#8a6a2a" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <h3
          id="tenant-prop-modal-title"
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "#2a2a2a",
            textAlign: "center",
            margin: "0 0 10px",
            lineHeight: 1.55,
            letterSpacing: ".01em",
          }}
        >
          {headline}
        </h3>

        {/* 流れの3ステップ（ヒアリング前提を視覚化） */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 10px 1fr 10px 1fr",
            gap: "0",
            alignItems: "center",
            margin: "0 0 12px",
            padding: "8px 4px",
            background: "#faf7f2",
            borderRadius: "8px",
          }}
        >
          {[
            { num: "1", label: "LINE登録" },
            { num: "2", label: "ヒアリング" },
            { num: "3", label: "ご紹介" },
          ].map((s, i) => (
            <Fragment key={s.num}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#C9A84C",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    marginBottom: "2px",
                  }}
                >
                  {s.num}
                </div>
                <div style={{ fontSize: "10.5px", color: "#5A574F", fontWeight: 600 }}>
                  {s.label}
                </div>
              </div>
              {i < 2 && (
                <div
                  aria-hidden="true"
                  style={{ color: "#C9A84C", fontSize: "12px", textAlign: "center" }}
                >
                  ›
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <p
          style={{
            fontSize: "12px",
            color: "#5A574F",
            textAlign: "center",
            lineHeight: 1.75,
            margin: "0 0 10px",
          }}
        >
          ご希望の<strong style={{ color: "#2a2a2a" }}>エリア・業態・予算</strong>を伺った上で、
          <br />
          条件に合う物件を1対1でお送りしています。
        </p>

        <div
          style={{
            background: "#fdf9ef",
            border: "1px solid #ede0c2",
            borderRadius: "6px",
            padding: "8px 10px",
            margin: "0 0 14px",
            fontSize: "10.5px",
            color: "#7a6a4a",
            lineHeight: 1.7,
          }}
        >
          ※ オーナー様の意向・タイミング・業態の適合などにより、
          <strong style={{ color: "#5a4a2a" }}>すぐにご紹介できない物件</strong>も含まれます。
          <br />
          ※ 営業電話なし・断ってOK・いつでもブロック可
        </div>

        {/* CTA: LINE 登録 */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            window.dataLayer?.push({
              event: "line_cta_click",
              location: "property_lead_modal",
              property_area: propertyArea ?? "",
              modal_source: source,
            });
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "13px 20px",
            background: "#06C755",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 700,
            borderRadius: "50px",
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(6,199,85,0.30)",
          }}
        >
          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
            <path d={lineSvgPath} />
          </svg>
          LINEで詳細を受け取る
        </a>

        <button
          onClick={onClose}
          style={{
            display: "block",
            width: "100%",
            marginTop: "10px",
            padding: "8px",
            border: "none",
            background: "transparent",
            color: "#8a7a6a",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          あとで
        </button>
      </div>

      <style>{`
        @keyframes tenantPropModalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes tenantPropModalIn {
          from { opacity: 0; transform: translate(-50%, -46%); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }
      `}</style>
    </>
  );
}
