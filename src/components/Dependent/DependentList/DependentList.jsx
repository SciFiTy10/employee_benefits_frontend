import React from "react";
import Dependent from "../Dependent/Dependent";
import SummaryHeader from "../../Summary/SummaryHeader/SummaryHeader";
import dependentListStyles from "./DependentList.module.scss";
const DependentList = (props) => {
  //grab the header text
  const headerText = props.dependents.length > 1 ? "Dependents" : "Dependent";
  return (
    <div className={dependentListStyles.dependentList}>
      <SummaryHeader text={headerText} />
      {props.dependents.map((dependent) => {
        return <Dependent key={dependent.dependentId} dependent={dependent} />;
      })}
    </div>
  );
};

export default DependentList;
