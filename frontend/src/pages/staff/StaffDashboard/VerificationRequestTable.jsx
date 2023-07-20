import StaffStyles from "./StaffDashboard.module.css";
import React, { useEffect, useState } from "react";
import VerificationRequest from "./VerificationRequest";
import useVerificationRequests from "../../../hooks/useVerificationRequests";
import { convertStampToDate } from "../../../utils/datesHandler";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import { Dropdown, DropdownButton, Spinner } from "react-bootstrap";
import { FiRefreshCw } from "react-icons/fi";
import AppDropdown from "../../../components/AppDropdown";
import Form from "react-bootstrap/Form";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import { PaginationControl } from "react-bootstrap-pagination-control";

const VerificationRequestTable = () => {
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
      requestsHook.getRequests("/oldest-request-first");
    } else if (eventKey === "Not reviewed") {
      requestsHook.getRequests("/not-reviewed-requests");
    } else if (eventKey === "Have been reviewed") {
      requestsHook.getRequests("/reviewed-requests");
    }
  };

  return (
    <div className={"mx-auto " + StaffStyles.staff_table_container}>
      <div className={"mt-5 " + StaffStyles.tableOptions}>
        <h4 className="me-auto">
          <strong className={StaffStyles.table_header}>
            {" "}
            Verification Requests{" "}
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
            "Not reviewed",
            "Have been reviewed",
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
              <th className="col-sm-2">Date submitted</th>
              <th className="col-sm-3">Last Name</th>
              <th className="col-sm-2">First Name</th>
              <th className="col-sm-3">Reviewed</th>
              <th className="col-sm-2"> Actions </th>
            </tr>
          </thead>
          <tbody className={StaffStyles.table_contents}>
            {/* {requests !== null && (
              <VerificationRequest
                verificationRequests={requests}
                handleView={handleView}
              />
            )} */}
            {requestsHook.loading ? (
              <tr>
                <td colSpan={5}>
                  <Spinner />
                </td>
              </tr>
            ) : requests !== null ? (
              <VerificationRequest
                verificationRequests={requests}
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

export default VerificationRequestTable;
