import React from "react";
import AdminStyles from "./AdminPage.module.css";
import { IconContext } from "react-icons";
import EditStaffForm from "./EditStaffForm";
import { BiTrash } from "react-icons/bi";

const StaffRecords = ({ staffs }) => {
  const staffRecords = staffs.map((staff) => (
    <tr key={staff.id}>
      <td>{staff.id}</td>
      <td>{staff.firstname + " " + staff.lastname}</td>
      <td>{staff.role.name}</td>

      <IconContext.Provider value={{ className: AdminStyles.action_btn }}>
        <td>
          <div className="row actions">
            <EditStaffForm />
            <a href="" className={"col " + AdminStyles.action_btn_cont}>
              <BiTrash />
            </a>
          </div>
        </td>
      </IconContext.Provider>
    </tr>
  ));
  return <>{staffRecords}</>;
};

export default StaffRecords;
