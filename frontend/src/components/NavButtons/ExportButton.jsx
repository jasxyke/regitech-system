import EventButton from "./EventButton";
import ExportBtnStyles from "./ExportButton.module.css";
import downloadMasterlist from "../../assets/downloadfile.png";
import exportReport from "../../assets/excelfile.png";

const ExportButton = () => {
  return (
    <div className={"mx-5 col " + ExportBtnStyles.container}>
      <EventButton
        icon={downloadMasterlist}
        label={"Download Masterlist"}    
      />

      <EventButton
        icon={exportReport}
        label={"Export Summary Report"}
      />
    </div>
  )
}

export default ExportButton;