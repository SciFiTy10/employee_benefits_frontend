import React from "react";
import mainStyles from "./Main.module.scss";
import EmployeeList from "../../Employee/EmployeeList/EmployeeList";
const Main = () => {
  return (
    <section className={mainStyles.main}>
      <EmployeeList />
    </section>
  );
};

export default Main;
