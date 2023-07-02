import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axios";
import { useNavigate } from "react-router-dom";

const useVerificationRequests = () => {
  const [verificationRequests, setVerificationRequests] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axiosClient
      .get("/requests")
      .then((res) => {
        console.log(res);
        setVerificationRequests(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const viewRequests = async (id) => {
    //navigate()
  };

  return {
    verificationRequests,
    viewRequests,
  };
};

export default useVerificationRequests;
