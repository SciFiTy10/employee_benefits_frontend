import React from "react";

const SummaryAddress = (props) => {
  //grab the address props
  const { addressLine1, addressLine2, city, state, zip } = props;
  //grab the formatted cityStateZip
  const formattedCityStateZip = `${city}, ${state} ${zip}`;
  return (
    <>
      <div>
        <span>{addressLine1}</span>
      </div>
      {addressLine2 !== "" && (
        <div>
          <span>{addressLine2}</span>
        </div>
      )}
      <div>
        <span>{formattedCityStateZip}</span>
      </div>
    </>
  );
};

export default SummaryAddress;
