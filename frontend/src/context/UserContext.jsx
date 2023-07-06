import React, { useContext, useEffect, useState } from "react";
import axiosClient from "../utils/axios";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext(null);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("is this running");
    axiosClient
      .post("/me")
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
      });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
