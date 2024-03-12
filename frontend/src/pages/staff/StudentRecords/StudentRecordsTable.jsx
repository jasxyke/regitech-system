import { useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import LoadingTable from "../../../components/ui/LoadingTable";
import StaffStyles from "../StaffDashboard/StaffDashboard.module.css";
import StudentRecords from "./StudentRecords";

const StudentsRecordTable = ({
  students,
  loading,
  handleView,
  pagination,
  changePage,
}) => {
  const [page, setPage] = useState(1);
  // const handleSearch = () => {
  //   if (searchText === "") {
  //     studentsHook.getDefaultStudents();
  //   }
  //   studentsHook.searchStudentByName(searchText);
  // };
  console.log(students);

  return (
    <div>
      <div className={"my-3 table-responsive " + StaffStyles.table}>
        <table className="table table-hover my-0">
          <thead>
            <tr className={StaffStyles.table_head}>
              <th scope="col" className="col-sm-2" style={{ width: "30%" }}>
                Student Name
              </th>
              <th scope="col" className="col-sm-2" style={{ width: "15%" }}>
                Year Admitted
              </th>
              <th scope="col" className="col-sm-2" style={{ width: "15%" }}>
                Course
              </th>
              <th scope="col" className="col-sm-2" style={{ width: "20%" }}>
                Student Status
              </th>
              <th scope="col" className="col-sm-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className={StaffStyles.table_contents}>
            <LoadingTable
              loading={loading}
              records={students}
              table={
                <StudentRecords
                  studentRecords={students}
                  handleView={handleView}
                />
              }
              recordDescription={"student records"}
            />
          </tbody>
        </table>
      </div>
      <style type="text/css">
        {`
          .page-link{
            color: black;
          }

          .active .page-link{
            background-color: var(--primary-maroon) !important;
            border-color: black
          }
        `}
      </style>
      {students !== null && (
        <PaginationControl
          page={page}
          between={3}
          total={pagination === null ? null : pagination.total}
          limit={pagination === null ? null : pagination.per_page}
          changePage={(page) => {
            changePage(page);
            setPage(page);
          }}
        />
      )}
    </div>
  );
};

export default StudentsRecordTable;
