import { Form } from "react-bootstrap";

const Checkbox = ({ checked, handleChange, label }) => {
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
        type="checkbox"
        label={label}
        checked={checked}
        onChange={handleChange}

        //className="form-check-input"
      />
    </>
  );
};

export default Checkbox;
