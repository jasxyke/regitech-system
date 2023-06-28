import TableCss from "../VerificationRequests/Verification.module.css";
import Modal from "../VerificationRequests/Modal";

const Documents = [
  {
    id: "ABC201922132",
    name: "Juan Dela Cruz",
    document: "Transcript of Record",
  },
];

const getStatusColor = (status) => {
  if (status === "Accepted") {
    return "#00a651";
  } else if (status === "Rejected") {
    return "#790000";
  } else {
    return "#f68e56"; // Default color for "Pending"
  }
};

// Inside your component
const status = "Pending"; // Replace with the actual status value

const TableItems = Documents.map((items) => (
  <tr key={items.id}>
    <td>{items.id}</td>
    <td>{items.name}</td>
    <td>{items.document}</td>
    <td>
      <button
        disabled
        className={TableCss.status + " fw-bold w-75 rounded-pill border-0"}
        style={{ backgroundColor: getStatusColor(status) }}
      >
        {status}
      </button>
    </td>
    <td>
      <Modal />
    </td>
  </tr>
));

function VerificationTable() {
  return (
    <table className="table table-hover fw-bold text-center overflow-hidden rounded-top rounded-bottom  table-borderless ">
      <thead className={`align-middle ${TableCss.tablehead}`}>
        <th scope="col">Transaction ID</th>
        <th scope="col">Name</th>
        <th scope="col">Document Submitted</th>
        <th scope="col">Document Status</th>
        <th scope="col"></th>
      </thead>
      <tbody className={TableCss.tablebody}>{TableItems}</tbody>
    </table>
  );
}

export default VerificationTable;
