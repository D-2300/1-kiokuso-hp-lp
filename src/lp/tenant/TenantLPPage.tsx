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
