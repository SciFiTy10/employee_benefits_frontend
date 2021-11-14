import React from "react";
import summaryHeaderStyles from "./SummaryHeader.module.scss";

const SummaryHeader = (props) => {
  return <h2 className={summaryHeaderStyles.header}>{props.text}</h2>;
};

export default SummaryHeader;
