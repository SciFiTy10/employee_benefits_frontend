import React from "react";
import dependentTypeSectionStyles from "./DependentTypeSection.module.scss";
const DependentTypeSection = () => {
  return (
    <div className={dependentTypeSectionStyles.dependentTypeSection}>
      <label for="dependent-select">Dependent Type:</label>
      <select name="dependent-type" id="dependent-select">
        <option value="">--Please choose an option--</option>
        <option value="Spouse">Spouse</option>
        <option value="Child">Child</option>
      </select>
    </div>
  );
};

export default DependentTypeSection;
