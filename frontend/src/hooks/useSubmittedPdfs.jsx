import React, { useState } from "react";
import axiosClient from "../utils/axios";

const useSubmittedRequests = () => {
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState(null);

  const getRequests = async (student_id) => {
    try {
      let res = await axiosClient.get("/student-requests/" + student_id);
      setRequests(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return { loading, requests, getRequests };
};

export default useSubmittedRequests;
