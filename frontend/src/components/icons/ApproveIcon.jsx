import { BsCheckCircle } from "react-icons/bs";
import React from "react";
import { IconContext } from "react-icons";

const ApproveIcon = () => {
  return (
    <IconContext.Provider
      value={{ color: "var(--status-green)", size: "35px" }}
    >
      <div>
        <BsCheckCircle />
      </div>
    </IconContext.Provider>
  );
};

export default ApproveIcon;
