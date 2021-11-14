import React from "react";
import alertStyles from "./Alert.module.scss";
const Alert = (props) => {
  //grab the values from the props
  const { isSuccess, message } = props;
  return (
    <div
      className={`${alertStyles.alert} ${
        isSuccess ? alertStyles.success : alertStyles.error
      }`}
    >
      <span>{message}</span>
    </div>
  );
};

export default Alert;
