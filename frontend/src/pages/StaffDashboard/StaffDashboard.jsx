import GreetingsHeader from "../../components/GreetingsHeader";
import MainNavbButtons from "../../components/NavButtons/MainNavButtons";
import css from "./StaffDashboard.module.css";

const StaffDashboard = () => {
  return (
    <div className="container">
      <GreetingsHeader name={"Jaspher"} />
      <MainNavbButtons />
    </div>
  );
};

export default StaffDashboard;
