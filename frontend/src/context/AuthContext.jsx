import React, { useContext, useState } from "react";
import { cookies, guestAxios } from "../utils/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = (email, password) => {
    setLoading(true);
    guestAxios
      .post("/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        cookies.set("token", res.data.token);
        if (res.data.user_role_id === 4) {
          navigate("/student/dashboard");
        } else if (res.data.user_role_id >= 2 && res.data.user_role_id <= 4) {
          navigate("/staff/dasboard");
        } else {
          console.log("error on role id");
          navigate("/login");
        }
        setLoading(false);
      })
      .catch((error) => {
        cookies.remove("token");
        setLoading(false);
      });
  };

  const logout = () => {
    cookies.remove("token");
  };

  const value = {
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
