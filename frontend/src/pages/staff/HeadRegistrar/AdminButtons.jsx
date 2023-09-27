import Button from "react-bootstrap/Button";
import { BiEdit } from "react-icons/bi";
import AdminStyles from "./AdminPage.module.css";

// FUNCTION FOR THE ADD STAFF MODAL TRIGGER

function AddStaffButton(btnAdd) {
  return (
    <>
      <Button className={AdminStyles.add_btn} onClick={btnAdd.handleShow}>
        + Add new staff
      </Button>
    </>
  );
}

// FUNCTION FOR THE EDIT STAFF MODAL TRIGGER

function EditStaffButton(btnEdit) {
  return (
    <>
      <a
        className={"mx-1 " + AdminStyles.action_btn_cont}
        onClick={btnEdit.handleShow}
      >
        <BiEdit />
      </a>
    </>
  );
}

export { AddStaffButton, EditStaffButton };
