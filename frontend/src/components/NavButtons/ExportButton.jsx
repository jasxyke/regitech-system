import EventButton from "./EventButton";
import ExportBtnStyles from "./ExportButton.module.css";
import downloadMasterlist from "../../assets/downloadfile.png";
import exportReport from "../../assets/excelfile.png";
import useExportReports from "../../hooks/useExportReports";
import { DOMAIN } from "../../utils/axios";

const ExportButton = () => {
  const exportHook = useExportReports();
  return (
    <div className={"col " + ExportBtnStyles.container}>
      {/* <EventButton icon={downloadMasterlist} label={"Download Masterlist"} /> */}

      <EventButton
        icon={exportReport}
        label={"Export Student Documents Report"}
        onClick={() => exportHook.downloadStudentDocumentsReport()}
      />
    </div>
  );
};

export default ExportButton;
