import { useState } from "react";
import SectionHeader from "../../../components/SectionHeader";
import LoadingTable from "../../../components/ui/LoadingTable";
import useStaffCrud from "../../../hooks/useStaffCrud";
import AddStaffForm from "./AddStaffForm";
import AdminStyles from "./AdminPage.module.css";
import StaffRecords from "./StaffRecords";

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
        <SectionHeader text={"Staff list"} block={false} />
        <div className={AdminStyles.addstaff_btn}>
          <AddStaffForm onAddUser={staffCRUD.onAddStaff} loading={loading} />
        </div>
      </div>

      <div className={"my-2 " + AdminStyles.table}>
        <table className="table table-hover my-0">
          <thead>
            <tr className={AdminStyles.table_head}>
              <th scope="col" className="col-sm-2">
                ID
              </th>
              <th scope="col" className="col-sm-4">
                Staff Name
              </th>
              <th scope="col" className="col-sm-4">
                Position
              </th>
              <th scope="col" className="col-sm-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className={AdminStyles.table_contents}>
            {/* {staffs !== null ? (
              <StaffRecords
                staffs={staffs}
                onDelete={staffCRUD.ondeleteStaff}
                onEdit={staffCRUD.onEditStaff}
                selectedStaff={staffCRUD.selectedStaff}
                selectStaff={staffCRUD.onSelectStaff}
              />
            ) : null} */}
            <LoadingTable
              loading={loading}
              records={staffs}
              table={
                <StaffRecords
                  staffs={staffs}
                  onDelete={staffCRUD.ondeleteStaff}
                  onEdit={staffCRUD.onEditStaff}
                  selectedStaff={staffCRUD.selectedStaff}
                  selectStaff={staffCRUD.onSelectStaff}
                />
              }
              recordDescription={"registrar's staff"}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default StaffTable;
