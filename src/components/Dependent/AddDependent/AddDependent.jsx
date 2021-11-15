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
  return (
    <section>
      <HeaderSection text="Add A New Dependent" />
      <article>
        <DependentTypeSection
          dependentType={dependent.dependentType}
          onDependentTypeChange={dependentTypeHandler}
          id={`dependent ${dependent.dependentId}`}
        />
        <NameSection />
        <ContactSection />
        <SameAddressSection />
        <AddressSection />
      </article>
    </section>
  );
};

export default AddDependent;
