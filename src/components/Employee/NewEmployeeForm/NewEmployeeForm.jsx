import React from "react";
import newEmployeeFormStyles from "./NewEmployeeForm.module.scss";
import Input from "../../UI/Input/Input";
const NewEmployeeForm = () => {
  return (
    <section className={newEmployeeFormStyles.newEmployeeForm}>
      <form>
        <Input labelText="First Name" placeholder="Enter your First Name" />
      </form>
    </section>
  );
};

export default NewEmployeeForm;
