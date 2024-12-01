import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  </StrictMode>
);
