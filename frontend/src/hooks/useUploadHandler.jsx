import React, { useState } from "react";
import axiosClient from "../utils/axios";
import { converToFileList } from "../utils/fileListConverter";
import { useNavigate } from "react-router-dom";

const useUploadHandler = () => {
  const [pdf, setPdf] = useState(null);
  const [pdfSrc, setPdfSrc] = useState(null);

  const navigate = useNavigate();

  const addDocument = (doc) => {
    const pdfFile = new File([doc], "compiled_images.pdf", {
      type: "application/pdf",
    });
    setPdf(pdfFile);
  };

  const removeDocument = () => {
    setPdf(null);
    setPdfSrc(null);
  };

  const uploadDocuments = async (handleError) => {
    try {
      const res = await axiosClient.post(
        "/upload",
        {
          document: pdf,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      navigate("/student/dashboard");
    } catch (error) {
      console.error(error);
      handleError(error?.data?.message);
    }
  };

  return {
    uploadDocuments,
    removeDocument,
    addDocument,
  };
};

export default useUploadHandler;
