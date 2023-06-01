import AdminStyles from "./AdminPage.module.css";
import { IconContext } from "react-icons";
import { BiTrash } from "react-icons/bi";
import EditStaffForm from "./EditStaffForm";
import AddStaffForm from "./AddStaffForm";
import { useEffect, useState } from "react";
import axiosClient from "../../../utils/axios";
import StaffRecords from "./StaffRecords";

// DECLARATION FOR LISTINGS (TEMPORARY)

// MAIN FUNCTION FOR THE STAFF TABLE (WITH THE ADD AND EDIT MODAL
// FUNCTIONS INCLUDED)

function StaffTable() {
  const [staffs, setStaffs] = useState(null);

  useEffect(() => {
    axiosClient
      .get("/users")
      .then((res) => {
        console.log(res);
        setStaffs(res.data);
      })
      .catch((error) => {
        console.log(error);
        //handleError()
      });
  }, []);

  const onAddUser = (user) => {
    console.log(user);
    alert("adduser");
  };

  return (
    <div>
      <div className="d-flex justify-content-between mt-5">
        <p className="h2">Staff List</p>
        <div className={AdminStyles.addstaffButton}>
          <AddStaffForm onAddUser={onAddUser} />
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
            {staffs !== null ? <StaffRecords staffs={staffs} /> : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default StaffTable;
