const steps = [
  {
    step: "Step 0",
    name: "LINE相談",
    cost: "無料",
    costColor: "#06C755",
    desc: "物件の写真や図面をLINEで送るだけ。翌営業日までに概算をお伝えします。物件が決まっていなくてもOKです。",
  },
  {
    step: "Step 1",
    name: "現地調査・ヒアリング",
    cost: "無料〜1万円",
    costColor: "#555",
    desc: "実際に物件を見て、設備の状態・インフラ・活かせるものを確認します。仙台市内は無料、それ以外は交通費として最大1万円いただく場合があります。",
  },
  {
    step: "Step 2",
    name: "詳細見積もり",
    cost: "3〜6万円",
    costColor: "#555",
    desc: "全項目を一行ずつ記載した見積もりを作成。融資用の書類としてもそのまま使えます。納得いかなければここで終了できます。融資が必要な場合は、公庫向けの見積書・事業計画書の作成もサポートします。",
  },
  {
    step: "Step 3",
    name: "施工",
    cost: "見積もり金額",
    costColor: "#555",
    desc: "工事開始。工程ごとに写真で進捗を共有します。DIY参加の日程もここで調整します。消防検査の立会い対応も記憶荘が行います。",
  },
  {
    step: "Step 4",
    name: "引渡し",
    cost: "",
    costColor: "#555",
    desc: "最終確認後にお引渡し。施工後の不具合はLINEで連絡いただければ対応します。飲食店の場合は保健所検査のサポートも対応。届出まで一貫してお任せください。",
  },
];

export default function LPFlow() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "32px 20px 48px", borderTop: "3px solid #C9A84C" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.12em" }}>FLOW</p>
        <p style={{ margin: "0 0 28px", fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: "#222" }}>ご相談からお引渡しまで</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((s, i) => (
            <div key={s.step} style={{ display: "flex", alignItems: "stretch" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "40px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#C9A84C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "14px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#fff", fontWeight: 700 }}>{i}</span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: "2px", flex: 1, backgroundColor: "#e0e0e0", minHeight: "24px" }} />
                )}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "16px 0 16px 16px",
                  borderBottom: i < steps.length - 1 ? "1px solid #f5f5f5" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontSize: "11px", color: "#aaa", letterSpacing: "0.06em" }}>{s.step}</p>
                    <p
                      style={{
                        margin: "3px 0 0",
                        fontSize: "clamp(16px, 3vw, 20px)",
                        fontWeight: 700,
                        color: "#222",
                      }}
                    >
                      {s.name}
                    </p>
                    <p
                      style={{
                        margin: "6px 0 0",
                        fontSize: "clamp(12px, 2vw, 14px)",
                        color: "#888",
                        lineHeight: 1.75,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                  {s.cost && (
                    <p
                      style={{
                        margin: "18px 0 0",
                        fontSize: "clamp(14px, 2.5vw, 17px)",
                        fontWeight: 700,
                        color: s.costColor,
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.cost}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ margin: "20px 0 0", fontSize: "13px", color: "#888", textAlign: "center", lineHeight: 1.8 }}>
          物件が決まっていなくてもStep 0から始められます。
        </p>
      </div>
    </section>
  );
}
