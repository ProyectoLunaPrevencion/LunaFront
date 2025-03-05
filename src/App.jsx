import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from "./routes/AppRoutes.jsx";

import "./styles/reset.css";
import "@radix-ui/themes/styles.css";
import "./index.css";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Theme accentColor="pink" className="background">
          <Toaster />
          <AppRoutes />
        </Theme>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
