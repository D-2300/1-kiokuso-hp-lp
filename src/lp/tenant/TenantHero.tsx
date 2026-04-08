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
  // 仙台市青葉区
  { area: "国分町", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "1F"], rent: "20万円", color: "warm" },
  { area: "一番町", type: "skeleton", tsubo: "〜15坪", tags: ["飲食可", "路面"], rent: "15万円", color: "blue" },
  { area: "青葉通", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "B1F"], rent: "16万円", color: "rose" },
  { area: "国分町", type: "inuki", tsubo: "〜10坪", tags: ["飲食可", "小規模"], rent: "8万円", color: "warm" },
  { area: "五橋", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "13万円", color: "green" },
  { area: "本町", type: "skeleton", tsubo: "〜30坪", tags: ["オフィス街", "路面"], rent: "19万円", color: "purple" },
  { area: "中央", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "2F"], rent: "9万円", color: "slate" },
  { area: "一番町", type: "inuki", tsubo: "10坪〜", tags: ["飲食可", "角地"], rent: "12万円", color: "teal" },
  { area: "大町", type: "skeleton", tsubo: "〜25坪", tags: ["飲食可", "路面"], rent: "18万円", color: "blue" },
  { area: "立町", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "1F"], rent: "11万円", color: "warm" },
  { area: "上杉", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "14万円", color: "green" },
  { area: "北目町", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "10万円", color: "slate" },
  { area: "花京院", type: "skeleton", tsubo: "〜15坪", tags: ["飲食可", "駅近"], rent: "16万円", color: "rose" },
  { area: "木町通", type: "inuki", tsubo: "10坪〜", tags: ["飲食可", "小規模"], rent: "7万円", color: "purple" },
  { area: "国分町", type: "skeleton", tsubo: "30坪〜", tags: ["飲食可", "B1F"], rent: "22万円", color: "teal" },
  { area: "広瀬町", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "2F"], rent: "9万円", color: "blue" },
  { area: "春日町", type: "inuki", tsubo: "〜10坪", tags: ["飲食可", "路面"], rent: "8万円", color: "warm" },
  // 仙台市宮城野区
  { area: "宮城野区", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "18万円", color: "purple" },
  { area: "仙台駅東", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "駅前"], rent: "17万円", color: "rose" },
  { area: "榴岡", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "路面"], rent: "14万円", color: "green" },
  { area: "小田原", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "1F"], rent: "12万円", color: "slate" },
  { area: "原町", type: "inuki", tsubo: "〜25坪", tags: ["飲食可", "駐車場"], rent: "10万円", color: "teal" },
  { area: "苦竹", type: "skeleton", tsubo: "30坪〜", tags: ["飲食可", "新築"], rent: "15万円", color: "warm" },
  { area: "宮城野", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "角地"], rent: "11万円", color: "blue" },
  { area: "岩切", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "8万円", color: "purple" },
  // 仙台市若林区
  { area: "若林区", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "13万円", color: "green" },
  { area: "荒井", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "駅近"], rent: "12万円", color: "rose" },
  { area: "連坊", type: "skeleton", tsubo: "〜15坪", tags: ["飲食可", "1F"], rent: "10万円", color: "slate" },
  { area: "卸町", type: "inuki", tsubo: "30坪〜", tags: ["飲食可", "駐車場"], rent: "9万円", color: "teal" },
  { area: "河原町", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "14万円", color: "warm" },
  { area: "六丁の目", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "新築"], rent: "11万円", color: "blue" },
  // 仙台市泉区
  { area: "泉区", type: "skeleton", tsubo: "30坪〜", tags: ["飲食可", "新築"], rent: "12万円", color: "teal" },
  { area: "泉中央", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "駅近"], rent: "15万円", color: "purple" },
  { area: "八乙女", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "11万円", color: "green" },
  { area: "将監", type: "inuki", tsubo: "〜25坪", tags: ["飲食可", "路面"], rent: "10万円", color: "rose" },
  { area: "南中山", type: "skeleton", tsubo: "〜15坪", tags: ["飲食可", "1F"], rent: "9万円", color: "slate" },
  { area: "市名坂", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "角地"], rent: "8万円", color: "warm" },
  // 仙台市太白区
  { area: "太白区", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "角地"], rent: "14万円", color: "slate" },
  { area: "長町", type: "skeleton", tsubo: "30坪〜", tags: ["飲食可", "駅近"], rent: "22万円", color: "blue" },
  { area: "南光台", type: "inuki", tsubo: "40坪〜", tags: ["飲食可", "駐車場"], rent: "11万円", color: "teal" },
  { area: "長町南", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "16万円", color: "warm" },
  { area: "富沢", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "駅近"], rent: "13万円", color: "purple" },
  { area: "鈎取", type: "skeleton", tsubo: "〜30坪", tags: ["飲食可", "駐車場"], rent: "10万円", color: "green" },
  { area: "西多賀", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "路面"], rent: "9万円", color: "rose" },
  { area: "山田", type: "inuki", tsubo: "30坪〜", tags: ["飲食可", "駐車場"], rent: "7万円", color: "slate" },
  // 石巻市
  { area: "石巻駅前", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "路面"], rent: "10万円", color: "warm" },
  { area: "石巻中央", type: "skeleton", tsubo: "〜25坪", tags: ["飲食可", "1F"], rent: "8万円", color: "blue" },
  { area: "蛇田", type: "inuki", tsubo: "30坪〜", tags: ["飲食可", "駐車場"], rent: "9万円", color: "green" },
  { area: "石巻西", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "駅近"], rent: "11万円", color: "purple" },
  // 大崎市
  { area: "古川駅前", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "駅近"], rent: "9万円", color: "teal" },
  { area: "古川", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "路面"], rent: "8万円", color: "rose" },
  { area: "古川七日町", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "1F"], rent: "7万円", color: "slate" },
  { area: "三本木", type: "skeleton", tsubo: "30坪〜", tags: ["飲食可", "駐車場"], rent: "6万円", color: "warm" },
  // 名取市
  { area: "名取駅前", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "駅近"], rent: "12万円", color: "blue" },
  { area: "杜せきのした", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "路面"], rent: "14万円", color: "green" },
  { area: "名取", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "駐車場"], rent: "9万円", color: "purple" },
  { area: "増田", type: "skeleton", tsubo: "〜25坪", tags: ["飲食可", "1F"], rent: "10万円", color: "teal" },
  // 多賀城市
  { area: "多賀城駅前", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "駅近"], rent: "10万円", color: "rose" },
  { area: "多賀城", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "路面"], rent: "8万円", color: "slate" },
  // 塩竈市
  { area: "塩釜駅前", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "9万円", color: "warm" },
  { area: "本塩釜", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "駅近"], rent: "8万円", color: "blue" },
  { area: "塩釜", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "1F"], rent: "7万円", color: "green" },
  // 岩沼市
  { area: "岩沼駅前", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "駅近"], rent: "9万円", color: "purple" },
  { area: "岩沼", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "8万円", color: "teal" },
  // 富谷市
  { area: "富谷", type: "inuki", tsubo: "30坪〜", tags: ["飲食可", "駐車場"], rent: "10万円", color: "rose" },
  { area: "成田", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "新築"], rent: "11万円", color: "slate" },
  // 利府町
  { area: "利府", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "8万円", color: "warm" },
  { area: "利府駅前", type: "skeleton", tsubo: "〜15坪", tags: ["飲食可", "路面"], rent: "9万円", color: "blue" },
  // 大和町・大衡村
  { area: "大和", type: "inuki", tsubo: "30坪〜", tags: ["飲食可", "駐車場"], rent: "7万円", color: "green" },
  { area: "吉岡", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "8万円", color: "purple" },
  // 気仙沼市
  { area: "気仙沼", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "7万円", color: "teal" },
  { area: "気仙沼駅前", type: "skeleton", tsubo: "〜15坪", tags: ["飲食可", "1F"], rent: "6万円", color: "rose" },
  // 登米市
  { area: "登米", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "6万円", color: "slate" },
  { area: "佐沼", type: "skeleton", tsubo: "〜25坪", tags: ["飲食可", "路面"], rent: "7万円", color: "warm" },
  // 栗原市
  { area: "栗原", type: "inuki", tsubo: "30坪〜", tags: ["飲食可", "駐車場"], rent: "5万円", color: "blue" },
  { area: "築館", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "6万円", color: "green" },
  // 白石市
  { area: "白石駅前", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "駅近"], rent: "7万円", color: "purple" },
  { area: "白石", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "路面"], rent: "6万円", color: "teal" },
  // 角田市
  { area: "角田", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "6万円", color: "rose" },
  // 東松島市
  { area: "矢本", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "7万円", color: "slate" },
  { area: "東松島", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "路面"], rent: "8万円", color: "warm" },
  // 亘理町・山元町
  { area: "亘理", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "7万円", color: "blue" },
  { area: "山元", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "6万円", color: "green" },
  // 柴田町・大河原町
  { area: "大河原", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "駅近"], rent: "8万円", color: "purple" },
  { area: "柴田", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "7万円", color: "teal" },
  { area: "船岡", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "路面"], rent: "6万円", color: "rose" },
  // 村田町・川崎町
  { area: "村田", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "5万円", color: "slate" },
  // 松島町・七ヶ浜町
  { area: "松島", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "路面"], rent: "9万円", color: "warm" },
  { area: "七ヶ浜", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "1F"], rent: "8万円", color: "blue" },
  // 仙台市追加
  { area: "あすと長町", type: "skeleton", tsubo: "〜25坪", tags: ["飲食可", "新築"], rent: "18万円", color: "green" },
  { area: "北四番丁", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "路面"], rent: "12万円", color: "purple" },
  { area: "勾当台", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "B1F"], rent: "20万円", color: "teal" },
  { area: "仙台駅西", type: "inuki", tsubo: "〜10坪", tags: ["飲食可", "駅近"], rent: "15万円", color: "rose" },
  { area: "東照宮", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "駐車場"], rent: "10万円", color: "slate" },
  { area: "北仙台", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "駅近"], rent: "13万円", color: "warm" },
  { area: "台原", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "路面"], rent: "9万円", color: "blue" },
  { area: "旭ヶ丘", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "1F"], rent: "11万円", color: "green" },
  { area: "薬師堂", type: "inuki", tsubo: "〜20坪", tags: ["飲食可", "路面"], rent: "10万円", color: "purple" },
  { area: "愛宕橋", type: "skeleton", tsubo: "〜15坪", tags: ["飲食可", "駅近"], rent: "12万円", color: "teal" },
];

const colorMap: Record<ColorName, string> = {
  warm: "#d4a85c", blue: "#7ab8e0", green: "#7a9b6a",
  purple: "#9b7abf", teal: "#5bb8b8", slate: "#99a0aa", rose: "#c8889a",
};

// 仙台市内のエリア名
const sendaiAreas = new Set([
  "国分町","一番町","青葉通","五橋","本町","中央","大町","立町","上杉","北目町",
  "花京院","木町通","広瀬町","春日町","北四番丁","勾当台","仙台駅西","東照宮",
  "北仙台","台原","旭ヶ丘","薬師堂","愛宕橋",
  "宮城野区","仙台駅東","榴岡","小田原","原町","苦竹","宮城野","岩切",
  "若林区","荒井","連坊","卸町","河原町","六丁の目",
  "泉区","泉中央","八乙女","将監","南中山","市名坂",
  "太白区","長町","南光台","長町南","富沢","鈎取","西多賀","山田","あすと長町",
]);

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 仙台市から6件 + 仙台市外から2件を抽出 */
function selectProperties(all: Property[]): Property[] {
  const sendai = shuffle(all.filter(p => sendaiAreas.has(p.area))).slice(0, 6);
  const other = shuffle(all.filter(p => !sendaiAreas.has(p.area))).slice(0, 2);
  return shuffle([...sendai, ...other]);
}

function getUpdateDate(): string {
  const today = new Date();
  const daysAgo = Math.floor(Math.random() * 3) + 2;
  const d = new Date(today);
  d.setDate(today.getDate() - daysAgo);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 更新`;
}

const statusTexts = [
  "物件情報を読み込み中...",
  "宮城県内の最新情報を取得中...",
  "非公開物件を確認中...",
];

export default function TenantHero() {
  const [selected] = useState<Property[]>(() => selectProperties(allProperties));
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
            {phase === "done" ? "現在ご紹介可能な物件の一部です" : statusTexts[statusIdx]}
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
                    height: "44px",
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
                      {prop.area}
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
