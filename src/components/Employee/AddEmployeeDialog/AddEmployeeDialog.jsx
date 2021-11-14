import React, { useContext } from "react";
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
  //grab the context
  const ctx = useContext(AppContext);
  //handler for opening the dialog
  const showDialogHandler = () => {
    ctx.addEmployeeDialogHandler(false);
  };
  return (
    <div className={addEmployeeDialogStyles.overlay}>
      <section className={addEmployeeDialogStyles.addEmployeeDialog}>
        <HeaderSection text="Add A New Employee" />
        <article>
          <NameSection />
          <ContactSection />
          <AddressSection />
          <ActionSection>
            <div className={actionStyles.close}>
              <Button
                text="Close"
                ariaLabel="close add employee dialog"
                onClick={showDialogHandler}
              />
            </div>
            <Button text="Add Dependent" ariaLabel="add dependent button" />
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
