const Checkbox = ({ checked, handleChange, label, id }) => {
  return (
    <>
      <style type="text/css">
        {`
            .form-check-input:checked {
                background-color: var(--primary-maroon);
                border-color: var(--primary-maroon);
            }

            .form-check-label{
              cursor: pointer;
            }
        `}
      </style>
      <div className="form-check">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="form-check-input"
          id={id}
          name={id}
        />
        <label htmlFor={id} className="form-check-label">
          {label}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
