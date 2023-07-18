import React, { useState } from "react";
import axiosClient from "../utils/axios";

const useSubmittedPdfs = () => {
  const [loading, setLoading] = useState(false);
  const [pdfs, setPdfs] = useState(null);

  const getPdfs = async (student_id) => {
    try {
      let res = await axiosClient.get("/student-pdfs/" + student_id);
      setPdfs(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return { loading, pdfs, getPdfs };
};

export default useSubmittedPdfs;
