import { useState } from "react";
import axiosClient from "../utils/axios";

const usePdf = () => {
  const [loading, setLoading] = useState(false);
  const [pdf, setPdf] = useState(null);
  const [studentPdfs, setStudentPdfs] = useState(null);

  const addPdf = (newPdf) => {
    setStudentPdfs([...studentPdfs, newPdf]);
  };

  const getPdf = (student_id, onLoad) => {
    setLoading(true);
    axiosClient
      .get("/pdf/" + student_id)
      .then((res) => {
        console.log("pdf:");
        console.log(res.data);
        setPdf(res.data);
        onLoad(res.data.url);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getAllPdfs = (student_id) => {
    setLoading(true);
    axiosClient
      .get("/student-pdfs/" + student_id)
      .then((res) => {
        console.log(res.data);
        setStudentPdfs(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return { loading, pdf, studentPdfs, getPdf, getAllPdfs, addPdf };
};

export default usePdf;
