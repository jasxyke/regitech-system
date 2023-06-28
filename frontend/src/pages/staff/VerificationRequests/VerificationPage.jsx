import TableCss from "../VerificationRequests/Verification.module.css";
import VerificationTable from "../VerificationRequests/VereficationTable";

const VerificationPage = () => {
  return (
    <div className=" container py-5 mt-5 mb-2 w-75">
      <button
        className={
          TableCss.back + " m-3 fw-bold rounded-top rounded-bottom border-0"
        }
      >
        Back
      </button>
      <div className="row">
        <div className="col">
          <p
            className={
              TableCss.title + " text-start fs-4 m-1 fw-bold fst-italic"
            }
          >
            Submitted Documents Verification
          </p>
        </div>
        <div className="col">
          <p className={TableCss.title + "  text-end fs-6 m-1 fst-italic"}>
            Sunday,June 25,
          </p>
        </div>
      </div>
      <VerificationTable />
      <div className="text-end">
        <button
          className={
            TableCss.cancel +
            " fw-bold px-2 me-4 rounded-top rounded-bottom border-0"
          }
        >
          CANCEL
        </button>
        <button
          className={
            TableCss.done + " fw-bold px-2 rounded-top rounded-bottom border-0"
          }
        >
          DONE
        </button>
      </div>
    </div>
  );
};

export default VerificationPage;
