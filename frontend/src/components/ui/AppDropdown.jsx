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
            
            .btn-maroon:hover{
              border: 1px solid var(--primary-maroon);
            }
          `}
      </style>
      <DropdownButton variant="maroon" title="Sort by" onSelect={handleSelect}>
        {dropdownItems.map((item) => (
          <Dropdown.Item key={item} eventKey={item}>
            {item}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
};

export default AppDropdown;
