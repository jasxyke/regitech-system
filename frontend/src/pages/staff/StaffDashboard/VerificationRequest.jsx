import { convertStampToDate } from "../../../utils/datesHandler";
import StaffStyles from "./StaffDashboard.module.css";

const VerificationRequest = ({ verificationRequests, handleView }) => {
  const requests = verificationRequests.map((request) => (
    <tr key={request.id}>
      <td>{convertStampToDate(request.created_at)}</td>
      <td>{request.student.user.lastname}</td>
      <td>{request.student.user.firstname}</td>
      <td>
        <div
          className={
            request.is_reviewed === 1
              ? `${"mx-auto " + StaffStyles.reviewStatusYes}`
              : `${"mx-auto " + StaffStyles.reviewStatusNo}`
          }
        >
          {request.is_reviewed == 1 ? "Yes" : "No"}
        </div>
      </td>
      <td>
        <button
          className={
            "btn py-1 mx-auto px-0 rounded-pill my-0 " + StaffStyles.viewBtn
          }
          onClick={() => handleView(request.id)}
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
