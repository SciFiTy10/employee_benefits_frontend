import React from "react";
import EmployeeList from "../../../Employee/EmployeeList/EmployeeList";
import contentStyles from "./Content.module.scss";
const Content = () => {
  return (
    <section className={contentStyles.content}>
      <EmployeeList />
    </section>
  );
};

export default Content;
