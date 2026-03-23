import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StudioNav from "../components/StudioNav";
import StudioFooter from "../components/StudioFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import { colors } from "../../shared/design-tokens";

interface Work {
  name: string;
  location: string;
  type: string;
  kind: string;
  cost: string;
  period: string;
  tsubo: string;
  story: string;
  tags: string[];
  after: string;
  before: string;
}

const works: Work[] = [
  {
    name: "バスケットボール Cafe&Bar CROSSOVER",
    location: "仙台市",
    type: "スポーツバー",
    kind: "スケルトン",
    cost: "¥900,000",
    period: "約10日",
    tsubo: "18坪",
    story:
      "バスケットボール好きにはたまらない空間を、極限までコストを削りながら実現しました。壁面にモルタルを施工して無骨な質感を出し、ブルーLEDが光るバーカウンターへ仕上げています。中古設備を最大限に活用しDIYを組み合わせることで、スケルトンから約90万円・10日間という驚異的なコストパフォーマンスを実現した事例です。",
    tags: ["DIY施工", "モルタル壁", "中古設備多用", "スケルトンから10日"],
    after: "/images/crossover-after-01.webp",
    before: "/images/crossover-before-01.webp",
  },
  {
    name: "ANVIL",
    location: "仙台市",
    type: "バー",
    kind: "居抜き",
    cost: "¥900,000",
    period: "約14日",
    tsubo: "15坪",
    story:
      "前のお店が残していったピンクの椅子と、大理石模様のカウンター。同じ空間を、まったく違う場所に変えたかった。\n\nカウンターの正面にトタン板を張った。棚をスチールに替え、裸電球を吊るした。テーブルは古材と鉄脚で、一つひとつ作った。\n\n前の店の骨格を活かしながら、新しいオーナーの世界を載せる。それが居抜きの醍醐味だと思っている。",
    tags: ["居抜き活用", "トタン壁", "スチール什器", "古材テーブル", "オリジナル家具"],
    after: "/images/anvil-after.webp",
    before: "/images/anvil-before.webp",
  },
  {
    name: "藍",
    location: "仙台市",
    type: "バー/割烹",
    kind: "居抜き",
    cost: "¥1,200,000",
    period: "約14日",
    tsubo: "10坪",
    story:
      "無垢材のカウンターと木の棚。前の店が長く使い込んだものだった。状態が良かったから、壊さずに使うことにした。\n\n変えたのは壁と床だけ。藍色の壁紙を全面に張った。それだけで、空間はまったく別の場所になった。\n\n残すものと変えるものを見極める。居抜きの本質は、そこにあると思う。",
    tags: ["居抜き活用", "壁紙全面施工", "既存カウンター活用", "和モダン", "フローリング張替"],
    after: "/images/case6-after.webp",
    before: "/images/case6-before.webp",
  },
  {
    name: "焼肉店",
    location: "仙台市",
    type: "焼肉店",
    kind: "居抜き",
    cost: "¥3,600,000",
    period: "約3週間",
    tsubo: "40坪",
    story:
      "ロースター、テーブル、革張りのベンチ、木のルーバー。前の店が残したものは、どれも状態が良かった。\n\n変えたのは壁と天井だけ。石壁を赤に、コンクリートの天井を黒に。\n\n同じ空間が、まったく違う温度を持った。壊さずに変える。40坪でも、やり方は同じだった。",
    tags: ["居抜き活用", "壁紙全面施工", "天井塗装", "既存設備フル活用", "大型物件", "ロースター継続使用"],
    after: "/images/yakiniku-after.webp",
    before: "/images/yakiniku-before.webp",
  },
  {
    name: "ラーメン店",
    location: "仙台市",
    type: "ラーメン店",
    kind: "居抜き",
    cost: "¥2,800,000",
    period: "約3週間",
    tsubo: "12坪",
    story:
      "L字型のオープンキッチン。カウンター、ダクト、照明レール。前の店のインフラは、全部使えた。\n\n壁と天井とカウンターを、黒く塗った。カウンターの下にLEDを仕込んだ。\n\nそれだけで、町のラーメン屋が、わざわざ来たくなる場所に変わった。",
    tags: ["居抜き活用", "全面黒塗装", "間接照明", "オープンキッチン", "モルタル床", "既存設備フル活用"],
    after: "/images/ramen-after.webp",
    before: "/images/ramen-before.webp",
  },
  {
    name: "テイクアウトカフェ OWL",
    location: "仙台市",
    type: "テイクアウトカフェ",
    kind: "居抜き",
    cost: "¥800,000",
    period: "約22日",
    tsubo: "10坪",
    story:
      "居抜き物件のインフラをそのまま活かし、最小限の手数で新しいお店に生まれ変わらせた事例です。既存カウンターはそのまま残し、壁の塗装はオーナー自身がDIYで施工。厨房機器はメルカリ・ヤフオクで調達し、設置のみ記憶荘が担当しました。",
    tags: ["居抜き活用", "DIY塗装", "中古厨房機器", "施主支給"],
    after: "/images/owl-after-01.webp",
    before: "/images/owl-before-01.webp",
  },
  {
    name: "ネイル・アイラッシュサロン",
    location: "仙台市",
    type: "ネイル・アイラッシュサロン",
    kind: "居抜き",
    cost: "¥900,000",
    period: "約18日",
    tsubo: "15坪",
    story:
      "居抜き物件をフル活用し、床・壁・棚の仕上げをオーナー自身がすべてDIYで施工した事例です。記憶荘が担当したのは電気・給排水などのインフラ工事のみ。みやぎ中小企業チャレンジ応援基金も活用し、約90万円で開業を実現しています。",
    tags: ["居抜き活用", "DIY全面施工", "施主支給什器", "補助金活用"],
    after: "/images/salon-after-01.webp",
    before: "/images/salon-before-01.webp",
  },
  {
    name: "パーソナルジム B-POINT",
    location: "仙台市",
    type: "パーソナルジム",
    kind: "スケルトン",
    cost: "¥1,400,000",
    period: "約30日",
    tsubo: "20坪",
    story:
      "スケルトン状態から防音工事・ミラー設置・床仕上げまで一気通貫で対応した事例です。トレーニングマシンはオーナーが直接調達し、記憶荘は搬入・設置を担当。公庫融資の見積書作成から保健所対応まで、開業に必要な手続きもすべてサポートしました。",
    tags: ["スケルトン施工", "防音工事", "施主支給マシン", "融資対応"],
    after: "/images/bpoint-after-01.webp",
    before: "/images/bpoint-before-01.webp",
  },
];

const CARD_GAP = 16;
const CARD_WIDTH_PC = 420;

function WorkCard({ work, cardWidth }: { work: Work; cardWidth: number }) {
  return (
    <div
      style={{
        width: `${cardWidth}px`,
        flexShrink: 0,
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        alignSelf: "stretch",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", flexShrink: 0 }}>
        {[
          { src: work.before, label: "BEFORE" },
          { src: work.after, label: "AFTER" },
        ].map(({ src, label }) => (
          <div key={label} style={{ position: "relative" }}>
            <img
              src={src}
              alt={`${work.name} ${label}`}
              style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }}
            />
            <span
              style={{
                position: "absolute",
                top: "8px",
                left: "8px",
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                fontSize: "11px",
                fontFamily: "'Anton', sans-serif",
                letterSpacing: "0.08em",
                padding: "2px 7px",
                borderRadius: "3px",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      <div style={{ padding: "16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <p style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: 700, color: colors.text, lineHeight: 1.4 }}>
          {work.name}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px", flexShrink: 0 }}>
          {[
            { label: "費用", value: work.cost },
            { label: "工期", value: work.period },
            { label: "物件", value: work.kind },
            { label: "坪数", value: work.tsubo },
          ].map((spec) => (
            <div
              key={spec.label}
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "5px",
                padding: "4px 8px",
                textAlign: "center",
              }}
            >
              <p style={{ margin: 0, fontSize: "9px", color: colors.mute, fontWeight: 500 }}>{spec.label}</p>
              <p style={{ margin: "1px 0 0", fontSize: "11px", fontWeight: 700, color: colors.text, whiteSpace: "nowrap" }}>
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "13px", color: colors.sub, lineHeight: 2.0, margin: "0 0 12px", whiteSpace: "pre-line", flex: 1 }}>
          {work.story}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", flexShrink: 0 }}>
          {work.tags.map((tag) => (
            <span key={tag} style={{ fontSize: "11px", color: "#888" }}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AllWorksCarousel({ works: allWorks }: { works: Work[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH_PC);
  const [currentIndex, setCurrentIndex] = useState(allWorks.length);
  const isTransitioning = useRef(false);

  const count = allWorks.length;
  const cloned = [...allWorks, ...allWorks, ...allWorks];

  const getOffset = useCallback(
    (index: number) => {
      const startPad = 24;
      return startPad + index * (cardWidth + CARD_GAP);
    },
    [cardWidth]
  );

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const containerW = containerRef.current.offsetWidth;
        const isMobile = containerW < 640;
        setCardWidth(isMobile ? containerW * 0.85 : CARD_WIDTH_PC);
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const offset = getOffset(currentIndex);
    el.style.transition = "none";
    el.style.transform = `translateX(-${offset}px)`;
  }, [cardWidth, getOffset, currentIndex]);

  const moveTo = useCallback(
    (index: number, animated: boolean) => {
      const el = trackRef.current;
      if (!el) return;
      const offset = getOffset(index);
      el.style.transition = animated ? "transform 0.42s cubic-bezier(0.25,0.46,0.45,0.94)" : "none";
      el.style.transform = `translateX(-${offset}px)`;
    },
    [getOffset]
  );

  const handleTransitionEnd = useCallback(() => {
    isTransitioning.current = false;
    const el = trackRef.current;
    if (!el) return;
    let next = currentIndex;
    if (currentIndex < count) {
      next = currentIndex + count;
    } else if (currentIndex >= count * 2) {
      next = currentIndex - count;
    }
    if (next !== currentIndex) {
      el.style.transition = "none";
      el.style.transform = `translateX(-${getOffset(next)}px)`;
      setCurrentIndex(next);
    }
  }, [currentIndex, count, getOffset]);

  const goNext = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    const next = currentIndex + 1;
    setCurrentIndex(next);
    moveTo(next, true);
  };

  const goPrev = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    const next = currentIndex - 1;
    setCurrentIndex(next);
    moveTo(next, true);
  };

  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) < 30) return;
    if (dx < 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  const activeNorm = ((currentIndex % count) + count) % count;

  return (
    <div style={{ marginTop: "48px" }}>
      <div ref={containerRef} style={{ position: "relative", overflow: "hidden" }}>
        <button
          onClick={goPrev}
          style={{
            position: "absolute",
            left: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "rgba(255,255,255,0.92)",
            border: "1px solid #E0E0E0",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          <ChevronLeft size={18} color="#555" />
        </button>
        <button
          onClick={goNext}
          style={{
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "rgba(255,255,255,0.92)",
            border: "1px solid #E0E0E0",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          <ChevronRight size={18} color="#555" />
        </button>

        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            padding: "4px 0 16px 24px",
            willChange: "transform",
            alignItems: "stretch",
          }}
        >
          {cloned.map((work, i) => (
            <WorkCard key={`${work.name}-${i}`} work={work} cardWidth={cardWidth} />
          ))}
          <div style={{ flexShrink: 0, width: "24px" }} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "8px" }}>
        {allWorks.map((_, i) => {
          const active = activeNorm === i;
          return (
            <div
              key={i}
              style={{
                width: active ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: active ? colors.gold ?? "#C9A84C" : "#D0D0D0",
                transition: "all 0.3s ease",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function StudioWorks() {
  return (
    <div style={{ backgroundColor: "#2E4229" }}>
      <div style={{ paddingTop: 0, backgroundColor: colors.beige }}>
        <StudioNav />

        <section style={{ position: "relative", height: "50vh", minHeight: "320px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#CFC7BD" }}>
            <img
              src="/assets/textures/oak-hardwood-floor.webp"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
          </div>
          <div
            style={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <p style={{ color: "#fff", fontFamily: "'Anton', sans-serif", fontSize: "48px", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" }}>Works</p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>施工事例</p>
          </div>
        </section>

        <div style={{ paddingBottom: "80px" }}>
          <ScrollFadeIn>
            <AllWorksCarousel works={works} />
          </ScrollFadeIn>
        </div>
      </div>
      <StudioFooter />
    </div>
  );
}
