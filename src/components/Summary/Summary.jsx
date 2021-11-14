import React from "react";
import SectionHeader from "../Section/HeaderSection/HeaderSection";
import EmployeeList from "../Employee/EmployeeList/EmployeeList";
import summaryStyles from "./Summary.module.scss";
const Summary = (props) => {
  return (
    <section className={summaryStyles.summary}>
      <SectionHeader text="Summary of Benefit Costs" />
      <EmployeeList employeeList={props.employeeList} />
    </section>
  );
};

export default Summary;
