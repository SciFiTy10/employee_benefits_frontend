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
        <ContactSection />
        <SameAddressSection />
        <AddressSection />
      </article>
    </section>
  );
};

export default AddDependent;
