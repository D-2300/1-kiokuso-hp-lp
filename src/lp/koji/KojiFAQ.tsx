import { useState } from "react";
import { LINE_URL } from "../../shared/design-tokens";

const faqs = [
  {
    q: "写真だけで、本当に見積もれますか？",
    a: "物件の全体像・床・天井・既存設備の写真があれば、8割方の判断はつきます。不足している情報があれば、こちらから追加の質問をお送りします。現地調査なしで概算を知りたい段階であれば、写真だけで十分です。",
  },
  {
    q: "相見積もりに使っても大丈夫ですか？",
    a: "構いません。むしろ歓迎します。記憶荘の見積もりは全項目を一行ずつ記載しているので、他社との比較がしやすい形になっています。断りたい場合は LINE で「辞退します」と一言いただければ終了。フォローアップ連絡はしません。",
  },
  {
    q: "詳細見積もりは有料ですか？",
    a: "LINE相談と概算のご提示は無料です。詳細見積もり（全項目を一行ずつ記載した正式なもの）は 3〜6万円で作成しています。相見積もりにも融資の審査書類にもそのまま使える品質です。見積もりを見てから「やっぱり依頼しない」と判断いただいても構いません。その場合でも作成済みの見積書はお手元に残ります。",
  },
  {
    q: "物件がまだ決まっていないのですが",
    a: "問題ありません。業態と希望坪数だけでも、実費の明細サンプルをお渡しできます。候補物件が複数ある段階で「どれが一番コスパ良さそうか」を診断することも可能です。",
  },
  {
    q: "融資用の見積書は作れますか",
    a: "はい。日本政策金融公庫向けの見積書・事業計画書の作成もサポートしています。物件確定前でも概算の見積書を作成できますので、融資の事前相談にお使いください。",
  },
  {
    q: "居抜きとスケルトン、どちらが安いですか？",
    a: "物件次第です。居抜きでも設備が古ければ結局は更新費用がかかりますし、スケルトンの方が自由度が高い分だけ予算を抑えられるケースもあります。物件写真を送っていただければ、あなたの物件について具体的に判断します。",
  },
  {
    q: "DIY参加は未経験ですが大丈夫ですか？",
    a: "大丈夫です。塗装や簡単な組み立てなど、未経験でもできる作業を切り分けてご案内します。もちろん、DIYなしで全てお任せいただくことも可能です。DIY参加分がそのまま工事費の削減につながります。",
  },
  {
    q: "中古什器や海外通販の材料は使えますか？",
    a: "使えます。メルカリ・ヤフオクでの中古厨房機器、TEMU など海外通販の建材も積極的に活用しています。施主支給（オーナーご自身で購入）も歓迎です。コスト削減の大きなポイントになります。",
  },
  {
    q: "工期はどのくらいかかりますか？",
    a: "居抜きの場合は2〜4週間、スケルトンの場合は4〜8週間が目安です。オープン日から逆算してスケジュールを組みますので、早めのご相談をおすすめします。",
  },
];

function FAQItem({
  faq,
  open,
  onToggle,
}: {
  faq: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderTop: "1px solid #e8e4de" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <span
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "#C9A84C",
              fontWeight: 700,
              flexShrink: 0,
              marginTop: "1px",
            }}
          >
            Q
          </span>
          <span
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              fontWeight: 500,
              color: "#1a1f14",
              lineHeight: 1.7,
            }}
          >
            {faq.q}
          </span>
        </div>
        <span
          style={{
            fontSize: "20px",
            color: "#4A6741",
            flexShrink: 0,
            lineHeight: 1,
            transform: open ? "rotate(45deg)" : "none",
            transition: "transform 0.2s",
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 0 14px 28px", display: "flex", gap: "12px" }}>
          <span
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "#4A6741",
              fontWeight: 700,
              flexShrink: 0,
              marginTop: "1px",
            }}
          >
            A
          </span>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "#555",
              lineHeight: 1.85,
            }}
          >
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function KojiFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#fff", padding: "36px 20px 36px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "14px" }}>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "12px",
              color: "#C9A84C",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(20px, 4.5vw, 28px)",
              fontWeight: 700,
              color: "#1a1f14",
              lineHeight: 1.55,
            }}
          >
            よくあるご質問
          </h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
          <div
            style={{
              borderTop: "1px solid #e8e4de",
              padding: "20px 0 0",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "14px",
                color: "#777",
                lineHeight: 1.7,
              }}
            >
              他にご不明な点があればお気軽にどうぞ。
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
                fontSize: "16px",
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
