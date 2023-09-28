import { useState } from "react";
import axiosClient from "../utils/axios";

const usePdf = (handleSuccess, handleError) => {
  const [loading, setLoading] = useState(false);
  const [pdf, setPdf] = useState(null);
  const [studentPdfs, setStudentPdfs] = useState(null);

  const addPdf = (newPdf) => {
    setStudentPdfs([...studentPdfs, newPdf]);
  };

  const deletePdf = async (pdf_id) => {
    setLoading(true);
    try {
      console.log("deleting pdf: " + pdf_id);
      const res = await axiosClient.delete("/pdfs/" + pdf_id);
      let updatedPdfList = studentPdfs.filter(
        (pdf) => pdf.id != res.data.pdf_id
      );
      console.log(res.data.pdf_id);
      setStudentPdfs(updatedPdfList);
      handleSuccess(res.data.message, res.data.pdf_id);
      setLoading(false);
    } catch (error) {
      console.log(error);
      handleError(error.data.response.message);
      setLoading(false);
    }
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

  return { loading, pdf, studentPdfs, getPdf, getAllPdfs, addPdf, deletePdf };
};

export default usePdf;
