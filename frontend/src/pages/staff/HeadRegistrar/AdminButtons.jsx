import Button from "react-bootstrap/Button";
import {BiEdit} from "react-icons/bi";
import css from "./AdminPage.module.css";

// FUNCTION FOR THE ADD STAFF MODAL TRIGGER

function AddStaffButton(btnAdd) {
  return <>
    <Button variant="primary" onClick={btnAdd.handleShow}>
      + Add new user
    </Button>   
  </>;
};    

// FUNCTION FOR THE EDIT STAFF MODAL TRIGGER

function EditStaffButton(btnEdit){
  return <>
    <a className={"col "+ css.action_btn_cont} onClick={btnEdit.handleShow}>
      <BiEdit />
    </a>
  </>;
}

export {AddStaffButton, EditStaffButton};