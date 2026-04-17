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
  {
    q: "非公開物件って本当にお得なの？",
    a: "実は「非公開＝安い」とは限りません。公開前の情報は初期段階では強気の値付けになることも多いです。大事なのは『正しく読む力』と『交渉・内装費まで含めた利回り判断』。そこを一緒に整理できるので、結果として良い条件にたどり着けます。",
  },
];

export default function TenantFAQ() {
  return (
    <section style={{ padding: "64px 24px", background: "#f9f8f6" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: "#222", textAlign: "center", marginBottom: "40px", lineHeight: 1.7 }}>
          よくある質問
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          {faqs.map((faq, i) => (
            <div key={i}>
              <p style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 700, color: "#4A6741", marginBottom: "6px" }}>
                {faq.q}
              </p>
              <p style={{ fontSize: "clamp(14px, 3vw, 16px)", color: "#666", lineHeight: 1.85 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
