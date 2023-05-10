import GreetingsHeader from "../../components/GreetingsHeader";
import MainNavbButtons from "../../components/NavButtons/MainNavButtons";
import StaffTable from "../HeadRegistrar/StaffTable";
import css from "./StaffDashboard.module.css";

const StaffDashboard = () => {
  return (
    <div className="container">
      <GreetingsHeader name={"Jaspher"} />
      <MainNavbButtons />
      <div></div>
    </div>
  );
};

export default StaffDashboard;
