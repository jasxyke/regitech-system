import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const AppDropdown = ({ handleSelect, dropdownItems }) => {
  return (
    <>
      <style type="text/css">
        {`
            .btn-maroon {
              background-color: var(--primary-maroon);
              color: white;
            }
            
          `}
      </style>
      <DropdownButton variant="maroon" title="Sort by" onSelect={handleSelect}>
        {dropdownItems.map((item) => {
          <Dropdown.Item key={item} eventKey={"Newest first"}>
            Newest first
          </Dropdown.Item>;
        })}
        <Dropdown.Item eventKey={"Newest first"}>Newest first</Dropdown.Item>
        <Dropdown.Item eventKey={"Oldest first"}>Oldest first</Dropdown.Item>
        <Dropdown.Item eventKey={"Not reviewed"}>
          Have been reviewed
        </Dropdown.Item>
        <Dropdown.Item eventKey={"Have been reviewed"}>
          Have been reviewed
        </Dropdown.Item>
        <Dropdown.Item eventKey={"Alphabetically"}>
          Alphabetically
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default AppDropdown;
