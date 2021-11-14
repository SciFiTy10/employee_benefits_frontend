import React from "react";
import Input from "../../UI/Input/Input";
import nameSectionStyles from "./NameSection.module.scss";
const NameSection = () => {
  return (
    <address className={nameSectionStyles.nameSection}>
      <div className={nameSectionStyles.firstName}>
        <Input labelText="First Name" placeholder="Pat" type="text" />
      </div>
      <div className={nameSectionStyles.lastName}>
        <Input labelText="Last Name" placeholder="Johnson" type="text" />
      </div>
    </address>
  );
};

export default NameSection;
