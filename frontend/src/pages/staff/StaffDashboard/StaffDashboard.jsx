import MainNavbButtons from "../../../components/NavButtons/MainNavButtons";
import { useUser } from "../../../context/UserContext";
import GreetingsHeader from "../../../components/GreetingsHeader";

const StaffDashboard = () => {
  const user = useUser();

  return (
    <div className="container">
      <GreetingsHeader name={user?.firstname || "unknown"} />
      <MainNavbButtons />
      <div></div>
    </div>
  );
};

export default StaffDashboard;
