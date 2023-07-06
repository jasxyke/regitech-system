import EventBtnStyles from "./EventButton.module.css";

const EventButton = ({ icon, label }) => {
  return (
    <div className={"my-3 mx-4 py-3 " + EventBtnStyles.container}>
      <img src={icon} alt={label} />
      <p className="my-2 ">{label}</p>
    </div>
  );
};

export default EventButton;
