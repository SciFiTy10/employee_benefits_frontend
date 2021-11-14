import React from "react";
import employeeStyles from "./Employee.module.scss";

const Employee = (props) => {
  //grab each of the employee attributes from the object
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    addressLine1,
    addressLine2,
    city,
    state,
    zip,
    dependents,
  } = props.employee;
  //grab the formatted phoneNumber
  const formattedPhoneNumber = `(${phoneNumber
    .toString()
    .substring(0, 3)}) ${phoneNumber.toString().substring(3, 6)}-${phoneNumber
    .toString()
    .substring(
      phoneNumber.toString().length - 4,
      phoneNumber.toString().length
    )}`;
  //grab the formatted cityStateZip
  const formattedCityStateZip = `${city}, ${state} ${zip}`;
  return (
    <section className={employeeStyles.employeeSection}>
      <h2 className={employeeStyles.header}>Employee</h2>
      <article className={employeeStyles.employee}>
        <address className={employeeStyles.nameAndContactSection}>
          <div className={employeeStyles.name}>
            <span>{`${firstName} ${lastName}`}</span>
          </div>
          <div className={employeeStyles.contact}>
            <div>{formattedPhoneNumber}</div>
            <span>{email}</span>
          </div>
        </address>
        <address className={employeeStyles.addressSection}>
          <div className={employeeStyles.line1}>
            <span>{addressLine1}</span>
          </div>
          {addressLine2 !== "" && (
            <div className={employeeStyles.line2}>
              <span>{addressLine2}</span>
            </div>
          )}
          <div className={employeeStyles.cityStateZip}>
            <span>{formattedCityStateZip}</span>
          </div>
        </address>
      </article>
    </section>
  );
};

export default Employee;
