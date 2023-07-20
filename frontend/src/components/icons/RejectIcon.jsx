import { BsXCircle, BsXCircleFill } from "react-icons/bs";
import React from "react";
import { IconContext } from "react-icons";

const RejectIcon = ({ handleClick }) => {
  return (
    <IconContext.Provider
      value={{ color: "var(--primary-maroon)", size: "35px" }}
    >
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        <BsXCircle />
      </div>
    </IconContext.Provider>
  );
};

export default RejectIcon;
