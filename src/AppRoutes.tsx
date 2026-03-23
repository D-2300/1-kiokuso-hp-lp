import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HPApp from "./hp/HPApp";
import LPPage from "./lp/LPPage";
import ScrollToTop from "./shared/ScrollToTop";

function BodyBackground() {
  const location = useLocation();
  const isLP = location.pathname.startsWith("/lp");

  useEffect(() => {
    document.body.style.backgroundColor = isLP ? "#FFFFFF" : "#F8F5F0";
  }, [isLP]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <BodyBackground />
      <ScrollToTop />
      <Routes>
        <Route path="/lp" element={<LPPage />} />
        <Route path="/*" element={<HPApp />} />
      </Routes>
    </>
  );
}
