export default function LPSolutionPoints() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "40px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>

        {/* Point 1 */}
        <div>
          <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.1em" }}>
            Point 1
          </p>
          <p style={{ margin: "0 0 12px", fontSize: "15px", fontWeight: 700, color: "#333" }}>
            設計から施工まで、一気通貫で対応
          </p>
          <p style={{ margin: "0 0 16px", fontSize: "13px", color: "#666", lineHeight: 1.8 }}>
            担当が一人なので、伝言ゲームが起きません。ヒアリングした内容が設計に、設計が施工にそのまま反映されます。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <div style={{ border: "1px solid #ddd", borderRadius: "6px", padding: "14px" }}>
              <p style={{ margin: "0 0 8px", fontSize: "11px", color: "#999" }}>一般的</p>
              <p style={{ margin: 0, fontSize: "12px", color: "#666", lineHeight: 1.8 }}>
                営業→デザイナー→現場監督→各職人
                <br />
                会社によって3〜5人が関わる
              </p>
            </div>
            <div
              style={{
                border: "2px solid #C9A84C",
                borderRadius: "6px",
                padding: "14px",
                backgroundColor: "#fffdf5",
              }}
            >
              <p style={{ margin: "0 0 8px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>
                記憶荘
              </p>
              <p style={{ margin: 0, fontSize: "12px", color: "#333", lineHeight: 1.8 }}>
                相談→設計→施工→引渡し
                <br />
                すべてDAIが直接対応
              </p>
            </div>
          </div>
        </div>

        {/* Point 2 */}
        <div>
          <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.1em" }}>
            Point 2
          </p>
          <p style={{ margin: "0 0 12px", fontSize: "15px", fontWeight: 700, color: "#333" }}>
            見積もりは全項目を公開
          </p>
          <p style={{ margin: "0 0 16px", fontSize: "13px", color: "#666", lineHeight: 1.8 }}>
            何にいくらかかるか、一行ずつすべて開示します。「一式」でまとめる項目はありません。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <div style={{ border: "1px solid #ddd", borderRadius: "6px", padding: "14px", backgroundColor: "#fafafa" }}>
              <p style={{ margin: "0 0 8px", fontSize: "11px", color: "#999" }}>よくある見積もり</p>
              <p style={{ margin: 0, fontSize: "12px", color: "#666", lineHeight: 2, fontFamily: "monospace" }}>
                内装工事一式 … ¥1,500,000<br />
                諸経費 ………… ¥200,000
              </p>
            </div>
            <div
              style={{
                border: "2px solid #C9A84C",
                borderRadius: "6px",
                padding: "14px",
                backgroundColor: "#fffdf5",
              }}
            >
              <p style={{ margin: "0 0 8px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>
                記憶荘の見積もり
              </p>
              <p style={{ margin: 0, fontSize: "12px", color: "#333", lineHeight: 2, fontFamily: "monospace" }}>
                床材（施主支給）… ¥0<br />
                壁塗装（DIY込）… ¥45,000<br />
                電気工事 ………… ¥120,000<br />
                <span style={{ color: "#666", fontSize: "11px" }}>全項目を一行ずつ公開</span>
              </p>
            </div>
          </div>
        </div>

        {/* Point 3 */}
        <div>
          <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.1em" }}>
            Point 3
          </p>
          <p style={{ margin: "0 0 12px", fontSize: "15px", fontWeight: 700, color: "#333" }}>
            居抜き活用・施主支給・DIYで、効率的な予算に
          </p>
          <p style={{ margin: "0 0 16px", fontSize: "13px", color: "#666", lineHeight: 1.8 }}>
            使えるものは活かす。買えるものはご自身で。できる作業は一緒に。それが予算を最大化する方法です。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
            {[
              { title: "居抜き活用", desc: "既存の設備・造作を活かしてコストを削減" },
              { title: "施主支給", desc: "家具・照明・資材をご自身で購入" },
              { title: "DIY参加", desc: "塗装などの工程に一緒に参加" },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  border: "1px solid #e8e4de",
                  borderRadius: "6px",
                  padding: "14px 12px",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: "0 0 6px", fontSize: "13px", fontWeight: 700, color: "#4A6741" }}>
                  {card.title}
                </p>
                <p style={{ margin: 0, fontSize: "11px", color: "#888", lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
