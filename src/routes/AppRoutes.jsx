import { Routes, Route, Outlet } from "react-router-dom";
import { Inicio } from "../pages/Inicio/Inicio";
import { Informacion } from "../pages/Informacion/Informacion";
import { Registro } from "../pages/Registro/Registro";
import { Login } from "../pages/Login/Login";
import { MiRefugio } from "../pages/MiRefugio/MiRefugio";
import { Ajustes } from "../pages/Ajustes/Ajustes";
import { RedirectLoggedUserGuard } from "./guards/RedirectLoggedUserGuard";
import { RedirectUnauthorizedUserGuard } from "./guards/RedirectUnauthorizedUserGuard";
import { DashboardInicio } from "../components/Dashboard/DashboardInicio";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/informacion" element={<Informacion />} />
      <Route
        element={
          <RedirectLoggedUserGuard>
            <Outlet />
          </RedirectLoggedUserGuard>
        }
      >
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route
        element={
          <RedirectUnauthorizedUserGuard>
            <Outlet />
          </RedirectUnauthorizedUserGuard>
        }
      >
        <Route path="/mi-refugio" element={<MiRefugio />} />
        <Route path="/ajustes" element={<Ajustes />} />
        <Route path="/dashboard/inicio" element={<DashboardInicio />} />
      </Route>
    </Routes>
  );
}
