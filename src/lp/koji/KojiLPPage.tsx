import { useEffect } from "react";
import LPNav from "../components/LPNav";
import KojiHero from "./KojiHero";
import KojiPainPoints from "./KojiPainPoints";
import KojiEstimateCompare from "./KojiEstimateCompare";
import KojiPriceSamples from "./KojiPriceSamples";
import KojiDiagnosis from "./KojiDiagnosis";
import LPBeforeAfterSlider from "../components/LPBeforeAfterSlider";
import KojiWhyPrice from "./KojiWhyPrice";
import KojiFAQ from "./KojiFAQ";
import KojiBottomCTA from "./KojiBottomCTA";
import LPContactForm from "../components/LPContactForm";
import LPFooter from "../components/LPFooter";
import LPFloatingLine from "../components/LPFloatingLine";

export default function KojiLPPage() {
  useEffect(() => {
    document.title = "仙台の店舗内装工事｜本当の金額を、一行ずつの明細で";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "仙台で店舗内装工事の業者を探している方へ。ネットに載っていない本当の金額を、一行ずつの明細で LINE にお返しします。相見積もり歓迎・無料・営業なし。"
      );
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <LPNav />
      <KojiHero />
      <KojiPainPoints />
      <KojiEstimateCompare />
      <KojiPriceSamples />
      <KojiDiagnosis />
      <LPBeforeAfterSlider />
      <KojiWhyPrice />
      <KojiFAQ />
      <KojiBottomCTA />
      <LPContactForm />
      <LPFooter />
      <LPFloatingLine />
    </div>
  );
}
