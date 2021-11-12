import React from "react";
import buttonStyles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button type="text" aria-label={props.ariaLabel}>
      {props.text}
    </button>
  );
};

export default Button;
