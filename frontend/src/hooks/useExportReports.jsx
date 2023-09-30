import React, { useState } from "react";
import axiosClient from "../utils/axios";

const useExportReports = (handleSuccess, handleError) => {
  const [loading, setLoading] = useState(false);

  const downloadMasterlist = async (
    years,
    courses,
    studentInfos,
    documentTypes
  ) => {
    try {
      setLoading(true);
      let data = {
        years: years,
        courses: courses,
        documents: documentTypes,
        studentColumns: studentInfos,
      };

      const res = await axiosClient.post("/export-masterlist", data, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Student documents report.xlsx"); // Replace with the desired file name and extension
      document.body.appendChild(link);
      link.click();

      // Clean up the URL and remove the temporary link
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
      handleSuccess("Documents report exported, check your downloads");
      setLoading(false);
    } catch (error) {
      console.error("Error downloading file: ", error.data.response.message);
      handleError(error.data.response.message);
      setLoading(false);
    }
  };
  const downloadStudentDocumentsReport = async () => {
    try {
      let res = await axiosClient.get("/export-student-documents-report", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Student documents report.xlsx"); // Replace with the desired file name and extension
      document.body.appendChild(link);
      link.click();

      // Clean up the URL and remove the temporary link
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  return {
    downloadStudentDocumentsReport,
    loading,
    downloadMasterlist,
  };
};

export default useExportReports;
