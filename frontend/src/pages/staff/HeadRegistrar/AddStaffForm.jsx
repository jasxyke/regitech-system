import { useState } from "react";
import { AddStaffButton } from "./AdminButtons";
import AddModal from "./AddStaffModal";

// MAIN FUNCTION FOR THE ADD STAFF FORM (INCLUDING MODAL AND TRIGGER)

function AddStaffForm({ onAddUser, loading }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const onAddUser =

  return (
    <>
      <AddStaffButton handleShow={handleShow} />
      <AddModal
        show={show}
        handleClose={handleClose}
        onAddUser={onAddUser}
        loading={loading}
      />
    </>
  );
}

export default AddStaffForm;
