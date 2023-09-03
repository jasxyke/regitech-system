import React, { useState } from "react";
import axiosClient from "../utils/axios";

const useMasterlist = (onError, onSuccess) => {
  const [loading, setLoading] = useState(false);

  const addToMasterlist = async (
    studentForm,
    checklist,
    pdfFile,
    note,
    hasNoEmail
  ) => {
    try {
      setLoading(true);
      const formData = {
        ...studentForm,
        checklist: checklist,
        pdfFile: pdfFile,
        note: note,
        hasNoEmail: hasNoEmail,
      };
      console.log(formData);
      const res = await axiosClient.post("/add-to-masterlist", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("response to masterlist add: ");
      console.log(res.data);
      onSuccess(res?.data?.message);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      onError(error?.response?.data?.message);
    }
  };
  return { addToMasterlist, loading };
};

export default useMasterlist;
