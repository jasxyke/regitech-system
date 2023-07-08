import { useEffect } from "react";
import axiosClient from "../utils/axios";

const useCRFKCookie = () => {
  useEffect(() => {
    axiosClient
      .get("/sanctum/csrf-cookie", {
        baseURL: "http://127.0.0.1:8000",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <></>;
};

export default useCRFKCookie;
