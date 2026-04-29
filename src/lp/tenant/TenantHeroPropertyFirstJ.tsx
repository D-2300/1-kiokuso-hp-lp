import { useState, useEffect, useRef } from "react";
import { getWeeklyPropertyCount } from "./weeklyCount";
import TenantPropertyLeadModal from "./TenantPropertyLeadModal";

/**
 * TenantHeroPropertyFirstJ — 物件カード・タップ→LINE誘導モーダル版
 *
 * I からの差分（4/29 ヒートマップ分析を受けて）:
 *   - 物件カード全体を <button> にしてタップ可能化
 *     → I版で「物件タイトル/エリア名/タグ」へのデッドクリックが 60+ 件発生していた
 *   - タップで LINE登録誘導モーダル（TenantPropertyLeadModal）を起動
 *   - 「他にも●件あります」テキストも <button> 化（同モーダル）
 *   - 「住所・写真・詳細条件は非公開」横にも tap CTA を併設
 *   - ピル要素は span のまま（クリック誘発しないよう cursor: default 明示）
 *   - 物件カードに「タップで詳細」のヒント文言を1ヶ所だけ追加
 *
 * GA4 トラッキング:
 *   - property_lead_modal_open（モーダル開）
 *   - line_cta_click（モーダル内の LINE登録ボタン）
 *   - location: tenant_property_first_j_hero（既存ヒーローCTAと区別）
 */

const LINE_URL = "https://lin.ee/9TamhEC";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

type PropertyType = "inuki" | "skeleton";
interface Property { area: string; type: PropertyType; tsubo: string; tags: string[]; rent: string; }

const allProperties: Property[] = [
  { area: "国分町", type: "inuki", tsubo: "20坪〜", tags: ["飲食可", "1F"], rent: "20万円" },
  { area: "一番町", type: "skeleton", tsubo: "〜15坪", tags: ["飲食可", "路面"], rent: "15万円" },
  { area: "青葉通", type: "skeleton", tsubo: "20坪〜", tags: ["飲食可", "B1F"], rent: "16万円" },
  { area: "五橋", type: "inuki", tsubo: "〜20坪", tags: ["ハンドメイド", "路面"], rent: "13万円" },
  { area: "本町", type: "skeleton", tsubo: "〜30坪", tags: ["ゴルフ可", "路面"], rent: "19万円" },
  { area: "長町", type: "skeleton", tsubo: "30坪〜", tags: ["飲食可", "駅近"], rent: "22万円" },
  { area: "泉中央", type: "inuki", tsubo: "〜20坪", tags: ["美容可", "駅近"], rent: "15万円" },
  { area: "仙台駅東", type: "skeleton", tsubo: "〜20坪", tags: ["飲食可", "駅前"], rent: "17万円" },
  { area: "多賀城駅前", type: "inuki", tsubo: "〜15坪", tags: ["飲食可", "駅近"], rent: "10万円" },
];

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

function PropertyRow({
  prop,
  isVisible,
  isLast,
  onTap,
}: {
  prop: Property;
  isVisible: boolean;
  isLast: boolean;
  onTap: (area: string) => void;
}) {
  return (
    <button
      role="listitem"
      type="button"
      onClick={() => onTap(prop.area)}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "11px 14px",
        borderBottom: isLast ? "none" : "1px solid #ece6dc",
        gap: "10px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out, background 0.15s",
        // button reset
        width: "100%",
        background: "transparent",
        border: "none",
        borderRadius: 0,
        textAlign: "left",
        cursor: "pointer",
        font: "inherit",
        color: "inherit",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#fdfaf3")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      aria-label={`${prop.area}の物件を確認 - LINEで詳細を受け取る`}
    >
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
      <span style={{ fontSize: "13px", fontWeight: 700, color: "#2a2a2a", whiteSpace: "nowrap", flexShrink: 0, minWidth: "70px" }}>
        {prop.area}
      </span>
      <div style={{ display: "flex", gap: "3px", flex: 1, overflow: "hidden" }}>
        <span style={{ fontSize: "9px", padding: "2px 5px", borderRadius: "8px", background: "#f4efe6", color: "#8a7a6a", border: "1px solid #e8e0d4", whiteSpace: "nowrap" }}>
          {prop.tsubo}
        </span>
        {prop.tags.slice(0, 1).map((tag, ti) => (
          <span key={ti} style={{ fontSize: "9px", padding: "2px 5px", borderRadius: "8px", background: "#f4efe6", color: "#8a7a6a", border: "1px solid #e8e0d4", whiteSpace: "nowrap" }}>
            {tag}
          </span>
        ))}
      </div>
      <span
        style={{
          flexShrink: 0,
          fontSize: "13px",
          fontWeight: 700,
          color: "#555",
          minWidth: "50px",
          textAlign: "right",
          filter: "blur(5px)",
          userSelect: "none",
        }}
      >
        {prop.rent}
      </span>
      {/* 右端の > 矢印で「タップ可能」を示す */}
      <span
        aria-hidden="true"
        style={{
          flexShrink: 0,
          marginLeft: "2px",
          color: "#C9A84C",
          fontSize: "13px",
          fontWeight: 700,
        }}
      >
        ›
      </span>
    </button>
  );
}

export default function TenantHeroPropertyFirstJ() {
  const [selected] = useState<Property[]>(() => shuffle(allProperties));
  const [updateDate] = useState(getUpdateDate);
  const [remainingCount] = useState<number>(() => getWeeklyPropertyCount());
  const [animatedRows, setAnimatedRows] = useState<number[]>([]);
  const hasStarted = useRef(false);

  // モーダル状態
  const [modalOpen, setModalOpen] = useState(false);
  const [modalArea, setModalArea] = useState<string | null>(null);
  const [modalSource, setModalSource] = useState<string>("property_card");

  const openModal = (area: string | null, source: string) => {
    setModalArea(area);
    setModalSource(source);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    setTimeout(() => {
      selected.forEach((_, i) => {
        setTimeout(() => setAnimatedRows((prev) => [...prev, i]), i * 50);
      });
    }, 200);
  }, [selected]);

  return (
    <>
      {/* ヘッダー（数字プラーク削除・ピル内包） */}
      <section
        style={{
          background: "linear-gradient(180deg, #232820 0%, #1e2318 100%)",
          padding: "26px 16px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "440px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: ".08em",
              color: "#F5D68A",
              border: "1px solid rgba(201,168,76,.55)",
              background: "rgba(201,168,76,.16)",
              borderRadius: "100px",
              padding: "4px 12px",
              marginBottom: "14px",
            }}
          >
            <span style={{ fontSize: "8px", color: "#C9A84C", marginRight: "6px" }}>◆</span>
            宮城で店舗を出す方向け
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
            {[
              { img: "/images/about-kai-sm.webp", name: "KAI", role: "元不動産20年" },
              { img: "/images/about-ken-sm.webp", name: "KEN", role: "大工20年" },
            ].map((p) => (
              <div key={p.name} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1.5px solid #C9A84C",
                    objectFit: "cover",
                  }}
                />
                <div style={{ textAlign: "left", lineHeight: 1.2 }}>
                  <div style={{ fontSize: "12px", color: "#C9A84C", fontWeight: 700 }}>{p.name}</div>
                  <div style={{ fontSize: "9.5px", color: "rgba(220,220,210,.7)" }}>{p.role}</div>
                </div>
              </div>
            ))}
          </div>

          <h1
            style={{
              fontSize: "clamp(19px, 4.9vw, 23px)",
              fontWeight: 700,
              color: "#f0ede8",
              lineHeight: 1.55,
              margin: "0 0 8px",
              letterSpacing: ".02em",
            }}
          >
            <em style={{ fontStyle: "normal", color: "#C9A84C" }}>公開前</em>の店舗テナント情報、<br />
            現場で集めています。
          </h1>

          <p style={{ fontSize: "12px", color: "rgba(220,220,210,.65)", lineHeight: 1.7, margin: "0 0 14px" }}>
            ネットに出る前の物件を、現場の人脈で集めています。
          </p>

          {/* ピル5枚（header 内・コンパクト） — span のまま、cursor: default で誤クリック誘発を抑制 */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "5px",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            {["月5組限定", "断ってOK", "営業電話なし", "相見積OK", "見積無料"].map((t) => (
              <span
                key={t}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px",
                  fontSize: "10px",
                  color: "rgba(245,240,230,.95)",
                  padding: "3px 8px 3px 6px",
                  border: "1px solid rgba(201,168,76,.45)",
                  background: "linear-gradient(180deg, rgba(74,103,65,.32) 0%, rgba(74,103,65,.20) 100%)",
                  borderRadius: "100px",
                  letterSpacing: ".01em",
                  fontWeight: 500,
                  cursor: "default",
                  pointerEvents: "none",
                }}
              >
                <svg viewBox="0 0 10 10" style={{ width: "8px", height: "8px", flexShrink: 0 }} aria-hidden="true">
                  <path
                    d="M1.5 5.5 L4 8 L8.5 2.5"
                    stroke="#F5D68A"
                    strokeWidth="1.4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t}
              </span>
            ))}
          </div>

          <p style={{ fontSize: "10px", color: "rgba(220,220,210,.5)", lineHeight: 1.6, margin: "10px 0 0" }}>
            ※ 業態・タイミング・条件によってはご紹介できない場合もあります
          </p>
        </div>
      </section>

      {/* スクロール誘導の▼ */}
      <div
        style={{
          background: "linear-gradient(180deg, #1a1e16 0%, #f5f2ec 100%)",
          textAlign: "center",
          padding: "10px 0 6px",
          color: "#C9A84C",
          fontSize: "16px",
          animation: "tenantHeroJArrowBounce 1.5s infinite",
        }}
        aria-hidden="true"
      >
        ▼
      </div>

      {/* 物件リスト本体（最大の主役・タップ可能化） */}
      <section
        style={{
          padding: "10px 16px 6px",
          background: "linear-gradient(180deg, #f5f2ec 0%, #faf7f2 100%)",
        }}
      >
        <div style={{ maxWidth: "440px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "11px", letterSpacing: "3px", color: "#4A6741", marginBottom: "4px", textTransform: "uppercase" as const, fontWeight: 600 }}>
            Available Now
          </p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(18px, 4.6vw, 21px)", fontWeight: 700, color: "#2a2a2a", marginBottom: "4px", letterSpacing: ".02em" }}>
            現在ご紹介可能な店舗テナント
          </h2>
          <p style={{ textAlign: "center", fontSize: "11px", color: "#8a7a6a", marginBottom: "6px" }}>
            <span
              style={{
                display: "inline-block",
                width: "5px",
                height: "5px",
                background: "#C9A84C",
                borderRadius: "50%",
                marginRight: "5px",
                verticalAlign: "middle",
                animation: "tenantHeroJPulse 2s infinite",
              }}
            />
            {updateDate}
          </p>

          {/* tap hint — リストの直前に1度だけ */}
          <p
            style={{
              textAlign: "center",
              fontSize: "10.5px",
              color: "#8a6a2a",
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            👇 タップでLINEに詳細をお送りします
          </p>

          <div
            role="list"
            style={{
              border: "1px solid #e0d8cc",
              borderRadius: "10px",
              background: "#ffffff",
              overflow: "hidden",
              boxShadow: "0 3px 16px rgba(60,40,20,0.10)",
            }}
          >
            <div style={{ padding: "10px 14px", background: "#faf7f2", borderBottom: "1px solid #ece6dc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "11px", color: "#8a7a6a", letterSpacing: "1px" }}>非公開リスト</span>
              <span style={{ fontSize: "11px", color: "#4A6741", fontWeight: 600 }}>{selected.length}件</span>
            </div>

            <div>
              {selected.map((prop, i) => (
                <PropertyRow
                  key={i}
                  prop={prop}
                  isVisible={animatedRows.includes(i)}
                  isLast={i === selected.length - 1}
                  onTap={(area) => openModal(area, "property_card")}
                />
              ))}
            </div>

            {/* 「他にも●件あります」をボタン化（CTAライク） */}
            <button
              type="button"
              onClick={() => openModal(null, "remaining_count_cta")}
              style={{
                display: "block",
                width: "100%",
                padding: "12px 14px",
                background: "linear-gradient(180deg, #faf7f2 0%, #f4efe2 100%)",
                borderTop: "1px solid #ece6dc",
                border: "none",
                borderRadius: 0,
                textAlign: "center",
                cursor: "pointer",
                font: "inherit",
                color: "inherit",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(180deg, #f4efe2 0%, #ede5d3 100%)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(180deg, #faf7f2 0%, #f4efe2 100%)")}
              aria-label="非公開リストの全件をLINEで受け取る"
            >
              <div style={{ fontSize: "11px", color: "#8a7a6a", marginBottom: "3px" }}>
                <svg viewBox="0 0 16 16" fill="none" style={{ width: "10px", height: "10px", verticalAlign: "middle", marginRight: "3px" }} aria-hidden="true">
                  <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="#8a7a6a" strokeWidth="1.2" />
                  <path d="M5 7V5a3 3 0 016 0v2" stroke="#8a7a6a" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                住所・写真・詳細条件は非公開
              </div>
              <div style={{ fontSize: "12.5px", color: "#4A6741", fontWeight: 700 }}>
                他にも <strong style={{ color: "#8a6a2a" }}>{remainingCount}</strong> 件あります
                <span aria-hidden="true" style={{ marginLeft: "4px", color: "#C9A84C" }}>›</span>
              </div>
              <div style={{ fontSize: "10px", color: "#8a7a6a", marginTop: "4px" }}>
                タップして全件をLINEで受け取る
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* WHY ビジュアル — 物件リストの直下 */}
      <section style={{ padding: "30px 16px 24px", background: "#faf7f2" }}>
        <div style={{ maxWidth: "440px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "10px", letterSpacing: "3px", color: "#8a6a2a", marginBottom: "6px", textTransform: "uppercase" as const, fontWeight: 600 }}>
            Why
          </p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(15px, 3.8vw, 17px)", fontWeight: 700, color: "#2a2a2a", marginBottom: "20px", lineHeight: 1.6 }}>
            なぜ、ネットに出ない<br />テナント情報が集まるのか
          </h2>

          {/* 2 ソース・ビジュアル */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px" }}>
            {/* Source 1: 業界人脈 */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #e8dcc2",
                borderRadius: "10px",
                padding: "16px 10px 14px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(60,40,20,0.05)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  margin: "0 auto 10px",
                  borderRadius: "50%",
                  background: "linear-gradient(180deg, rgba(201,168,76,.18), rgba(201,168,76,.05))",
                  border: "1px solid rgba(201,168,76,.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg viewBox="0 0 32 32" fill="none" style={{ width: "26px", height: "26px" }} aria-hidden="true">
                  <circle cx="10" cy="10" r="3" stroke="#8a6a2a" strokeWidth="1.6" />
                  <circle cx="22" cy="10" r="3" stroke="#8a6a2a" strokeWidth="1.6" />
                  <circle cx="16" cy="22" r="3" stroke="#8a6a2a" strokeWidth="1.6" />
                  <path d="M10 13 L16 19 M22 13 L16 19 M10 11 L22 11" stroke="#8a6a2a" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="6" cy="6" r="1" fill="#C9A84C" />
                  <circle cx="26" cy="6" r="1" fill="#C9A84C" />
                  <circle cx="28" cy="20" r="1" fill="#C9A84C" />
                </svg>
              </div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#8a6a2a", marginBottom: "6px", letterSpacing: ".02em" }}>
                元不動産仲介 20年
              </div>
              <div style={{ fontSize: "11.5px", color: "#444", lineHeight: 1.7 }}>
                業界の人脈で<br /><strong style={{ color: "#2a2a2a" }}>公開前の物件情報</strong>が回ってきます
              </div>
            </div>

            {/* Source 2: 撤退現場 */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #e8dcc2",
                borderRadius: "10px",
                padding: "16px 10px 14px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(60,40,20,0.05)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  margin: "0 auto 10px",
                  borderRadius: "50%",
                  background: "linear-gradient(180deg, rgba(74,103,65,.18), rgba(74,103,65,.05))",
                  border: "1px solid rgba(74,103,65,.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg viewBox="0 0 32 32" fill="none" style={{ width: "26px", height: "26px" }} aria-hidden="true">
                  <path d="M5 26 L5 14 L16 6 L27 14 L27 26 Z" stroke="#4A6741" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M12 26 L12 18 L20 18 L20 26" stroke="#4A6741" strokeWidth="1.4" />
                  <path d="M22 11 L26 7 M24 9 L28 5" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#4A6741", marginBottom: "6px", letterSpacing: ".02em" }}>
                撤退・解体現場 20年
              </div>
              <div style={{ fontSize: "11.5px", color: "#444", lineHeight: 1.7 }}>
                退去・原状回復の現場で<br /><strong style={{ color: "#2a2a2a" }}>表に出ない居抜き</strong>が見えます
              </div>
            </div>
          </div>

          {/* 合流の視覚化 */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "8px 0" }}>
            <svg viewBox="0 0 100 30" style={{ width: "120px", height: "30px" }} aria-hidden="true">
              <path d="M20 0 L50 22" stroke="#C9A84C" strokeWidth="1.4" strokeDasharray="3 2" fill="none" />
              <path d="M80 0 L50 22" stroke="#4A6741" strokeWidth="1.4" strokeDasharray="3 2" fill="none" />
              <circle cx="50" cy="22" r="4" fill="#C9A84C" />
            </svg>
          </div>

          {/* 締め: リストへ集まる */}
          <div
            style={{
              background: "linear-gradient(180deg, #fff 0%, #faf3e2 100%)",
              border: "1px solid #C9A84C",
              borderRadius: "8px",
              padding: "12px 14px",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(201,168,76,0.15)",
            }}
          >
            <div style={{ fontSize: "12px", color: "#5A574F", lineHeight: 1.7, fontWeight: 600 }}>
              この2つのルートで、<br />
              <strong style={{ color: "#8a6a2a" }}>ネットに非公開のテナント情報</strong>が集まります。
            </div>
          </div>
        </div>
      </section>

      {/* 3ステップ */}
      <section style={{ padding: "26px 16px 8px", background: "#faf7f2" }}>
        <div style={{ maxWidth: "440px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "10px", letterSpacing: "3px", color: "#4A6741", marginBottom: "2px", textTransform: "uppercase" as const }}>
            How it works
          </p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(15px, 3.7vw, 17px)", fontWeight: 700, color: "#2a2a2a", marginBottom: "14px" }}>
            物件情報を受け取るまで
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
            {[
              { num: "01", title: "LINE登録", body: "友だち追加だけ。所要10秒" },
              { num: "02", title: "ヒアリング", body: "エリア・業態・予算を1〜2往復" },
              { num: "03", title: "物件情報", body: "条件に合うリストをお送りします" },
            ].map((s) => (
              <div
                key={s.num}
                style={{
                  background: "#fff",
                  border: "1px solid #e8dcc2",
                  borderTop: "2px solid #C9A84C",
                  borderRadius: "6px",
                  padding: "10px 8px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#C9A84C",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {s.num}
                </div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#2a2a2a", marginBottom: "4px" }}>
                  {s.title}
                </div>
                <div style={{ fontSize: "10px", color: "#5A574F", lineHeight: 1.6 }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "16px 16px 36px", background: "#faf7f2", textAlign: "center" }}>
        <div style={{ maxWidth: "440px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", width: "2px", height: "20px", background: "linear-gradient(180deg, #d8d0c4, #06C755)", borderRadius: "1px" }} />
          <span style={{ display: "block", margin: "0 auto", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderTop: "9px solid #06C755" }} />

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.dataLayer?.push({ event: "line_cta_click", location: "tenant_property_first_j_hero" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 36px",
              background: "#06C755",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 700,
              borderRadius: "50px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(6,199,85,0.30)",
              marginTop: "12px",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            LINEで物件情報を受け取る
          </a>

          <div style={{ fontSize: "12px", color: "#8a7a6a", marginTop: "10px" }}>
            無料・営業電話なし・断ってOK・いつでもブロック可能
          </div>
        </div>
      </section>

      {/* 物件タップ → LINE誘導モーダル */}
      <TenantPropertyLeadModal
        open={modalOpen}
        propertyArea={modalArea}
        onClose={closeModal}
        source={modalSource}
      />

      <style>{`
        @keyframes tenantHeroJPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes tenantHeroJArrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
      `}</style>
    </>
  );
}
