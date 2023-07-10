import React, { useContext, useState } from "react";
import axiosClient, { guestAxios } from "../utils/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

function storeAuthDetails(res) {
  let token = JSON.stringify(res.data.token);
  let role_id = JSON.stringify(res.data.role_id);
  localStorage.setItem("token", token);
  localStorage.setItem("role_id", role_id);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [roleId, setRoleId] = useState(0);
  const navigate = useNavigate();

  const signup = (userForm, onError) => {
    setLoading(true);
    guestAxios
      .post("/sign-up", userForm)
      .then((res) => {
        storeAuthDetails(res);
        if (res.data.role_id == 4) {
          navigate("/student/dashboard");
        } else if (res.data.role_id >= 1 && res.data.role_id <= 3) {
          navigate("/staff/verification-requests");
        } else {
          console.log("error on role id");
          navigate("/");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.errors);
        onError(error.response.data.message);
        setLoading(false);
      });
  };

  const login = (email, password, onError) => {
    setLoading(true);
    guestAxios
      .post("/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        storeAuthDetails(res);
        // setAuthenticated(true);
        // setUserRole(res.data.role_id);
        console.log(res);
        if (res.data.role_id == 4) {
          navigate("/student/dashboard");
        } else if (res.data.role_id >= 1 && res.data.role_id <= 3) {
          navigate("/staff/verification-requests");
        } else {
          console.log("error on role id");
          navigate("/");
        }
        setLoading(false);
      })
      .catch((error) => {
        localStorage.clear();
        setLoading(false);
        console.log(error);
        onError(error?.response?.data?.error);
      });
  };

  const logout = () => {
    try {
      console.log("logout");
      axiosClient
        .post("/logout")
        .then((res) => {
          console.log(res);
          localStorage.clear();
          navigate("/");
          //window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
      //window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const checkAuthenticated = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      return false;
    } else {
      return true;
    }
  };

  const getUserRole = () => {
    return parseInt(JSON.parse(localStorage.getItem("role_id")));
  };

  const value = {
    loading,
    login,
    logout,
    signup,
    checkAuthenticated,
    getUserRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
