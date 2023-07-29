import React, { useState } from "react";
import { guestAxios } from "../utils/axios";
import { useNavigate } from "react-router-dom";

const useResetPassword = ({ handleError, handleResponse }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const sendResetLink = async (email) => {
    setLoading(true);
    try {
      const res = await guestAxios.post("/password/email", {
        email: email,
      });
      console.log(res);
      handleResponse(res.data.message);
    } catch (error) {
      console.log(error);
      handleError(error.response.data.message);
    }
    setLoading(false);
  };

  const resetPassword = async (
    email,
    token,
    password,
    password_confirmation
  ) => {
    setLoading(true);
    try {
      const res = await guestAxios.post("/password/reset", {
        token: token,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      });
      console.log(res);
      handleResponse(res.data.message);
      //navigate("/");
    } catch (error) {
      console.log(error);
      handleError(error.response.data.message);
    }
    setLoading(false);
  };
  return { sendResetLink, resetPassword, loading };
};

export default useResetPassword;
