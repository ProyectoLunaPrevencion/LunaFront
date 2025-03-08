import { authorizedAxiosClient } from "./clients/authorizedAxiosClient";

export async function getCurrentUser() {
  const response = await authorizedAxiosClient.get(`/usuarios/current`);
  return response.data;
}

export async function getAllUsers() {
  const response = await authorizedAxiosClient.get(`/usuarios`);
  return response.data;
}

export async function deleteUser(idUsuario) {
  const response = await authorizedAxiosClient.delete(`/usuarios/${idUsuario}`);
  return response.data;
}
