import css from "./StaffDashboard.module.css";

const VerificationRequest = ({ verificationRequests, handleView }) => {
  const requests = verificationRequests.map((request) => (
    <tr key={request.id} className={css.cols}>
      <td>{request.id}</td>
      <td>{request.student.user.firstname}</td>
      <td>{request.student.user.lastname}</td>
      <td>
        <div
          className={
            request.is_reviewed === 1
              ? `${css.reviewStatusYes}`
              : `${css.reviewStatusNo}`
          }
        >
          {request.is_reviewed ? "Yes" : "No"}
        </div>
      </td>
      <td>
        <div className={css.btncont}>
          <a
            href=""
            className={css.viewBtn}
            onClick={() => handleView(request.id)}
          >
            View
          </a>
        </div>
      </td>
    </tr>
  ));

  return <>{requests}</>;
};

export default VerificationRequest;