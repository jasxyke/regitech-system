import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { FiRefreshCw } from "react-icons/fi";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import useStudents from "../../../hooks/useStudents";
import StaffStyles from "../StaffDashboard/StaffDashboard.module.css";
import StudentRecords from "./StudentRecords";
import EmptyTable from "../../../components/EmptyTable";
import LoadingTable from "../../../components/ui/LoadingTable";

const StudentsRecordTable = () => {
  const studentsHook = useStudents();
  const students = studentsHook.students;
  const handleView = studentsHook.viewStudent;

  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    studentsHook.getDefaultStudents();
  }, []);

  const handleSelect = (eventKey) => {
    if (eventKey === "Newest first") {
      studentsHook.getStudents("/newest-students-first");
    } else if (eventKey === "Oldest first") {
      studentsHook.getStudents("/oldest-students-first");
    } else if (eventKey === "Incomplete") {
      studentsHook.getStudents("/incomplete-students-first");
    } else if (eventKey === "Complete") {
      studentsHook.getStudents("/complete-students-first");
    } else if (eventKey === "Alphabetically") {
      studentsHook.getDefaultStudents();
    }
  };

  const handleSearch = () => {
    if (searchText === "") {
      studentsHook.getDefaultStudents();
    }
    studentsHook.searchStudentByName(searchText);
  };

  return (
    <div className={"mx-auto " + StaffStyles.staff_table_container}>
      <div className={"mt-5 " + StaffStyles.tableOptions}>
        <h4 className="me-auto">
          <strong className={StaffStyles.table_header}>
            {" "}
            Student Records{" "}
          </strong>
        </h4>
        <PrimaryButton
          text={<FiRefreshCw />}
          onClick={studentsHook.getDefaultStudents}
        />
        {/* <AppDropdown
          handleSelect={handleSelect}
          dropdownItems={[
            "Newest first",
            "Oldest first",
            "Incomplete",
            "Complete",
            "Alphabetically",
          ]}
        /> */}

        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value === "") {
              studentsHook.getDefaultStudents();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <SecondaryButton text={"Search"} onClick={handleSearch} />
      </div>
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
              loading={studentsHook.loading}
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
          total={studentsHook.pagination.total}
          limit={studentsHook.pagination.per_page}
          changePage={(page) => {
            studentsHook.changePage(page);
            setPage(page);
          }}
        />
      )}
    </div>
  );
};

export default StudentsRecordTable;
