import React from "react";
import StaffStyles from "../StaffDashboard/StaffDashboard.module.css";
import { convertStampToDate } from "../../../utils/datesHandler";

const StudentRecords = ({ studentRecords, handleView }) => {
  const students = studentRecords.map((student) => {
    return (
      <tr key={student.student.id}>
        <td>
          {student.lastname +
            ", " +
            student.firstname +
            " " +
            student.midname || ""}
        </td>
        <td>{student.student.year_admitted}</td>
        <td>{student.student.course.short_name}</td>
        <td>
          <div
            className={
              student.student.student_status_id === 1
                ? `${"mx-auto " + StaffStyles.reviewStatusYes}`
                : `${"mx-auto " + StaffStyles.reviewStatusNo}`
            }
          >
            {student.student.student_status_id == 1
              ? "Complete"
              : student.student.student_status.name}
          </div>
        </td>
        <td>
          <button
            className={
              "btn py-1 mx-auto px-0 rounded-pill my-0 " + StaffStyles.viewBtn
            }
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
