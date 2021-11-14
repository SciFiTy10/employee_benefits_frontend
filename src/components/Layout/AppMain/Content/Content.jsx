import React from "react";
import EmployeeList from "../../../Employee/EmployeeList/EmployeeList";
import AddEmployee from "../../../Employee/AddEmployee/AddEmployee";
import Notification from "../../../Notification/Notification";
import contentStyles from "./Content.module.scss";

const Content = () => {
  return (
    <div className={contentStyles.content}>
      <Notification />
      <AddEmployee />
      <EmployeeList />
    </div>
  );
};

export default Content;
