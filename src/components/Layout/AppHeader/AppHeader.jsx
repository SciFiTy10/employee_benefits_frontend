import React from "react";
import appHeaderStyles from "./AppHeader.module.scss";

const AppHeader = () => {
  return (
    <header className={appHeaderStyles.header}>
      <h2>Employee Benefits</h2>
    </header>
  );
};

export default AppHeader;
