import GreetingsHeader from "../../components/GreetingsHeader";
import MainNavbButtons from "../../components/NavButtons/MainNavButtons";
import { useUser } from "../../context/UserContext";

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
