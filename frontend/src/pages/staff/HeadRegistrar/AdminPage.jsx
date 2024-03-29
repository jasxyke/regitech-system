import MainNavigation from "./MainNavigation";
import ExportRecords from "./ExportRecords";
import GreetingsHeader from "../../../components/GreetingsHeader";
import StaffTable from "./StaffTable";
import { useUser } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";
import LoadingPage from "../../../components/LoadingPage";
import MainNavButtons from "../../../components/NavButtons/MainNavButtons";

// MAIN FUNCTION OF THE ADMIN PAGE, INCLUDING THE NAVIGATION,
// STAFF TABLE AND MODALS

function AdminPage() {
  const user = useUser();
  if (user === null) {
    return <LoadingPage />;
  }
  if (user.role.name !== "Head Registrar")
    return <Navigate to={"/staff/verification-requests"} replace={true} />;
  return (
    <>
      <GreetingsHeader name={user?.firstname || ""} />
      {/* <MainNavigation /> */}
      <MainNavButtons userRole={user.role.name} />
      <StaffTable />
      <ExportRecords />
    </>
  );
}

export default AdminPage;
