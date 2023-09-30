import { useState } from "react";

const useCheckboxInput = (defaultValues) => {
  const [values, setValues] = useState(defaultValues);

  const add = (value) => {
    setValues([...values, value]);
  };

  const remove = (toRemoveValue) => {
    let updatedArray = values.filter((value) => value !== toRemoveValue);
    setValues(updatedArray);
  };

  const includes = (value) => {
    return values.includes(value);
  };

  const updateValues = (newValues) => {
    setValues(newValues);
  };

  return { values, add, remove, updateValues, includes };
};

export default useCheckboxInput;
