import { authorizedAxiosClient } from "./clients/authorizedAxiosClient";

export async function createReporte({
  id_usuario,
  descripcion,
  motivo,
  donde_lo_vio,
  fecha_reporte,
  created_at,
}) {
  const response = await authorizedAxiosClient.post("/reportes", {
    id_usuario,
    descripcion,
    motivo,
    donde_lo_vio,
    fecha_reporte,
    created_at,
  });

  return response.data;
}
