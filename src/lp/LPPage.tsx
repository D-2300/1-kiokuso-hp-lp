import LPNav from "./components/LPNav";
import LPHero from "./components/LPHero";
import LPBeforeAfterPreview from "./components/LPBeforeAfterPreview";
import LPWhyPrice from "./components/LPWhyPrice";
import LPPainPoints from "./components/LPPainPoints";
import LPCommonIssues from "./components/LPCommonIssues";
import LPSolutionPoints from "./components/LPSolutionPoints";
import LPSupport from "./components/LPSupport";
import LPCaseDetail from "./components/LPCaseDetail";
import LPPriceGuide from "./components/LPPriceGuide";
import LPFlow from "./components/LPFlow";
import LPLastPush from "./components/LPLastPush";
import LPFinalCTA from "./components/LPFinalCTA";
import LPContactForm from "./components/LPContactForm";
import LPFAQ from "./components/LPFAQ";
import LPProfile from "./components/LPProfile";
import LPFooter from "./components/LPFooter";
import LPFloatingLine from "./components/LPFloatingLine";

export default function LPPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <LPNav />
      <LPHero />
      <LPBeforeAfterPreview />
      <LPWhyPrice />
      <LPPainPoints />
      <LPCommonIssues />
      <LPSolutionPoints />
      <LPSupport />
      <LPCaseDetail />
      <LPPriceGuide />
      <LPFlow />
      <LPLastPush />
      <LPFinalCTA />
      <LPContactForm />
      <LPFAQ />
      <LPProfile />
      <LPFooter />
      <LPFloatingLine />
    </div>
  );
}
