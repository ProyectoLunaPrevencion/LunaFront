import { Routes, Route } from "react-router-dom";
import { MiRefugio } from "../pages/MiRefugio/MiRefugio";
import { Ajustes } from "../pages/Ajustes/Ajustes";

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/mi-refugio" element={<MiRefugio />} />
      <Route path="/ajustes" element={<Ajustes />} />
    </Routes>
  );
}
