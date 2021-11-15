import React from "react";
import SummaryHeader from "../SummaryHeader/SummaryHeader";
import summaryGrandTotalStyles from "./SummaryGrandTotal.module.scss";
const SummaryGrandTotal = (props) => {
  return (
    <section className={summaryGrandTotalStyles.grandTotalSection}>
      <SummaryHeader text="Grand Total" />
      <div className={summaryGrandTotalStyles.grandTotal}>
        <span>Per Check: ${props.grandTotal}</span>
      </div>
      <div className={summaryGrandTotalStyles.grandTotal}>
        <span>Per Year: ${props.grandTotal * 26}</span>
      </div>
      <hr />
    </section>
  );
};

export default SummaryGrandTotal;
