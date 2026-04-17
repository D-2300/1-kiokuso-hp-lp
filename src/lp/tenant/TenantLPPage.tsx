import { useEffect } from "react";
import TenantHero from "./TenantHero";
import TenantYourSide from "./TenantYourSide";
import TenantWhy from "./TenantWhy";
// AvailableNow integrated into TenantHero
import TenantSteps from "./TenantSteps";
import TenantGuideSection from "./TenantGuideSection";
import TenantBeforeAfterCTA from "./TenantBeforeAfterCTA";
import TenantFairEval from "./TenantFairEval";
import TenantProfiles from "./TenantProfiles";
import TenantFAQ from "./TenantFAQ";
import TenantBottomCTA from "./TenantBottomCTA";
import TenantMailForm from "./TenantMailForm";
import TenantMidCTA from "./TenantMidCTA";
import TenantExitPopup from "./TenantExitPopup";
import TenantFooter from "./TenantFooter";
import LPFloatingLine from "../components/LPFloatingLine";
// HeroBand removed - dark→dark接続で不要
// NetworkInfo removed - AvailableNowで物件の存在を証明済み、冗長

export default function TenantLPPage() {
  useEffect(() => {
    document.title = "仙台の飲食店テナント探し｜テナント探しから手伝う内装屋 記憶荘";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "仙台・宮城で飲食店を出したい方へ。ネットに出ない非公開テナント情報を無料でお届け。元不動産×大工歴20年の2人体制で、テナント探しから内装工事まで一気通貫。LINEで気軽に相談・営業なし。");
    }
  }, []);

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333", background: "#fff" }}>
      <TenantHero />
      <TenantYourSide />
      <TenantWhy />
      <TenantSteps />
      <TenantMidCTA />
      <TenantGuideSection />
      <TenantBeforeAfterCTA />
      <TenantFairEval />
      <TenantProfiles />
      <TenantFAQ />
      <TenantBottomCTA />
      <TenantMailForm />
      <TenantFooter />
      <LPFloatingLine label="非公開物件をチェック" />
      <TenantExitPopup />
    </div>
  );
}
