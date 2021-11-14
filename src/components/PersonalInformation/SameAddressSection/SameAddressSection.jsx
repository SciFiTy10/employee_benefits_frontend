import React from "react";
import Input from "../../UI/Input/Input";
import sameAddressSectionStyles from "./SameAddressSection.module.scss";
const SameAddressSection = () => {
  return (
    <div className={sameAddressSectionStyles.sameAddressSection}>
      <Input labelText="Same Address As Employee?" type="checkbox" />
    </div>
  );
};

export default SameAddressSection;
