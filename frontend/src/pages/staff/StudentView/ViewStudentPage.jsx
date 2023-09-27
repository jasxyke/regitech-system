import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../../../components/LoadingPage";
import useStudents from "../../../hooks/useStudents";
import StudentRecordView from "./StudentRecordView";

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
      <StudentRecordView studentProp={student} />
    </>
  );
};

export default ViewStudentPage;
