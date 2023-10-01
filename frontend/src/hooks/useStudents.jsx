import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../utils/axios";

const useStudents = () => {
  const [students, setStudents] = useState(null);
  const [student, setStudent] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getStudents = (route) => {
    setLoading(true);
    axiosClient
      .get(route)
      .then((res) => {
        console.log(res.data);
        setStudents(res.data.data);
        setPagination(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getStudent = (studentId) => {
    setLoading(true);
    axiosClient
      .get("/students/" + studentId)
      .then((res) => {
        console.log(res.data);
        console.log("STUDENT REQUEST");
        setStudent(res.data);
        //setPagination(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getDefaultStudents = () => {
    setLoading(true);
    axiosClient
      .get("/students")
      .then((res) => {
        console.log(res);
        setStudents(res.data.data);
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
      .get("/students?page=" + page)
      .then((res) => {
        setStudents(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const searchStudentByName = (searchText) => {
    if (searchText === "") {
      getStudents("/students");
    }
    setLoading(true);
    axiosClient
      .get("/students/search/" + searchText)
      .then((res) => {
        console.log(res.data);
        let searchResult = res.data.data;
        if (searchResult == undefined) {
          setStudents(null);
          setPagination(null);
        } else {
          setStudents(res.data.data);
          setPagination(res.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const viewStudent = async (id) => {
    navigate("/staff/student-record/" + id);
  };

  return {
    students,
    viewStudent,
    loading,
    searchStudentByName,
    pagination,
    changePage,
    getStudents,
    getDefaultStudents,
    getStudent,
    student,
  };
};

export default useStudents;
