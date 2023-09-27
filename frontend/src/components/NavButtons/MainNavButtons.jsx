import EventButton from "./EventButton";
import MainBtnStyles from "./MainNavButtons.module.css";
import documentRequest from "../../assets/submitfile.png";
import manageStaff from "../../assets/addfile.png";
import masterlist from "../../assets/hrfile.png";
import { useNavigate } from "react-router-dom";
import todoList from "../../assets/to-do-list.png";
import { useMediaQuery } from "react-responsive";
const MainNavButtons = ({ userRole }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  if (isMobile) {
    return null;
  }
  return (
    <div className={"mx-5 my-4 col " + MainBtnStyles.container}>
      <EventButton
        icon={documentRequest}
        label={"Verification requests"}
        route={"/staff/verification-requests"}
      />

      {userRole === "Head Registrar" && (
        <EventButton
          icon={manageStaff}
          label={"Manage Staff"}
          route={"/staff/head-registrar"}
        />
      )}

      <EventButton
        icon={masterlist}
        label={"Student Records"}
        route={"/staff/student-records"}
      />
      <EventButton
        icon={todoList}
        label={"Manual Entry"}
        route={"/staff/manual-entry"}
      />
    </div>
  );
};

export default MainNavButtons;
