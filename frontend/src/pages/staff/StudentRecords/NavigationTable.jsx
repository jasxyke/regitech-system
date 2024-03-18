import { MdArrowBack } from "react-icons/md";
import StaffStyles from "../StaffDashboard/StaffDashboard.module.css";

const NavigationTable = ({ items, heading }) => {
  return (
    <div className={"my-3 table-responsive " + StaffStyles.table}>
      <table className="table table-hover my-0">
        <thead>
          <tr className={StaffStyles.table_head}>
            <th
              scope="col"
              className="px-4"
              style={{ width: "100%", textAlign: "left" }}
            >
              {heading}
            </th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};

export default NavigationTable;
