import { useState } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function LPContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "form_submit_contact" });
      setSubmitted(true);
    } catch {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form"
      style={{
        backgroundColor: "#f9f8f6",
        padding: "32px 20px",
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .lp-contact-section { padding-top: 32px !important; padding-bottom: 32px !important; }
        }
        .lp-contact-input:focus {
          outline: none;
          border-color: #C9A84C !important;
          box-shadow: 0 0 0 3px rgba(201,168,76,0.12);
        }
        .lp-contact-submit:hover {
          background-color: #2a2a2a !important;
        }
      `}</style>

      <div
        className="lp-contact-section"
        style={{ maxWidth: 480, margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
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
            CONTACT
          </p>
          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(1.25rem, 4vw, 1.625rem)",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.4,
            }}
          >
            無料見積もり・お問い合わせ
          </h2>
          <p style={{ margin: 0, fontSize: 14, color: "#888" }}>
            翌営業日までにご返信いたします。
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              textAlign: "center",
              padding: "48px 24px",
              border: "1px solid #e8e5e0",
              borderRadius: 12,
              backgroundColor: "#FAFAF8",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#1A1A1A",
              }}
            >
              送信しました。
            </p>
            <p style={{ margin: 0, fontSize: 14, color: "#888", lineHeight: 1.7 }}>
              翌営業日までにご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: "none" }}>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                htmlFor="cf-name"
                style={{ fontSize: 13, fontWeight: 500, color: "#444" }}
              >
                お名前
                <span
                  style={{
                    marginLeft: 6,
                    fontSize: 11,
                    color: "#C9A84C",
                    fontWeight: 400,
                  }}
                >
                  必須
                </span>
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                placeholder="山田 太郎"
                className="lp-contact-input"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 8,
                  padding: "12px 16px",
                  fontSize: 15,
                  color: "#1A1A1A",
                  backgroundColor: "#fff",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                htmlFor="cf-contact"
                style={{ fontSize: 13, fontWeight: 500, color: "#444" }}
              >
                メールアドレスまたは電話番号
                <span
                  style={{
                    marginLeft: 6,
                    fontSize: 11,
                    color: "#C9A84C",
                    fontWeight: 400,
                  }}
                >
                  必須
                </span>
              </label>
              <input
                id="cf-contact"
                name="contact"
                type="text"
                required
                placeholder="example@email.com または 080-0000-0000"
                className="lp-contact-input"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 8,
                  padding: "12px 16px",
                  fontSize: 15,
                  color: "#1A1A1A",
                  backgroundColor: "#fff",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                htmlFor="cf-message"
                style={{ fontSize: 13, fontWeight: 500, color: "#444" }}
              >
                ご相談内容
                <span
                  style={{
                    marginLeft: 6,
                    fontSize: 11,
                    color: "#aaa",
                    fontWeight: 400,
                  }}
                >
                  任意
                </span>
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={4}
                placeholder="業態・物件の状況・予算感など、お気軽にどうぞ"
                className="lp-contact-input"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 8,
                  padding: "12px 16px",
                  fontSize: 15,
                  color: "#1A1A1A",
                  backgroundColor: "#fff",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  boxSizing: "border-box",
                  width: "100%",
                  resize: "vertical",
                  fontFamily: "inherit",
                  lineHeight: 1.6,
                }}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="lp-contact-submit"
              style={{
                backgroundColor: "#1A1A1A",
                color: "#fff",
                borderRadius: 8,
                padding: "14px",
                width: "100%",
                fontSize: 15,
                fontWeight: 700,
                border: "none",
                cursor: submitting ? "not-allowed" : "pointer",
                letterSpacing: "0.03em",
                transition: "background-color 0.2s",
                opacity: submitting ? 0.6 : 1,
              }}
            >
              {submitting ? "送信中..." : "送信する"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
