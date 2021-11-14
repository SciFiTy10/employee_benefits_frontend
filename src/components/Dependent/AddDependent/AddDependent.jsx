import React from "react";
import Button from "../../UI/Button/Button";
import HeaderSection from "../../Section/HeaderSection/HeaderSection";
import DependentTypeSection from "../../PersonalInformation/DependentTypeSection/DependentTypeSection";
import NameSection from "../../PersonalInformation/NameSection/NameSection";
import ContactSection from "../../PersonalInformation/ContactSection/ContactSection";
import AddressSection from "../../PersonalInformation/AddressSection/AddressSection";
import SameAddressSection from "../../PersonalInformation/SameAddressSection/SameAddressSection";

const AddDependent = () => {
  return (
    <section>
      <HeaderSection text="Add A New Dependent" />
      <article>
        <DependentTypeSection />
        <NameSection />
        <ContactSection />
        <SameAddressSection />
        <AddressSection />
      </article>
    </section>
  );
};

export default AddDependent;
