import React, { useContext } from "react";
import { AppContext } from "../../Context/App-Context";
import Button from "../UI/Button/Button";
import noEmployeesStyles from "./NoEmployees.module.scss";
const NoEmployees = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  //handler for opening the dialog
  const showDialogHandler = () => {
    ctx.addEmployeeDialogHandler(true);
  };
  return (
    <div className={noEmployeesStyles.noEmployees}>
      <p>There are no existing employees.</p>
      <Button
        onClick={showDialogHandler}
        ariaLabel="add employee button"
        text="Add Employee"
      />
    </div>
  );
};

export default NoEmployees;
