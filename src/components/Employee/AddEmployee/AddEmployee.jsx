import React from "react";
import Button from "../../UI/Button/Button";
import AddDependent from "../../Dependent/AddDependent/AddDependent";
import HeaderSection from "../../Section/HeaderSection/HeaderSection";
import NameSection from "../../PersonalInformation/NameSection/NameSection";
import ContactSection from "../../PersonalInformation/ContactSection/ContactSection";
import AddressSection from "../../PersonalInformation/AddressSection/AddressSection";
import ActionSection from "../../Section/ActionSection/ActionSection";

//styles
import addEmployeeStyles from "./AddEmployee.module.scss";
import actionStyles from "../../Section/ActionSection/ActionSection.module.scss";

const AddEmployee = () => {
  return (
    <section className={addEmployeeStyles.addEmployee}>
      <HeaderSection text="Add A New Employee" />
      <article>
        <NameSection />
        <ContactSection />
        <AddressSection />
        <ActionSection>
          <Button text="Add Dependent" ariaLabel="add dependent button" />
          <div className={actionStyles.submit}>
            <Button
              text="Submit"
              ariaLabel="submit button"
              buttonType="submit"
            />
          </div>
        </ActionSection>
        <AddDependent />
      </article>
    </section>
  );
};

export default AddEmployee;
