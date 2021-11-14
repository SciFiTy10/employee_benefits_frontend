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
  //handler for submitting the employee
  const submitHandler = () => {
    //initialize alert object
    const alert = {
      showAlert: true,
      isSuccess: false,
      message: "",
    };
    //validate first name
    if (employee.firstName === "") {
      alert.message = "Please enter a first name for the employee.";
      ctx.alertHandler(alert);
      //break execution
      return;
    }
    //validate last name
    if (employee.lastName === "") {
      alert.message = `Please enter a last name for ${employee.firstName}.`;
      ctx.alertHandler(alert);
      //break execution
      return;
    }
    //validate email
    if (employee.email === "") {
      alert.message = `Please enter an email for ${employee.firstName}.`;
      ctx.alertHandler(alert);
      //break execution
      return;
    }
    //validate format for email
    if (
      employee.email.length > 0 &&
      new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
        employee.email
      ) === false
    ) {
      alert.message = `Please enter an email in a valid format for ${employee.firstName}. Ex: "name@gmail.com"`;
      ctx.alertHandler(alert);
    }
    //validate phone number
    if (employee.phoneNumber === "" || employee.phoneNumber === 0) {
      alert.message = `Please enter a phone number for ${employee.firstName}.`;
      ctx.alertHandler(alert);
      //break execution
      return;
    }
    //validate length for phone number
    if (employee.phoneNumber.toString().length !== 10) {
      alert.message = `Please enter a phone number with 10 digits for ${employee.firstName}. Ex: 8475551234`;
      ctx.alertHandler(alert);
      //break execution
      return;
    }
    //validate addressLine1
    if (employee.addressLine1 === "") {
      alert.message = `Please enter an address line 1 for ${employee.firstName}.`;
      ctx.alertHandler(alert);
      //break execution
      return;
    }
    //validate city
    if (employee.city === "") {
      alert.message = `Please enter a city for ${employee.firstName}.`;
      ctx.alertHandler(alert);
      //break execution
      return;
    }
    //validate state
    if (employee.state === "") {
      alert.message = `Please enter a state for ${employee.firstName}. Ex: Illinois`;
      ctx.alertHandler(alert);
      //break execution
      return;
    }
    //validate zip code
    if (employee.zip === "" || employee.zip === 0) {
      alert.message = `Please enter a zip code for ${employee.firstName}. Ex: 60123`;
      ctx.alertHandler(alert);
      //break execution
      return;
    }
    //validate length for zip code
    if (employee.zip.toString().length !== 5) {
      alert.message = `Please enter a zip code with 5 digits for ${employee.firstName}. Ex: 60123`;
      ctx.alertHandler(alert);
      //break execution
      return;
    }
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
                onClick={submitHandler}
              />
            </div>
          </ActionSection>
        </article>
      </section>
    </div>
  );
};

export default AddEmployeeDialog;
