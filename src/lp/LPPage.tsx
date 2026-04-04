import { useEffect } from "react";
import LPNav from "./components/LPNav";
import LPHero from "./components/LPHero";
import LPGuideSection from "./components/LPGuideSection";
import LPBeforeAfterSlider from "./components/LPBeforeAfterSlider";
import LPWhyPrice from "./components/LPWhyPrice";
import LPSolutionPoints from "./components/LPSolutionPoints";
import LPMidCTA from "./components/LPMidCTA";
import LPCaseDetail from "./components/LPCaseDetail";
import LPFlow from "./components/LPFlow";
import LPFAQ from "./components/LPFAQ";
import LPProfile from "./components/LPProfile";
import LPBottomCTA from "./components/LPBottomCTA";
import LPContactForm from "./components/LPContactForm";
import LPFooter from "./components/LPFooter";
import LPFloatingLine from "./components/LPFloatingLine";

export default function LPPage() {
  useEffect(() => {
    document.title = "仙台の店舗内装工事｜内装費で損しないための無料ガイド";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "仙台で店舗内装工事をお考えの方へ。中間マージン・不要な解体費・追加料金など、知らないだけで数十万〜数百万円損する情報を無料ガイドでお届けします。"
      );
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <LPNav />
      <LPHero />
      <LPGuideSection />
      <LPBeforeAfterSlider />
      <LPWhyPrice />
      <LPSolutionPoints />
      <LPMidCTA />
      <LPCaseDetail />
      <LPFlow />
      <LPFAQ />
      <LPProfile />
      <LPBottomCTA />
      <LPContactForm />
      <LPFooter />
      <LPFloatingLine />
    </div>
  );
}
