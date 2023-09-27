import { formatFullName } from "../../../utils/dataFormatter";
import StudentCSS from "./StudentDashboard.module.css";

const StudentProfile = ({ student, hideHeader = false }) => {
  const user = student;
  console.log("USER!!!!!" + user.user.firstname);
  return (
    <div className={"rounded-top rounded-bottom " + StudentCSS.fullTable}>
      <table className="table table-borderless fw-bold rounded-top rounded-bottom">
        <thead className={StudentCSS.tableHead}>
          {!hideHeader && (
            <tr>
              <th scope="col">Student profile</th>
            </tr>
          )}
        </thead>
        <tbody className={StudentCSS.tablebody}>
          <tr>
            <td className="bg-grey">
              <span
                className={
                  StudentCSS.studentInfo + " rounded-top rounded-bottom bg-grey"
                }
              >
                Name:{" "}
                {formatFullName(
                  user?.user?.firstname,
                  user?.user?.lastname,
                  user?.user?.midname,
                  false
                ) || ""}
              </span>
            </td>
          </tr>
          <tr>
            <td className="bg-grey">
              <span
                className={
                  StudentCSS.studentInfo + " rounded-top rounded-bottom bg-grey"
                }
              >
                Email address: {user?.user?.email}
              </span>
            </td>
          </tr>
          <tr>
            <td className="bg-grey">
              <span
                className={
                  StudentCSS.studentInfo + " rounded-top rounded-bottom bg-grey"
                }
              >
                Course: {user?.course?.name}
              </span>
            </td>
          </tr>
          <tr>
            <td className="bg-grey">
              <span
                className={
                  StudentCSS.studentInfo + " rounded-top rounded-bottom bg-grey"
                }
              >
                Year admitted: {user?.year_admitted}
              </span>
            </td>
          </tr>
          <tr>
            <td className="bg-grey">
              <span
                className={
                  StudentCSS.studentInfo + " rounded-top rounded-bottom bg-grey"
                }
              >
                Status: {user?.student_status?.name}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentProfile;
