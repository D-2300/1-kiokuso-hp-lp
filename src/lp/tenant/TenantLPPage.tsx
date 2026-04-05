import { useEffect } from "react";
import TenantHero from "./TenantHero";
import TenantHeroBand from "./TenantHeroBand";
import TenantGuideSection from "./TenantGuideSection";
import TenantBeforeAfterCTA from "./TenantBeforeAfterCTA";
import TenantNetworkInfo from "./TenantNetworkInfo";
import TenantSteps from "./TenantSteps";
import TenantMidCTA from "./TenantMidCTA";
import TenantFairEval from "./TenantFairEval";
import TenantProfiles from "./TenantProfiles";
import TenantFAQ from "./TenantFAQ";
import TenantBottomCTA from "./TenantBottomCTA";
import TenantMailForm from "./TenantMailForm";
import TenantFooter from "./TenantFooter";
import LPFloatingLine from "../components/LPFloatingLine";

export default function TenantLPPage() {
  useEffect(() => {
    document.title = "仙台の飲食店テナント｜ネットに出ない非公開物件情報";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "仙台で飲食店を出したい方へ。解体現場から入る空き予定情報と元不動産プロの人脈で、ネットに出る前の非公開物件をお届け。物件探し＆不動産攻略ガイドも無料プレゼント中。");
    }
  }, []);

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333", background: "#fff" }}>
      <TenantHero />
      <TenantHeroBand />
      <TenantNetworkInfo />
      <TenantSteps />
      <TenantGuideSection />
      <TenantBeforeAfterCTA />
      <TenantMidCTA />
      <TenantFairEval />
      <TenantProfiles />
      <TenantFAQ />
      <TenantBottomCTA />
      <TenantMailForm />
      <TenantFooter />
      <LPFloatingLine />
    </div>
  );
}
