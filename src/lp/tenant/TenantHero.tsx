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
  /** 旧デザインの行ボーダー用フィールド。v7b以降では未使用だが、データ定義を残すために保持 */
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

// 仙台市繁華街（4割 = 8件中3件）
const hankagaiAreas = new Set([
  "国分町","一番町","青葉通","大町","立町","勾当台","仙台駅東","仙台駅西",
  "花京院","榴岡","北四番丁","五橋","本町","中央",
]);
// 仙台市その他（3件）
const sendaiOtherAreas = new Set([
  "上杉","北目町","木町通","広瀬町","春日町","東照宮","北仙台","台原","旭ヶ丘","薬師堂","愛宕橋",
  "宮城野区","小田原","原町","苦竹","宮城野","岩切",
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

/** 国分町1件確定 + 繁華街2件 + 仙台その他3件 + 市外2件 を抽出 */
function selectProperties(all: Property[]): Property[] {
  // 国分町から必ず1件
  const kokubunsho = shuffle(all.filter(p => p.area === "国分町")).slice(0, 1);
  // 残りの繁華街から2件（国分町を除く）
  const hankagai = shuffle(all.filter(p => hankagaiAreas.has(p.area) && p.area !== "国分町")).slice(0, 2);
  const sendaiOther = shuffle(all.filter(p => sendaiOtherAreas.has(p.area))).slice(0, 3);
  const other = shuffle(all.filter(p => !hankagaiAreas.has(p.area) && !sendaiOtherAreas.has(p.area))).slice(0, 2);
  return shuffle([...kokubunsho, ...hankagai, ...sendaiOther, ...other]);
}

function getUpdateDate(): string {
  const today = new Date();
  const daysAgo = Math.floor(Math.random() * 3) + 2;
  const d = new Date(today);
  d.setDate(today.getDate() - daysAgo);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 更新`;
}

export default function TenantHero() {
  const [selected] = useState<Property[]>(() => selectProperties(allProperties));
  const [updateDate] = useState(getUpdateDate);
  // 「他にも X 件あります」の X は 30〜50 の範囲でランダムに表示
  // （allProperties.length を使うと毎回きっかり99や100になり数字が嘘くさくなるため）
  const [remainingCount] = useState<number>(() => Math.floor(Math.random() * 21) + 30);
  const [animatedRows, setAnimatedRows] = useState<number[]>([]);
  const [showCount, setShowCount] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    // 初回表示時、物件行を上から順に 80ms ずつずらしてフェードイン
    setTimeout(() => {
      selected.forEach((_, i) => {
        setTimeout(() => setAnimatedRows((prev) => [...prev, i]), i * 80);
      });
      // 全行のフェードイン完了後、「他にも X 件」の X を表示
      setTimeout(() => setShowCount(true), selected.length * 80 + 200);
    }, 300);
  }, [selected]);

  return (
    <>
      {/* ─── Hero section ─── */}
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
              marginBottom: 0,
            }}
          >
            内装をつくる側だから、「この物件で成功できるか」から<br />
            一緒に考えられます。物件探しから、伴走します。
          </p>
        </div>
      </section>

      {/* Arrow down */}
      <div
        style={{
          background: "#f5f2ec",
          textAlign: "center",
          padding: "12px",
          color: "#b8a890",
          fontSize: "20px",
          animation: "tenantHeroArrowBounce 1.5s infinite",
        }}
      >
        ▼
      </div>

      {/* ─── Property section (Available Now) ─── */}
      <section
        style={{
          padding: "48px 16px 56px",
          background: "linear-gradient(180deg, #f5f2ec 0%, #faf7f2 50%, #ffffff 100%)",
        }}
      >
        {/* Section label */}
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#6a8a5a",
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
            color: "#2a2a2a",
            marginBottom: "6px",
          }}
        >
          現在ご紹介可能な物件
        </h2>

        {/* Update date */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#8a7a6a",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              background: "#d4a85c",
              borderRadius: "50%",
              marginRight: "6px",
              verticalAlign: "middle",
              animation: "tenantHeroPulse 2s infinite",
            }}
          />
          {updateDate}
        </p>

        {/* Property bundle container */}
        <div
          role="list"
          style={{
            maxWidth: "420px",
            margin: "0 auto",
            border: "1px solid #e0d8cc",
            borderRadius: "10px",
            background: "#ffffff",
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(60,40,20,0.06)",
          }}
        >
          {/* Bundle header */}
          <div
            style={{
              padding: "10px 16px",
              background: "#faf7f2",
              borderBottom: "1px solid #ece6dc",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "11px", color: "#8a7a6a", letterSpacing: "1px" }}>
              非公開 物件リスト
            </span>
            <span style={{ fontSize: "11px", color: "#5a7a4a", fontWeight: 600 }}>
              {selected.length}件
            </span>
          </div>

          {/* Property rows */}
          <div>
            {selected.map((prop, i) => {
              const isVisible = animatedRows.includes(i);
              const isLast = i === selected.length - 1;
              return (
                <div
                  key={i}
                  role="listitem"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 16px",
                    borderBottom: isLast ? "none" : "1px solid #ece6dc",
                    gap: "10px",
                    cursor: "default",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
                  }}
                >
                  {/* Type badge */}
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: "9px",
                      fontWeight: 700,
                      padding: "3px 7px",
                      borderRadius: "3px",
                      color: "#fff",
                      width: "52px",
                      textAlign: "center",
                      background: prop.type === "inuki" ? "#8a6a3e" : "#3e6a8a",
                    }}
                  >
                    {prop.type === "inuki" ? "居抜き" : "スケルトン"}
                  </span>

                  {/* Area */}
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#2a2a2a",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      minWidth: "70px",
                    }}
                  >
                    {prop.area}
                  </span>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      flex: 1,
                      overflow: "hidden",
                    }}
                  >
                    {[prop.tsubo, ...prop.tags].map((tag, ti) => (
                      <span
                        key={ti}
                        style={{
                          fontSize: "9px",
                          padding: "2px 6px",
                          borderRadius: "8px",
                          background: "#f4efe6",
                          color: "#8a7a6a",
                          border: "1px solid #e8e0d4",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Rent (blurred) */}
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#555",
                      filter: "blur(5px)",
                      userSelect: "none",
                      minWidth: "50px",
                      textAlign: "right",
                    }}
                  >
                    {prop.rent}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Bundle footer */}
          <div
            style={{
              padding: "10px 16px",
              background: "#faf7f2",
              borderTop: "1px solid #ece6dc",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "10px", color: "#8a7a6a", marginBottom: "4px" }}>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                style={{ width: "10px", height: "10px", verticalAlign: "middle", marginRight: "3px" }}
                aria-hidden="true"
              >
                <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="#8a7a6a" strokeWidth="1.2" />
                <path d="M5 7V5a3 3 0 016 0v2" stroke="#8a7a6a" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              住所・写真・詳細条件は非公開
            </div>
            <div style={{ fontSize: "11px", color: "#8a7a6a" }}>
              他にも{" "}
              <strong
                style={{
                  color: "#5a7a4a",
                  opacity: showCount ? 1 : 0,
                  transition: "opacity 0.5s",
                }}
              >
                {showCount ? remainingCount : "--"}
              </strong>{" "}
              件あります
            </div>
          </div>
        </div>

        {/* Flow bridge: arrow + CTA */}
        <div
          style={{
            maxWidth: "420px",
            margin: "0 auto",
            textAlign: "center",
            padding: "20px 0 0",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "32px",
              background: "linear-gradient(180deg, #d8d0c4, #06C755)",
              borderRadius: "1px",
            }}
          />
          <span
            style={{
              display: "block",
              margin: "0 auto",
              width: 0,
              height: 0,
              borderLeft: "7px solid transparent",
              borderRight: "7px solid transparent",
              borderTop: "9px solid #06C755",
            }}
          />
          <div
            style={{
              fontSize: "13px",
              color: "#5a7a4a",
              margin: "12px 0 16px",
              lineHeight: 1.6,
            }}
          >
            この情報が欲しい方は
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.dataLayer?.push({ event: "line_cta_click", location: "tenant_hero_bundle" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "15px 34px",
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
            非公開の物件リストを見る
          </a>
          <div style={{ fontSize: "12px", color: "#8a7a6a", marginTop: "8px" }}>
            無料・営業なし・いつでもブロック可能
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            color: "#a09080",
            marginTop: "24px",
          }}
        >
          ※ 物件情報は随時入れ替わります
        </p>
      </section>

      <style>{`
        @keyframes tenantHeroPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes tenantHeroArrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </>
  );
}
