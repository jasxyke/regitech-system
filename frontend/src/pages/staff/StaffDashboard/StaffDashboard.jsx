import MainNavbButtons from "../../../components/NavButtons/MainNavButtons";
import { useUser } from "../../../context/UserContext";
import GreetingsHeader from "../../../components/GreetingsHeader";
import VerificationRequestTable from "./VerificationRequestTable";
import css from "./StaffDashboard.module.css";
import DLbtn from "./DLbtn";
import downloadfile from "../../../assets/downloadfile.png";
import excelfile from "../../../assets/excelfile.png";
import LoadingPage from "../../../components/LoadingPage";

const StaffDashboard = () => {
  const user = useUser();
  if (user === null) {
    return <LoadingPage />;
  }

  return (
    <div className="mt-5">
      <GreetingsHeader name={user?.firstname || "unknown"} />
      <MainNavbButtons userRole={user?.role.name} />
      <VerificationRequestTable />
      <div className="mb-5"></div>
      {/* <div className={css.dl_title}>
        <h4 className="fw-bold">Download Documents</h4>
        <div className={css.dl_btns}>
          <DLbtn icon={downloadfile} label={"Download Masterlist"} />
          <DLbtn icon={excelfile} label={"Download Student Document Report"} />
        </div>
      </div> */}
    </div>
  );
};

export default StaffDashboard;
