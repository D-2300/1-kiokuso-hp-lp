import { useRef, useState, useCallback, useEffect } from "react";

const swipeHintStyle: React.CSSProperties = {
  fontSize: "10px",
  color: "rgba(0,0,0,0.25)",
  textAlign: "center",
  marginTop: "8px",
  marginBottom: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0",
};

const cases = [
  {
    type: "スポーツバー",
    cost: "90万円",
    tsubo: "15坪",
    period: "5週間",
    before: "/images/crossover-before-01.webp",
    after: "/images/crossover-after-01.webp",
  },
  {
    type: "テイクアウトカフェ",
    cost: "80万円",
    tsubo: "10坪",
    period: "22日",
    before: "/images/owl-before-01.webp",
    after: "/images/owl-after-01.webp",
  },
  {
    type: "パーソナルジム",
    cost: "140万円",
    tsubo: "20坪",
    period: "30日",
    before: "/images/bpoint-before-01.webp",
    after: "/images/bpoint-after-01.webp",
  },
  {
    type: "ネイルサロン",
    cost: "90万円",
    tsubo: "15坪",
    period: "18日",
    before: "/images/salon-before-01.webp",
    after: "/images/salon-after-01.webp",
  },
  {
    type: "バー",
    cost: "90万円",
    tsubo: "15坪",
    period: "14日",
    before: "/images/anvil-before.webp",
    after: "/images/anvil-after.webp",
  },
  {
    type: "バー/割烹",
    cost: "120万円",
    tsubo: "10坪",
    period: "14日",
    before: "/images/case6-before.webp",
    after: "/images/case6-after.webp",
  },
];

const extended = [cases[cases.length - 1], ...cases, cases[0]];

export default function LPBeforeAfter() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);
  const isAnimating = useRef(false);

  const getCardWidth = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 300;
    const card = el.children[0] as HTMLElement | undefined;
    return card ? card.offsetWidth + 16 : 300;
  }, []);

  const jumpTo = useCallback((i: number, animated: boolean) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = getCardWidth();
    const padding = window.innerWidth * 0.05;
    el.style.transition = animated ? "transform 0.4s ease" : "none";
    el.style.transform = `translateX(calc(${padding}px - ${i * cardWidth}px))`;
  }, [getCardWidth]);

  useEffect(() => {
    jumpTo(1, false);
  }, [jumpTo]);

  const navigate = (dir: "prev" | "next") => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setTransitioning(true);
    const next = dir === "next" ? index + 1 : index - 1;
    setIndex(next);
    jumpTo(next, true);

    setTimeout(() => {
      if (next === 0) {
        jumpTo(cases.length, false);
        setIndex(cases.length);
      } else if (next === extended.length - 1) {
        jumpTo(1, false);
        setIndex(1);
      }
      setTransitioning(false);
      isAnimating.current = false;
    }, 420);
  };

  return (
    <section style={{ padding: "48px 0 0", backgroundColor: "#fff", overflow: "hidden" }}>
      <style>{`
        @media (max-width: 767px) {
          .ba-card { min-width: 85vw !important; }
        }
      `}</style>

      <div
        style={{
          position: "relative",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          overflow: "hidden",
        }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "16px",
            willChange: "transform",
          }}
        >
          {extended.map((c, i) => (
            <div
              key={`${c.type}-${i}`}
              className="ba-card"
              style={{
                flexShrink: 0,
                minWidth: "70vw",
                backgroundColor: "#fff",
                border: "1px solid #eee",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {(["Before", "After"] as const).map((label) => (
                  <div key={label} style={{ position: "relative" }}>
                    <div style={{ height: "clamp(144px, 20vw, 240px)", overflow: "hidden" }}>
                      <img
                        src={label === "Before" ? c.before : c.after}
                        alt={`${c.type} ${label}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <span
                      style={{
                        position: "absolute",
                        bottom: "8px",
                        left: "8px",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#fff",
                        backgroundColor: label === "Before" ? "rgba(55,65,81,0.85)" : "rgba(22,163,74,0.85)",
                        padding: "3px 10px",
                        borderRadius: "4px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "10px 14px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontSize: "12px", color: "#888" }}>{c.type}</span>
                  <span style={{ fontSize: "20px", fontWeight: 700, color: "#222" }}>{c.cost}</span>
                </div>
                <span style={{ fontSize: "11px", color: "#888" }}>{c.tsubo} ／ {c.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "10px",
          marginBottom: "4px",
        }}
      >
        <button
          onClick={() => navigate("prev")}
          aria-label="前へ"
          disabled={transitioning}
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "1px solid rgba(0,0,0,0.12)",
            backgroundColor: "#fff",
            cursor: "pointer",
            fontSize: "12px",
            color: "rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          ‹
        </button>
        <button
          onClick={() => navigate("next")}
          aria-label="次へ"
          disabled={transitioning}
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "1px solid rgba(0,0,0,0.12)",
            backgroundColor: "#fff",
            cursor: "pointer",
            fontSize: "12px",
            color: "rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          ›
        </button>
      </div>

      {hintVisible && (
        <div style={swipeHintStyle}>
          <span>スワイプで見る</span>
          <button
            onClick={() => setHintVisible(false)}
            aria-label="案内を閉じる"
            style={{
              fontSize: "10px",
              color: "rgba(0,0,0,0.25)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 0 0 8px",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
