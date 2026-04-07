import { useState, useEffect, useRef } from "react";

const LINE_URL = "https://lin.ee/HVV0QJO";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

type PropertyType = "inuki" | "skeleton";
type ColorName = "warm" | "blue" | "green" | "purple" | "teal" | "slate" | "rose";

interface Property {
  area: string;
  type: PropertyType;
  tsubo: string;
  tags: string[];
  rent: string;
  color: ColorName;
}

const allProperties: Property[] = [
  { area: "国分町", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "1F"], rent: "20万円", color: "warm" },
  { area: "一番町", type: "skeleton", tsubo: "〜15坪", tags: ["飲食可", "路面"], rent: "15万円", color: "blue" },
  { area: "青葉区", type: "inuki", tsubo: "10坪〜", tags: ["飲食可", "設備込"], rent: "10万円", color: "green" },
  { area: "宮城野区", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "18万円", color: "purple" },
  { area: "泉区", type: "skeleton", tsubo: "30坪〜", tags: ["飲食可", "新築"], rent: "12万円", color: "teal" },
  { area: "太白区", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "角地"], rent: "14万円", color: "slate" },
  { area: "青葉通", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "B1F"], rent: "16万円", color: "rose" },
  { area: "国分町", type: "inuki", tsubo: "〜10坪", tags: ["飲食可", "小規模"], rent: "8万円", color: "warm" },
  { area: "長町", type: "skeleton", tsubo: "30坪〜", tags: ["飲食可", "駅近"], rent: "22万円", color: "blue" },
  { area: "五橋", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "13万円", color: "green" },
  { area: "本町", type: "skeleton", tsubo: "〜30坪", tags: ["オフィス街", "路面"], rent: "19万円", color: "purple" },
  { area: "南光台", type: "inuki", tsubo: "40坪〜", tags: ["飲食可", "駐車場"], rent: "11万円", color: "teal" },
  { area: "中央", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "2F"], rent: "9万円", color: "slate" },
  { area: "仙台駅東", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "駅前"], rent: "17万円", color: "rose" },
];

const colorMap: Record<ColorName, string> = {
  warm: "#d4a85c", blue: "#7ab8e0", green: "#7a9b6a",
  purple: "#9b7abf", teal: "#5bb8b8", slate: "#99a0aa", rose: "#c8889a",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getUpdateDate(): string {
  const today = new Date();
  const daysAgo = Math.floor(Math.random() * 3) + 2;
  const d = new Date(today);
  d.setDate(today.getDate() - daysAgo);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 更新`;
}

const statusTexts = [
  "物件情報を照合中...",
  "条件に合う物件を検索中...",
  "ネットワークから最新情報を取得中...",
];

export default function TenantHero() {
  const [selected] = useState<Property[]>(() => shuffle(allProperties).slice(0, 6));
  const [updateDate] = useState(getUpdateDate);
  const [phase, setPhase] = useState<"loading" | "done">("loading");
  const [statusIdx, setStatusIdx] = useState(0);
  const [animatedRows, setAnimatedRows] = useState<number[]>([]);
  const [showCount, setShowCount] = useState(false);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    let si = 0;
    const flickerInterval = setInterval(() => {
      si++;
      setStatusIdx(si % statusTexts.length);
    }, 400);

    setTimeout(() => {
      clearInterval(flickerInterval);
      setPhase("done");
      selected.forEach((_, i) => {
        setTimeout(() => setAnimatedRows((prev) => [...prev, i]), i * 150);
      });
      setTimeout(() => setShowCount(true), selected.length * 150 + 300);
    }, 1000);
  }, []);

  const remainingCount = allProperties.length - selected.length;

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #232820 0%, #1e2318 60%, #1a1e16 100%)",
        padding: "36px 16px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 10%, rgba(74,103,65,.18) 0%, rgba(100,140,80,.08) 35%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", width: "100%", margin: "0 auto", textAlign: "center" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: ".1em",
            color: "#8aab80",
            border: "1px solid rgba(74,103,65,.4)",
            background: "rgba(74,103,65,.12)",
            borderRadius: "100px",
            padding: "5px 16px",
            marginBottom: "28px",
          }}
        >
          仙台・宮城エリア限定
        </div>

        {/* Category */}
        <p style={{ fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 400, letterSpacing: ".15em", color: "rgba(200,220,200,.5)", marginBottom: "14px" }}>
          飲食店の物件探し × 内装工事
        </p>

        {/* H1 */}
        <h1
          style={{
            fontSize: "clamp(22px, 5vw, 36px)",
            fontWeight: 700,
            color: "#f0f0ea",
            lineHeight: 1.7,
            marginBottom: "12px",
            letterSpacing: ".02em",
          }}
        >
          お店の成功は、<br />
          <em style={{ fontStyle: "normal", color: "#a0c090" }}>物件選び</em>から始まっている。
        </h1>

        {/* Sub copy */}
        <p
          style={{
            fontSize: "clamp(13px, 2.3vw, 15px)",
            color: "rgba(220,230,210,.6)",
            lineHeight: 1.9,
            marginBottom: "32px",
          }}
        >
          内装をつくる側だから、「この物件で成功できるか」から<br />
          一緒に考えられます。物件探しから、伴走します。
        </p>

        {/* ─── Property list (AVAILABLE NOW) ─── */}
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {/* Section label */}
          <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#7a9b6a", marginBottom: "6px", textTransform: "uppercase" as const }}>
            Available Now
          </p>
          <p style={{ fontSize: "clamp(15px, 3.5vw, 17px)", fontWeight: 700, color: "#f0f0ea", marginBottom: "6px" }}>
            現在ご紹介可能な物件
          </p>
          <p style={{ fontSize: "12px", color: "#8a9a80", marginBottom: "4px" }}>
            <span style={{ display: "inline-block", width: "6px", height: "6px", background: "#7a9b6a", borderRadius: "50%", marginRight: "6px", verticalAlign: "middle", animation: "availablePulse 2s infinite" }} />
            {updateDate}
          </p>
          <p style={{ fontSize: "12px", color: phase === "done" ? "#a0c090" : "#7a9b6a", marginBottom: "16px", minHeight: "18px" }}>
            {phase === "done" ? "条件に合う物件が見つかりました" : statusTexts[statusIdx]}
          </p>

          {/* Rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
            {selected.map((prop, i) => {
              const isVisible = animatedRows.includes(i);
              const isHovered = hoveredRow === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "52px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    background: "#F8F5F0",
                    borderStyle: "solid",
                    borderTopColor: isHovered ? "#d8d0c4" : "#ece6dc",
                    borderRightColor: isHovered ? "#d8d0c4" : "#ece6dc",
                    borderBottomColor: isHovered ? "#d8d0c4" : "#ece6dc",
                    borderLeftColor: colorMap[prop.color],
                    borderWidth: "1px",
                    borderLeftWidth: "3px",
                    cursor: "pointer",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? (isHovered ? "scale(1.01)" : "translateX(0)") : "translateX(-40px)",
                    filter: isVisible ? "blur(0)" : "blur(3px)",
                    transition: isVisible ? "transform 0.2s, box-shadow 0.2s, border-color 0.2s" : "none",
                    animation: isVisible ? "rowSlideIn 0.45s cubic-bezier(0.34,1.4,0.64,1) forwards" : "none",
                    boxShadow: isHovered ? "0 3px 16px rgba(0,0,0,0.1)" : "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{ flexShrink: 0, width: "68px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, letterSpacing: "0.5px", color: "#fff", background: prop.type === "inuki" ? "#6a7a58" : "#5a7068" }}>
                    {prop.type === "inuki" ? "居抜き" : "スケルトン"}
                  </div>
                  <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "12px", padding: "0 14px", height: "100%", minWidth: 0 }}>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#2a2a2a", whiteSpace: "nowrap", flexShrink: 0 }}>
                      仙台 {prop.area}
                    </span>
                    <div style={{ display: "flex", gap: "5px", flexWrap: "nowrap", overflow: "hidden" }}>
                      {[prop.tsubo, ...prop.tags].map((tag, ti) => (
                        <span key={ti} style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "10px", background: "#f0ece4", color: "#6a6050", border: "1px solid #e0d8cc", whiteSpace: "nowrap" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ flexShrink: 0, width: "100px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f2ede6", position: "relative", overflow: "hidden", borderLeft: "1px solid #e4ddd4" }}>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#555", filter: "blur(6px)", userSelect: "none" }}>{prop.rent}</span>
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.6)", opacity: isHovered ? 1 : 0, transition: "opacity 0.25s" }}>
                      <span style={{ fontSize: "10px", color: "#fff", background: "#4A6741", padding: "4px 10px", borderRadius: "10px" }}>
                        詳細を見る
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Count */}
          <p style={{ fontSize: "12px", color: "#7a8a70", marginBottom: "24px", opacity: showCount ? 1 : 0, transition: "opacity 0.5s" }}>
            他にも <strong style={{ color: "#a0c090", fontSize: "14px" }}>{remainingCount}</strong> 件の非公開物件があります
          </p>
        </div>

        {/* CTA */}
        <div style={{ marginBottom: "10px" }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { window.dataLayer?.push({ event: "line_cta_click", location: "hero" }); }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#06C755",
              color: "#fff",
              borderRadius: "999px",
              padding: "14px 32px",
              fontSize: "clamp(15px, 2.8vw, 18px)",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: ".03em",
              boxShadow: "0 4px 24px rgba(6,199,85,.35)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            物件情報をLINEで受け取る
          </a>
        </div>
        <p style={{ fontSize: "12px", color: "#8a9a80", marginTop: "8px" }}>無料・匿名OK・営業なし</p>
        <p style={{ fontSize: "11px", color: "#607058", marginTop: "12px" }}>※ 物件情報は随時入れ替わります</p>
      </div>

      <style>{`
        @keyframes rowSlideIn {
          0% { opacity: 0; transform: translateX(-40px); filter: blur(3px); }
          70% { opacity: 1; transform: translateX(4px); filter: blur(0); }
          100% { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes availablePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
