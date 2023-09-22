import { Link } from "react-router-dom";
import EventBtnStyles from "./EventButton.module.css";

const EventButton = ({ icon, label, route }) => {
  return (
    <Link to={route} className="link">
      <div className={"my-3 mx-4 py-3 " + EventBtnStyles.container}>
        <img src={icon} alt={label} />
        <p className="my-2 ">{label}</p>
      </div>
    </Link>
  );
};

export default EventButton;
