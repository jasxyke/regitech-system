import { useState } from "react";
import Form from "react-bootstrap/Form";

const SelectDocumentStatus = ({ status, handleChange }) => {
  return (
    <>
      <Form.Select
        name="documentStatus"
        id="documentStatus"
        size="sm"
        value={status}
        onChange={handleChange}
        //   className="selectpicker show-tick"
      >
        <option value="1" className="text-green">
          Verified
        </option>
        <option value="2" className="text-red">
          Rejected
        </option>
        <option value="5" className="text-orange">
          Missing
        </option>
        <option value="3" className="text-yellow">
          Pending Approval
        </option>
        <option value="4" className="text-yellow">
          Pending Submission
        </option>
      </Form.Select>
    </>
  );
};

export default SelectDocumentStatus;
