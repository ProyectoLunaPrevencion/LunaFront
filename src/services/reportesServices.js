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
    usuario: { idUsuario: id_usuario },
    descripcion,
    motivo,
    dondeLoVio: donde_lo_vio,
    fechaReporte: fecha_reporte,
    createdAt: created_at,
  });

  return response.data;
}

export async function getAllReportes() {
  const response = await authorizedAxiosClient.get(`/reportes`);
  return response.data;
}
