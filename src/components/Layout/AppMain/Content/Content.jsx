import React, { useContext } from "react";
import { AppContext } from "../../../../Context/App-Context";
import AddEmployeeDialog from "../../../Employee/AddEmployeeDialog/AddEmployeeDialog";
import NoEmployees from "../../../NoEmployees/NoEmployees";
import Notification from "../../../Notification/Notification";
import Summary from "../../../Summary/Summary";
import Button from "../../../UI/Button/Button";
//style
import contentStyles from "./Content.module.scss";

const Content = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  //test
  ctx.employeeList.employees.length = 0;
  //handler for opening the dialog
  const showDialogHandler = () => {
    ctx.addEmployeeDialogHandler(true);
  };
  return (
    <div className={contentStyles.content}>
      <Notification />
      {ctx.showAddEmployeeDialog && <AddEmployeeDialog />}
      {ctx.employeeList.employees.length === 0 ? (
        <NoEmployees />
      ) : (
        <>
          <Button
            onClick={showDialogHandler}
            ariaLabel="add employee button"
            text="Add Employee"
          />
          <Summary employeeList={ctx.employeeList} />
        </>
      )}
    </div>
  );
};

export default Content;
