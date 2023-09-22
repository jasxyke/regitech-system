import { useEffect } from "react";
import axiosClient, { DOMAIN } from "../utils/axios";

const useCRFKCookie = () => {
  const getCookie = () => {
    axiosClient
      .get("/sanctum/csrf-cookie", {
        baseURL: DOMAIN,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        getCookie();
      });
  };
  useEffect(() => {
    getCookie();
  }, []);
  return <></>;
};

export default useCRFKCookie;
