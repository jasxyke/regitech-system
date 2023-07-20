import React, { useState } from "react";
import axiosClient from "../utils/axios";
import { converToFileList } from "../utils/fileListConverter";
import { useNavigate } from "react-router-dom";

const useUploadHandler = ({ handleResponse, handleError }) => {
  const [pdf, setPdf] = useState(null);
  const [pdfSrc, setPdfSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addDocument = (doc) => {
    setLoading(true);
    const pdfFile = new File([doc], "compiled_images.pdf", {
      type: "application/pdf",
    });
    setPdf(pdfFile);
    setLoading(false);
  };

  const removeDocument = () => {
    setPdf(null);
    setPdfSrc(null);
  };

  const uploadDocuments = async () => {
    setLoading(true);
    try {
      console.log("PDF: ");
      console.log(pdf);
      console.log("pdfsrc:");
      console.log(pdfSrc);
      if (pdf === null || pdfSrc === null) {
        handleError("Please upload your document images");
        return;
      }
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
      handleResponse(res.data.message);
      navigate("/student/dashboard");
      setLoading(false);
    } catch (error) {
      console.error(error);
      handleError(error?.data?.message);
      setLoading(false);
    }
  };

  return {
    uploadDocuments,
    removeDocument,
    addDocument,
    loading,
    pdfSrc,
    setPdfSrc,
  };
};

export default useUploadHandler;
