import {useState} from 'react';
import {AddStaffButton} from "./AdminButtons";
import AddModal from "./AddStaffModal";

// MAIN FUNCTION FOR THE ADD STAFF FORM (INCLUDING MODAL AND TRIGGER)

function AddStaffForm() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  
  return <>
    <AddStaffButton handleShow={handleShow} />
    <AddModal show={show} handleClose={handleClose} />
  </>;
  
};

export default AddStaffForm;
