import React, { useContext } from "react";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
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
            <EmployeeListItem key={employee.employeeId} employee={employee} />
            {employee.dependents.length > 0 ? (
              <>
                {employee.dependents.map((dependent) => {
                  return (
                    <DependentList
                      key={dependent.dependentId}
                      dependent={dependent}
                    />
                  );
                })}
              </>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default EmployeeList;
