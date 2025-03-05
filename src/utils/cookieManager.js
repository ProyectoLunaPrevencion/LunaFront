import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });

export const SESSION_COOKIE = "lnss";

export const getCookie = (name) => {
  cookies.get(name);
};

export const setCookie = (name, value) => {
  cookies.set(name, value);
};
