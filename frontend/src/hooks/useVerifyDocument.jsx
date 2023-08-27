import { useState } from "react";
import axiosClient from "../utils/axios";

const useVerifyDocument = ({ handleResponse, handleError }) => {
  const verifyDocuments = async (
    requestId,
    verifiedDocuments,
    registrarNote,
    staff_id
  ) => {
    try {
      console.log("request id: ", requestId);
      console.log("documents: ");
      console.log(verifiedDocuments);
      console.log("note: ", registrarNote);
      const res = await axiosClient.post(
        `/verify-documents/${requestId}/${staff_id}`,
        {
          note: registrarNote,
          documents: verifiedDocuments,
        }
      );
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
