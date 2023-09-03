import React from "react";
import { convertStampToDate } from "../../../utils/datesHandler";
import StaffStyles from "../../staff/StaffDashboard/StaffDashboard.module.css";
import { listDocuments } from "../../../utils/dataFormatter";

const PdfDocuments = ({ pdfDocuments }) => {
  const documents = pdfDocuments.map((pdf) => (
    <tr key={pdf.id}>
      <td>{convertStampToDate(pdf.created_at)}</td>
      {/* <td>
        <div
          className={
            request.is_reviewed === 1
              ? `${"mx-auto " + StaffStyles.reviewStatusYes}`
              : `${"mx-auto " + StaffStyles.reviewStatusNo}`
          }
        >
          {request.is_reviewed == 1 ? "Yes" : "No"}
        </div>
      </td> */}
      <td>{listDocuments(pdf.documents)}</td>
      <td>
        <button
          className={
            "btn py-1 mx-auto px-0 rounded-pill my-0 " + StaffStyles.viewBtn
          }
          onClick={() => window.open(pdf.url, "_newtab")}
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
