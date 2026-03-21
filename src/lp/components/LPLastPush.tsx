const cards = [
  {
    title: "工期は2〜4ヶ月",
    desc: "着工から引渡しまで、最短2ヶ月・平均3ヶ月かかります。オープン日から逆算して早めに動き始めることが大切です。",
  },
  {
    title: "繁忙期は枠が埋まります",
    desc: "春と秋のオープンを目指すオーナーが集中します。「まだ先」と思っていると、希望の時期に間に合わないことも。",
  },
];

export default function LPLastPush() {
  return (
    <section style={{ backgroundColor: "#EAF0E8", padding: "48px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <p
          style={{
            margin: "0 0 24px",
            fontSize: "clamp(17px, 3vw, 22px)",
            fontWeight: 700,
            color: "#333",
            textAlign: "center",
          }}
        >
          まだ先の話だから、と思っていませんか。
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "14px", marginBottom: "28px" }}>
          {cards.map((c) => (
            <div
              key={c.title}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "22px",
                border: "1px solid #d8e4d5",
              }}
            >
              <p
                style={{
                  margin: "0 0 10px",
                  fontSize: "clamp(15px, 2.5vw, 18px)",
                  fontWeight: 700,
                  color: "#4A6741",
                }}
              >
                {c.title}
              </p>
              <p style={{ margin: 0, fontSize: "clamp(13px, 2vw, 14px)", color: "#555", lineHeight: 1.85 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: "#4A6741", borderRadius: "12px", padding: "24px 20px" }}>
          <p
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(14px, 2.5vw, 16px)",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            LINE登録で、2つの
            <span style={{ color: "#C9A84C" }}>無料特典</span>
            をお渡ししています。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
            {[
              { num: "特典1", title: "内装見積もりの虎の巻（PDF）", desc: "相場感と見積もりの読み方をまとめたPDF" },
              { num: "特典2", title: "AIパースを無料で作成", desc: "LINEで間取りを送ると完成イメージをお届け" },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <p style={{ margin: "0 0 5px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>{item.num}</p>
                <p style={{ margin: "0 0 8px", fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 700, color: "#fff" }}>
                  {item.title}
                </p>
                <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
