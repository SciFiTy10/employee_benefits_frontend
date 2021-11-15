import React from "react";
import summaryContactStyles from "./SummaryContact.module.scss";
const SummaryContact = (props) => {
  //grab the phoneNumber, email, and dependentType
  const { phoneNumber, email, dependentType } = props;
  //grab the formatted phoneNumber
  const formattedPhoneNumber =
    dependentType === "Spouse"
      ? `(${phoneNumber.toString().substring(0, 3)}) ${phoneNumber
          .toString()
          .substring(3, 6)}-${phoneNumber
          .toString()
          .substring(
            phoneNumber.toString().length - 4,
            phoneNumber.toString().length
          )}`
      : "";
  return (
    <div className={summaryContactStyles.contact}>
      <span>{email}</span>
      <div>{formattedPhoneNumber}</div>
    </div>
  );
};
export default SummaryContact;
