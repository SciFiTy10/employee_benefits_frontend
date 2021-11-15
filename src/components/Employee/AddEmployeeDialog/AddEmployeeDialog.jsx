import React, { useState, useContext } from "react";
import Button from "../../UI/Button/Button";
import AddDependent from "../../Dependent/AddDependent/AddDependent";
import HeaderSection from "../../Section/HeaderSection/HeaderSection";
import NameSection from "../../PersonalInformation/NameSection/NameSection";
import ContactSection from "../../PersonalInformation/ContactSection/ContactSection";
import AddressSection from "../../PersonalInformation/AddressSection/AddressSection";
import ActionSection from "../../Section/ActionSection/ActionSection";
import axios from "axios";

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
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    dependents: [],
  });
  //grab the context
  const ctx = useContext(AppContext);
  //handler for closing the dialog
  const closeDialogHandler = () => {
    ctx.addEmployeeDialogHandler(false);
  };
  //handler for updating when same address is checked
  const updateDependentAddressHandler = (updatedDependent, isChecked) => {
    //copy the existing state
    const currentEmployee = { ...employee };
    //find the current dependent
    const currentDependentIndex = currentEmployee.dependents.findIndex(
      (dependent) => dependent.dependentId === updatedDependent.dependentId
    );
    //if checked is true, update the address information based on the parent
    //update the currentDependent's info
    currentEmployee.dependents[currentDependentIndex].addressLine1 = isChecked
      ? employee.addressLine1
      : "";
    currentEmployee.dependents[currentDependentIndex].addressLine2 = isChecked
      ? employee.addressLine2
      : "";
    currentEmployee.dependents[currentDependentIndex].city = isChecked
      ? employee.city
      : "";
    currentEmployee.dependents[currentDependentIndex].state = isChecked
      ? employee.state
      : "";
    currentEmployee.dependents[currentDependentIndex].zip = isChecked
      ? employee.zip
      : "";
    //update the state
    setEmployee(currentEmployee);
  };
  //handler for updating a given dependent
  const updateDependentHandler = (updatedDependent) => {
    //copy the existing state
    const currentEmployee = { ...employee };
    //find the current dependent
    const currentDependentIndex = currentEmployee.dependents.findIndex(
      (dependent) => dependent.dependentId === updatedDependent.dependentId
    );
    //update the currentDependent's info
    currentEmployee.dependents[currentDependentIndex] = updatedDependent;
    //update the state
    setEmployee(currentEmployee);
  };
  //handler for showing the add dependent fields
  const addDependentHandler = () => {
    //double check that there aren't any missing fields first
    if (employee.dependents.length !== 0) {
      /*look up by each field whether other dependents are mising information*/

      //check to ensure there aren't any dependents with missing dependentType
      const missingDependentType = employee.dependents.find(
        (dependent) => dependent.dependentType === ""
      );
      if (missingDependentType !== undefined) {
        //send an alert for this to be addressed
        ctx.alertHandler({
          showAlert: true,
          isSuccess: false,
          message: `Before adding another dependent, please select a dependent type for ${
            missingDependentType.firstName !== ""
              ? missingDependentType.firstName
              : `dependent ${missingDependentType.dependentId}`
          }.`,
        });
        //stop execution of the method
        return;
      }
      //check to ensure there aren't any dependents with missing first name
      const missingFirstName = employee.dependents.find(
        (dependent) => dependent.firstName === ""
      );
      if (missingFirstName !== undefined) {
        //send an alert for this to be addressed
        ctx.alertHandler({
          showAlert: true,
          isSuccess: false,
          message: `Before adding another dependent, please select a first name for dependent ${missingFirstName.dependentId}.`,
        });
        //stop execution of the method
        return;
      }
      //check to ensure there aren't any dependents with missing last name
      const missingLastName = employee.dependents.find(
        (dependent) => dependent.lastName === ""
      );
      if (missingLastName !== undefined) {
        //send an alert for this to be addressed
        ctx.alertHandler({
          showAlert: true,
          isSuccess: false,
          message: `Before adding another dependent, please select a last name for ${
            missingLastName.firstName !== ""
              ? missingLastName.firstName
              : `dependent ${missingLastName.dependentId}`
          }.`,
        });
        //stop execution of the method
        return;
      }
      //check to ensure there aren't any dependents with missing email
      const missingEmail = employee.dependents.find(
        (dependent) => dependent.email === ""
      );
      if (missingEmail !== undefined) {
        //send an alert for this to be addressed
        ctx.alertHandler({
          showAlert: true,
          isSuccess: false,
          message: `Before adding another dependent, please select an email for ${
            missingEmail.firstName !== ""
              ? missingEmail.firstName
              : `dependent ${missingEmail.dependentId}`
          }.`,
        });
        //stop execution of the method
        return;
      }
      //check to ensure there aren't any dependents with missing phoneNumber
      const missingPhoneNumber = employee.dependents.find(
        (dependent) =>
          dependent.phoneNumber === null || dependent.phoneNumber === ""
      );
      if (missingPhoneNumber !== undefined) {
        //send an alert for this to be addressed
        ctx.alertHandler({
          showAlert: true,
          isSuccess: false,
          message: `Before adding another dependent, please select a phone number for ${
            missingPhoneNumber.firstName !== ""
              ? missingPhoneNumber.firstName
              : `dependent ${missingPhoneNumber.dependentId}`
          }.`,
        });
        //stop execution of the method
        return;
      }
      //check to ensure there aren't any dependents with missing addressLine1
      const missingAddressLine1 = employee.dependents.find(
        (dependent) => dependent.addressLine1 === ""
      );
      if (missingAddressLine1 !== undefined) {
        //send an alert for this to be addressed
        ctx.alertHandler({
          showAlert: true,
          isSuccess: false,
          message: `Before adding another dependent, please select an addressLine1 for ${
            missingAddressLine1.firstName !== ""
              ? missingAddressLine1.firstName
              : `dependent ${missingAddressLine1.dependentId}`
          }.`,
        });
        //stop execution of the method
        return;
      }
      //check to ensure there aren't any dependents with missing city
      const missingCity = employee.dependents.find(
        (dependent) => dependent.city === ""
      );
      if (missingCity !== undefined) {
        //send an alert for this to be addressed
        ctx.alertHandler({
          showAlert: true,
          isSuccess: false,
          message: `Before adding another dependent, please select a city for ${
            missingCity.firstName !== ""
              ? missingCity.firstName
              : `dependent ${missingCity.dependentId}`
          }.`,
        });
        //stop execution of the method
        return;
      }
      //check to ensure there aren't any dependents with missing state
      const missingState = employee.dependents.find(
        (dependent) => dependent.state === ""
      );
      if (missingState !== undefined) {
        //send an alert for this to be addressed
        ctx.alertHandler({
          showAlert: true,
          isSuccess: false,
          message: `Before adding another dependent, please select a state for ${
            missingState.firstName !== ""
              ? missingState.firstName
              : `dependent ${missingState.dependentId}`
          }.`,
        });
        //stop execution of the method
        return;
      }
      //check to ensure there aren't any dependents with missing zip
      const missingZip = employee.dependents.find(
        (dependent) => dependent.zip === null || dependent.zip === ""
      );
      if (missingZip !== undefined) {
        //send an alert for this to be addressed
        ctx.alertHandler({
          showAlert: true,
          isSuccess: false,
          message: `Before adding another dependent, please select a zip code for ${
            missingZip.firstName !== ""
              ? missingZip.firstName
              : `dependent ${missingZip.dependentId}`
          }.`,
        });
        //stop execution of the method
        return;
      }
    }
    //push a new dependent onto the state
    const currentEmployee = { ...employee };
    //create the dependentId
    const dependentId = currentEmployee.dependents.length + 1;
    currentEmployee.dependents.push({
      dependentId: dependentId,
      dependentType: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
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
      return;
    }
    //validate phone number
    if (employee.phoneNumber === null || employee.phoneNumber === "") {
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
    if (employee.zip === null || employee.zip === "") {
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

    //check to ensure there aren't any dependents with missing dependentType
    const missingDependentType = employee.dependents.find(
      (dependent) => dependent.dependentType === ""
    );
    if (missingDependentType !== undefined) {
      //send an alert for this to be addressed
      alert.message = `Please select a dependent type for ${
        missingDependentType.firstName !== ""
          ? missingDependentType.firstName
          : `dependent ${missingDependentType.dependentId}`
      }.`;
      ctx.alertHandler(alert);
      //stop execution of the method
      return;
    }
    //check to ensure there aren't any dependents with missing first name
    const missingFirstName = employee.dependents.find(
      (dependent) => dependent.firstName === ""
    );
    if (missingFirstName !== undefined) {
      //send an alert for this to be addressed
      alert.message = `Please select a first name for dependent ${missingFirstName.dependentId}.`;
      ctx.alertHandler(alert);
      //stop execution of the method
      return;
    }
    //check to ensure there aren't any dependents with missing last name
    const missingLastName = employee.dependents.find(
      (dependent) => dependent.lastName === ""
    );
    if (missingLastName !== undefined) {
      //send an alert for this to be addressed
      alert.message = `Please select a last name for ${
        missingLastName.firstName !== ""
          ? missingLastName.firstName
          : `dependent ${missingLastName.dependentId}`
      }.`;
      ctx.alertHandler(alert);
      //stop execution of the method
      return;
    }
    //check to ensure there aren't any dependents with missing email
    const missingEmail = employee.dependents.find(
      (dependent) => dependent.email === ""
    );
    if (missingEmail !== undefined) {
      //send an alert for this to be addressed
      alert.message = `Please select an email for ${
        missingEmail.firstName !== ""
          ? missingEmail.firstName
          : `dependent ${missingEmail.dependentId}`
      }.`;
      ctx.alertHandler(alert);
      //stop execution of the method
      return;
    }
    //check to ensure there aren't any dependents with invalid email
    const invalidEmail = employee.dependents.find(
      (dependent) =>
        dependent.email.length > 0 &&
        new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
          dependent.email
        ) === false
    );
    if (invalidEmail !== undefined) {
      //send an alert for this to be addressed
      alert.message = `Please select a valid email for ${
        invalidEmail.firstName !== ""
          ? invalidEmail.firstName
          : `dependent ${invalidEmail.dependentId}`
      }. Ex: test@gmail.com`;
      ctx.alertHandler(alert);
      //stop execution of the method
      return;
    }
    //check to ensure there aren't any dependents with missing phoneNumber
    const missingPhoneNumber = employee.dependents.find(
      (dependent) =>
        dependent.phoneNumber === null || dependent.phoneNumber === ""
    );
    if (missingPhoneNumber !== undefined) {
      //send an alert for this to be addressed
      alert.message = `Please select a phone number for ${
        missingPhoneNumber.firstName !== ""
          ? missingPhoneNumber.firstName
          : `dependent ${missingPhoneNumber.dependentId}`
      }.`;
      ctx.alertHandler(alert);
      //stop execution of the method
      return;
    }
    //check to ensure there aren't any dependents with an invalid phoneNumber
    const invalidPhoneNumber = employee.dependents.find(
      (dependent) => dependent.phoneNumber.toString().length !== 10
    );
    if (invalidPhoneNumber !== undefined) {
      //send an alert for this to be addressed
      alert.message = `Please select a phone number with 10 digits for ${
        invalidPhoneNumber.firstName !== ""
          ? invalidPhoneNumber.firstName
          : `dependent ${invalidPhoneNumber.dependentId}`
      }. Ex: 8475551234`;
      ctx.alertHandler(alert);
      //stop execution of the method
      return;
    }
    //check to ensure there aren't any dependents with missing addressLine1
    const missingAddressLine1 = employee.dependents.find(
      (dependent) => dependent.addressLine1 === ""
    );
    if (missingAddressLine1 !== undefined) {
      //send an alert for this to be addressed
      alert.message = `Please select an address line 1 for ${
        missingAddressLine1.firstName !== ""
          ? missingAddressLine1.firstName
          : `dependent ${missingAddressLine1.dependentId}`
      }.`;
      ctx.alertHandler(alert);
      //stop execution of the method
      return;
    }
    //check to ensure there aren't any dependents with missing city
    const missingCity = employee.dependents.find(
      (dependent) => dependent.city === ""
    );
    if (missingCity !== undefined) {
      //send an alert for this to be addressed
      alert.message = `Please select a city for ${
        missingCity.firstName !== ""
          ? missingCity.firstName
          : `dependent ${missingCity.dependentId}`
      }.`;
      ctx.alertHandler(alert);
      //stop execution of the method
      return;
    }
    //check to ensure there aren't any dependents with missing state
    const missingState = employee.dependents.find(
      (dependent) => dependent.state === ""
    );
    if (missingState !== undefined) {
      //send an alert for this to be addressed
      alert.message = `Please select a state for ${
        missingState.firstName !== ""
          ? missingState.firstName
          : `dependent ${missingState.dependentId}`
      }. Ex: Illinois`;
      ctx.alertHandler(alert);
      //stop execution of the method
      return;
    }
    //check to ensure there aren't any dependents with missing zip
    const missingZip = employee.dependents.find(
      (dependent) => dependent.zip === null || dependent.zip === ""
    );
    if (missingZip !== undefined) {
      //send an alert for this to be addressed
      alert.message = `Please select a zip code for ${
        missingZip.firstName !== ""
          ? missingZip.firstName
          : `dependent ${missingZip.dependentId}`
      }. Ex: 60123`;
      ctx.alertHandler(alert);
      //stop execution of the method
      return;
    }
    //check to ensure there aren't any dependents with an invalid zip
    const invalidZip = employee.dependents.find(
      (dependent) => dependent.zip.toString().length !== 5
    );
    if (invalidZip !== undefined) {
      //send an alert for this to be addressed
      alert.message = `Please select a zip code with 5 digits for ${
        invalidZip.firstName !== ""
          ? invalidZip.firstName
          : `dependent ${invalidZip.dependentId}`
      }. Ex: 60123`;
      ctx.alertHandler(alert);
      //stop execution of the method
      return;
    }

    //clear to submit!
    //(works if we use data: {employee: employee})
    //update datatypes
    employee.phoneNumber = Number(employee.phoneNumber);
    employee.zip = Number(employee.zip);
    employee.dependents.forEach((dependent) => {
      dependent.phoneNumber = Number(dependent.phoneNumber);
      dependent.zip = Number(dependent.zip);
    });
    axios({
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      url: "https://localhost:5001/api/employee/CreateEmployee",
      data: employee,
    })
      .then((response) => {
        ctx.alertHandler({
          showAlert: true,
          isSuccess: true,
          message: "Success! The Employee was added.",
        });
        //set the new employee list state
        ctx.employeeListAddHandler(response.data);
      })
      .catch((error) => {
        //display the error
        ctx.alertHandler({
          showAlert: true,
          isSuccess: false,
          message: "An error occurred during the request",
        });
      });
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
            id="employee"
          />
          <ContactSection
            email={employee.email}
            phoneNumber={employee.phoneNumber}
            onEmailChange={emailHandler}
            onPhoneNumberChange={phoneNumberHandler}
            id="employee"
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
            id="employee"
          />
          {employee.dependents.map((dependent) => (
            <AddDependent
              key={dependent.dependentId}
              dependent={dependent}
              updateDependentHandler={updateDependentHandler}
              updateDependentAddressHandler={updateDependentAddressHandler}
            />
          ))}
          <ActionSection>
            <div className={actionStyles.close}>
              <Button
                text="Close"
                ariaLabel="close add employee dialog"
                onClick={closeDialogHandler}
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
