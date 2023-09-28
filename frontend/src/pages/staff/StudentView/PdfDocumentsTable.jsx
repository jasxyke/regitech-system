import { Spinner } from "react-bootstrap";
import PdfDocuments from "./PdfDocuments";

const PdfDocumentsTable = ({ pdfs, loading, onDeletePdf }) => {
  return (
    <div className={"my-3 default-table"}>
      <table className="table table-hover my-0">
        <thead>
          <tr className={"table-head"}>
            <th className="col-sm-2">Date submitted</th>
            {<th className="col-sm-3">Documents inside</th>}
            <th className="col-sm-2"> Actions </th>
          </tr>
        </thead>
        <tbody className={"table-contents"}>
          {loading ? (
            <tr>
              <td colSpan={5}>
                <Spinner />
              </td>
            </tr>
          ) : pdfs !== null ? (
            <PdfDocuments pdfDocuments={pdfs} deletePdf={onDeletePdf} />
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default PdfDocumentsTable;
