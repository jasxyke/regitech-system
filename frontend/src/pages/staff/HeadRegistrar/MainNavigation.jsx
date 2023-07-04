import MainNavButtons from "../../../components/NavButtons/MainNavButtons";
import AdminStyles from "./AdminPage.module.css";

function MainNavigation() {

  return (
    <div className={"mx-auto mb-5 " + AdminStyles.event_btn_container}>

      <div className="col">
        <MainNavButtons />
      </div>
    </div>
  );
}

export default MainNavigation;
