import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axios";
import { useNavigate } from "react-router-dom";

const useVerificationRequests = () => {
  const [verificationRequests, setVerificationRequests] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getRequests = (route) => {
    setLoading(true);
    axiosClient
      .get(route)
      .then((res) => {
        console.log(res);
        setVerificationRequests(res.data.data);
        setPagination(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getVerificationRequets = () => {
    setLoading(true);
    axiosClient
      .get("/requests")
      .then((res) => {
        console.log(res);
        setVerificationRequests(res.data.data);
        setPagination(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const changePage = (page) => {
    setLoading(true);
    axiosClient
      .get("/requests?page=" + page)
      .then((res) => {
        setVerificationRequests(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const searchRequestByName = (searchText) => {
    if (searchText === "") {
      getVerificationRequets();
    }
    setLoading(true);
    axiosClient
      .get("/requests/search/" + searchText)
      .then((res) => {
        console.log(res);
        let searchResult = res.data.data;
        if (searchResult == undefined) {
          setVerificationRequests(null);
          setPagination(null);
        } else {
          setVerificationRequests(res.data.data);
          setPagination(res.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const viewRequests = (id, student_id) => {
    navigate("/staff/document-verification/" + id + "/" + student_id);
  };

  return {
    verificationRequests,
    viewRequests,
    getVerificationRequets,
    loading,
    searchRequestByName,
    pagination,
    changePage,
    getRequests,
  };
};

export default useVerificationRequests;
