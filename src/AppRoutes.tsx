import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HPApp from "./hp/HPApp";
import ManshitsuPage from "./manshitsu/ManshitsuPage";
import TenantLPPage from "./lp/tenant/TenantLPPage";
import WorksCrossover from "./hp/WorksCrossover";
import ArticleList from "./hp/pages/ArticleList";
import ArticleDetail from "./hp/pages/ArticleDetail";
import ScrollToTop from "./shared/ScrollToTop";

function BodyBackground() {
  const location = useLocation();
  const isLP = location.pathname.startsWith("/lp") || location.pathname.startsWith("/manshitsu");

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
        <Route path="/manshitsu" element={<ManshitsuPage />} />
        <Route path="/lp/tenant" element={<TenantLPPage />} />
        <Route path="/studio/works/crossover" element={<WorksCrossover />} />
        <Route path="/studio/articles" element={<ArticleList />} />
        <Route path="/studio/articles/:slug" element={<ArticleDetail />} />
        <Route path="/*" element={<HPApp />} />
      </Routes>
    </>
  );
}
