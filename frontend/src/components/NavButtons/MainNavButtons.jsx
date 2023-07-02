import EventButton from "./EventButton";
import css from "./MainNavButtons.module.css";
import documentRequest from "../../assets/submitfile.png";
import manageStaff from "../../assets/addfile.png";
import masterlist from "../../assets/hrfile.png";
const MainNavButtons = () => {
  return (
    <div className={"mx-5 my-4 col " + css.container}>
      <EventButton
        icon={documentRequest}
        label={"Document Requests Verification"}
      />
      
      <EventButton 
        icon={manageStaff} 
        label={"Manage Staff"} 
      />

      <EventButton 
        icon={masterlist} 
        label={"Student Masterlist"}
      />
    </div>
  );
};

export default MainNavButtons;
