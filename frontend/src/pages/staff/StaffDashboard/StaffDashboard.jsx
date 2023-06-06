import MainNavbButtons from "../../../components/NavButtons/MainNavButtons";
import { useUser } from "../../../context/UserContext";
import GreetingsHeader from "../../../components/GreetingsHeader";
import VerificationRequestTable from "./VerificationRequestTable";
import css from "./StaffDashboard.module.css";

const StaffDashboard = () => {
  const user = useUser();

  return (
    <>
      <GreetingsHeader name={user?.firstname || "unknown"} />
      <MainNavbButtons />
      <div className={css.table_header}>
        <h3>Verification Requests</h3>
      </div>
      <VerificationRequestTable />
    </>
  );
};

export default StaffDashboard;
