import React from "react";
import { Button } from "react-bootstrap";

const LogoutButton = ({ onLogout }) => {
  return (
    <>
      <style type="text/css">
        {`
              .btn-logout {
                background-color: transparent;
                color: #fff200;
                outline: none;
              }
              .btn-logout:hover { 
                outline: #fff200;
                color: black;
                background-color: #fff200;
              }
              `}
      </style>
      <Button variant="logout" onClick={onLogout}>
        Logout
      </Button>
    </>
  );
};

export default LogoutButton;
