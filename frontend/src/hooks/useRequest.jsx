import React, { useState } from "react";
import axiosClient from "../utils/axios";

const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState(null);
  const [studentRequests, setStudentRequests] = useState(null);

  const getRequest = (student_id, onLoad) => {
    setLoading(true);
    axiosClient
      .get("/requests/" + student_id)
      .then((res) => {
        console.log("request:");
        console.log(res.data);
        setRequest(res.data);
        onLoad(res.data.pdf);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getAllRequests = (student_id) => {
    setLoading(true);
    axiosClient
      .get("/student-requests/" + student_id)
      .then((res) => {
        console.log(res.data);
        setStudentRequests(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return { getRequest, request, loading, studentRequests, getAllRequests };
};

export default useRequest;
