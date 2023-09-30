import css from "./ExpportMasterlist.module.css";
const CheckboxesContainer = (props) => {
  return <div className={css.checkboxesContainer}>{props.children}</div>;
};

export default CheckboxesContainer;
