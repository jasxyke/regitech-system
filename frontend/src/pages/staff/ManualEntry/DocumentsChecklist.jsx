import Checkbox from "../../../components/forms/Checkbox";
import SelectDocumentStatus from "../../../components/ui/SelectDocumentStatus";

const DocumentsChecklist = ({ setDocuments, documents }) => {
  const editChecklist = (editedDocument) => {
    const editedChecklist = documents.map((document) => {
      if (document.document_type.id === editedDocument.document_type.id) {
        return editedDocument;
      }
      return document;
    });
    console.log("checklist: ");
    console.log(editedChecklist);
    setDocuments(editedChecklist);
  };

  const documentsChecklist = documents.map((document, index) => {
    return (
      <div key={index} className="row pb-2">
        <div className="col-sm-4">{document.document_type?.name}</div>
        <div className="col-sm-3">
          <SelectDocumentStatus
            status={document.document_status_id}
            handleChange={(e) => {
              let status_id = e.target.value;
              const editedDocument = {
                ...document,
                document_status_id: status_id,
              };
              editChecklist(editedDocument);
            }}
          />
        </div>
        <div className="col-sm-5">
          <Checkbox
            label={"Photocopies"}
            checked={document.with_copies}
            handleChange={(e) => {
              const editedWithCopies = {
                ...document,
                with_copies: e.target.checked,
              };
              editChecklist(editedWithCopies);
            }}
          />
        </div>
      </div>
    );
  });
  return <div>{documentsChecklist}</div>;
};

export default DocumentsChecklist;
