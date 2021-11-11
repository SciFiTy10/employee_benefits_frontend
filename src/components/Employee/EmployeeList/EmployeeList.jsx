import React from "react";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import employeeListStyles from "../EmployeeList/EmployeeList.module.scss";
const EmployeeList = () => {
  return (
    <section className={employeeListStyles.employeeList}>
      <EmployeeListItem></EmployeeListItem>
    </section>
  );
};

export default EmployeeList;
