import React from "react";
import SummaryContact from "../../Summary/SummaryContact/SummaryContact";
import SummaryName from "../../Summary/SummaryName/SummaryName";
import SummaryAddress from "../../Summary/SummaryAddress/SummaryAddress";
import dependentStyles from "./Dependent.module.scss";
import SummaryCostPerCheck from "../../Summary/SummaryCostPerCheck/SummaryCostPerCheck";
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
    costPerCheck,
  } = props.dependent;

  return (
    <section>
      <article className={dependentStyles.dependent}>
        <address>
          <SummaryName name={`${firstName} ${lastName}`} />
          <SummaryContact
            phoneNumber={phoneNumber}
            email={email}
            dependentType={dependentType}
          />
          <SummaryAddress
            addressLine1={addressLine1}
            addressLine2={addressLine2}
            city={city}
            state={state}
            zip={zip}
          />
        </address>
        <address>
          <SummaryCostPerCheck costPerCheck={costPerCheck} />
        </address>
      </article>
    </section>
  );
};

export default Dependent;
