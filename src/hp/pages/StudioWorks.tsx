import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
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
    story: "バスケットボール好きにはたまらない空間を、極限までコストを削りながら実現しました。壁面にモルタルを施工して無骨な質感を出し、ブルーLEDが光るバーカウンターへ仕上げています。中古設備を最大限に活用しDIYを組み合わせることで、スケルトンから約90万円・10日間という驚異的なコストパフォーマンスを実現した事例です。",
    tags: ["DIY施工", "モルタル壁", "中古設備多用", "スケルトンから10日"],
    after: "/images/crossover-after-01-sm.webp",
    before: "/images/crossover-before-01-sm.webp",
  },
  {
    name: "ANVIL",
    location: "仙台市",
    type: "バー",
    kind: "居抜き",
    cost: "¥900,000",
    period: "約14日",
    tsubo: "15坪",
    story: "前のお店が残していったピンクの椅子と、大理石模様のカウンター。同じ空間を、まったく違う場所に変えたかった。\n\nカウンターの正面にトタン板を張った。棚をスチールに替え、裸電球を吊るした。テーブルは古材と鉄脚で、一つひとつ作った。\n\n前の店の骨格を活かしながら、新しいオーナーの世界を載せる。それが居抜きの醜醐味だと思っている。",
    tags: ["居抜き活用", "トタン壁", "スチール什器", "古材テーブル", "オリジナル家具"],
    after: "/images/anvil-after-sm.webp",
    before: "/images/anvil-before-sm.webp",
  },
  {
    name: "藍",
    location: "仙台市",
    type: "バー/割烹",
    kind: "居抜き",
    cost: "¥1,200,000",
    period: "約14日",
    tsubo: "10坪",
    story: "無垢材のカウンターと木の棚。前の店が長く使い込んだものだった。状態が良かったから、壊さずに使うことにした。\n\n変えたのは壁と床だけ。藍色の壁紙を全面に張った。それだけで、空間はまったく別の場所になった。\n\n残すものと変えるものを見極める。居抜きの本質は、そこにあると思う。",
    tags: ["居抜き活用", "壁紙全面施工", "既存カウンター活用", "和モダン", "フローリング張替"],
    after: "/images/case6-after-sm.webp",
    before: "/images/case6-before-sm.webp",
  },
  {
    name: "焼肉店",
    location: "仙台市",
    type: "焼肉店",
    kind: "居抜き",
    cost: "¥3,600,000",
    period: "約3週間",
    tsubo: "40坪",
    story: "ロースター、テーブル、革張りのベンチ、木のルーバー。前の店が残したものは、どれも状態が良かった。\n\n変えたのは壁と天井だけ。石壁を赤に、コンクリートの天井を黒に。\n\n同じ空間が、まったく違う温度を持った。壊さずに変える。40坪でも、やり方は同じだった。",
    tags: ["居抜き活用", "壁紙全面施工", "天井塗装", "既存設備フル活用", "大型物件", "ロースター継続使用"],
    after: "/images/yakiniku-after-sm.webp",
    before: "/images/yakiniku-before-sm.webp",
  },
  {
    name: "ラーメン店",
    location: "仙台市",
    type: "ラーメン店",
    kind: "居抜き",
    cost: "¥2,800,000",
    period: "約3週間",
    tsubo: "12坪",
    story: "L字型のオープンキッチン。カウンター、ダクト、照明レール。前の店のインフラは、全部使えた。\n\n壁と天井とカウンターを、黒く塗った。カウンターの下にLEDを仕込んだ。\n\nそれだけで、町のラーメン屋が、わざわざ来たくなる場所に変わった。",
    tags: ["居抜き活用", "全面黒塗装", "間接照明", "オープンキッチン", "モルタル床", "既存設備フル活用"],
    after: "/images/ramen-after-sm.webp",
    before: "/images/ramen-before-sm.webp",
  },
  {
    name: "テイクアウトカフェ OWL",
    location: "仙台市",
    type: "テイクアウトカフェ",
    kind: "居抜き",
    cost: "¥800,000",
    period: "約22日",
    tsubo: "10坪",
    story: "居抜き物件のインフラをそのまま活かし、最小限の手数で新しいお店に生まれ変わらせた事例です。既存カウンターはそのまま残し、壁の塗装はオーナー自身がDIYで施工。厨房機器はメルカリ・ヤフオクで調達し、設置のみ記憶荘が担当しました。",
    tags: ["居抜き活用", "DIY塗装", "中古厨房機器", "施主支給"],
    after: "/images/owl-after-01-sm.webp",
    before: "/images/owl-before-01-sm.webp",
  },
  {
    name: "ネイル・アイラッシュサロン",
    location: "仙台市",
    type: "ネイル・アイラッシュサロン",
    kind: "居抜き",
    cost: "¥900,000",
    period: "約18日",
    tsubo: "15坪",
    story: "居抜き物件をフル活用し、床・壁・棚の仕上げをオーナー自身がすべてDIYで施工した事例です。記憶荘が担当したのは電気・給排水などのインフラ工事のみ。みやぎ中小企業チャレンジ応援基金も活用し、約90万円で開業を実現しています。",
    tags: ["居抜き活用", "DIY全面施工", "施主支給什器", "補助金活用"],
    after: "/images/salon-after-01-sm.webp",
    before: "/images/salon-before-01-sm.webp",
  },
  {
    name: "パーソナルジム B-POINT",
    location: "仙台市",
    type: "パーソナルジム",
    kind: "スケルトン",
    cost: "¥1,400,000",
    period: "約30日",
    tsubo: "20坪",
    story: "スケルトン状態から防音工事・ミラー設置・床仕上げまで一気通貫で対応した事例です。トレーニングマシンはオーナーが直接調達し、記憶荘は搬入・設置を担当。公庫融資の見積書作成から保健所対応まで、開業に必要な手続きもすべてサポートしました。",
    tags: ["スケルトン施工", "防音工事", "施主支給マシン", "融資対応"],
    after: "/images/bpoint-after-01-sm.webp",
    before: "/images/bpoint-before-01-sm.webp",
  },
];

/* ── Pickup Section ── */
function PickupSection() {
  return (
    <section style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
        <span style={{
          display: "inline-block",
          background: "#C9A84C",
          color: "#fff",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.15em",
          padding: "3px 10px",
          borderRadius: "2px",
          textTransform: "uppercase",
        }}>
          PICKUP
        </span>
        <span style={{ fontSize: "13px", color: "#888", letterSpacing: "0.08em" }}>
          ピックアップ記事
        </span>
      </div>

      <Link
        to="/studio/works/crossover"
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          background: "#fff",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.16)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.10)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
        >
          <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
            <img
              src="/images/crossover-after-01-sm.webp"
              alt="CROSSOVER 完成写真"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7))",
            }} />
            <div style={{ position: "absolute", bottom: "20px", left: "24px", right: "24px" }}>
              <p style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                margin: "0 0 6px",
                textTransform: "uppercase",
              }}>
                CASE 001 — スケルトンから10日
              </p>
              <p style={{
                color: "#fff",
                fontSize: "clamp(18px, 3.5vw, 26px)",
                fontWeight: 700,
                margin: "0 0 4px",
                lineHeight: 1.4,
              }}>
                バスケットボール Cafe&Bar CROSSOVER
              </p>
            </div>
          </div>

          <div style={{ padding: "20px 24px 24px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
              {[
                { label: "費用", value: "¥900,000" },
                { label: "工期", value: "約10日" },
                { label: "物件", value: "スケルトン" },
                { label: "坪数", value: "18坪" },
              ].map((s) => (
                <span key={s.label} style={{
                  fontSize: "12px",
                  color: "#555",
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: "4px",
                  padding: "3px 10px",
                }}>
                  {s.label}: <strong style={{ fontWeight: 700 }}>{s.value}</strong>
                </span>
              ))}
            </div>
            <p style={{
              fontSize: "14px",
              color: "#555",
              lineHeight: 2.0,
              margin: "0 0 16px",
            }}>
              閉店バーの什器をフル活用し、スケルトンから90万円・10日でバスケカフェバーを完成。施工の背景とプロセスを詳しく紹介しています。
            </p>
            <span style={{
              fontSize: "13px",
              color: "#4A6741",
              fontWeight: 600,
              letterSpacing: "0.06em",
            }}>
              詳しく見る →
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}

function WorkCard({ work }: { work: Work }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
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
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 700,
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const totalCards = allWorks.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardWidthPercent = isMobile ? 100 : 33.333;
  const maxIndex = isMobile ? totalCards - 1 : Math.max(0, totalCards - 3);

  const goLeft = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const goRight = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchMove = (e: React.TouchEvent) => { touchEndX.current = e.touches[0].clientX; };
  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) goRight();
    if (diff < -50) goLeft();
  };

  const dotCount = isMobile ? totalCards : maxIndex + 1;

  return (
    <div style={{ marginTop: "48px", paddingBottom: "8px" }}>
      <div style={{ position: "relative" }}>
        <button
          onClick={goLeft}
          style={{
            position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", zIndex: 10,
            background: "rgba(255,255,255,0.92)", border: "1px solid #E0E0E0", borderRadius: "50%",
            width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            opacity: currentIndex === 0 ? 0.3 : 1, pointerEvents: currentIndex === 0 ? "none" : "auto",
          }}
          aria-label="前へ"
        >
          <ChevronLeft size={18} color="#555" />
        </button>

        <button
          onClick={goRight}
          style={{
            position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", zIndex: 10,
            background: "rgba(255,255,255,0.92)", border: "1px solid #E0E0E0", borderRadius: "50%",
            width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            opacity: currentIndex === maxIndex ? 0.3 : 1, pointerEvents: currentIndex === maxIndex ? "none" : "auto",
          }}
          aria-label="次へ"
        >
          <ChevronRight size={18} color="#555" />
        </button>

        <div style={{ overflow: "hidden", margin: "0 44px" }}>
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{
              display: "flex",
              transition: "transform 0.4s ease",
              transform: `translateX(-${currentIndex * cardWidthPercent}%)`,
            }}
          >
            {allWorks.map((work, i) => (
              <div key={i} style={{ flex: `0 0 ${cardWidthPercent}%`, padding: "4px 8px 16px" }}>
                <WorkCard work={work} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "12px" }}>
        {Array.from({ length: dotCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: currentIndex === i ? "20px" : "6px", height: "6px", borderRadius: "3px",
              backgroundColor: currentIndex === i ? (colors.gold ?? "#C9A84C") : "#D0D0D0",
              border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0,
            }}
            aria-label={`スライド ${i + 1}`}
          />
        ))}
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
              src="/assets/textures/oak-hardwood-floor-sm.webp"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
          </div>
          <div
            style={{
              position: "relative", zIndex: 1, height: "100%",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px",
            }}
          >
            <p style={{ color: "#fff", fontFamily: "'Noto Sans JP', sans-serif", fontSize: "clamp(32px, 9vw, 48px)", fontWeight: 900, letterSpacing: "clamp(0.06em, 1.5vw, 0.12em)", textTransform: "uppercase" }}>Works</p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>施工事例</p>
          </div>
        </section>

        <ScrollFadeIn>
          <PickupSection />
        </ScrollFadeIn>

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
