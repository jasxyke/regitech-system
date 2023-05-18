import axios from "axios";
import Cookies from "universal-cookie";

export const cookies = new Cookies();

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000" + "/api",
  //withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  let token = cookies.get("token");
  config.headers.Authorization = "Bearer " + token;
  return config;
});

axiosClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.status == 401) {
      cookies.remove("token");
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
