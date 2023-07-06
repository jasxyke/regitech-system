import MainNavigation from "./MainNavigation";
import ExportRecords from "./ExportRecords";
import GreetingsHeader from "../../../components/GreetingsHeader";
import StaffTable from "./StaffTable";
import { useUser } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";

// MAIN FUNCTION OF THE ADMIN PAGE, INCLUDING THE NAVIGATION,
// STAFF TABLE AND MODALS

function AdminPage() {
  const user = useUser();
  if (user.role.name !== "Head Registrar")
    return <Navigate to={"/staff/dashboard"} replace={true} />;
  return (
    <>
      <GreetingsHeader name={user?.firstname || ""} />
      <MainNavigation/>
      <StaffTable />
      <ExportRecords />
    </>
  );
}

export default AdminPage;
