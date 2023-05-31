import {useState} from 'react';
import {EditStaffButton} from "./AdminButtons";
import EditModal from "./EditStaffModal";

// MAIN FUNCTION FOR THE EDIT STAFF FORM (INCLUDING THE MODAL AND TRIGGER)

function EditStaffForm() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return <>
    <EditStaffButton handleShow={handleShow} />
    <EditModal show={show} handleClose={handleClose} />
  </>;
  
};

export default EditStaffForm;
