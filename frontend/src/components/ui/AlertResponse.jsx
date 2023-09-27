import React from "react";
import { Alert } from "react-bootstrap";

const AlertResponse = ({ response, error }) => {
  return (
    <>
      {response !== "" ? (
        <Alert variant="success">{response}</Alert>
      ) : error !== "" ? (
        <Alert variant="danger">{error}</Alert>
      ) : null}
    </>
  );
};

export default AlertResponse;
