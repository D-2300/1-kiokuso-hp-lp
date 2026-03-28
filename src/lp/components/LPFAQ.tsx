import { useState } from "react";
import { LINE_URL } from "../../shared/design-tokens";

const faqs = [
  {
    q: "断るときはどうすればいいですか",
    a: "LINEで一言「辞退します」と送るだけで大丈夫です。電話での引き止めは一切しません。断りを告げた後のフォローアップ連絡もしません。",
  },
  {
    q: "物件がまだ決まっていないのですが",
    a: "問題ありません。物件が決まる前の段階でも相談できます。「どんな物件を選べばいいか」「居抜きとスケルトンどちらがいいか」といった相談もLINEで対応しています。",
  },
  {
    q: "融資用の見積書は作れますか",
    a: "はい。日本政策金融公庫向けの見積書・事業計画書の作成もサポートしています。物件確定前でも概算の見積書を作成できますので、融資の事前相談にお使いください。",
  },
  {
    q: "DIYは未経験ですが参加できますか",
    a: "参加できます。塗装や簡単な組み立てなど、未経験でもできる作業を切り分けてご案内します。もちろん、DIYなしで全てお任せいただくことも可能です。",
  },
  {
    q: "保健所・消防の手続きはどうなりますか",
    a: "飲食店の場合は保健所検査、その他業種でも消防検査の立会い対応を記憶荘が行います。届出書類の準備から検査当日の対応まで一貫してサポートします。",
  },
  {
    q: "中古什器や海外通販の材料は使えますか",
    a: "使えます。メルカリ・ヤフオクでの中古厨房機器、TEMUなど海外通販の建材も積極的に活用しています。施主支給（オーナー自身で購入）も歓迎です。コスト削減の大きなポイントになります。",
  },
  {
    q: "工期はどのくらいかかりますか",
    a: "居抜きの場合は2〜4週間、スケルトンの場合は4〜8週間が目安です。オープン日から逆算してスケジュールを組みますので、早めのご相談をおすすめします。",
  },
  {
    q: "どんな業態に対応していますか？",
    a: "カフェ・バー・居酒屋・美容室・ネイルサロン・エステ・整体・ジム・焼肉店・ラーメン店など、店舗内装であれば業態を問わず対応しています。まずはお気軽にLINEでご相談ください。",
  },
];

function FAQItem({ faq, index, open, onToggle }: {
  faq: { q: string; a: string };
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderTop: "1px solid #eee" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <span style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "#C9A84C", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>
            Q
          </span>
          <span style={{ fontSize: "clamp(14px, 2.5vw, 16px)", fontWeight: 500, color: "#222", lineHeight: 1.7 }}>
            {faq.q}
          </span>
        </div>
        <span style={{
          fontSize: "20px",
          color: "#4A6741",
          flexShrink: 0,
          lineHeight: 1,
          transform: open ? "rotate(45deg)" : "none",
          transition: "transform 0.2s",
          display: "inline-block",
        }}>
          +
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 0 18px 28px", display: "flex", gap: "12px" }}>
          <span style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "#4A6741", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>
            A
          </span>
          <p style={{ margin: 0, fontSize: "clamp(13px, 2vw, 15px)", color: "#555", lineHeight: 1.85 }}>
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function LPFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#fff", padding: "48px 20px" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <p style={{
          margin: "0 0 32px",
          fontSize: "clamp(20px, 3.5vw, 28px)",
          fontWeight: 700,
          color: "#222",
          textAlign: "center",
        }}>
          よくあるご質問
        </p>

        <style>{`
          @media (min-width: 640px) {
            .faq-grid { display: grid !important; grid-template-columns: 1fr 1fr; gap: 0 40px; }
            .faq-grid-last-border { border-bottom: 1px solid #eee; }
          }
          @media (max-width: 639px) {
            .faq-grid { display: block; }
            .faq-last-item { border-bottom: 1px solid #eee; }
          }
        `}</style>

        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}

          <div style={{ borderTop: "1px solid #eee", padding: "24px 0", textAlign: "center" }} className="faq-grid-last-border faq-last-item">
            <p style={{ margin: "0 0 6px", fontSize: "13px", color: "#777", lineHeight: 1.7 }}>
              他にご不明な点があればお気軽にどうぞ。<br />LINEで気軽にご質問いただけます。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#06C755",
                color: "#fff",
                borderRadius: "999px",
                padding: "12px 28px",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              LINEで質問する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
