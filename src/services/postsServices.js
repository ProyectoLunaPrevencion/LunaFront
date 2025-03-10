import { authorizedAxiosClient } from "./clients/authorizedAxiosClient";

export async function createPost({ id_usuario, contenido, created_at }) {
  const response = await authorizedAxiosClient.post("/postsPizarra", {
    usuario: { idUsuario: id_usuario },
    contenido,
    created_at,
  });

  return response.data;
}

export async function getAllPosts() {
  const response = await authorizedAxiosClient.get(`/postsPizarra`);
  return response.data;
}
