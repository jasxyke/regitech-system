import React, { useState } from "react";
import axiosClient from "../utils/axios";

const useUploadHandler = () => {
  const [documents, setDocuments] = useState(null);
  const [documentInfos, setDocumentInfos] = useState(null);

  const uploadDocuments = async () => {
    try {
      const res = await axiosClient.post("/upload", {
        documents,
        documentInfos,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    uploadDocuments,
  };
};

export default useUploadHandler;
