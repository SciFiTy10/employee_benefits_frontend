import React from "react";
import alertStyles from "./Alert.module.scss";
const Alert = (props) => {
  //grab the values from the props
  const { isSuccess, message } = props.alert;
  //handler for closing the alert
  const closeAlertHandler = () => {
    props.alertHandler({ showAlert: false, isSuccess: false, message: "" });
  };
  return (
    <div
      className={`${alertStyles.alert} ${
        isSuccess ? alertStyles.success : alertStyles.error
      }`}
    >
      <span className="material-icons">
        {isSuccess ? "check_circle" : "error"}
      </span>
      <span>{message}</span>
      <span
        className={`material-icons ${alertStyles.closeAlert}`}
        onClick={closeAlertHandler}
      >
        close
      </span>
    </div>
  );
};

export default Alert;
