import React from "react";
import selectStyles from "./Select.module.scss";
const Select = () => {
  return (
    <>
      <label for="dependent-select">Choose a type:</label>

      <select name="dependent-type" id="dependent-select">
        <option value="">--Please choose an option--</option>
        <option value="Spouse">Spouse</option>
        <option value="Child">Child</option>
      </select>
    </>
  );
};

export default Select;
