import { useEffect } from "react";
import KojiHeroV2 from "./KojiHeroV2";
import KojiMoneyFlow from "./KojiMoneyFlow";
import KojiProblem from "./KojiProblem";
import KojiShowcase from "./KojiShowcase";
import KojiHowItWorks from "./KojiHowItWorks";
import KojiTeam from "./KojiTeam";
import KojiFAQ from "./KojiFAQ";
import KojiBottomCTAv2 from "./KojiBottomCTAv2";
import LPFloatingLine from "../components/LPFloatingLine";
import KojiExitPopup from "./KojiExitPopup";
// 削除: KojiWhatYouGet (Showcaseと重複), LPBeforeAfterSlider (テナントLPにある),
//       KojiTrust (FAQで代替), LPContactForm (LINEに一本化)

export default function KojiLPPage() {
  useEffect(() => {
    document.title = "店舗内装の費用｜仙台で開業するなら記憶荘";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "仙台の店舗内装、いくらかかるか知っていますか？同じ10坪のカフェでも頼む先で220万円変わります。記憶荘なら中間マージンゼロで坪単価を全公開。まずはあなたの場合の費用を確認。"
      );
    }
  }, []);

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#3D2E16", background: "#FAF6F0" }}>
      {/* 1. Hero: 検索意図に即答��費用の目安を見せる） */}
      <KojiHeroV2 />
      {/* 2. MoneyFlow: なぜ安いのか（費用構造の可視化） */}
      <KojiMoneyFlow />
      {/* 3. Problem: 業者選びの不安 → 記憶荘なら解決 */}
      <KojiProblem />
      {/* 4. Showcase: 実際の提案書サンプル + CTA */}
      <KojiShowcase />
      {/* 5. HowItWorks: LINE→3問→提案書のフロー */}
      <KojiHowItWorks />
      {/* 6. Team: KEN×KAIの紹介 */}
      <KojiTeam />
      {/* 7. FAQ + BottomCTA */}
      <KojiFAQ />
      <KojiBottomCTAv2 />
      <footer style={{
        textAlign: "center", padding: "40px 24px",
        background: "#3D2E16", color: "rgba(255,255,255,0.5)", fontSize: "13px",
      }}>
        <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: "18px", fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: "8px" }}>
          記憶荘
        </div>
        <p>店舗内装スタジオ ｜ 仙台・石巻・宮城エリア</p>
      </footer>
      <LPFloatingLine label="あなたの費用を確認" />
      <KojiExitPopup />
    </div>
  );
}
