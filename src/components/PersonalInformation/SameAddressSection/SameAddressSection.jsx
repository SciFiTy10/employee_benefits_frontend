import React from "react";
import Input from "../../UI/Input/Input";
import sameAddressSectionStyles from "./SameAddressSection.module.scss";
const SameAddressSection = (props) => {
  return (
    <div className={sameAddressSectionStyles.sameAddressSection}>
      <Input
        labelText="Same Address As Employee?"
        type="checkbox"
        onChange={props.onSameAddressChange}
        ariaLabel={`same address ${props.id}`}
      />
    </div>
  );
};

export default SameAddressSection;
