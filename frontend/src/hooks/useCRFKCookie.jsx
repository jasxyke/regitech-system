import { useEffect } from "react";
import axiosClient, { DOMAIN } from "../utils/axios";

const useCRFKCookie = () => {
  useEffect(() => {
    axiosClient
      .get("/sanctum/csrf-cookie", {
        baseURL: DOMAIN,
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
