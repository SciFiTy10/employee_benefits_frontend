import React, { useContext } from "react";
import Employee from "../Employee/Employee";
import DependentList from "../../Dependent/DependentList/DependentList";
import employeeListStyles from "../EmployeeList/EmployeeList.module.scss";
import { AppContext } from "../../../Context/App-Context";
import SummaryEmployeeTotal from "../../Summary/SummaryEmployeeTotal/SummaryEmployeeTotal";
const EmployeeList = () => {
  //grab the context object
  const ctx = useContext(AppContext);

  return (
    <div className={employeeListStyles.employeeList}>
      {ctx.employeeList.employees.map((employee) => {
        return (
          <div
            key={employee.employeeId}
            className={employeeListStyles.employeeRow}
          >
            <Employee employee={employee} />
            {employee.dependents.length > 0 ? (
              <DependentList dependents={employee.dependents} />
            ) : null}
            <SummaryEmployeeTotal employee={employee} />
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeList;
