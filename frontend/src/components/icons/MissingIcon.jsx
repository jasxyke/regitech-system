import { BsQuestionCircle, BsQuestionCircleFill } from "react-icons/bs";
import React from "react";
import { IconContext } from "react-icons";

const MissingIcon = ({ handleClick }) => {
  return (
    <IconContext.Provider
      value={{ color: "var(--status-orange)", size: "35px" }}
    >
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        <BsQuestionCircle />
      </div>
    </IconContext.Provider>
  );
};

export default MissingIcon;
