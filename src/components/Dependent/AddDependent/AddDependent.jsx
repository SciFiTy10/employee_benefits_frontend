import React from "react";
import Button from "../../UI/Button/Button";
import HeaderSection from "../../Section/HeaderSection/HeaderSection";
import DependentTypeSection from "../../PersonalInformation/DependentTypeSection/DependentTypeSection";
import NameSection from "../../PersonalInformation/NameSection/NameSection";
import ContactSection from "../../PersonalInformation/ContactSection/ContactSection";
import AddressSection from "../../PersonalInformation/AddressSection/AddressSection";
import ActionSection from "../../Section/ActionSection/ActionSection";
import SameAddressSection from "../../PersonalInformation/SameAddressSection/SameAddressSection";

const AddDependent = () => {
  return (
    <section>
      <HeaderSection text="Add a new dependent" />
      <article>
        <DependentTypeSection />
        <NameSection />
        <ContactSection />
        <SameAddressSection />
        <AddressSection />
      </article>
      <ActionSection>
        <Button text="Add Another Dependent" ariaLabel="add dependent button" />
      </ActionSection>
    </section>
  );
};

export default AddDependent;
