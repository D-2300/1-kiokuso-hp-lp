import LPNav from "./components/LPNav";
import LPHero from "./components/LPHero";
import LPBeforeAfter from "./components/LPBeforeAfter";
import LPMidCTA from "./components/LPMidCTA";
import LPTrustBanner from "./components/LPTrustBanner";
import LPPainPoints from "./components/LPPainPoints";
import LPCommonIssues from "./components/LPCommonIssues";
import LPSolutionPoints from "./components/LPSolutionPoints";
import LPWorksIntro from "./components/LPWorksIntro";
import LPCaseDetail from "./components/LPCaseDetail";
import LPPriceGuide from "./components/LPPriceGuide";
import LPFlowIntro from "./components/LPFlowIntro";
import LPFlow from "./components/LPFlow";
import LPLastPush from "./components/LPLastPush";
import LPFinalCTA from "./components/LPFinalCTA";
import LPFAQ from "./components/LPFAQ";
import LPProfile from "./components/LPProfile";
import LPFooter from "./components/LPFooter";

export default function LPPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <LPNav />
      <LPHero />
      <LPBeforeAfter />
      <LPMidCTA />
      <LPTrustBanner />
      <LPPainPoints />
      <LPCommonIssues />
      <LPSolutionPoints />
      <LPWorksIntro />
      <LPCaseDetail />
      <LPPriceGuide />
      <LPFlowIntro />
      <LPFlow />
      <LPLastPush />
      <LPFinalCTA />
      <LPFAQ />
      <LPProfile />
      <LPFooter />
    </div>
  );
}
