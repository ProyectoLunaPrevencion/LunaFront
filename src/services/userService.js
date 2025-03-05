import { authorizedAxiosClient } from "./clients/authorizedAxiosClient";

export async function getCurrentUser() {
  const response = await authorizedAxiosClient.get(`/auth/usuarios/current`);
  return response.data;
}
