import Checkbox from "../../../components/forms/Checkbox";
import SelectDocumentStatus from "../../../components/ui/SelectDocumentStatus";
import { getStatus } from "../../../utils/getStatus";

const DocumentRow = ({ document, verifyDocument }) => {
  const hasBeenReviewed =
    document.document_status_id === "1" &&
    document.student_id == document.updated_by_id
      ? "disabled"
      : "";
  return (
    <div key={document.id} className={"row p-2 " + hasBeenReviewed}>
      <div className="d-5 col-sm-4">
        <p>{document.document_type.name}</p>
      </div>

      <div className="col-sm-4">
        <SelectDocumentStatus
          status={document.document_status_id}
          handleChange={(e) => {
            let status_id = e.target.value;
            const editedDocument = {
              ...document,
              document_status: getStatus(status_id),
              document_status_id: status_id,
            };
            verifyDocument(editedDocument);
          }}
        />
      </div>
      <div className="col-sm-4">
        <Checkbox
          label={"Photocopies"}
          checked={document.with_copies}
          handleChange={(e) => {
            const withCopiesDoc = {
              ...document,
              with_copies: e.target.checked,
            };
            verifyDocument(withCopiesDoc);
          }}
        />
      </div>
    </div>
  );
};

export default DocumentRow;
