import StaffStyles from "../StaffDashboard/StaffDashboard.module.css";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import { Dropdown, DropdownButton, Spinner } from "react-bootstrap";
import { FiRefreshCw } from "react-icons/fi";
import AppDropdown from "../../../components/AppDropdown";
import Form from "react-bootstrap/Form";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import { PaginationControl } from "react-bootstrap-pagination-control";
import useStudents from "../../../hooks/useStudents";
import StudentRecords from "./StudentRecords";

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

  return (
    <div className={"mx-auto " + StaffStyles.staff_table_container}>
      <div className={"mt-5 " + StaffStyles.tableOptions}>
        <h4 className="me-auto">
          <strong className={StaffStyles.table_header}>
            {" "}
            Student Masterlist{" "}
          </strong>
        </h4>
        <PrimaryButton
          text={<FiRefreshCw />}
          onClick={studentsHook.getDefaultStudents}
        />
        <AppDropdown
          handleSelect={handleSelect}
          dropdownItems={[
            "Newest first",
            "Oldest first",
            "Incomplete",
            "Complete",
            "Alphabetically",
          ]}
        />

        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value === "") {
              studentsHook.getDefaultStudents();
            }
          }}
        />
        <SecondaryButton
          text={"Search"}
          onClick={() => {
            studentsHook.searchRequestByName(searchText);
          }}
        />
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
              <th
                scope="col"
                className="col-sm-4"
                style={{ width: "20%" }}
              ></th>
            </tr>
          </thead>
          <tbody className={StaffStyles.table_contents}>
            {studentsHook.loading ? (
              <tr>
                <td colSpan={5}>
                  <Spinner />
                </td>
              </tr>
            ) : students !== null ? (
              <StudentRecords
                studentRecords={students}
                handleView={handleView}
              />
            ) : null}
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
