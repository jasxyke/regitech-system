import React from "react";

const SectionHeader = ({ text, block }) => {
  return (
    <h4 className={block ? "section-header-block" : "section-header"}>
      <strong>{text}</strong>
    </h4>
  );
};

export default SectionHeader;
