import React from "react";
import Input from "../../UI/Input/Input";
import addressSectionStyles from "./AddressSection.module.scss";
const AddressSection = () => {
  return (
    <address className={addressSectionStyles.addressSection}>
      <div className={addressSectionStyles.addressLines}>
        <div className={addressSectionStyles.line1}>
          <Input
            labelText="Address Line 1"
            placeholder="123 Fourth Street"
            type="text"
          />
        </div>
        <div className={addressSectionStyles.line2}>
          <Input labelText="Address Line 2" placeholder="Apt. 1" type="text" />
        </div>
      </div>
      <div className={addressSectionStyles.cityStateZip}>
        <div className={addressSectionStyles.city}>
          <Input labelText="City" placeholder="Schaumburg" type="text" />
        </div>
        <div className={addressSectionStyles.state}>
          <Input labelText="State" placeholder="Illinois" type="text" />
        </div>
        <div className={addressSectionStyles.zip}>
          <Input labelText="Zip" placeholder="60014" type="number" />
        </div>
      </div>
    </address>
  );
};

export default AddressSection;
