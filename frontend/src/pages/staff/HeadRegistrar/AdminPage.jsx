import MainNavButtons from "../../../components/NavButtons/MainNavButtons";
import GreetingsHeader from "../../../components/GreetingsHeader";
import StaffTable from "./StaffTable";
import { useUser } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";
import LoadingPage from "../../../components/LoadingPage";

// MAIN FUNCTION OF THE ADMIN PAGE, INCLUDING THE NAVIGATION,
// STAFF TABLE AND MODALS

function AdminPage() {
  const user = useUser();
  if (user === null) {
    return <LoadingPage />;
  }
  if (user.role.name !== "Head Registrar")
    return <Navigate to={"/staff/dashboard"} replace={true} />;
  return (
    <>
      <GreetingsHeader name={user?.firstname || ""} />
      <MainNavButtons />
      <StaffTable />
      <div className="mb-5"></div>
    </>
  );
}

export default AdminPage;
