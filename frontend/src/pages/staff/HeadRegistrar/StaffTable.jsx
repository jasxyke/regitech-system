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
    <div>
      <div className="d-flex justify-content-between mt-5">
        <p className="h2">Staff List</p>
        <div className={AdminStyles.addstaffButton}>
          <AddStaffForm onAddUser={staffCRUD.onAddStaff} loading={loading} />
        </div>
      </div>

      <div className="my-2">
        <table className="table table-responsive-lg table-hover">
          <thead className="">
            <tr className="table_head">
              <th className="col">ID</th>
              <th className="col">Staff Name</th>
              <th className="col">Position</th>
              <th className="col">Actions</th>
            </tr>
          </thead>
          <tbody>
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
