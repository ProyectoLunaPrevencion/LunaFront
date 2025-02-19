import { Routes, Route } from "react-router-dom";
import { Inicio } from "../pages/Inicio/Inicio";
import { Registro } from "../pages/Registro/Registro";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}
