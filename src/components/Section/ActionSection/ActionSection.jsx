import React from "react";
import actionSectionStyles from "./ActionSection.module.scss";
const ActionSection = (props) => {
  return (
    <div className={actionSectionStyles.actionSection}>{props.children}</div>
  );
};

export default ActionSection;
