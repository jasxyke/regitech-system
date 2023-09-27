import DocumentRow from "./DocumentRow";

const SubmittedDocumentsVerification = ({
  documents,
  verifyDocument,
  note,
  setNote,
}) => {
  const documentRows = documents.map((document) => {
    return (
      <DocumentRow
        key={document.id}
        document={document}
        verifyDocument={verifyDocument}
      />
    );
  });

  return (
    <div className="w-100">
      {documentRows}
      <div className="mt-3 mb-3">
        <label htmlFor="note" className="form-label">
          <strong>Registrar note (for email):</strong>
        </label>
        <input
          className="form-control"
          name="note"
          type="text"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SubmittedDocumentsVerification;
