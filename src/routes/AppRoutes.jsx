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
import { Notificaciones } from "../pages/Notificaciones/Notificaciones";
import { AdminGuard } from "./guards/AdminGuard";
import { CrearPizarra } from "../pages/CrearPizarra/CrearPizarra";
import { Usuarios } from "../pages/Usuarios/Usuarios";

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
        <Route path="crear-pizarra" element={<CrearPizarra />} />
        <Route
          element={
            <AdminGuard>
              <Outlet />
            </AdminGuard>
          }
        >
          <Route path="notificaciones" element={<Notificaciones />} />
          <Route path="usuarios" element={<Usuarios />} />
        </Route>
      </Route>
    </Routes>
  );
}
