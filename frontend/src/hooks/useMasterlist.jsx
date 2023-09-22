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
      setLoading(false);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      onError(error?.response?.data?.message);
      setLoading(false);
    }
  };

  const addCredentials = async (studentId, pdfFile, checklist, note) => {
    try {
      setLoading(true);
      const formData = {
        pdfFile: pdfFile,
        checklist: checklist,
        note: note,
      };
      console.log(formData);

      const res = await axiosClient.post(
        "/add-credentials/" + studentId,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("added to masterlist response: ");
      console.log(res.data);
      onSuccess(res?.data?.message, res?.data?.checklist, res?.data?.pdfRecord);
      setLoading(false);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      onError(error?.response?.data?.message);
      setLoading(false);
    }
  };
  return { addToMasterlist, loading, addCredentials };
};

export default useMasterlist;
