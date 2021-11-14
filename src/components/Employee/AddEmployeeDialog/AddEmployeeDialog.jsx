import React, { useState, useContext } from "react";
import Button from "../../UI/Button/Button";
import AddDependent from "../../Dependent/AddDependent/AddDependent";
import HeaderSection from "../../Section/HeaderSection/HeaderSection";
import NameSection from "../../PersonalInformation/NameSection/NameSection";
import ContactSection from "../../PersonalInformation/ContactSection/ContactSection";
import AddressSection from "../../PersonalInformation/AddressSection/AddressSection";
import ActionSection from "../../Section/ActionSection/ActionSection";

//styles
import addEmployeeDialogStyles from "./AddEmployeeDialog.module.scss";
import actionStyles from "../../Section/ActionSection/ActionSection.module.scss";
import { AppContext } from "../../../Context/App-Context";

const AddEmployeeDialog = () => {
  //create state to hold the new employee
  const [employee, setEmployee] = useState({
    employeeId: -1,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: 0,
    costPerCheck: 0,
    dependents: [],
  });
  //grab the context
  const ctx = useContext(AppContext);
  //handler for opening the dialog
  const showDialogHandler = () => {
    ctx.addEmployeeDialogHandler(false);
  };
  //handler for displaying the alert
  const alertHandler = (alert) => {};
  //handler for showing the add dependent fields
  const addDependentHandler = () => {
    //double check that there aren't any missing fields first
    if (employee.dependents.length !== 0) {
      return;
    }
    //push a new dependent onto the state
    const currentEmployee = { ...employee };
    currentEmployee.dependents.push({
      dependentId: -1,
      dependentType: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: 0,
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: 0,
      costPerCheck: 0,
    });
    //update the state
    setEmployee(currentEmployee);
  };
  //handler for setting the firstName
  const firstNameHandler = (event) => {
    //copy the current employee state
    const currentEmployee = { ...employee };
    //update the first name value
    currentEmployee.firstName = event.target.value;
    //update the state
    setEmployee(currentEmployee);
  };
  //handler for setting the lastName
  const lastNameHandler = (event) => {
    //copy the current employee state
    const currentEmployee = { ...employee };
    //update the last name value
    currentEmployee.lastName = event.target.value;
    //update the state
    setEmployee(currentEmployee);
  };
  //handler for setting the email
  const emailHandler = (event) => {
    //copy the current employee state
    const currentEmployee = { ...employee };
    //update the email value
    currentEmployee.email = event.target.value;
    //update the state
    setEmployee(currentEmployee);
  };
  //handler for setting the phone number
  const phoneNumberHandler = (event) => {
    //copy the current employee state
    const currentEmployee = { ...employee };
    //update the phone number value
    currentEmployee.phoneNumber = event.target.value;
    //update the state
    setEmployee(currentEmployee);
  };
  //handler for setting the addressLine1
  const addressLine1Handler = (event) => {
    //copy the current employee state
    const currentEmployee = { ...employee };
    //update the phone number value
    currentEmployee.addressLine1 = event.target.value;
    //update the state
    setEmployee(currentEmployee);
  };
  //handler for setting the addressLine2
  const addressLine2Handler = (event) => {
    //copy the current employee state
    const currentEmployee = { ...employee };
    //update the phone number value
    currentEmployee.addressLine2 = event.target.value;
    //update the state
    setEmployee(currentEmployee);
  };
  //handler for setting the city
  const cityHandler = (event) => {
    //copy the current employee state
    const currentEmployee = { ...employee };
    //update the phone number value
    currentEmployee.city = event.target.value;
    //update the state
    setEmployee(currentEmployee);
  };
  //handler for setting the state
  const stateHandler = (event) => {
    //copy the current employee state
    const currentEmployee = { ...employee };
    //update the phone number value
    currentEmployee.state = event.target.value;
    //update the state
    setEmployee(currentEmployee);
  };
  //handler for setting the zip
  const zipHandler = (event) => {
    //copy the current employee state
    const currentEmployee = { ...employee };
    //update the phone number value
    currentEmployee.zip = event.target.value;
    //update the state
    setEmployee(currentEmployee);
  };
  return (
    <div className={addEmployeeDialogStyles.overlay}>
      <section className={addEmployeeDialogStyles.addEmployeeDialog}>
        <HeaderSection text="Add A New Employee" />
        <article>
          <NameSection
            firstName={employee.firstName}
            lastName={employee.lastName}
            onFirstNameChange={firstNameHandler}
            onLastNameChange={lastNameHandler}
          />
          <ContactSection
            email={employee.email}
            phoneNumber={employee.phoneNumber}
            onEmailChange={emailHandler}
            onPhoneNumberChange={phoneNumberHandler}
          />
          <AddressSection
            addressLine1={employee.addressLine1}
            addressLine2={employee.addressLine2}
            city={employee.city}
            state={employee.state}
            zip={employee.zip}
            onAddressLine1Change={addressLine1Handler}
            onAddressLine2Change={addressLine2Handler}
            onCityChange={cityHandler}
            onStateChange={stateHandler}
            onZipChange={zipHandler}
          />
          {employee.dependents.map((dependent) => (
            <AddDependent key={dependent.dependentId} dependent={dependent} />
          ))}
          <ActionSection>
            <div className={actionStyles.close}>
              <Button
                text="Close"
                ariaLabel="close add employee dialog"
                onClick={showDialogHandler}
              />
            </div>
            <Button
              text="Add Dependent"
              ariaLabel="add dependent button"
              onClick={addDependentHandler}
            />
            <div className={actionStyles.submit}>
              <Button
                text="Submit"
                ariaLabel="submit button"
                buttonType="submit"
              />
            </div>
          </ActionSection>
        </article>
      </section>
    </div>
  );
};

export default AddEmployeeDialog;
