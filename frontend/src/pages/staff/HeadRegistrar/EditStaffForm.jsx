import { useState } from "react";
import { EditStaffButton } from "./AdminButtons";
import EditModal from "./EditStaffModal";

// MAIN FUNCTION FOR THE EDIT STAFF FORM (INCLUDING THE MODAL AND TRIGGER)

function EditStaffForm({
  selectedStaff,
  selectStaff,
  staffId,
  handleEditStaff,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    selectStaff(staffId);
    setShow(true);
  };

  return (
    <>
      <EditStaffButton handleShow={handleShow} />
      {selectedStaff !== null && (
        <EditModal
          show={show}
          handleClose={handleClose}
          staff={selectedStaff}
          handleEditStaff={handleEditStaff}
        />
      )}
    </>
  );
}

export default EditStaffForm;
