import React from "react";
import headerSectionStyles from "./HeaderSection.module.scss";
const SectionHeader = (props) => {
  return <h2 className={headerSectionStyles.header}>{props.text}</h2>;
};

export default SectionHeader;
