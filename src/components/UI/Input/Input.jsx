import React from "react";
import inputStyles from "./Input.module.scss";

const Input = (props) => {
  return (
    <label for="input">
      {props.labelText}
      <input
        id="input"
        name="input"
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </label>
  );
};

export default Input;
