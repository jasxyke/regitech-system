import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axios";

const useSubmittedDocuments = () => {
  const [submittedDocuments, setSubmittedDocuments] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateDocuments = (updatedDocuments) => {
    setSubmittedDocuments(updatedDocuments);
  };

  const verifyDocument = (document) => {
    setLoading(true);
    const docIndex = submittedDocuments.findIndex(
      (doc) => doc.id === document.id
    );

    // Create a new object with the updated name property
    const verifiedDoc = {
      ...submittedDocuments[docIndex],
      document_status_id: document.document_status_id,
      document_status: document.document_status,
      with_copies: document.with_copies,
    };

    // Create a new array with the updated object
    const updatedDocuments = [...submittedDocuments];
    updatedDocuments[docIndex] = verifiedDoc;

    setSubmittedDocuments(updatedDocuments);
    setLoading(false);
  };

  const getVerifiedDocuments = async (student_id) => {
    try {
      console.log("stud id");
      console.log(student_id);
      let res = await axiosClient.get("/verified-documents/" + student_id);
      console.log("submitted docs: ");
      console.log(typeof res.data);
      console.log(res.data);
      console.log(res.data);
      console.log(res.data === "");
      setSubmittedDocuments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUnverifiedDocuments = async (student_id) => {
    try {
      console.log("stud id");
      console.log(student_id);
      let res = await axiosClient.get("/unverified-documents/" + student_id);
      console.log("submitted docs: ");
      console.log(typeof res.data);
      console.log(res.data);
      console.log(res.data);
      console.log(res.data === "");
      setSubmittedDocuments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSubmittedDocuments = async (student_id) => {
    try {
      setLoading(true);
      console.log("stud id");
      console.log(student_id);
      let res = await axiosClient.get("/submitted-documents/" + student_id);
      console.log("submitted docs: ");
      console.log(typeof res.data);
      console.log(res.data);
      console.log(res.data);
      console.log(res.data === "");
      setSubmittedDocuments(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    submittedDocuments,
    updateDocuments,
    getSubmittedDocuments,
    verifyDocument,
    //submitVerification,
    loading,
    getUnverifiedDocuments,
  };
};

export default useSubmittedDocuments;
