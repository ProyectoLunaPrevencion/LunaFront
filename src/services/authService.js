import { axiosClient } from "./clients/axiosClient";
import { authorizedAxiosClient } from "./clients/authorizedAxiosClient";

export async function Registro({
  nombre,
  apellidos,
  email,
  telefono,
  curso,
  grupo,
  password,
}) {
  const response = await axiosClient.post("/usuarios/registro", {
    nombre,
    apellidos,
    email,
    telefono,
    curso,
    grupo,
    password,
    rol: "ESTUDIANTE",
  });

  return response.data;
}

export async function logIn(params) {
  const response = await axiosClient.post("/auth/login", {
    email: params.email,
    password: params.password,
  });

  return response.data;
}

export async function getUserById(id_usuario) {
  const response = await authorizedAxiosClient.get(
    `/auth/usuarios/${id_usuario}`
  );
  return response.data;
}

export async function updateUser(id, data) {
  const response = await authorizedAxiosClient.put(`/usuarios/${id}`, data);
  return response.data;
}
