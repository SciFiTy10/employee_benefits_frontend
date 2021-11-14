import React from "react";
import Button from "../UI/Button/Button";
import noEmployeesStyles from "./NoEmployees.module.scss";
const NoEmployees = () => {
  return (
    <div className={noEmployeesStyles.noEmployees}>
      <p>There are no existing employees.</p>
      <Button ariaLabel="add employee button" text="Add Employee" />
    </div>
  );
};

export default NoEmployees;
