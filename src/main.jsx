import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import "./styles/reset.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import Header from "./components/Header/Header.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme accentColor="pink" className="background">
        <Toaster />
        <Header />
        <AppRoutes />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
