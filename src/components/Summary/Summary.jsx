import React from "react";
import SectionHeader from "../Section/HeaderSection/HeaderSection";
import SummaryGrandTotal from "./SummaryGrandTotal/SummaryGrandTotal";
import EmployeeList from "../Employee/EmployeeList/EmployeeList";
import summaryStyles from "./Summary.module.scss";
const Summary = (props) => {
  return (
    <section className={summaryStyles.summary}>
      <SectionHeader text="Summary of Benefit Costs" />
      <SummaryGrandTotal
        grandTotalPerCheck={props.employeeList.grandTotalPerCheck}
        grandTotalPerYear={props.employeeList.grandTotalPerYear}
      />
      <EmployeeList employeeList={props.employeeList} />
    </section>
  );
};

export default Summary;
