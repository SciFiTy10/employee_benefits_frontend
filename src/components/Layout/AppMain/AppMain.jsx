import React from "react";
import appMainStyles from "./AppMain.module.scss";
import Content from "./Content/Content";
const AppMain = () => {
  return (
    <div className={appMainStyles.main}>
      <Content />
    </div>
  );
};

export default AppMain;
