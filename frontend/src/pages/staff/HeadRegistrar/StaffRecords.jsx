import React, { useState } from "react";
import AdminStyles from "./AdminPage.module.css";
import { IconContext } from "react-icons";
import EditStaffForm from "./EditStaffForm";
import { BiTrash } from "react-icons/bi";
import ResponseModal from "../../../components/ResponseModal";

const StaffRecords = ({
  staffs,
  onDelete,
  onEdit,
  selectedStaff,
  selectStaff,
}) => {
  const [response, setResponse] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleResponse = (response) => {
    setResponse(response);
    handleShow();
  };

  const staffRecords = staffs.map((staff) => (
    <tr key={staff.id}>
      <td>{staff.id}</td>
      <td>{staff.firstname + " " + staff.lastname}</td>
      <td>{staff.role.name}</td>

      <IconContext.Provider value={{ className: AdminStyles.action_btn }}>
        <td>
          <div className="row actions">
            <EditStaffForm
              selectedStaff={selectedStaff}
              staffId={staff.id}
              selectStaff={selectStaff}
              handleEditStaff={onEdit}
            />
            <span className={"col " + AdminStyles.action_btn_cont}>
              <ResponseModal
                response={response}
                show={show}
                handleClose={handleClose}
              />
              <BiTrash onClick={() => onDelete(staff.id, handleResponse)} />
            </span>
          </div>
        </td>
      </IconContext.Provider>
    </tr>
  ));
  return <>{staffRecords}</>;
};

export default StaffRecords;
