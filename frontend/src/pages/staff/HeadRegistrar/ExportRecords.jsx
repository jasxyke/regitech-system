import ExportButton from "../../../components/NavButtons/ExportButton";
import AdminStyles from "./AdminPage.module.css";

function ExportRecords() {
  return (
    <div className={"mx-auto mb-5 " + AdminStyles.event_btn_container}>
      <div className="d-flex justify-content-between mt-5">
        <h4>
          <strong className={AdminStyles.table_header}>
            Other management pages
          </strong>
        </h4>
      </div>
      <div className="">
        <ExportButton />
        {/* <EventButton
          label={"Manage courses"}
          route={"/staff/head-registrar/courses"}
          icon={}
        /> */}
      </div>
    </div>
  );
}

export default ExportRecords;
