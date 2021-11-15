import React from "react";
import summaryCostPerCheckStyles from "./SummaryCostPerCheck.module.scss";
const SummaryCostPerCheck = (props) => {
  return (
    <div className={summaryCostPerCheckStyles.costPerCheck}>
      <span>${props.costPerCheck}</span>
    </div>
  );
};

export default SummaryCostPerCheck;
