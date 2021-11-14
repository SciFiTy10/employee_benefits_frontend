import React from "react";
import Input from "../../UI/Input/Input";
import contactSectionStyles from "./ContactSection.module.scss";
const ContactSection = () => {
  return (
    <address className={contactSectionStyles.contactSection}>
      <div className={contactSectionStyles.email}>
        <Input
          labelText="Email"
          placeholder="pjohnson@gmail.com"
          type="email"
        />
      </div>
      <div className={contactSectionStyles.phoneNumber}>
        <Input
          labelText="Phone Number"
          placeholder="(555) 555-5555"
          type="number"
        />
      </div>
    </address>
  );
};

export default ContactSection;
