import React, { useContext, useEffect, useState } from "react";
import axiosClient, { cookies } from "../utils/axios";
import { redirect, useNavigate } from "react-router-dom";

const UserContext = React.createContext(null);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("is this running");
    axiosClient
      .post("/me")
      .then((res) => {
        setUser(res.data);
        console.log(res);
      })
      .catch((error) => {
        cookies.remove("token");
        console.log(error);
        navigate("/");
      });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
