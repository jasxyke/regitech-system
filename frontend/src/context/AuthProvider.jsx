import { useState, useEffect } from "react";
import Cookies from "react-cookie";
import AuthContext from "./AuthContext";
import axiosClient from "../utils/axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const cookies = new Cookies();
  useEffect(() => {
    axiosClient
      .post("/me", {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        removeCookie("token");
        setLoading(false);
      });
  }, []);

  const login = (email, password) => {
    axiosClient
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        setCookie("token", response.data.token);
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    removeCookie("token");
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
