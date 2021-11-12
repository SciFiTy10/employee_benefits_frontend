import React from "react";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import DependentList from "../../Dependent/DependentList/DependentList";
import employeeListStyles from "../EmployeeList/EmployeeList.module.scss";
const EmployeeList = () => {
  return (
    <section className={employeeListStyles.employeeList}>
      <EmployeeListItem />
      <DependentList />
    </section>
  );
};

export default EmployeeList;
