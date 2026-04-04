import { useRef, useState, useCallback, useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}


function TenantBASlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);
  const hasFiredEvent = useRef(false);

  const getPosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return 50;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    return Math.max(0, Math.min(100, (x / rect.width) * 100));
  }, []);

  const fireSliderEvent = useCallback(() => {
    if (!hasFiredEvent.current) {
      hasFiredEvent.current = true;
      window.dataLayer?.push({ event: "ba_slider_interact" });
    }
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging.current) return;
      fireSliderEvent();
      setPosition(getPosition(clientX));
    },
    [getPosition, fireSliderEvent]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX);
    };
    const onEnd = () => {
      isDragging.current = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [handleMove]);

  const startDrag = (clientX: number) => {
    isDragging.current = true;
    fireSliderEvent();
    setPosition(getPosition(clientX));
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => {
        e.preventDefault();
        startDrag(e.clientX);
      }}
      onTouchStart={(e) => {
        if (e.touches[0]) startDrag(e.touches[0].clientX);
      }}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4/3",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: "pan-y",
      }}
    >
      <img
        src="/images/crossover-after-01-sm.webp"
        alt="CROSSOVER After"
        width="480"
        height="360"
        loading="lazy"
        draggable={false}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src="/images/crossover-before-01-sm.webp"
          alt="CROSSOVER Before"
          width="480"
          height="360"
          loading="lazy"
          draggable={false}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: "3px",
          backgroundColor: "#fff",
          transform: "translateX(-50%)",
          boxShadow: "0 0 8px rgba(0,0,0,0.4)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${position}%`,
          transform: "translate(-50%, -50%)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ pointerEvents: "none" }}>
          <path d="M6 4L2 10L6 16" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 4L18 10L14 16" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          backgroundColor: "rgba(55,65,81,0.85)",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 700,
          padding: "4px 12px",
          borderRadius: "4px",
          letterSpacing: "0.06em",
          zIndex: 1,
        }}
      >
        Before
      </span>
      <span
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          backgroundColor: "rgba(22,163,74,0.85)",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 700,
          padding: "4px 12px",
          borderRadius: "4px",
          letterSpacing: "0.06em",
          zIndex: 1,
        }}
      >
        After
      </span>
    </div>
  );
}

export default function TenantBeforeAfterCTA() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "56px 24px 0" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "0.7rem",
              fontWeight: 300,
              letterSpacing: "4px",
              color: "#C9A84C",
              textTransform: "uppercase",
            }}
          >
            BEFORE &amp; AFTER
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.5,
            }}
          >
            この物件を見つけてから<br />5週間で、こうなりました。
          </h2>
        </div>

        {/* Slider */}
        <TenantBASlider />
        <p style={{ textAlign: "center", fontSize: "11px", color: "#999", margin: "10px 0 0" }}>
          ◀ スライドして比較 ▶
        </p>

        {/* Case info */}
        <div
          style={{
            marginTop: "16px",
            padding: "16px 20px",
            backgroundColor: "#f9f8f6",
            borderRadius: "10px",
            border: "1px solid #eee",
          }}
        >
          <p style={{ margin: "0 0 4px", fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 700, color: "#222" }}>
            CROSSOVER
            <span style={{ fontSize: "clamp(11px, 2vw, 13px)", fontWeight: 400, color: "#888", marginLeft: "8px" }}>
              Cafe &amp; Bar
            </span>
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: "13px", color: "#666" }}>
              工期: <strong style={{ color: "#333" }}>5週間</strong>
            </span>
            <span style={{ fontSize: "13px", color: "#666" }}>
              費用: <strong style={{ color: "#C9A84C", fontSize: "16px" }}>90万円</strong>
            </span>
            <span style={{ fontSize: "13px", color: "#666" }}>18坪・スケルトン</span>
          </div>
        </div>

        {/* Story bridge */}
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(13px, 2.3vw, 15px)",
            color: "#666",
            lineHeight: 1.8,
            margin: "24px 0 0",
          }}
        >
          物件探しから内装まで一気通貫でサポート。<br />
          内装費用も、物件交渉も、損しない方法があります。
        </p>
      </div>
    </section>
  );
}
