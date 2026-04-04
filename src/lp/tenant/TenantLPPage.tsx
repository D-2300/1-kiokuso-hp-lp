import { useEffect } from "react";
import TenantHero from "./TenantHero";
import TenantHeroBand from "./TenantHeroBand";
import TenantGuideSection from "./TenantGuideSection";
import TenantBeforeAfterCTA from "./TenantBeforeAfterCTA";
import TenantReasons from "./TenantReasons";
import TenantMidCTA from "./TenantMidCTA";
import TenantComparison from "./TenantComparison";
import TenantProfiles from "./TenantProfiles";
import TenantFAQ from "./TenantFAQ";
import TenantBottomCTA from "./TenantBottomCTA";
import TenantMailForm from "./TenantMailForm";
import TenantFooter from "./TenantFooter";
import LPFloatingLine from "../components/LPFloatingLine";

export default function TenantLPPage() {
  useEffect(() => {
    document.title = "仙台の飲食店テナント｜物件契約で損しないための無料ガイド";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "仙台で飲食店を出したい方へ。フリーレント交渉・敷金削減・内装費用の中抜き防止など、知らないだけで数十万〜数百万円損する情報を無料ガイドでお届けします。");
    }
  }, []);

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333", background: "#fff" }}>
      <TenantHero />
      <TenantHeroBand />
      <TenantGuideSection />
      <TenantBeforeAfterCTA />
      <TenantReasons />
      <TenantMidCTA />
      <TenantComparison />
      <TenantProfiles />
      <TenantFAQ />
      <TenantBottomCTA />
      <TenantMailForm />
      <TenantFooter />
      <LPFloatingLine />
    </div>
  );
}
