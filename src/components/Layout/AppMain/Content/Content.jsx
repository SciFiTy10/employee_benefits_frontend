import React, { useContext } from "react";
import { AppContext } from "../../../../Context/App-Context";
import AddEmployee from "../../../Employee/AddEmployee/AddEmployee";
import NoEmployees from "../../../NoEmployees/NoEmployees";
import Notification from "../../../Notification/Notification";
import Summary from "../../../Summary/Summary";
//style
import contentStyles from "./Content.module.scss";

const Content = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  return (
    <div className={contentStyles.content}>
      <Notification />
      {ctx.employeeList.length == 0 ? (
        <NoEmployees />
      ) : (
        <Summary employeeList={ctx.employeeList} />
      )}
      <AddEmployee />
    </div>
  );
};

export default Content;
