import React from "react";
import inputStyles from "./Input.module.scss";

const Input = (props) => {
  return (
    <>
      <label for="input">{props.labelText}</label>
      <input
        id="input"
        name="input"
        type="text"
        value={props.value}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
