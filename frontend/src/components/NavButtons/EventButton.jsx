import css from "./EventButton.module.css";

const EventButton = ({ icon, label }) => {
  return (
    <div className={css.container}>
      <img src={icon} alt={label} />
      <p>{label}</p>
    </div>
  );
};

export default EventButton;
