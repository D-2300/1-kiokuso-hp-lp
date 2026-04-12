import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

const items = [
  <>利回りの良い物件は<em>すぐ売れてしまう</em>。ネットに出たときにはもう遅い。</>,
  <>残っているのは築古・空室あり・修繕費がかかりそうな物件ばかり。<em>手を出していいのか分からない</em>。</>,
  <>不動産屋に相談しても、<em>内装の改修費がいくらかかるか</em>は教えてくれない。利回り計算が完成しない。</>,
  <>「リフォームすれば儲かるかも」と思っても、<em>どこに頼めばいくらで直せるのか</em>見当がつかない。</>,
];

export default function MProblem() {
  return (
    <section style={{ backgroundColor: C.white, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader label="PROBLEM" heading={"「儲かる物件」が\n見つからない。"} />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                padding: "16px 18px",
                backgroundColor: "#FAFAFA",
                borderRadius: "4px",
                border: "1px solid #F0EDE8",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: M.main,
                  flexShrink: 0,
                  marginTop: "7px",
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "clamp(14px, 3.5vw, 15px)",
                  color: C.textDark,
                  lineHeight: 1.85,
                }}
              >
                <style>{`
                  .problem-item em {
                    font-style: normal;
                    color: ${M.main};
                    font-weight: 500;
                  }
                `}</style>
                <span className="problem-item">{item}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
