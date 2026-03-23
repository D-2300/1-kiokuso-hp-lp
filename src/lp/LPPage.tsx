import LPNav from "./components/LPNav";
import LPHero from "./components/LPHero";
import LPPainPoints from "./components/LPPainPoints";
import LPCommonIssues from "./components/LPCommonIssues";
import LPSolutionPoints from "./components/LPSolutionPoints";
import LPCaseDetail from "./components/LPCaseDetail";
import LPPriceGuide from "./components/LPPriceGuide";
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
      <LPPainPoints />
      <LPCommonIssues />
      <LPSolutionPoints />
      <LPCaseDetail />
      <LPPriceGuide />
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
