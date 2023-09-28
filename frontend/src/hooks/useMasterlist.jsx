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

  const updateStudentProfile = async (
    studentId,
    email,
    firstname,
    midname,
    lastname,
    course_id,
    year_admitted,
    isTransferee
  ) => {
    try {
      setLoading(true);
      const studentData = {
        email: email,
        firstname: firstname,
        midname: midname,
        lastname: lastname,
        course_id: course_id,
        year_admitted: year_admitted,
        transferee: isTransferee,
      };
      console.log("student data: ");
      console.log(studentData);
      const res = await axiosClient.put("/students/" + studentId, studentData);
      console.log("updated masterlist: ");
      console.log(res.data);
      onSuccess(res?.data?.message, res?.data?.student);
    } catch (error) {
      console.log(error.response);
      onError(error?.response?.data?.message);
    }
  };

  const saveChecklist = async (student_id, checklist) => {
    try {
      setLoading(true);
      console.log("saving student checklist: ");
      console.log(checklist);
      const res = await axiosClient.put("/save-checklist/" + student_id, {
        checklist: checklist,
      });
      console.log("updated checklist: ");
      console.log(res.data);
      onSuccess(res?.data?.message, res.data.checklist);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      onError(error?.response?.data?.message);
      setLoading(false);
    }
  };
  return {
    addToMasterlist,
    loading,
    addCredentials,
    updateStudentProfile,
    saveChecklist,
  };
};

export default useMasterlist;
