import React from "react";
import EmployeeList from "../../../Employee/EmployeeList/EmployeeList";
import NewEmployeeForm from "../../../Employee/AddEmployeeForm/AddEmployeeForm";
import Notification from "../../../Notification/Notification";
import contentStyles from "./Content.module.scss";

const Content = () => {
  return (
    <section className={contentStyles.content}>
      <Notification />
      <NewEmployeeForm />
      <EmployeeList />
    </section>
  );
};

export default Content;
