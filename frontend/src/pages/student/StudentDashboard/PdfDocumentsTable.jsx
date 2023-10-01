import { useEffect } from "react";
import LoadingTable from "../../../components/ui/LoadingTable";
import usePdf from "../../../hooks/usePdf";
import StaffStyles from "../../staff/StaffDashboard/StaffDashboard.module.css";
import PdfDocuments from "./PdfDocuments";

const PdfDocumentsTable = ({ student }) => {
  const pdfHook = usePdf();
  const loading = pdfHook.loading;
  const pdfs = pdfHook.studentPdfs;

  useEffect(() => {
    pdfHook.getAllPdfs(student.id);
  }, []);
  return (
    <div className={"my-3 " + StaffStyles.table}>
      <table className="table table-hover my-0">
        <thead>
          <tr className={StaffStyles.table_head}>
            <th className="col-sm-2">Date submitted</th>
            {<th className="col-sm-3">Documents inside</th>}
            <th className="col-sm-2"> Actions </th>
          </tr>
        </thead>
        <tbody className={StaffStyles.table_contents}>
          <LoadingTable
            recordDescription={"PDFs"}
            records={pdfs}
            table={<PdfDocuments pdfDocuments={pdfs} />}
            loading={loading}
          />
        </tbody>
      </table>
    </div>
  );
};

export default PdfDocumentsTable;
