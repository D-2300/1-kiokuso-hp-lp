import TenantHeroV2 from "./TenantHeroV2";
import TenantComparison from "./TenantComparison";
import TenantSteps from "./TenantSteps";
import TenantGuideSection from "./TenantGuideSection";
import TenantBeforeAfterCTA from "./TenantBeforeAfterCTA";
import TenantProfiles from "./TenantProfiles";
import TenantFAQ from "./TenantFAQ";
import TenantBottomCTA from "./TenantBottomCTA";
import TenantMailForm from "./TenantMailForm";
import TenantFooter from "./TenantFooter";
import LPFloatingLine from "../components/LPFloatingLine";

/**
 * /mock/tenant-v2 — V2 Phase2 9セクション構成（満室 BukkenLPPageV2Phase2 相当）
 *
 * V2 Hero が「楔＋ちら見せ＋パターン・インタラプト＋三角形＋Full List + CTA」を
 * 内包するため、重複する以下を削除した:
 *   - TenantYourSide (Hero楔と重複)
 *   - TenantWhy (三角形と重複)
 *   - TenantMidCTA (Hero内CTAで充足)
 *   - TenantFairEval (三角形の「中立」と重複)
 *   - TenantExitPopup (満室V2で削除済)
 */
export default function TenantLPPageV2Mock() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333", background: "#fff" }}>
      <TenantHeroV2 />
      <TenantComparison />
      <TenantSteps />
      <TenantGuideSection />
      <TenantBeforeAfterCTA />
      <TenantProfiles />
      <TenantFAQ />
      <TenantBottomCTA />
      <TenantMailForm />
      <TenantFooter />
      <LPFloatingLine label="非公開テナントをチェック" />
    </div>
  );
}
