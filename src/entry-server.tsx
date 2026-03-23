import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { StrictMode } from "react";
import AppRoutes from "./AppRoutes";
import "./index.css";

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>
  );
}
