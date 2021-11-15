import React from "react";
import buttonStyles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="text"
      aria-label={props.ariaLabel}
      className={`${buttonStyles.button} ${
        props.buttonType === "submit" ? buttonStyles.submit : ""
      }`}
    >
      {props.text}
    </button>
  );
};

export default Button;
