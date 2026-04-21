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
  {
    q: "相談してから工事開始まで、最短どれくらい？",
    a: "物件が既に決まっていれば、現地調査→見積→着工で最短2〜3週間ほど。テナント探しから始める場合は条件次第ですが、1〜3ヶ月で開業に至る方が多いです。焦らせず、止めずに進めます。",
  },
  {
    q: "相見積もりで他社に決めた場合、どうなる？",
    a: "何も起こりません。違約金も催促もなし。むしろ他社見積を持ってきて「ここの金額が合わない」と相談してもらっても構いません。金額の妥当性を一緒に見ます。",
  },
  {
    q: "予算が合わないと分かった段階で、キャンセルできる？",
    a: "もちろんです。相談・現地調査・見積までは完全無料。契約前であればいつでも白紙に戻せます。代わりに「今の予算だとこの物件は難しい」と正直にお伝えします。",
  },
  {
    q: "仙台市外（石巻・大崎・名取など）でも対応？",
    a: "宮城県内であれば対応可能です。ただし遠方の場合は出張費や工期面で都市部と条件が変わるので、エリア・予算を先にお聞かせください。",
  },
];

export default function TenantFAQ() {
  return (
    <section style={{ padding: "64px 20px", background: "#f9f8f6" }}>
      <style>{`
        .tenant-faq-item { border-bottom: 1px solid #e8e3dc; }
        .tenant-faq-item:first-of-type { border-top: 1px solid #e8e3dc; }
        .tenant-faq-item > summary {
          list-style: none;
          cursor: pointer;
          padding: 18px 4px 18px 0;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #2a2a2a;
          font-weight: 700;
          font-size: clamp(14px, 3.3vw, 16px);
          line-height: 1.6;
          transition: color 0.15s ease;
          position: relative;
        }
        .tenant-faq-item > summary::-webkit-details-marker { display: none; }
        .tenant-faq-item > summary:hover { color: #4A6741; }
        .tenant-faq-item .tenant-faq-qmark {
          flex-shrink: 0;
          width: 22px; height: 22px;
          border-radius: 50%;
          background: linear-gradient(180deg, #C9A84C 0%, #8a6a2a 100%);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
          box-shadow: 0 1px 4px rgba(201,168,76,0.25);
        }
        .tenant-faq-item .tenant-faq-toggle {
          margin-left: auto;
          color: #C9A84C;
          font-size: 18px;
          font-weight: 400;
          transition: transform 0.2s ease;
          flex-shrink: 0;
          line-height: 1;
        }
        .tenant-faq-item[open] .tenant-faq-toggle { transform: rotate(45deg); }
        .tenant-faq-item .tenant-faq-body {
          padding: 2px 4px 20px 34px;
          font-size: clamp(13px, 3vw, 15px);
          color: #555;
          line-height: 1.9;
          animation: tenantFaqReveal 0.25s ease-out;
        }
        @keyframes tenantFaqReveal {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, color: "#222", textAlign: "center", marginBottom: "32px", lineHeight: 1.7 }}>
          よくある質問
        </h2>

        {faqs.map((faq, i) => (
          <details key={i} className="tenant-faq-item">
            <summary>
              <span className="tenant-faq-qmark">Q</span>
              <span style={{ flex: 1 }}>{faq.q}</span>
              <span className="tenant-faq-toggle" aria-hidden="true">＋</span>
            </summary>
            <div className="tenant-faq-body">{faq.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
