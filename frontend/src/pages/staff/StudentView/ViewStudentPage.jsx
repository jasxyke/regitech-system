import React, { useEffect } from "react";
import useStudents from "../../../hooks/useStudents";
import StudentDashboard from "../../student/StudentDashboard/StudentDashboard";
import LoadingPage from "../../../components/LoadingPage";
import { useParams } from "react-router-dom";

const ViewStudentPage = () => {
  const { id } = useParams();
  const studentsHook = useStudents();
  const student = studentsHook.student;
  useEffect(() => {
    studentsHook.getStudent(id);
  }, []);
  console.log("STUDENT: ", student);
  if (student === null) {
    return <LoadingPage />;
  }
  return (
    <>
      <StudentDashboard studentProp={student} />
    </>
  );
};

export default ViewStudentPage;
