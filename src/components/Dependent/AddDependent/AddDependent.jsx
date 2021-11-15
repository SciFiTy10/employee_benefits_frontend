import React from "react";
import HeaderSection from "../../Section/HeaderSection/HeaderSection";
import DependentTypeSection from "../../PersonalInformation/DependentTypeSection/DependentTypeSection";
import NameSection from "../../PersonalInformation/NameSection/NameSection";
import ContactSection from "../../PersonalInformation/ContactSection/ContactSection";
import AddressSection from "../../PersonalInformation/AddressSection/AddressSection";
import SameAddressSection from "../../PersonalInformation/SameAddressSection/SameAddressSection";

const AddDependent = (props) => {
  //grab the variables from props
  const { dependent, updateDependentHandler } = props;
  //handler for updating the dependentType
  const dependentTypeHandler = (value) => {
    //copy the current dependent
    const currentDependent = { ...dependent };
    //update the dependentType
    currentDependent.dependentType = value;
    //if the dependentType is child
    if (value === "Child") {
      //set the email and phoneNumber values to empty
      currentDependent.email = "";
      currentDependent.phoneNumber = "";
    }
    //update the parent state's dependent data with this new value
    updateDependentHandler(currentDependent);
  };
  //handler for updating the first name
  const firstNameHandler = (event) => {
    //copy the current dependent
    const currentDependent = { ...dependent };
    //update the first name
    currentDependent.firstName = event.target.value;
    //update the parent state's dependent data with this new value
    updateDependentHandler(currentDependent);
  };
  //handler for updating the lastName
  const lastNameHandler = (event) => {
    //copy the current dependent
    const currentDependent = { ...dependent };
    //update the last name
    currentDependent.lastName = event.target.value;
    //update the parent state's dependent data with this new value
    updateDependentHandler(currentDependent);
  };
  //handler for updating the email
  const emailHandler = (event) => {
    //copy the current dependent
    const currentDependent = { ...dependent };
    //update the email
    currentDependent.email = event.target.value;
    //update the parent state's dependent data with this new value
    updateDependentHandler(currentDependent);
  };
  //handler for updating the phoneNumber
  const phoneNumberHandler = (event) => {
    //copy the current dependent
    const currentDependent = { ...dependent };
    //update the phoneNumber
    currentDependent.phoneNumber = event.target.value;
    //update the parent state's dependent data with this new value
    updateDependentHandler(currentDependent);
  };
  //handler for the sameAddress checkbox
  const sameAddressHandler = (event) => {
    //update the parent
    props.updateDependentAddressHandler(dependent, event.target.checked);
  };
  //handler for updating the addressLine1
  const addressLine1Handler = (event) => {
    //copy the current dependent
    const currentDependent = { ...dependent };
    //update the addressLine1
    currentDependent.addressLine1 = event.target.value;
    //update the parent state's dependent data with this new value
    updateDependentHandler(currentDependent);
  };
  //handler for updating the addressLine2
  const addressLine2Handler = (event) => {
    //copy the current dependent
    const currentDependent = { ...dependent };
    //update the addressLine2
    currentDependent.addressLine2 = event.target.value;
    //update the parent state's dependent data with this new value
    updateDependentHandler(currentDependent);
  };
  //handler for updating the city
  const cityHandler = (event) => {
    //copy the current dependent
    const currentDependent = { ...dependent };
    //update the city
    currentDependent.city = event.target.value;
    //update the parent state's dependent data with this new value
    updateDependentHandler(currentDependent);
  };
  //handler for updating the state
  const stateHandler = (event) => {
    //copy the current dependent
    const currentDependent = { ...dependent };
    //update the state
    currentDependent.state = event.target.value;
    //update the parent state's dependent data with this new value
    updateDependentHandler(currentDependent);
  };
  //handler for updating the zip
  const zipHandler = (event) => {
    //copy the current dependent
    const currentDependent = { ...dependent };
    //update the zip
    currentDependent.zip = event.target.value;
    //update the parent state's dependent data with this new value
    updateDependentHandler(currentDependent);
  };
  return (
    <section>
      <HeaderSection text="Add A New Dependent" />
      <article>
        <DependentTypeSection
          dependentType={dependent.dependentType}
          onDependentTypeChange={dependentTypeHandler}
          id={`dependent ${dependent.dependentId}`}
        />
        <NameSection
          firstName={dependent.firstName}
          lastName={dependent.lastName}
          onFirstNameChange={firstNameHandler}
          onLastNameChange={lastNameHandler}
          id={`dependent ${dependent.dependentId}`}
        />
        {dependent.dependentType !== "Child" && (
          <ContactSection
            email={dependent.email}
            phoneNumber={dependent.phoneNumber}
            onEmailChange={emailHandler}
            onPhoneNumberChange={phoneNumberHandler}
            id={`dependent ${dependent.dependentId}`}
          />
        )}
        <SameAddressSection
          onSameAddressChange={sameAddressHandler}
          id={`dependent ${dependent.dependentId}`}
        />
        <AddressSection
          addressLine1={dependent.addressLine1}
          addressLine2={dependent.addressLine2}
          city={dependent.city}
          state={dependent.state}
          zip={dependent.zip}
          onAddressLine1Change={addressLine1Handler}
          onAddressLine2Change={addressLine2Handler}
          onCityChange={cityHandler}
          onStateChange={stateHandler}
          onZipChange={zipHandler}
          id={`dependent ${dependent.dependentId}`}
        />
      </article>
    </section>
  );
};

export default AddDependent;
