import React from "react";
import newEmployeeFormStyles from "./NewEmployeeForm.module.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import NewDependent from "../NewDependent/NewDependent";

const NewEmployeeForm = () => {
  return (
    <div className={newEmployeeFormStyles.newEmployeeForm}>
      <section>
        <h1>Add A New Employee</h1>
      </section>
      <form action="#">
        <section className={newEmployeeFormStyles.nameSection}>
          <Input labelText="First Name" placeholder="Pat" type="text" />
          <Input labelText="Last Name" placeholder="Johnson" type="text" />
        </section>
        <section className={newEmployeeFormStyles.contactSection}>
          <Input labelText="Email" placeholder="pat@gmail.com" type="email" />
          <Input
            labelText="Phone Number"
            placeholder="(555) 555-5555"
            type="number"
          />
        </section>
        <section className={newEmployeeFormStyles.addressSection}>
          <Input
            labelText="Street Address"
            placeholder="123 Fourth Street"
            type="text"
          />
          <Input labelText="City" placeholder="Schaumburg" type="text" />
          <Input labelText="State" placeholder="Illinois" type="text" />
          <Input labelText="Zip" placeholder="60014" type="number" />
        </section>
        <section className={newEmployeeFormStyles.addSection}>
          <Button text="Add Dependent" ariaLabel="add dependent button" />
          <Input labelText="" type="submit" value="Add Employee" />
        </section>
        <NewDependent />
      </form>
    </div>
  );
};

export default NewEmployeeForm;
