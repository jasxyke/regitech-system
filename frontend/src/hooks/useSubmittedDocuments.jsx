import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axios";

const useSubmittedDocuments = () => {
  const [submittedDocuments, setSubmittedDocuments] = useState(null);

  const getSubmittedDocuments = async (student_id) => {
    try {
      console.log("stud id");
      console.log(student_id);
      let res = await axiosClient.get("/submitted-documents/" + student_id);
      console.log("submitted docs: ");
      console.log(typeof res.data);
      console.log(res.data);
      console.log(res);
      console.log(res.data === "");
      setSubmittedDocuments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    submittedDocuments,
    setSubmittedDocuments,
    getSubmittedDocuments,
  };
};

export default useSubmittedDocuments;
