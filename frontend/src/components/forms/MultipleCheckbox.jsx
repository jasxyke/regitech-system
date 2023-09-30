import React from "react";

const MultipleCheckbox = ({ displayValues, realValues }) => {
  const checkboxes = displayValues.map((value) => (
    <Checkbox
      checked={yearsList.includes(value)}
      label={year}
      id={year}
      handleChange={() => {
        if (yearsList.includes(value)) {
          yearsList.remove(value);
        } else {
          yearsList.add(value);
        }
        console.log("years: ");
        console.log(yearsList.values);
      }}
    />
  ));
  return <>{checkboxes}</>;
};

export default MultipleCheckbox;
