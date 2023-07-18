import React from "react";
import { convertStampToDate } from "../../../utils/datesHandler";
import StaffStyles from "../../staff/StaffDashboard/StaffDashboard.module.css";

const PdfDocuments = ({ pdfDocuments }) => {
  const documents = pdfDocuments.map((request) => (
    <tr key={request.id}>
      <td>{convertStampToDate(request.created_at)}</td>
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
          onClick={() => window.open(request.url, "_newtab")}
        >
          {" "}
          View{" "}
        </button>
      </td>
    </tr>
  ));
  return <>{documents}</>;
};

export default PdfDocuments;
