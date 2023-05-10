import EventButton from "./EventButton";
import css from "./MainNavButtons.module.css";
import icon from "../../assets/stamp.png";
const MainNavButtons = () => {
  return (
    <div className={css.container}>
      <EventButton icon={icon} label={"Document Requests Verification"} />
      <EventButton icon={icon} label={"Manage Staff"} />
      <EventButton icon={icon} label={"Student Masterlist"} />
    </div>
  );
};

export default MainNavButtons;
