import { Routes, Route, Outlet } from "react-router-dom";
import { Informacion } from "../pages/Informacion/Informacion";
import { Registro } from "../pages/Registro/Registro";
import { Login } from "../pages/Login/Login";
import { MiRefugio } from "../pages/MiRefugio/MiRefugio";
import { Ajustes } from "../pages/Ajustes/Ajustes";
import { RedirectLoggedUserGuard } from "./guards/RedirectLoggedUserGuard";
import { RedirectUnauthorizedUserGuard } from "./guards/RedirectUnauthorizedUserGuard";
import { MainHeader } from "../components/Header/MainHeader";
import { DashboardHeader } from "../components/Header/DashboardHeader";
import { Inicio } from "../pages/Inicio/Inicio";
import { Footer } from "../components/Footer/Footer";
import { UnauthorizedDashboardGuard } from "./guards/UnauthorizedDashboardGuard";
import { DashboardGuard } from "./guards/DashboardGuard";
import { Pizarra } from "../pages/Pizarra/Pizarra";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <DashboardGuard>
            <MainHeader />
            <Outlet />
            <Footer />
          </DashboardGuard>
        }
      >
        <Route index element={<Inicio />} />
        <Route path="informacion" element={<Informacion />} />
      </Route>
      <Route
        element={
          <RedirectLoggedUserGuard>
            <MainHeader />
            <Outlet />
            <Footer />
          </RedirectLoggedUserGuard>
        }
      >
        <Route path="registro" element={<Registro />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route
        element={
          <RedirectUnauthorizedUserGuard>
            <DashboardGuard>
              <MainHeader />
              <Outlet />
              <Footer />
            </DashboardGuard>
          </RedirectUnauthorizedUserGuard>
        }
      >
        <Route path="mi-refugio" element={<MiRefugio />} />
        <Route path="pizarra" element={<Pizarra />} />
        <Route path="ajustes" element={<Ajustes />} />
      </Route>
      <Route
        path="dashboard"
        element={
          <RedirectUnauthorizedUserGuard>
            <UnauthorizedDashboardGuard>
              <DashboardHeader />
              <Outlet />
              <Footer />
            </UnauthorizedDashboardGuard>
          </RedirectUnauthorizedUserGuard>
        }
      >
        <Route index element={<Inicio />} />
        <Route path="ajustes" element={<Ajustes />} />
        <Route path="informacion" element={<Informacion />} />
        <Route path="pizarra" element={<Pizarra />} />
      </Route>
    </Routes>
  );
}
