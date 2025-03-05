import axios from "axios";
import { cookies, SESSION_COOKIE } from "../../utils/cookieManager";

export const authorizedAxiosClient = axios.create({
  baseURL: `http://127.0.0.1:8080/api`,
  headers: {
    Authorization: `Bearer ${cookies.get(SESSION_COOKIE)}`,
  },
});
