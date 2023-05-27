import axios from "axios";

axios.defaults.withCredentials = true;

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000" + "/api",
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
      throw err;
    }
  }
);

export const guestAxios = axios.create({
  baseURL: "http://127.0.0.1:8000" + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
