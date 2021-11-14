import React from "react";
import Input from "../../UI/Input/Input";
import addressSectionStyles from "./AddressSection.module.scss";
const AddressSection = (props) => {
  return (
    <address className={addressSectionStyles.addressSection}>
      <div className={addressSectionStyles.addressLines}>
        <div className={addressSectionStyles.line1}>
          <Input
            labelText="Address Line 1"
            placeholder="123 Fourth Street"
            type="text"
            value={props.addressLine1}
            onChange={props.onAddressLine1Change}
          />
        </div>
        <div className={addressSectionStyles.line2}>
          <Input
            labelText="Address Line 2"
            placeholder="Apt. 1"
            type="text"
            value={props.addressLine2}
            onChange={props.onAddressLine2Change}
          />
        </div>
      </div>
      <div className={addressSectionStyles.cityStateZip}>
        <div className={addressSectionStyles.city}>
          <Input
            labelText="City"
            placeholder="Schaumburg"
            type="text"
            value={props.city}
            onChange={props.onCityChange}
          />
        </div>
        <div className={addressSectionStyles.state}>
          <Input
            labelText="State"
            placeholder="Illinois"
            type="text"
            value={props.state}
            onChange={props.onStateChange}
          />
        </div>
        <div className={addressSectionStyles.zip}>
          <Input
            labelText="Zip"
            placeholder="60014"
            type="number"
            value={props.zip}
            onChange={props.onZipChange}
          />
        </div>
      </div>
    </address>
  );
};

export default AddressSection;
