import exportReport from "../../assets/excelfile.png";
import EventButton from "./EventButton";
import ExportBtnStyles from "./ExportButton.module.css";

const ExportButton = () => {
  return (
    <div className={"col " + ExportBtnStyles.container}>
      <EventButton
        icon={exportReport}
        label={"Export Student Documents Report Page"}
        route={"/staff/head-registrar/export-masterlist-page"}
      />
    </div>
  );
};

export default ExportButton;
