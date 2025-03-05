import { Routes, Route } from "react-router-dom";
import { Inicio } from "../pages/Inicio/Inicio";
import { Informacion } from "../pages/Informacion/Informacion";
import { Registro } from "../pages/Registro/Registro";
import { Login } from "../pages/Login/Login";
import { MiRefugio } from "../pages/MiRefugio/MiRefugio";
import { Ajustes } from "../pages/Ajustes/Ajustes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/informacion" element={<Informacion />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mi-refugio" element={<MiRefugio />} />
      <Route path="/ajustes" element={<Ajustes />} />
    </Routes>
  );
}
