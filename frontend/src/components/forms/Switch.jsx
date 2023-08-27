import { Form } from "react-bootstrap";

const Switch = ({ checked, handleChange, label }) => {
  return (
    <>
      <style type="text/css">
        {`
            .form-check-input:checked {
                background-color: var(--primary-maroon);
                border-color: var(--primary-maroon);
            }
        `}
      </style>
      <Form.Check
        type="switch"
        label={label}
        checked={checked}
        onClick={handleChange}

        //className="form-check-input"
      />
    </>
  );
};

export default Switch;
