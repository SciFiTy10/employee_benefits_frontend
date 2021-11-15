import React from "react";
import SummaryHeader from "../SummaryHeader/SummaryHeader";
import summaryEmployeeTotalStyles from "./SummaryEmployeeTotal.module.scss";
const SummaryEmployeeTotal = (props) => {
  //grab the employees prop
  const { employee } = props;
  //grab the employee's dependents
  const { dependents } = employee;
  //reduce the value of the employee total plus the sum of the dependents
  const totalPerCheck =
    dependents.length > 0
      ? dependents.reduce(
          (total, acc) => (total += acc.costPerCheck),
          employee.costPerCheck
        )
      : employee.costPerCheck;
  return (
    <section>
      <SummaryHeader text="Employee Total" />
      <article>
        <div className={summaryEmployeeTotalStyles.totalPerCheck}>
          <span>Per Check: ${totalPerCheck}</span>
        </div>
        <div className={summaryEmployeeTotalStyles.totalPerCheck}>
          <span>Per Year: ${totalPerCheck * 26}</span>
        </div>
      </article>
    </section>
  );
};

export default SummaryEmployeeTotal;
