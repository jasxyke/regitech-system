import StaffStyles from "./StaffDashboard.module.css";
import React, { useEffect, useState } from "react";
import VerificationRequest from "./VerificationRequest";
import useVerificationRequests from "../../../hooks/useVerificationRequests";
import { convertStampToDate } from "../../../utils/datesHandler";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import { Dropdown, DropdownButton, Spinner } from "react-bootstrap";
import { FiRefreshCw } from "react-icons/fi";
import AppDropdown from "../../../components/ui/AppDropdown";
import Form from "react-bootstrap/Form";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import { PaginationControl } from "react-bootstrap-pagination-control";
import SectionHeader from "../../../components/SectionHeader";
import LoadingTable from "../../../components/ui/LoadingTable";

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

  const handleSearch = () => {
    requestsHook.searchRequestByName(searchText);
  };

  return (
    <div className={"mx-auto " + StaffStyles.staff_table_container}>
      <div className={"mt-5 " + StaffStyles.tableOptions}>
        <div className={"me-auto " + StaffStyles.labelOption}>
          <SectionHeader text={"Verification requests"} block={false} />
        </div>
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
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <SecondaryButton text={"Search"} onClick={handleSearch} />
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
            <LoadingTable
              loading={requestsHook.loading}
              records={requests}
              table={
                <VerificationRequest
                  verificationRequests={requests}
                  handleView={handleView}
                />
              }
              recordDescription={"requests"}
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
      <div className="d-flex justify-content-center">
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
    </div>
  );
};

export default VerificationRequestTable;
