import { authorizedAxiosClient } from "./clients/authorizedAxiosClient";

export async function getCurrentUser() {
  const response = await authorizedAxiosClient.get(`/usuarios/current`);
  return response.data;
}
