import React from "react";
import dependentStyles from "./Dependent.module.scss";
const Dependent = (props) => {
  //grab each of the employee attributes from the object
  const {
    dependentType,
    firstName,
    lastName,
    email,
    phoneNumber,
    addressLine1,
    addressLine2,
    city,
    state,
    zip,
  } = props.dependent;
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
  //grab the formatted cityStateZip
  const formattedCityStateZip = `${city}, ${state} ${zip}`;
  return (
    <section className={dependentStyles.dependentSection}>
      <article className={dependentStyles.dependent}>
        <address className={dependentStyles.nameAndContactSection}>
          <div className={dependentStyles.name}>
            <span>{`${firstName} ${lastName}`}</span>
          </div>
          <div className={dependentStyles.contact}>
            <div>{formattedPhoneNumber}</div>
            <span>{email}</span>
          </div>
        </address>
        <address className={dependentStyles.addressSection}>
          <div className={dependentStyles.line1}>
            <span>{addressLine1}</span>
          </div>
          {addressLine2 !== "" && (
            <div className={dependentStyles.line2}>
              <span>{addressLine2}</span>
            </div>
          )}
          <div className={dependentStyles.cityStateZip}>
            <span>{formattedCityStateZip}</span>
          </div>
        </address>
      </article>
    </section>
  );
};

export default Dependent;
