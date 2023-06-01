import MainNavButtons from "../../../components/NavButtons/MainNavButtons";
import GreetingsHeader from "../../../components/GreetingsHeader";
import StaffTable from "./StaffTable";
import { useUser } from "../../../context/UserContext";

// MAIN FUNCTION OF THE ADMIN PAGE, INCLUDING THE NAVIGATION,
// STAFF TABLE AND MODALS

function AdminPage() {
  const user = useUser();
  return (
    <>
      <GreetingsHeader name={user?.firstname || ""} />
      <MainNavButtons />
      <StaffTable />
    </>
  );
}

export default AdminPage;
