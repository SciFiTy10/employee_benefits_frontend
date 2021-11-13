import React from "react";
import addEmployeeFormStyles from "./AddEmployeeForm.module.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import AddDependent from "../../Dependent/AddDependent/AddDependent";

const AddEmployeeForm = () => {
  return (
    <section className={addEmployeeFormStyles.addEmployeeForm}>
      <h2 className={addEmployeeFormStyles.header}>Add A New Employee</h2>
      <div className={addEmployeeFormStyles.body}>
        <section className={addEmployeeFormStyles.nameSection}>
          <div className={addEmployeeFormStyles.firstName}>
            <Input labelText="First Name" placeholder="Pat" type="text" />
          </div>
          <div className={addEmployeeFormStyles.lastName}>
            <Input labelText="Last Name" placeholder="Johnson" type="text" />
          </div>
        </section>
        <section className={addEmployeeFormStyles.contactSection}>
          <div className={addEmployeeFormStyles.email}>
            <Input
              labelText="Email"
              placeholder="pjohnson@gmail.com"
              type="email"
            />
          </div>
          <div className={addEmployeeFormStyles.phoneNumber}>
            <Input
              labelText="Phone Number"
              placeholder="(555) 555-5555"
              type="number"
            />
          </div>
        </section>
        <section className={addEmployeeFormStyles.addressSection}>
          <div className={addEmployeeFormStyles.addressLines}>
            <div className={addEmployeeFormStyles.line1}>
              <Input
                labelText="Address Line 1"
                placeholder="123 Fourth Street"
                type="text"
              />
            </div>
            <div className={addEmployeeFormStyles.line2}>
              <Input
                labelText="Address Line 2"
                placeholder="Apt. 1"
                type="text"
              />
            </div>
          </div>
          <div className={addEmployeeFormStyles.cityStateZip}>
            <div className={addEmployeeFormStyles.city}>
              <Input labelText="City" placeholder="Schaumburg" type="text" />
            </div>
            <div className={addEmployeeFormStyles.state}>
              <Input labelText="State" placeholder="Illinois" type="text" />
            </div>
            <div className={addEmployeeFormStyles.zip}>
              <Input labelText="Zip" placeholder="60014" type="number" />
            </div>
          </div>
        </section>
        <section className={addEmployeeFormStyles.actionSection}>
          <Button text="Add Dependent" ariaLabel="add dependent button" />
          <div className={addEmployeeFormStyles.submit}>
            <Button
              text="Submit"
              ariaLabel="submit button"
              buttonType="submit"
            />
          </div>
        </section>
        <AddDependent />
      </div>
    </section>
  );
};

export default AddEmployeeForm;
