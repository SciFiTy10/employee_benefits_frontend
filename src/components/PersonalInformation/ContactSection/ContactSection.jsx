import React from "react";
import Input from "../../UI/Input/Input";
import contactSectionStyles from "./ContactSection.module.scss";
const ContactSection = (props) => {
  return (
    <address className={contactSectionStyles.contactSection}>
      <div className={contactSectionStyles.email}>
        <Input
          labelText="Email"
          placeholder="pjohnson@gmail.com"
          type="email"
          value={props.email}
          onChange={props.onEmailChange}
          ariaLabel={`email ${props.id}`}
        />
      </div>
      <div className={contactSectionStyles.phoneNumber}>
        <Input
          labelText="Phone Number"
          placeholder="(555) 555-5555"
          type="number"
          value={props.phoneNumber}
          onChange={props.onPhoneNumberChange}
          ariaLabel={`phone number ${props.id}`}
        />
      </div>
    </address>
  );
};

export default ContactSection;
