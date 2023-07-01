import React from "react";
import axiosClient from "../utils/axios";

const useDocuments = () => {
  const getDocuments = async (requestId, setDocuments) => {
    try {
      const res = await axiosClient.get(`/request-documents/${requestId}`);
      console.log(res);

      setDocuments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getDocuments,
  };
};

export default useDocuments;
