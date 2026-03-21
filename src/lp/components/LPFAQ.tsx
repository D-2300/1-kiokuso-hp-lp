import { useState } from "react";

const faqs = [
  {
    q: "物件が決まっていませんが相談できますか？",
    a: "もちろんです。Step 0は物件未定でもOKです。エリアや広さの希望を教えていただくだけで、概算をお伝えできます。",
  },
  {
    q: "相見積もりを取ってもいいですか？",
    a: "歓迎します。むしろおすすめしています。比べていただくことで、記憶荘の強みが明確になります。",
  },
  {
    q: "見積もりの後に断っても大丈夫ですか？",
    a: "LINEで一言いただければ完了です。その後の営業連絡は一切しません。",
  },
  {
    q: "DIYの経験がなくても参加できますか？",
    a: "はい。塗装などは一緒にやります。道具の使い方からお教えします。無理に参加いただく必要はありません。",
  },
  {
    q: "融資用の見積書は作れますか？",
    a: "はい。公庫の事業計画書に使える形式で作成します。融資相談の段階からご一緒できます。",
  },
];

export default function LPFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#fff", padding: "40px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <p style={{ margin: "0 0 24px", fontSize: "14px", fontWeight: 700, color: "#333", textAlign: "center" }}>
          よくあるご質問
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderTop: "1px solid #eee", ...(i === faqs.length - 1 ? { borderBottom: "1px solid #eee" } : {}) }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ fontSize: "13px", color: "#C9A84C", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>
                    Q
                  </span>
                  <span style={{ fontSize: "13px", color: "#333", lineHeight: 1.7 }}>{faq.q}</span>
                </div>
                <span
                  style={{
                    fontSize: "18px",
                    color: "#4A6741",
                    flexShrink: 0,
                    lineHeight: 1,
                    transform: open === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div style={{ padding: "0 0 16px 23px", display: "flex", gap: "10px" }}>
                  <span style={{ fontSize: "13px", color: "#4A6741", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>
                    A
                  </span>
                  <p style={{ margin: 0, fontSize: "13px", color: "#666", lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
