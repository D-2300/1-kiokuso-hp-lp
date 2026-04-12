import { useEffect } from "react";
import TenantHero from "./TenantHero";
import TenantYourSide from "./TenantYourSide";
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
    document.title = "仙台の飲食店テナント｜ネットに出ない非公開物件情報";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "仙台で飲食店を出したい方へ。いい物件はネットに出る前になくなります。非公開物件情報を無料でお届け。物件探し＆不動産攻略ガイドも無料プレゼント中。");
    }
  }, []);

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333", background: "#fff" }}>
      <TenantHero />
      <TenantYourSide />
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
