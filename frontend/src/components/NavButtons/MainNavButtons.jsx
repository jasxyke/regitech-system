import EventButton from "./EventButton";
import MainBtnStyles from "./MainNavButtons.module.css";
import documentRequest from "../../assets/submitfile.png";
import manageStaff from "../../assets/addfile.png";
import masterlist from "../../assets/hrfile.png";
import { useNavigate } from "react-router-dom";
const MainNavButtons = () => {
  const navigate = useNavigate();
  return (
    <div className={"mx-5 my-4 col " + MainBtnStyles.container}>
      <EventButton
        icon={documentRequest}
        label={"Verification requests"}
        onClick={() => {
          navigate("/staff/verification-requests");
        }}
      />

      <EventButton
        icon={manageStaff}
        label={"Manage Staff"}
        onClick={() => {
          navigate("/staff/head-registrar");
        }}
      />

      <EventButton
        icon={masterlist}
        label={"Student Masterlist"}
        onClick={() => {
          navigate("/staff/student-masterlist");
        }}
      />
    </div>
  );
};

export default MainNavButtons;
