export default function TenantWhy() {
  return (
    <section style={{ padding: "56px 20px", background: "#faf7f2" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#C9A84C",
            marginBottom: "10px",
            textTransform: "uppercase" as const,
            fontWeight: 600,
          }}
        >
          Why Us
        </p>

        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(19px, 4.8vw, 26px)",
            fontWeight: 700,
            color: "#1a1f14",
            textAlign: "center",
            marginBottom: "28px",
            lineHeight: 1.65,
            letterSpacing: "0.03em",
          }}
        >
          なぜ、仲介業を辞めて<br />
          内装屋になったのか
        </h2>

        {/* Lead: KAI identity */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            justifyContent: "center",
            marginBottom: "26px",
          }}
        >
          <img
            src="/images/about-kai-sm.webp"
            alt="KAI - ビジネス・交渉担当"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              objectFit: "cover",
              background: "#e0e0e0",
              flexShrink: 0,
            }}
          />
          <div>
            <p
              style={{
                fontSize: "13px",
                color: "#8a7a6a",
                marginBottom: "2px",
                letterSpacing: "0.04em",
              }}
            >
              KAI（ビジネス・交渉担当）
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#2a2a2a",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              元・不動産仲介業 約20年
            </p>
          </div>
        </div>

        {/* Body card */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #ece4d4",
            borderRadius: "14px",
            padding: "28px 22px",
            boxShadow: "0 2px 12px rgba(60,40,20,0.05)",
          }}
        >
          {/* Block 1 */}
          <div style={{ marginBottom: "22px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#6a8a5a",
                marginBottom: "8px",
                letterSpacing: "0.02em",
              }}
            >
              ① 仲介業では、本当にお客様の立場に立てない
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#444",
              }}
            >
              20年近く現場にいて、そう気づきました。仲介業には「その物件を決めてもらう」営業心が要ります。ノルマがある以上、どうしてもそうなる。
            </p>
          </div>

          {/* Block 2 */}
          <div style={{ marginBottom: "22px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#6a8a5a",
                marginBottom: "8px",
                letterSpacing: "0.02em",
              }}
            >
              ② 独立しても、構造は同じだった
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#444",
              }}
            >
              家主や売主から物件を預かる以上、どうしても貸主・売主の側に立ってしまう。借りる側・買う側の本当の味方にはなれない――その構造に、疑問を感じました。
            </p>
          </div>

          {/* Block 3 */}
          <div style={{ marginBottom: "22px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#6a8a5a",
                marginBottom: "8px",
                letterSpacing: "0.02em",
              }}
            >
              ③ だから、物件を売る立場から降りた
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#444",
              }}
            >
              内装をつくる職人たちと一緒に、会社を作り直しました。<br />
              「この物件で本当に成功できるか」だけを基準に話せます。決めさせる必要がないから、正直に言える。
            </p>
          </div>

          {/* Block 4 (new): structural position */}
          <div
            style={{
              borderTop: "1px dashed #e6ddcc",
              paddingTop: "20px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#6a8a5a",
                marginBottom: "8px",
                letterSpacing: "0.02em",
              }}
            >
              ④ だから今、「決めさせなくていい」立場にいます
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#444",
              }}
            >
              記憶荘は、内装工事で稼ぐ会社です。<br />
              物件の契約で稼いでいない。だから、物件選びを急かす理由がありません。<br />
              「この物件はやめた方がいい」も、正直に言える。そういう立場で話せます。
            </p>
          </div>
        </div>

        {/* Closing */}
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(15px, 3.6vw, 17px)",
            fontWeight: 700,
            color: "#1a1f14",
            marginTop: "28px",
            lineHeight: 1.7,
            letterSpacing: "0.03em",
          }}
        >
          店舗を出すとき、一番大事なのは<br />
          <em style={{ fontStyle: "normal", color: "#6a8a5a" }}>「誰がやるか」</em>
          だと思っています。
        </p>
      </div>
    </section>
  );
}
