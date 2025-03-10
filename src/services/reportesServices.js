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

export async function getReporte(id) {
  const response = await authorizedAxiosClient.get(`/reportes/${id}`);
  return response.data;
}

export async function createSeguimientoReporte({
  id,
  comentarios,
  estado,
  created_at,
}) {
  const response = await authorizedAxiosClient.post("/seguimiento", {
    reporte: { idReporte: id },
    comentarios,
    estado,
    created_at,
  });

  return response.data;
}

export async function getSeguimientosReporte(id) {
  const response = await authorizedAxiosClient.get(
    `/reportes/${id}/seguimiento`
  );
  return response.data;
}

export async function updateSeguimientosReporte(id, { estado, comentarios }) {
  const response = await authorizedAxiosClient.put(`/seguimiento/${id}`, {
    estado,
    comentarios,
  });
  return response.data;
}

export async function deleteSeguimientosReporte(id) {
  const response = await authorizedAxiosClient.delete(`/seguimiento/${id}`);
  return response.data;
}
