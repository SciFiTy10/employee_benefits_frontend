import React from "react";
import notificationStyles from "./Notification.module.scss";
const Notification = () => {
  return (
    <div
      className={`${notificationStyles.notification} ${notificationStyles.success}`}
    >
      <span>Success! The Employee was added.</span>
    </div>
  );
};

export default Notification;
