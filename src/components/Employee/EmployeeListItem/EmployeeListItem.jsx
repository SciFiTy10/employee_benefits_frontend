import React from "react";
import employeeListItemStyles from "./EmployeeListItem.module.scss";

const EmployeeListItem = () => {
  return (
    <div className={employeeListItemStyles.listItem}>
      <span className={employeeListItemStyles.name}>Tyler Ridings</span>
    </div>
  );
};

export default EmployeeListItem;
