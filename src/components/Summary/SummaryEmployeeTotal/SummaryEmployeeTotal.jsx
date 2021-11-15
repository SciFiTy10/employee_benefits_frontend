import React from "react";
import SummaryHeader from "../SummaryHeader/SummaryHeader";
import summaryEmployeeTotalStyles from "./SummaryEmployeeTotal.module.scss";
const SummaryEmployeeTotal = (props) => {
  //grab the employees prop
  const { employee } = props;
  //grab the employee's dependents
  const { dependents } = employee;
  return (
    <section className={summaryEmployeeTotalStyles.summaryEmployeeTotal}>
      <SummaryHeader text="Employee Total" />
      <article>
        <div className={summaryEmployeeTotalStyles.totalPerCheck}>
          <span>Per Check: ${employee.totalCostPerCheck}</span>
        </div>
        <div className={summaryEmployeeTotalStyles.totalPerCheck}>
          <span>Per Year: ${employee.totalCostPerYear}</span>
        </div>
      </article>
    </section>
  );
};

export default SummaryEmployeeTotal;
