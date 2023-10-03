import React, { useContext, useEffect, useState } from "react";
import axiosClient from "../utils/axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const UserContext = React.createContext(null);
const cookies = new Cookies({ path: "/", expires: 0 });

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const saveUser = (user) => {
    setUser(user);
    cookies.set("user", JSON.stringify(user));
  };

  useEffect(() => {
    const userCookies = cookies.get("user");
    if (userCookies) {
      console.log("has user saved in cookies");
      console.log(userCookies);
      setUser(userCookies);
      return;
    }
    axiosClient
      .post("/me")
      .then((res) => {
        saveUser(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
        localStorage.clear();
      });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
