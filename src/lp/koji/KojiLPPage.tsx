import { useEffect } from "react";
import KojiHeroV2 from "./KojiHeroV2";
import KojiProblem from "./KojiProblem";
import KojiShowcase from "./KojiShowcase";
import KojiMoneyFlow from "./KojiMoneyFlow";
import KojiWhatYouGet from "./KojiWhatYouGet";
import KojiHowItWorks from "./KojiHowItWorks";
import LPBeforeAfterSlider from "../components/LPBeforeAfterSlider";
import KojiTeam from "./KojiTeam";
import KojiFAQ from "./KojiFAQ";
import KojiTrust from "./KojiTrust";
import KojiBottomCTAv2 from "./KojiBottomCTAv2";
import LPContactForm from "../components/LPContactForm";
import LPFloatingLine from "../components/LPFloatingLine";

export default function KojiLPPage() {
  useEffect(() => {
    document.title = "記憶荘 | 不動産プロ×内装プロが、あなた専用の出店プランを丸ごとお届け";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "仙台で店舗を出したい方へ。LINEで業種・エリア・広さを教えるだけで、完成イメージ・費用明細・スケジュールが入った提案書を無料でおつくりします。営業なし・断ってOK。"
      );
    }
  }, []);

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#3D2E16", background: "#FAF6F0" }}>
      <KojiHeroV2 />
      <KojiProblem />
      <KojiShowcase />
      <KojiMoneyFlow />
      <KojiWhatYouGet />
      <KojiHowItWorks />
      <LPBeforeAfterSlider />
      <KojiTeam />
      <KojiFAQ />
      <KojiTrust />
      <KojiBottomCTAv2 />
      <LPContactForm title="無料相談・お問い合わせ" />
      <footer style={{
        textAlign: "center", padding: "40px 24px",
        background: "#3D2E16", color: "rgba(255,255,255,0.5)", fontSize: "13px",
      }}>
        <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: "18px", fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: "8px" }}>
          記憶荘
        </div>
        <p>店舗内装スタジオ ｜ 仙台・石巻・宮城エリア</p>
      </footer>
      <LPFloatingLine label="LINEで出店プランを受け取る" />
    </div>
  );
}
