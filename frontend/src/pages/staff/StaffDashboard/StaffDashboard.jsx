import MainNavbButtons from "../../../components/NavButtons/MainNavButtons";
import { useUser } from "../../../context/UserContext";
import GreetingsHeader from "../../../components/GreetingsHeader";
import VerificationRequestTable from "./VerificationRequestTable";
import css from "./StaffDashboard.module.css";
import LoadingPage from "../../../components/LoadingPage";

const StaffDashboard = () => {
  const user = useUser();
  if (user === null) {
    return <LoadingPage />;
  }
  return (
    <>
      <GreetingsHeader name={user?.firstname || "unknown"} />
      <MainNavbButtons />
      <VerificationRequestTable />
    </>
  );
};

export default StaffDashboard;
