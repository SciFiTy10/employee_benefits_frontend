import React from "react";
import inputStyles from "./Input.module.scss";

const Input = (props) => {
  return (
    <label htmlFor={props.ariaLabel}>
      {props.labelText}
      <input
        id={props.ariaLabel}
        name={props.ariaLabel}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        aria-label={props.ariaLabel}
      />
    </label>
  );
};

export default Input;
