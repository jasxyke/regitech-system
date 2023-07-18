import { useState } from "react";
import axiosClient from "../utils/axios";

const useVerifyDocument = ({ handleResponse, handleError }) => {
  const [verifiedDocuments, setVerifiedDocuments] = useState([]);

  const verifyDocuments = async (
    requestId,
    verifiedDocuments,
    registrarNote
  ) => {
    try {
      console.log("request id: ", requestId);
      console.log("documents: ");
      console.log(verifiedDocuments);
      console.log("note: ", registrarNote);
      const res = await axiosClient.post(`/verify-documents/${requestId}`, {
        note: registrarNote,
        documents: verifiedDocuments,
      });
      console.log(res);
      handleResponse(res.data);
    } catch (error) {
      console.log(error);
      handleError(error);
    }
  };
  return {
    verifyDocuments,
  };
};

export default useVerifyDocument;
