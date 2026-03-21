export default function LPSolutionPoints() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "48px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>

        {/* Point 1 */}
        <div>
          <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Point 1
          </p>
          <p style={{ margin: "0 0 14px", fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: "#222" }}>
            設計から施工まで、一気通貫で対応
          </p>
          <p style={{ margin: "0 0 20px", fontSize: "clamp(14px, 2.5vw, 16px)", color: "#555", lineHeight: 1.85 }}>
            担当が一人なので、伝言ゲームが起きません。ヒアリングした内容が設計に、設計が施工にそのまま反映されます。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div style={{ border: "1px solid #e0e0e0", borderRadius: "8px", padding: "18px" }}>
              <p style={{ margin: "0 0 10px", fontSize: "12px", fontWeight: 500, color: "#999" }}>一般的</p>
              <p style={{ margin: 0, fontSize: "14px", color: "#666", lineHeight: 1.85 }}>
                営業→デザイナー→現場監督→各職人<br />
                会社によって3〜5人が関わる
              </p>
            </div>
            <div style={{ border: "2px solid #C9A84C", borderRadius: "8px", padding: "18px", backgroundColor: "#fffdf5" }}>
              <p style={{ margin: "0 0 10px", fontSize: "12px", fontWeight: 700, color: "#C9A84C" }}>記憶荘</p>
              <p style={{ margin: 0, fontSize: "14px", color: "#333", lineHeight: 1.85 }}>
                相談→設計→施工→引渡し<br />
                すべてDAIが直接対応
              </p>
            </div>
          </div>
        </div>

        {/* Point 2 */}
        <div>
          <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Point 2
          </p>
          <p style={{ margin: "0 0 14px", fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: "#222" }}>
            見積もりは全項目を公開
          </p>
          <p style={{ margin: "0 0 20px", fontSize: "clamp(14px, 2.5vw, 16px)", color: "#555", lineHeight: 1.85 }}>
            何にいくらかかるか、一行ずつすべて開示します。「一式」でまとめる項目はありません。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div style={{ border: "1px solid #e0e0e0", borderRadius: "8px", padding: "18px", backgroundColor: "#fafafa" }}>
              <p style={{ margin: "0 0 10px", fontSize: "12px", fontWeight: 500, color: "#999" }}>よくある見積もり</p>
              <p style={{ margin: 0, fontSize: "14px", color: "#666", lineHeight: 2, fontFamily: "monospace" }}>
                内装工事一式 … ¥1,500,000<br />
                諸経費 ………… ¥200,000
              </p>
            </div>
            <div style={{ border: "2px solid #C9A84C", borderRadius: "8px", padding: "18px", backgroundColor: "#fffdf5" }}>
              <p style={{ margin: "0 0 10px", fontSize: "12px", fontWeight: 700, color: "#C9A84C" }}>記憶荘の見積もり</p>
              <p style={{ margin: 0, fontSize: "14px", color: "#333", lineHeight: 2, fontFamily: "monospace" }}>
                床材（施主支給）… ¥0<br />
                壁塗装（DIY込）… ¥45,000<br />
                電気工事 ………… ¥120,000<br />
                <span style={{ color: "#888", fontSize: "12px" }}>全項目を一行ずつ公開</span>
              </p>
            </div>
          </div>
        </div>

        {/* Point 3 */}
        <div>
          <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Point 3
          </p>
          <p style={{ margin: "0 0 14px", fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: "#222" }}>
            居抜き活用・施主支給・DIYで、効率的な予算に
          </p>
          <p style={{ margin: "0 0 20px", fontSize: "clamp(14px, 2.5vw, 16px)", color: "#555", lineHeight: 1.85 }}>
            使えるものは活かす。買えるものはご自身で。できる作業は一緒に。それが予算を最大化する方法です。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
            {[
              { title: "居抜き活用", desc: "既存の設備・造作を活かしてコストを削減" },
              { title: "施主支給", desc: "家具・照明・資材をご自身で購入" },
              { title: "DIY参加", desc: "塗装などの工程に一緒に参加" },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  border: "1px solid #e8e4de",
                  borderRadius: "10px",
                  padding: "20px 16px",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: "0 0 8px", fontSize: "clamp(15px, 2.5vw, 18px)", fontWeight: 700, color: "#4A6741" }}>
                  {card.title}
                </p>
                <p style={{ margin: 0, fontSize: "clamp(12px, 2vw, 14px)", color: "#777", lineHeight: 1.75 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
