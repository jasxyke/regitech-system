import AdminStyles from "./AdminPage.module.css";
import { IconContext } from "react-icons";
import { BiTrash } from "react-icons/bi";
import EditStaffForm from "./EditStaffForm";
import AddStaffForm from "./AddStaffForm";
import { useEffect, useState } from "react";
import axiosClient from "../../../utils/axios";
import StaffRecords from "./StaffRecords";
import useStaffCrud from "../../../hooks/useStaffCrud";

// DECLARATION FOR LISTINGS (TEMPORARY)

// MAIN FUNCTION FOR THE STAFF TABLE (WITH THE ADD AND EDIT MODAL
// FUNCTIONS INCLUDED)

function StaffTable() {
  const [tempStaffs, setTempStaffs] = useState(null);
  const staffCRUD = useStaffCrud();
  const staffs = staffCRUD.staffs;
  const loading = staffCRUD.loading;

  return (
    <div className={"mx-auto " + AdminStyles.admin_table_container}>
      <div className="d-flex justify-content-between mt-5">
        <h4>
          <strong className={AdminStyles.table_header}>Staff List</strong>
        </h4>
        <div className={AdminStyles.addstaff_btn}>
          <AddStaffForm onAddUser={staffCRUD.onAddStaff} loading={loading} />
        </div>
      </div>

      <div className={"my-2 " + AdminStyles.table}>
        <table className="table table-responsive-lg table-hover my-0">
          <thead>
            <tr className={AdminStyles.table_head}>
              <th className="col-2">ID</th>
              <th className="col-4">Staff Name</th>
              <th className="col-4">Position</th>
              <th className="col-2">Actions</th>
            </tr>
          </thead>
          <tbody className={AdminStyles.table_contents}>
            {staffs !== null ? (
              <StaffRecords
                staffs={staffs}
                onDelete={staffCRUD.ondeleteStaff}
                onEdit={staffCRUD.onEditStaff}
                selectedStaff={staffCRUD.selectedStaff}
                selectStaff={staffCRUD.onSelectStaff}
              />
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default StaffTable;
