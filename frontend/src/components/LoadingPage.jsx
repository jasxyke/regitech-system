import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingPage = () => {
  return (
    <div
      className="justify-content-center d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

export default LoadingPage;
