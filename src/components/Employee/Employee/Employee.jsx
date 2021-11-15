import React from "react";
import SummaryAddress from "../../Summary/SummaryAddress/SummaryAddress";
import SummaryContact from "../../Summary/SummaryContact/SummaryContact";
import SummaryCostPerCheck from "../../Summary/SummaryCostPerCheck/SummaryCostPerCheck";
import SummaryHeader from "../../Summary/SummaryHeader/SummaryHeader";
import SummaryName from "../../Summary/SummaryName/SummaryName";
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
    employeeCostPerCheck,
  } = props.employee;

  return (
    <section>
      <SummaryHeader text="Employee" />
      <article className={employeeStyles.employee}>
        <address>
          <SummaryName name={`${firstName} ${lastName}`} />
          <SummaryContact phoneNumber={phoneNumber} email={email} />
          <SummaryAddress
            addressLine1={addressLine1}
            addressLine2={addressLine2}
            city={city}
            state={state}
            zip={zip}
          />
        </address>
        <address>
          <SummaryCostPerCheck costPerCheck={employeeCostPerCheck} />
        </address>
      </article>
    </section>
  );
};

export default Employee;
