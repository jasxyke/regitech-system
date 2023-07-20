import axios from "axios";

axios.defaults.withCredentials = true;

export const DOMAIN = "http://192.168.181.213:8000";
//export const DOMAIN = "https://regitech.co"

const axiosClient = axios.create({
  baseURL: DOMAIN + "/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  if (token != null) token = JSON.parse(token);
  config.headers.Authorization = "Bearer " + token;
  return config;
});

axiosClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.status == 401) {
      localStorage.clear();
      return err;
    }
    throw err;
  }
);

export const guestAxios = axios.create({
  baseURL: DOMAIN + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
