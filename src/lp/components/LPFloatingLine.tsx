import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function LPFloatingLine() {
  const [visible, setVisible] = useState(false);
  const [hiddenByFinalCTA, setHiddenByFinalCTA] = useState(false);
  const finalCTARef = useRef<Element | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY >= 600);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const finalCTA = document.querySelector("[data-section='final-cta']");
    if (!finalCTA) return;
    finalCTARef.current = finalCTA;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHiddenByFinalCTA(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(finalCTA);
    return () => observer.disconnect();
  }, []);

  const isShown = visible && !hiddenByFinalCTA;

  const handleClick = () => {
    window.dataLayer?.push({
      event: "line_cta_click",
      button_location: "floating",
    });
    window.open("https://lin.ee/HVV0QJO", "_blank");
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        transform: isShown ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease",
        pointerEvents: isShown ? "auto" : "none",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "60px",
          backgroundColor: "#06C755",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          cursor: "pointer",
          borderRadius: "12px 12px 0 0",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        className="floating-line-bar"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 4C11.163 4 4 10.268 4 17.96c0 4.896 3.086 9.21 7.75 11.72-.34 1.27-1.23 4.6-1.41 5.31-.22.86.32 .85.67.62.28-.18 4.44-2.93 6.24-4.12.89.12 1.82.18 2.75.18 8.837 0 16-6.268 16-13.96S28.837 4 20 4z"
            fill="white"
          />
        </svg>
        <span
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "16px",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "0.02em",
          }}
          className="floating-line-text"
        >
          LINEで無料相談する
        </span>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .floating-line-bar {
            max-width: 100% !important;
            border-radius: 0 !important;
            height: 56px !important;
          }
          .floating-line-text {
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  );
}
