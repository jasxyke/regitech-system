import css from "./StaffDashboard.module.css";

const DLbtn = ({ icon, label }) => {
    return (
      <div className={css.dl_container}>
        <img src={icon} alt={label} />
        <p>{label}</p>
      </div>
    );
  };
  
  export default DLbtn;
  