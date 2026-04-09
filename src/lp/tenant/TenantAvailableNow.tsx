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
  warm: "#d4a85c",
  blue: "#7ab8e0",
  green: "#7a9b6a",
  purple: "#9b7abf",
  teal: "#5bb8b8",
  slate: "#99a0aa",
  rose: "#c8889a",
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

export default function TenantAvailableNow() {
  const [selected] = useState<Property[]>(() => shuffle(allProperties).slice(0, 6));
  const [updateDate] = useState(getUpdateDate);
  const [phase, setPhase] = useState<"loading" | "done">("loading");
  const [statusIdx, setStatusIdx] = useState(0);
  const [animatedRows, setAnimatedRows] = useState<number[]>([]);
  const [showCount, setShowCount] = useState(false);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [openRow, setOpenRow] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  // Intersection Observer: start animation when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startAnimation();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function startAnimation() {
    // Status text flicker
    let si = 0;
    const flickerInterval = setInterval(() => {
      si++;
      setStatusIdx(si % statusTexts.length);
    }, 400);

    // After 1s, show rows
    setTimeout(() => {
      clearInterval(flickerInterval);
      setPhase("done");

      // Stagger row animations
      selected.forEach((_, i) => {
        setTimeout(() => {
          setAnimatedRows((prev) => [...prev, i]);
        }, i * 150);
      });

      // Show count after all rows
      setTimeout(() => {
        setShowCount(true);
      }, selected.length * 150 + 300);
    }, 1000);
  }

  const remainingCount = allProperties.length - selected.length;

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "48px 16px",
        background: "linear-gradient(180deg, #111 0%, #17191a 50%, #111 100%)",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#a0b090",
            marginBottom: "8px",
            textTransform: "uppercase" as const,
          }}
        >
          Available Now
        </p>

        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(18px, 4.5vw, 20px)",
            fontWeight: 700,
            color: "#f0ebe4",
            marginBottom: "6px",
          }}
        >
          現在ご紹介可能な物件
        </h2>

        {/* Update date */}
        <p style={{ textAlign: "center", fontSize: "12px", color: "#8a8578", marginBottom: "4px" }}>
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              background: "#7a9b6a",
              borderRadius: "50%",
              marginRight: "6px",
              verticalAlign: "middle",
              animation: "availablePulse 2s infinite",
            }}
          />
          <span>{updateDate}</span>
        </p>

        {/* Matching status */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: phase === "done" ? "#a0c090" : "#7a9b6a",
            marginBottom: "20px",
            minHeight: "18px",
          }}
        >
          {phase === "done" ? "条件に合う物件が見つかりました" : statusTexts[statusIdx]}
        </p>

        {/* Property list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "24px" }}>
          {selected.map((prop, i) => {
            const isVisible = animatedRows.includes(i);
            const isHovered = hoveredRow === i;
            const isOpen = openRow === i;
            return (
              <div key={i}>
                <div
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                  onClick={() => {
                    setOpenRow(isOpen ? null : i);
                    window.dataLayer?.push({ event: "property_detail_click", property_area: prop.area, property_index: i });
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "52px",
                    borderRadius: isOpen ? "8px 8px 0 0" : "8px",
                    overflow: "hidden",
                    background: "#1c1e1f",
                    borderStyle: "solid",
                    borderTopColor: isHovered || isOpen ? "#3a3c3e" : "#2a2c2e",
                    borderRightColor: isHovered || isOpen ? "#3a3c3e" : "#2a2c2e",
                    borderBottomColor: isOpen ? "transparent" : isHovered ? "#3a3c3e" : "#2a2c2e",
                    borderLeftColor: colorMap[prop.color],
                    borderWidth: "1px",
                    borderLeftWidth: "3px",
                    cursor: "pointer",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? isHovered
                        ? "scale(1.01)"
                        : "translateX(0)"
                      : "translateX(-40px)",
                    filter: isVisible ? "blur(0)" : "blur(3px)",
                    transition: isVisible
                      ? "transform 0.2s, box-shadow 0.2s, border-color 0.2s, border-radius 0.2s"
                      : "none",
                    animation: isVisible ? "rowSlideIn 0.45s cubic-bezier(0.34,1.4,0.64,1) forwards" : "none",
                    boxShadow: isHovered ? "0 3px 16px rgba(0,0,0,0.3)" : "none",
                  }}
                >
                  {/* Type badge */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: "68px",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      color: "#fff",
                      background: prop.type === "inuki" ? "#5c4a2e" : "#2e4a5c",
                    }}
                  >
                    {prop.type === "inuki" ? "居抜き" : "スケルトン"}
                  </div>

                  {/* Info */}
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "0 14px",
                      height: "100%",
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#e8e0d6",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      仙台 {prop.area}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        gap: "5px",
                        flexWrap: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {[prop.tsubo, ...prop.tags].map((tag, ti) => (
                        <span
                          key={ti}
                          style={{
                            fontSize: "10px",
                            padding: "2px 8px",
                            borderRadius: "10px",
                            background: "rgba(255,255,255,0.05)",
                            color: "rgba(255,255,255,0.45)",
                            border: "1px solid rgba(255,255,255,0.07)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rent (blurred) */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: "100px",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#161819",
                      position: "relative",
                      overflow: "hidden",
                      borderLeft: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#ddd",
                        filter: "blur(6px)",
                        userSelect: "none",
                      }}
                    >
                      {prop.rent}
                    </span>
                    {/* Hover overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0,0,0,0.25)",
                        opacity: isHovered ? 1 : 0,
                        transition: "opacity 0.25s",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          color: "#c8dcc8",
                          background: "rgba(74,103,65,0.45)",
                          padding: "4px 10px",
                          borderRadius: "10px",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        詳細を見る
                      </span>
                    </div>
                  </div>
                </div>

                {/* Accordion panel */}
                <div
                  style={{
                    maxHeight: isOpen ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(135deg, #1a2418, #1e2818)",
                      border: "1px solid #3a5a30",
                      borderTop: "none",
                      borderRadius: "0 0 8px 8px",
                      padding: "20px 16px",
                      textAlign: "center",
                    }}
                  >
                    <p style={{ fontSize: "14px", color: "#f0ebe4", marginBottom: "12px", lineHeight: 1.6 }}>
                      この物件の詳細（家賃・写真・条件）は<br />LINEでお送りしています
                    </p>
                    <a
                      href={LINE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.dataLayer?.push({ event: "line_cta_click", location: "property_accordion", property_area: prop.area });
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 24px",
                        background: "#06C755",
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: 700,
                        borderRadius: "50px",
                        textDecoration: "none",
                        boxShadow: "0 4px 20px rgba(6,199,85,0.25)",
                      }}
                    >
                      <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "#fff", flexShrink: 0 }}>
                        <path d={lineSvgPath} />
                      </svg>
                      この物件の詳細をLINEで受け取る
                    </a>
                    <p style={{ fontSize: "12px", color: "#8a8578", marginTop: "10px" }}>
                      30秒で完了・匿名OK・営業なし
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Remaining count */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#666",
            marginBottom: "20px",
            opacity: showCount ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        >
          他にも <strong style={{ color: "#a0c090", fontSize: "14px" }}>{remainingCount}</strong>{" "}
          件の非公開物件があります
        </p>

        {/* CTA */}
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.dataLayer?.push({ event: "line_cta_click", location: "available_now" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 32px",
              background: "#06C755",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
              borderRadius: "50px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(6,199,85,0.25)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            全ての物件情報をLINEで受け取る
          </a>
        </div>
        <p style={{ textAlign: "center", fontSize: "12px", color: "#777", marginTop: "8px" }}>
          無料・匿名OK・営業なし
        </p>
        <p style={{ textAlign: "center", fontSize: "11px", color: "#555", marginTop: "16px" }}>
          ※ 物件情報は随時入れ替わります
        </p>
      </div>

      {/* Keyframe animations */}
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
