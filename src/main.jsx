import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/reset.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme accentColor="pink">
        <AppRoutes />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
