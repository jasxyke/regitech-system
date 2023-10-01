import { Spinner } from "react-bootstrap";
import EmptyTable from "../EmptyTable";

const LoadingTable = ({ loading, records, recordDescription, table }) => {
  return (
    <>
      {loading ? (
        <tr>
          <td colSpan={5}>
            <Spinner />
          </td>
        </tr>
      ) : records !== null && records.length !== 0 ? (
        table
      ) : (
        <EmptyTable data={recordDescription} />
      )}
    </>
  );
};

export default LoadingTable;
