import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axios";
import { useNavigate } from "react-router-dom";

const useVerificationRequests = () => {
  const [verificationRequests, setVerificationRequests] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getVerificationRequets = () => {
    setLoading(true);
    axiosClient
      .get("/requests")
      .then((res) => {
        console.log(res);
        setVerificationRequests(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const viewRequests = async (id) => {
    navigate("/staff/document-verification/" + id);
  };

  return {
    verificationRequests,
    viewRequests,
    getVerificationRequets,
    loading,
  };
};

export default useVerificationRequests;
