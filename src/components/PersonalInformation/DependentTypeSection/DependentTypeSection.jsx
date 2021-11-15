import React from "react";
import dependentTypeSectionStyles from "./DependentTypeSection.module.scss";
const DependentTypeSection = (props) => {
  //handle the selection
  const selectHandler = (event) => {
    //send the value up to the parent
    props.onDependentTypeChange(event.target.value);
  };
  return (
    <div className={dependentTypeSectionStyles.dependentTypeSection}>
      <label htmlFor="dependent-select">Dependent Type:</label>
      <select
        name="dependent-type"
        id="dependent-select"
        aria-label={`select ${props.id}`}
        onChange={selectHandler}
      >
        <option value="">--Please choose an option--</option>
        <option value="Spouse">Spouse</option>
        <option value="Child">Child</option>
      </select>
    </div>
  );
};

export default DependentTypeSection;
