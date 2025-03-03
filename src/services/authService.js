import axios from "axios";

export async function Registro({
  nombre,
  apellidos,
  email,
  telefono,
  curso,
  grupo,
  password,
}) {
  const response = await axios.post(
    "http://127.0.0.1:8080/api/usuarios/registro",
    {
      nombre,
      apellidos,
      email,
      telefono,
      curso,
      grupo,
      password,
      rol: "ESTUDIANTE",
    }
  );

  return response.data;
}

export async function logIn(params) {
  const response = await axios.post("http://127.0.0.1:8080/api/auth/login", {
    email: params.email,
    password: params.password,
  });

  return response.data;
}

export async function getUserById(id_usuario) {
  const response = await axios.get(
    `http://127.0.0.1:8080/api/auth/usuarios/${id_usuario}`
  );
  return response.data;
}
