import ConfirmDeleteModal from "../../../components/modals/ConfirmDeleteModal";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import { listDocuments } from "../../../utils/dataFormatter";
import { convertStampToDate } from "../../../utils/datesHandler";
import css from "./StudentDashboard.module.css";

const PdfDocuments = ({ pdfDocuments, deletePdf }) => {
  const documents = pdfDocuments.map((pdf) => (
    <tr key={pdf.id}>
      <td>{convertStampToDate(pdf.created_at)}</td>
      {/* <td>
        <div
          className={
            request.is_reviewed === 1
              ? `${"mx-auto " + css.reviewStatusYes}`
              : `${"mx-auto " + css.reviewStatusNo}`
          }
        >
          {request.is_reviewed == 1 ? "Yes" : "No"}
        </div>
      </td> */}
      <td>{listDocuments(pdf.documents)}</td>
      <td>
        <div className={css.pdfBtnsContainer}>
          <button
            className={"btn py-1 mx-auto px-0 rounded-pill my-0 view-btn"}
            onClick={() => window.open(pdf.url, "_newtab")}
          >
            {" "}
            View{" "}
          </button>
          <ConfirmDeleteModal
            handleDelete={deletePdf}
            id={pdf.id}
            headerText={"Deleting PDF"}
            message={"Are you sure you want to delete this PDF?"}
          />
        </div>
      </td>
    </tr>
  ));
  return <>{documents}</>;
};

export default PdfDocuments;
