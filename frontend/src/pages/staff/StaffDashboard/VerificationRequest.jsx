import { convertStampToDate } from "../../../utils/datesHandler";
import StaffStyles from "./StaffDashboard.module.css";

const VerificationRequest = ({ verificationRequests, handleView }) => {
  const requests = verificationRequests.map((request) => (
    <tr key={request.id}>
      <td style={{ whiteSpace: "nowrap" }}>
        {convertStampToDate(request.created_at)}
      </td>
      <td>{request.student.user.lastname}</td>
      <td>{request.student.user.firstname}</td>
      <td>
        <div
          className={
            request.is_reviewed === 1
              ? `${"mx-auto " + "reviewStatusYes"}`
              : `${"mx-auto " + "reviewStatusNo"}`
          }
        >
          {request.is_reviewed == 1 ? "Yes" : "No"}
        </div>
      </td>
      <td>
        <button
          className={"btn rounded-pill view-btn"}
          onClick={() => handleView(request.id, request.student_id)}
        >
          {" "}
          View{" "}
        </button>
      </td>
    </tr>
  ));

  return <>{requests}</>;
};

export default VerificationRequest;
