import React from "react";
import styles from "./NavigationItem.module.css";
const NavigationItem = ({ text, onClick }) => {
  return (
    <tr onClick={onClick} style={{ cursor: "pointer" }}>
      <td className="px-4">{text}</td>
    </tr>
  );
};

export default NavigationItem;
