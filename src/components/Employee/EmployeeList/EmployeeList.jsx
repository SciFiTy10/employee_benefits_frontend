import React, { useContext } from "react";
import Employee from "../Employee/Employee";
import DependentList from "../../Dependent/DependentList/DependentList";
import employeeListStyles from "../EmployeeList/EmployeeList.module.scss";
import { AppContext } from "../../../Context/App-Context";
const EmployeeList = () => {
  //grab the context object
  const ctx = useContext(AppContext);

  return (
    <div className={employeeListStyles.employeeList}>
      {ctx.employeeList.map((employee) => {
        return (
          <>
            <Employee key={employee.employeeId} employee={employee} />
            {employee.dependents.length > 0 ? (
              <DependentList dependents={employee.dependents} />
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default EmployeeList;
