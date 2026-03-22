import LPNav from "./components/LPNav";
import LPHero from "./components/LPHero";
import LPBeforeAfter from "./components/LPBeforeAfter";
import LPShowcase from "./components/LPShowcase";
import LPMidCTA from "./components/LPMidCTA";
import LPTrustBanner from "./components/LPTrustBanner";
import LPVoiceBlock1 from "./components/LPVoiceBlock1";
import LPPainPoints from "./components/LPPainPoints";
import LPCommonIssues from "./components/LPCommonIssues";
import LPSolutionPoints from "./components/LPSolutionPoints";
import LPVoiceBlock2 from "./components/LPVoiceBlock2";
import LPWorksIntro from "./components/LPWorksIntro";
import LPCaseDetail from "./components/LPCaseDetail";
import LPPriceGuide from "./components/LPPriceGuide";
import LPVoiceBlock3 from "./components/LPVoiceBlock3";
import LPFlowIntro from "./components/LPFlowIntro";
import LPFlow from "./components/LPFlow";
import LPLastPush from "./components/LPLastPush";
import LPFinalCTA from "./components/LPFinalCTA";
import LPFAQ from "./components/LPFAQ";
import LPProfile from "./components/LPProfile";
import LPFooter from "./components/LPFooter";
import LPFloatingLine from "./components/LPFloatingLine";

export default function LPPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <LPNav />
      <LPHero />
      <LPBeforeAfter />
      <LPShowcase />
      <LPMidCTA />
      <LPTrustBanner />
      <LPVoiceBlock1 />
      <LPPainPoints />
      <LPCommonIssues />
      <LPSolutionPoints />
      <LPVoiceBlock2 />
      <LPWorksIntro />
      <LPCaseDetail />
      <LPPriceGuide />
      <LPVoiceBlock3 />
      <LPFlowIntro />
      <LPFlow />
      <LPLastPush />
      <LPFinalCTA />
      <LPFAQ />
      <LPProfile />
      <LPFooter />
      <LPFloatingLine />
    </div>
  );
}
