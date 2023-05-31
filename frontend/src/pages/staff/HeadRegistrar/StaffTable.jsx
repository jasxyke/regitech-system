import AdminStyles from "./AdminPage.module.css";
import {IconContext} from "react-icons";
import {BiTrash} from "react-icons/bi";
import EditStaffForm from "./EditStaffForm";
import AddStaffForm from "./AddStaffForm";
  
// DECLARATION FOR LISTINGS (TEMPORARY)

const Staffs = [{
  id: 1,
  name: "Sean Gomez",
  role: "Student Assistant"
},
{
  id: 2,
  name: "Shawn Gomez",
  role: "Head Registrar"
},
{
  id: 3,
  name: "Seanny Gomez",   
  role: "Regular Staff"
}];

const TableItems = Staffs.map((items) =>
  <tr key={items.id}>
    <td>{items.id}</td>
    <td>{items.name}</td>
    <td>{items.role}</td>

    <IconContext.Provider value ={{className: AdminStyles.action_btn}}>
      <td> 
        <div className="row actions">
          <EditStaffForm/>
          <a href="" className={"col "+ AdminStyles.action_btn_cont}>
            <BiTrash />
          </a>
        </div>
          
      </td>
    </IconContext.Provider>

  </tr>
);

// MAIN FUNCTION FOR THE STAFF TABLE (WITH THE ADD AND EDIT MODAL 
// FUNCTIONS INCLUDED)

function StaffTable() {
  return <div>

    <div className={"my-3 " + AdminStyles.addstaffButton}>
      <AddStaffForm />
    </div>

    <div className="my-5">
      <table className="table table-responsive-lg table-hover">
        <thead className="">
          <tr className="table_head">
            <th className="col">
              ID
            </th>
            <th className="col">
              Staff Name
            </th>
            <th className="col">
              Role
            </th>
            <th className="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {TableItems}
        </tbody>
      </table>
    </div>
    
  </div>

}
  export default StaffTable;
  