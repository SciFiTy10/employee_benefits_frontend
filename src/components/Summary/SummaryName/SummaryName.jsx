import React from "react";
import summaryNameStyles from "./SummaryName.module.scss";
const SummaryName = (props) => {
  return (
    <div className={summaryNameStyles.name}>
      <span>{props.name}</span>
    </div>
  );
};

export default SummaryName;
