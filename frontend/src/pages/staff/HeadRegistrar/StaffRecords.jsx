import React, { useState } from "react";
import AdminStyles from "./AdminPage.module.css";
import { IconContext } from "react-icons";
import EditStaffForm from "./EditStaffForm";
import { BiTrash } from "react-icons/bi";
import ResponseModal from "../../../components/ResponseModal";
import ConfirmDeleteModal from "../../../components/modals/ConfirmDeleteModal";

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
    <tr className="mx-2" key={staff.id}>
      <td>{staff.id}</td>
      <td>{staff.firstname + " " + staff.lastname}</td>
      <td>{staff.role.name}</td>

      <IconContext.Provider value={{ className: AdminStyles.action_btn }}>
        <td>
          <div className={AdminStyles.actions}>
            <EditStaffForm
              selectedStaff={selectedStaff}
              staffId={staff.id}
              selectStaff={selectStaff}
              handleEditStaff={onEdit}
            />
            <span className={"mx-1 " + AdminStyles.action_btn_cont}>
              <ResponseModal
                headerText={""}
                response={response}
                show={show}
                handleClose={handleClose}
              />
              <ConfirmDeleteModal
                headerText={"Deleting staff"}
                message={"Are you sure you want to delete this staff?"}
                handleDelete={() => {
                  onDelete(staff.id, handleResponse);
                }}
                deleteButton={<BiTrash />}
              />
              {/* <BiTrash onClick={() => onDelete(staff.id, handleResponse)} /> */}
            </span>
          </div>
        </td>
      </IconContext.Provider>
    </tr>
  ));
  return <>{staffRecords}</>;
};

export default StaffRecords;
