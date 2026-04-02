const faqs = [
  {
    q: "なんで無料なの？",
    a: "私たちの本業は内装工事です。物件が決まった後に内装を頼んでいただければ、それが仕事になります。物件探しの段階では費用をいただいていません。",
  },
  {
    q: "物件情報だけもらって、内装は別に頼んでもいい？",
    a: "もちろんです。条件はありません。",
  },
  {
    q: "不動産の仲介業者なの？",
    a: "いいえ。内装工事のチームです。仲介手数料は発生しません。",
  },
  {
    q: "飲食店以外でも大丈夫？",
    a: "はい。ただ居抜き物件の情報は飲食関連が多いです。",
  },
];

export default function TenantFAQ() {
  return (
    <section style={{ padding: "64px 24px", background: "#f9f8f6" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: "#222", textAlign: "center", marginBottom: "40px", lineHeight: 1.7 }}>
          よくある質問
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          {faqs.map((faq, i) => (
            <div key={i}>
              <p style={{ fontSize: "clamp(13px, 2.2vw, 14px)", fontWeight: 700, color: "#4A6741", marginBottom: "6px" }}>
                {faq.q}
              </p>
              <p style={{ fontSize: "clamp(13px, 2.2vw, 14px)", color: "#666", lineHeight: 1.85 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
