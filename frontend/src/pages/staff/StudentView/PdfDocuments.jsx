import ConfirmDeleteModal from "../../../components/modals/ConfirmDeleteModal";
import { listDocuments } from "../../../utils/dataFormatter";
import { convertStampToDate } from "../../../utils/datesHandler";
import css from "./StudentDashboard.module.css";

const PdfDocuments = ({ pdfDocuments, deletePdf }) => {
  const documents = pdfDocuments.map((pdf) => (
    <tr key={pdf.id}>
      <td className="">{convertStampToDate(pdf.created_at)}</td>
      <td>{listDocuments(pdf.documents)}</td>
      <td>
        <div className={css.pdfBtnsContainer}>
          <button
            className={"btn rounded-pill view-btn"}
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
