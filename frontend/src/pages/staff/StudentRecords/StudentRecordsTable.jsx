import StaffStyles from "../StaffDashboard/StaffDashboard.module.css";
import React, { useEffect, useState } from "react";
import useVerificationRequests from "../../../hooks/useVerificationRequests";
import { convertStampToDate } from "../../../utils/datesHandler";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import { Dropdown, DropdownButton, Spinner } from "react-bootstrap";
import { FiRefreshCw } from "react-icons/fi";
import AppDropdown from "../../../components/AppDropdown";
import Form from "react-bootstrap/Form";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import { PaginationControl } from "react-bootstrap-pagination-control";

const StudentsRecordTable = () => {
  const requestsHook = useVerificationRequests();
  const requests = requestsHook.verificationRequests;
  const handleView = requestsHook.viewRequests;

  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    requestsHook.getVerificationRequets();
  }, []);

  const handleSelect = (eventKey) => {
    if (eventKey === "Newest first") {
      requestsHook.getVerificationRequets();
    } else if (eventKey === "Oldest first") {
    } else if (eventKey === "INCOMPLETE") {
      // Sort by INCOMPLETE
    } else if (eventKey === "COMPLETE") {
      // Sort by COMPLETE
    } else if (eventKey === "VERIFIED") {
      // Sort by VERIFIED
    } else if (eventKey === "Alphabetically") {
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
          onClick={requestsHook.getVerificationRequets}
        />
        <AppDropdown
          handleSelect={handleSelect}
          dropdownItems={[
            "Newest first",
            "Oldest first",
            "INCOMPLETE",
            "COMPLETE",
            "VERIFIED",
            "Alphabetically",
          ]}
        />

        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value === "") {
              requestsHook.getVerificationRequets();
            }
          }}
        />
        <SecondaryButton
          text={"Search"}
          onClick={() => {
            requestsHook.searchRequestByName(searchText);
          }}
        />
      </div>
      <div className={"my-3 " + StaffStyles.table}>
        <table className="table table-hover my-0">
          <thead>
            <tr className={StaffStyles.table_head}>
              <th className="col-sm-2">Student Name</th>
              <th className="col-sm-2">Year Admitted</th>
              <th className="col-sm-2">Course</th>
              <th className="col-sm-2">Student Status</th>
              <th className="col-sm-4"></th>
            </tr>
          </thead>
          <tbody className={StaffStyles.table_contents}>
            <tr>
              <td>Juan Dela Cruz</td>
              <td>2020</td>
              <td>DICT</td>
              <td>INCOMPLETE</td>
              <td>
                <button
                  className={
                    "btn py-1 mx-auto px-0 rounded-pill my-0 " +
                    StaffStyles.viewBtn
                  }
                >
                  View Student Profile
                </button>
              </td>
            </tr>
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
      {requests !== null && (
        <PaginationControl
          page={page}
          between={3}
          total={requestsHook.pagination.total}
          limit={requestsHook.pagination.per_page}
          changePage={(page) => {
            requestsHook.changePage(page);
            setPage(page);
          }}
        />
      )}
    </div>
  );
};

export default StudentsRecordTable;
