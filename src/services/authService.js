import axios from "axios";

export async function Registro(params) {
  const response = await axios.post(
    "http://127.0.0.1:8080/api/usuarios/registro/",
    {
      nombre: params.nombre,
      apellidos: params.apellidos,
      email: params.email,
      telefono: params.telefono,
      curso: params.curso,
      grupo: params.grupo,
      password: params.password,
    }
  );

  return response.data;
}

export async function signIn(params) {
  const response = await axios.post("http://127.0.0.1:8080/api/auth/login", {
    email: params.email,
    password: params.password,
  });

  return response.data;
}

export async function getUserData(access) {
  const response = await axios.get("http://127.0.0.1:8080/api/seguimiento/", {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });

  return response.data;
}

// A la espera del Backend
export async function signInRefresh(refresh) {
  const response = await fetch("http://127.0.0.1:8080/api/login/refresh", {
    refresh,
  });

  return response.data;
}
