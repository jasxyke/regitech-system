import { listDocuments } from "../../../utils/dataFormatter";
import { convertStampToDate } from "../../../utils/datesHandler";
import StaffStyles from "../../staff/StaffDashboard/StaffDashboard.module.css";

const PdfDocuments = ({ pdfDocuments }) => {
  const documents = pdfDocuments.map((pdf) => (
    <tr key={pdf.id}>
      <td>{convertStampToDate(pdf.created_at)}</td>
      <td>{listDocuments(pdf.documents)}</td>
      <td>
        <button
          className={
            "btn py-1 mx-auto px-0 rounded-pill  " + StaffStyles.viewBtn
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
