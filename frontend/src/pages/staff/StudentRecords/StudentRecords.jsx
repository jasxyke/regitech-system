import React from "react";
import StaffStyles from "../StaffDashboard/StaffDashboard.module.css";
import { convertStampToDate } from "../../../utils/datesHandler";

const StudentRecords = ({ studentRecords, handleView }) => {
  const students = studentRecords.map((student) => (
    <tr key={student.id}>
      <td>
        {student.user.lastname +
          ", " +
          student.user.firstname +
          " " +
          student.user.midname || ""}
      </td>
      <td>{student.year_admitted}</td>
      <td>{student.course.short_name}</td>
      <td>
        <div
          className={
            student.student_status_id === 1
              ? `${"mx-auto " + StaffStyles.reviewStatusYes}`
              : `${"mx-auto " + StaffStyles.reviewStatusNo}`
          }
        >
          {student.student_status_id == 1
            ? "Complete"
            : student.student_status.name}
        </div>
      </td>
      <td>
        <button
          className={
            "btn py-1 mx-auto px-0 rounded-pill my-0 " + StaffStyles.viewBtn
          }
          onClick={() => handleView(student.id)}
        >
          {" "}
          View{" "}
        </button>
      </td>
    </tr>
  ));
  return <>{students}</>;
};

export default StudentRecords;
