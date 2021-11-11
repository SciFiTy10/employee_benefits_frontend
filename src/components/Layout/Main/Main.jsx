import React from "react";
import mainStyles from "./Main.module.scss";
import Content from "./Content/Content";
const Main = () => {
  return (
    <div className={mainStyles.main}>
      <Content />
    </div>
  );
};

export default Main;
