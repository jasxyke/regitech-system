import React from "react";
import axiosClient from "../utils/axios";

const useExportReports = () => {
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
  };
};

export default useExportReports;
