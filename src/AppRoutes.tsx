import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HPApp from "./hp/HPApp";
import TenantLPPage from "./lp/tenant/TenantLPPage";
import TenantLPPageV2Mock from "./lp/tenant/TenantLPPageV2Mock";
import TenantLPPageMockFixA from "./lp/tenant/TenantLPPageMockFixA";
import TenantLPPageMockFixB from "./lp/tenant/TenantLPPageMockFixB";
import TenantLPPageMockFixC from "./lp/tenant/TenantLPPageMockFixC";
import TenantLPPageMockFixE from "./lp/tenant/TenantLPPageMockFixE";
import TenantLPPageMockFixF from "./lp/tenant/TenantLPPageMockFixF";
import TenantLPPageMockFixG from "./lp/tenant/TenantLPPageMockFixG";
import TenantLPPageMockFixH from "./lp/tenant/TenantLPPageMockFixH";
import TenantLPPageMockFixI from "./lp/tenant/TenantLPPageMockFixI";
import TenantLPPageMockFixJ from "./lp/tenant/TenantLPPageMockFixJ";
import WorksCrossover from "./hp/WorksCrossover";
import ArticleList from "./hp/pages/ArticleList";
import ArticleDetail from "./hp/pages/ArticleDetail";
import TenantGuidePage from "./hp/pages/TenantGuidePage";
import ArticleIdealMock from "./hp/pages/ArticleIdealMock";
import ScrollToTop from "./shared/ScrollToTop";

function BodyBackground() {
  const location = useLocation();
  const isLP = location.pathname.startsWith("/lp");

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.backgroundColor = isLP ? "#FFFFFF" : "#F8F5F0";
    }
  }, [isLP]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <BodyBackground />
      <ScrollToTop />
      <Routes>
        <Route path="/lp" element={<Navigate to="/lp/tenant" replace />} />
        <Route path="/lp/koji" element={<Navigate to="/lp/tenant" replace />} />
        <Route path="/lp/koji/" element={<Navigate to="/lp/tenant" replace />} />
        <Route path="/lp/tenant" element={<TenantLPPageMockFixJ />} />
        <Route path="/mock/tenant-v2-with-comparison" element={<TenantLPPageV2Mock />} />
        <Route path="/mock/tenant-fix-a" element={<TenantLPPageMockFixA />} />
        <Route path="/mock/tenant-fix-b" element={<TenantLPPageMockFixB />} />
        <Route path="/mock/tenant-fix-c" element={<TenantLPPageMockFixC />} />
        <Route path="/mock/tenant-fix-e" element={<TenantLPPageMockFixE />} />
        <Route path="/mock/tenant-fix-f" element={<TenantLPPageMockFixF />} />
        <Route path="/mock/tenant-fix-g" element={<TenantLPPageMockFixG />} />
        <Route path="/mock/tenant-fix-h" element={<TenantLPPageMockFixH />} />
        <Route path="/mock/tenant-fix-i" element={<TenantLPPageMockFixI />} />
        <Route path="/mock/tenant-fix-j" element={<TenantLPPageMockFixJ />} />
        <Route path="/mock/tenant-legacy" element={<TenantLPPage />} />
        <Route path="/mock/article-preview" element={<ArticleIdealMock />} />
        <Route path="/studio/works/crossover" element={<WorksCrossover />} />
        <Route path="/studio/articles" element={<ArticleList />} />
        <Route path="/studio/articles/:slug" element={<ArticleDetail />} />
        <Route path="/studio/guide/tenant" element={<TenantGuidePage />} />
        <Route path="/*" element={<HPApp />} />
      </Routes>
    </>
  );
}
