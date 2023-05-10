import "./AdminPage.css";
import {IconContext} from "react-icons";
import {BiEdit} from "react-icons/bi"
import {BiTrash} from "react-icons/bi"

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

    <IconContext.Provider value ={{className:"action-btn"}}>
      <td> 
        <div className="row actions">
          <a href="" className="col action-btn" >
            <BiEdit />
          </a>
          <a href="" className="col action-btn-cont" >
            <BiTrash />
          </a>
        </div>
          
      </td>
    </IconContext.Provider>

  </tr>
);

function StaffTable() {
  return <div>
    <table className="table table-responsive-lg">
      <thead>
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
}
  export default StaffTable;
  