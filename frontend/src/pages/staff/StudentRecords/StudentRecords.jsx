import { formatFullName } from "../../../utils/dataFormatter";
import StaffStyles from "../StaffDashboard/StaffDashboard.module.css";

const StudentRecords = ({ studentRecords, handleView }) => {
  const students = studentRecords.map((student) => {
    return (
      <tr key={student.student.id}>
        <td>
          {formatFullName(
            student.firstname,
            student.lastname,
            student.midname,
            true
          )}
        </td>
        <td>{student.student.year_admitted}</td>
        <td>{student.student.course.short_name}</td>
        <td>
          <div
            className={
              student.student.student_status_id === 1
                ? `${"mx-auto " + "reviewStatusYes"}`
                : `${"mx-auto " + "reviewStatusNo"}`
            }
          >
            {student.student.student_status_id == 1
              ? "Complete"
              : student.student.student_status.name}
          </div>
        </td>
        <td>
          <button
            className={"btn rounded-pill view-btn"}
            onClick={() => handleView(student.student.id)}
          >
            {" "}
            View{" "}
          </button>
        </td>
      </tr>
    );
  });
  return <>{students}</>;
};

export default StudentRecords;
